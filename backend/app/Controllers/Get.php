<?php namespace App\Controllers;

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");

class Get extends BaseController
{

    protected $_data;

    protected $_updated;
    
    /**
     * Receives data from a weather station, checks a token, enters data into a storage
     */
    public function general()
    {
        $_dataTable = getenv('database.table.data');

        $db = \Config\Database::connect();

        // Select all data from the database in the interval of the day
        $interval    = '`item_timestamp` >= DATE_SUB(NOW(), INTERVAL 1 DAY)';
        $this->_data = $db->table($_dataTable)->where($interval)->orderBy('item_timestamp', 'DESC')->get()->getResult();
        $this->_fetch_data();

        $this->response
            ->setJSON([
                'update'  => strtotime($this->_updated),
                'moon'    => $this->_moon(),
                'sun'     => $this->_sun(),
                'sensors' => $this->_data
            ])->send();

        exit();
    }

    public function graphdata()
    {
        $_dataTable = getenv('database.table.data');

        $db = \Config\Database::connect();

        // Select all data from the database in the interval of the day
        $interval    = '`item_timestamp` >= DATE_SUB(NOW(), INTERVAL 1 DAY)';
        $this->_data = $db->table($_dataTable)->where($interval)->orderBy('item_timestamp', 'DESC')->get()->getResult();
        $this->_make_graph_data();

        $this->response
            ->setJSON([
                'update'  => strtotime($this->_updated),
                'sensors' => $this->_data
            ])->send();

        exit();
    }

    protected function _make_graph_data()
    {
        if (empty($this->_data))
        {
            return ;
        }

        $_result = [];
        $_period = 'day';

        $_counter   = 0; // Счетчик итераций
        $_prev_time = 0; // Изначальное время первой итерации
        $_temp_val  = []; // Массив средних значений

        // Если период - день, то достаточно значения раз в 10 мин
        foreach ($this->_data as $num => $item)
        {
            if ($num === 0)
            {
                $this->_updated = $item->item_timestamp;
            }

            // ------------------------------------------------------------
            // Если время между первой и текущей итерацией больше или равно
            // 10 мин (для одного дня - 10 мин усреднение)
            if ($_prev_time - strtotime($item->item_timestamp) >= 600)
            {
                foreach ($_temp_val as $_key => $_val)
                {
                    if ($_key === 'timestamp')
                    {
                        continue;
                    }

                    $_result[$_key][] = [
                        round($_temp_val['timestamp'] / $_counter, 0) * 1000,
                        round($_val / $_counter, 1)];
                }

                $_counter   = 0;
                $_prev_time = 0;
                $_temp_val  = [];
            }

            if ($_counter == 0) {
                $_prev_time = strtotime($item->item_timestamp);
            }

            foreach (json_decode($item->item_raw_data) as $key => $val)
            {

                if ( ! isset($_temp_val[$key]))
                {
                    $_temp_val[$key] = 0;
                }

                $_temp_val[$key] += $val;
            }

            if ( ! isset($_temp_val['timestamp']))
            {
                $_temp_val['timestamp'] = 0;
            }

            $_temp_val['timestamp'] += strtotime($item->item_timestamp);
            $_counter++;
        }

        return $this->_data = $_result;
    }


    /**
     * Returns the calculated time of sunset and sunrise
     * @return object
     */
     protected function _sun() {
        return (object) [
            'rise' => date_sunrise(
                time(),
                SUNFUNCS_RET_TIMESTAMP,
                getenv('app.latitude'),
                getenv('app.longitude'),
                90,
                getenv('app.timezone')
            ),
            'set' => date_sunset(
                time(),
                SUNFUNCS_RET_TIMESTAMP,
                getenv('app.latitude'),
                getenv('app.longitude'),
                90,
                getenv('app.timezone')
            )
        ];
    }

    /**
     * Returns lunar data - sunset, dawn, age, phase, illumination, distance
     * @return object
     */
    protected function _moon()
    {
        $MoonCalc = new \MoonCalc();
        $MoonTime = \MoonTime::calculateMoonTimes(
            date("m"), date("d"), date("Y"),
            getenv('app.latitude'),
            getenv('app.longitude')
        );

        return (object) [
            'rise'         => $MoonTime->moonrise,
            'set'          => $MoonTime->moonset,
            'phrase'       => $MoonCalc->phase(),
            'age'          => $MoonCalc->age(),
            'diameter'     => $MoonCalc->diameter(),
            'distance'     => $MoonCalc->distance(),
            'illumination' => $MoonCalc->illumination(),
            'phase_name'   => $MoonCalc->phase_name(),
            'phase_icon'   => $MoonCalc->phase_name_icon(),
            'phase_new'    => round($MoonCalc->next_new_moon(), 0),
            'phase_full'   => round($MoonCalc->next_full_moon(), 0)
        ];
    }

    /**
     * Returns ready-made sensor data
     * @throws \Exception
     */
    protected function _fetch_data()
    {
        if (empty($this->_data)) return ;

        $count = 0;
        $temp  = [];

        foreach ($this->_data as $key => $item)
        {

            if ($key === 0)
            {
                $this->_updated = $item->item_timestamp;
                $temp = $this->_make_initial_data(json_decode($item->item_raw_data));

                continue;
            }

            $_time_a = new \DateTime($this->_updated);
            $_time_b = new \DateTime($item->item_timestamp);
            $_avg_en = $_time_a->getTimestamp() - $_time_b->getTimestamp() <= 3600;

            if ($_avg_en) $count++;

            foreach (json_decode($item->item_raw_data) as $sensorKey => $sensorVal)
            {
                $temp[$sensorKey]->min = $sensorVal < $temp[$sensorKey]->min ? $sensorVal : $temp[$sensorKey]->min;
                $temp[$sensorKey]->max = $sensorVal > $temp[$sensorKey]->max ? $sensorVal : $temp[$sensorKey]->max;

                if ($_avg_en)
                {
                    $temp[$sensorKey]->trend += $sensorVal;
                }

                if (end($this->_data) === $item)
                {
                    $temp[$sensorKey]->trend = round($temp[$sensorKey]->value - ($temp[$sensorKey]->trend / $count), 1);
                }
            }
        }

        $this->_data = $temp;
    }

    /**
     * Creates an initial array of sensor data
     * @param $sensor_array
     * @return array|void
     */
    protected function _make_initial_data($sensor_array)
    {
        if (empty($sensor_array) || ! is_object($sensor_array)) return ;

        $_tmp = [];

        foreach ($sensor_array as $key => $val)
        {
            $_tmp[$key] = (object) [
                'value' => $val,
                'trend' => 0,
                'max'   => $val,
                'min'   => $val
            ];
        }

        return $_tmp;
    }
}

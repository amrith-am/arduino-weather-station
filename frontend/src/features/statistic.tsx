import React, { useState, useEffect } from 'react'

import translate from '../functions/translate'
import { Message } from 'semantic-ui-react'
import { setUpdate } from '../app/updateSlice'
import { useGetStatisticQuery } from '../app/weatherApi'
import { useAppDispatch } from '../app/hooks'
import { SensorTypes } from '../app/types'
// import { getUrlParameter } from '../functions/helpers'
import Toolbar from '../components/toolbar'
import Chart from '../components/chart'

import humidity_temperature from '../charts/humidity_temperature'
import moment from 'moment'

// const getDateFromUrl = () => {
//     let rangeStart = getUrlParameter('start'),
//         rangeEnd   = getUrlParameter('end'),
//         response   = {
//             urlStart: null,
//             urlEnd: null
//         }
//
//     if (!rangeStart || !rangeEnd) return response
//
//     rangeStart = moment(rangeStart, 'DD-MM-YYYY')
//     rangeEnd   = moment(rangeEnd, 'DD-MM-YYYY')
//
//     let diff = rangeStart.diff(rangeEnd, 'days')
//
//     if (
//         ! moment(rangeStart).isAfter('2020-04-10') ||
//         ! moment(rangeEnd).isBefore(moment()) ||
//         (diff > 0 || diff < -31)
//     ) return response
//
//     response.urlStart = rangeStart
//     response.urlEnd   = rangeEnd
//
//     this.setState({rangeStart: response.urlStart, rangeEnd: response.urlEnd})
//
//     return response
// }

const lang = translate().general.error

const Statistic: React.FC = () => {
    const dispatch = useAppDispatch()
    const sensors: SensorTypes[] = ['temperature', 'humidity']
    const [ period, onPeriodChange ] = useState([moment().subtract(1,'d'), moment()])
    const { data, isFetching, isError } = useGetStatisticQuery({
        start: moment(period[0]).format('YYYY-MM-DD'),
        end: moment(period[1]).format('YYYY-MM-DD'),
        sensors: sensors
    })

    useEffect(() => {
        dispatch(setUpdate(data?.timestamp))
    }, [dispatch, data, isFetching, isError])

    return (
        <>
            <Toolbar
                onChangeInterval={
                    (days: number) => onPeriodChange([moment().subtract(days,'d'), moment()])
                }
                onChangePeriod={(range: Date[]) =>
                    onPeriodChange([moment(range[0]), moment(range[1])])
                }
                rangeStart={period[0]}
                rangeEnd={period[1]}
                download
            />
            {!isError ?
                <Chart
                    loader={isFetching}
                    config={humidity_temperature}
                    data={[data?.payload.humidity, data?.payload.temperature]}
                />
                :
                <Message negative>
                    <Message.Header>{lang.title}</Message.Header>
                    <p>{lang.description}</p>
                </Message>
            }
        </>
    )
}

export default Statistic

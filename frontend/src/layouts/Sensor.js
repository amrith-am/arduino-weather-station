/**
 * React weather icons: https://react-icons.netlify.com/#/icons/wi
 */

import React  from 'react'

import { Grid } from 'semantic-ui-react'
import { WiThermometer, WiHumidity, WiBarometer, WiDaySunny, WiHot, WiRaindrops, WiSunrise, WiSunset, WiMoonrise, WiMoonset } from 'react-icons/wi'
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from 'react-icons/io'

const Sensor = (data) => {

    const icons = {
        temp: WiThermometer,
        humd: WiHumidity,
        press: WiBarometer,
        light: WiDaySunny,
        uvindex: WiHot,
        dewpoint: WiRaindrops,
        sunrise: WiSunrise,
        sunset: WiSunset,
        moonrise: WiMoonrise,
        moonset: WiMoonset
    };

    const trend = {
        up: IoIosArrowRoundUp,
        down: IoIosArrowRoundDown
    }

    const WeatherIcon = icons[data.icon]
    const TrendIcon = data.value > data.average && trend['up'] || trend['down']

    return (
        <div className={'tile' + ' ' + data.color}>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4} className='icon-container'>
                        <WeatherIcon className='icon' />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <div className='title'>{data.name}</div>
                        <div className='value'>
                            {(data.trend == true && (
                                <TrendIcon className={'trend' + ' ' + (data.value > data.average && 'trend-up' || 'trend-down')} />
                            ))}
                            {data.value}
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Sensor
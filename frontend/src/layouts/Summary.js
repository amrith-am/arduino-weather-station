/**
 * The component displays summary weather statistics at the current time
 * (temperature, humidity, pressure, wind speed and direction)
 */

import React from 'react'

import { Grid, Icon } from 'semantic-ui-react'
import { WiStrongWind, WiBarometer, WiHumidity } from 'react-icons/wi'
import WeatherIcon from '../data/WeatherIcon'

import _ from 'lodash'

const Summary = (props) => {
    const { currentData, openWeatherData } = props
    const dayTimes   = !_.isEmpty(openWeatherData) ? openWeatherData.data[0].sys.pod : 'd'
    const background = 'url(/background/winter-' + dayTimes + '.jpg)'

    return (
        <Grid.Column computer={8} tablet={16} mobile={16}>
            <div className='informer summary'>
                <div className='background-overlay'>
                    <div className='background-image' style={{backgroundImage: background}}></div>
                </div>
                <div className='content'>
                    <h1>Погодная станция</h1>
                    <h4>Оренбургская обл., c. Ивановка, ЖК "Приуралье"</h4>
                    <div className='main-info'>
                        <div className='value'>
                            {!_.isEmpty(currentData) ? (
                                currentData.sensors.t2.value > 0 ? '+' : '' + currentData.sensors.t2.value
                            ) : (
                                <span>00.0</span>
                            )}
                            <span className='sign'>℃</span>
                        </div>
                        <div className='summary-icon'>
                            {!_.isEmpty(openWeatherData) ? (
                                <WeatherIcon code={openWeatherData.data[0].weather[0].id} daytime={openWeatherData.data[0].sys.pod}/>
                            ) : (
                                <WeatherIcon code={0} daytime={0}/>
                            )}
                        </div>
                        {!_.isEmpty(openWeatherData) && (
                            <div className='info'>
                                <div>{openWeatherData.data[0].weather[0].description}</div>
                                <div>Ощущается как <b>{openWeatherData.data[0].main.feels_like > 0 ? '+' : ''}{Number((openWeatherData.data[0].main.feels_like).toFixed(0))}</b>℃</div>
                            </div>
                        )}
                    </div>
                    <div className='second-info'>
                        <div>
                            <WiHumidity className='icon' />
                            {!_.isEmpty(currentData) ? (currentData.sensors.h.value) : (<Icon loading name='spinner' />)}%
                        </div>
                        <div>
                            <WiBarometer className='icon' />
                            {!_.isEmpty(currentData) ? (currentData.sensors.p.value) : (<Icon loading name='spinner' />)} мм.
                        </div>
                        <div>
                            <WiStrongWind className='icon' />
                            {!_.isEmpty(currentData) ? (
                                currentData.sensors.ws.value + ' м\\с ' + currentData.sensors.wd.info
                            ) : (<Icon loading name='spinner' />)}
                        </div>
                    </div>
                </div>
            </div>
        </Grid.Column>
    )
}

export default Summary
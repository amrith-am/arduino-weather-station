import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Dimmer, Loader, Container, Image, Popup, Responsive } from 'semantic-ui-react'

import Header from '../components/Header'

import moment from 'moment'

import * as meteoActions from '../store/meteostation/actions'

import _ from 'lodash'
import valueColor from '../data/valueColor'
import ForeacstTile from '../layouts/ForeacstTile'

class Forecast extends Component {

    componentDidMount() {
        const { dispatch } = this.props

        dispatch(meteoActions.fetchForecastData())
    }

    updateWeatherData = () => {}

    render() {
        const { forecast } = this.props

        return (
            <div>
                <Header
                    updateTime={moment().unix()}
                    onUpdateData={this.updateWeatherData}
                />
                { ! _.isEmpty(forecast) ? (
                    <div>
                        <Responsive as={Container} minWidth={768}>
                            <Table celled inverted selectable className='weather-table'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell></Table.HeaderCell>
                                        <Table.HeaderCell>Дата, время</Table.HeaderCell>
                                        <Table.HeaderCell>Описание</Table.HeaderCell>
                                        <Table.HeaderCell>
                                            <Popup content='Температура воздуха' trigger={<span>T (℃)</span>} />
                                        </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            <Popup content='Эффективная температура - характеристика комфортности с учётом влажности воздуха и скорости ветра: температура, которую должен иметь сухой воздух при штиле, чтобы теплоощущение человека было таким же, как в данном влажном воздухе при наличии ветра.' trigger={<span>Te (℃)</span>} />
                                        </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            <Popup content='Влажность воздуха' trigger={<span>H (%)</span>} />
                                        </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            <Popup content='Давление (мм. рт. ст.)' trigger={<span>P (мм)</span>} />
                                        </Table.HeaderCell>
                                        <Table.HeaderCell colSpan='2'>Ветер (м\с)</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {forecast.data.map((item, key) => (
                                        <Table.Row key={key}>
                                            <Table.Cell>
                                                <Image src={'http://openweathermap.org/img/wn/' + item.weather[0].icon + '.png'} />
                                            </Table.Cell>
                                            <Table.Cell>{moment.unix(item.dt).format("DD.MM.Y H:mm")}</Table.Cell>
                                            <Table.Cell>{item.weather[0].description}</Table.Cell>
                                            <Table.Cell>
                                                {valueColor(Number((item.main.temp).toFixed(1)))}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {valueColor(Number((item.main.feels_like).toFixed(1)))}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {item.main.humidity}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {Number((item.main.pressure * 0.75).toFixed(1))}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {Number((item.wind.speed).toFixed(1))}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {item.wind.deg}°
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        </Responsive>
                        <Responsive as={Container} maxWidth={766}>
                            <ForeacstTile
                                data={forecast.data}
                            />
                        </Responsive>
                    </div>
                ) : (
                    <Dimmer active>
                        <Loader>Загрузка</Loader>
                    </Dimmer>
                )}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        forecast: state.meteostation.forecast
    }
}

export default connect(mapStateToProps)(Forecast)
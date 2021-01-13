import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Dimmer, Grid, Loader, Message } from 'semantic-ui-react'

import MainContainer from '../components/MainContainer'
import Summary from '../layouts/Summary'
import ForeacstTile from '../layouts/ForeacstTile'

import * as meteoActions from '../store/meteostation/actions'
import _ from 'lodash'
import moment from 'moment'

class Main extends Component {

    componentDidMount() {
        const { dispatch } = this.props

        this.updateWeatherData()
        dispatch(meteoActions.fetchForecastData())
    }

    updateWeatherData = () => {
        const { dispatch } = this.props

        dispatch(meteoActions.fetchMeteoData())
    }

    render() {
        const { current, forecast } = this.props
        let last_update = moment().unix() - current.update

        return (
            <MainContainer
                updateTime={current.update}
                onUpdateData={this.updateWeatherData}
            >
                {(last_update < -180 || last_update > 180) && (
                    <Container>
                        <Message negative>
                            <Message.Header>Данные устарели</Message.Header>
                            <p>Последние показания погодная станция передавала {moment.unix(current.update).format("DD.MM.Y в H:mm:ss")}</p>
                        </Message>
                    </Container>
                )}

                <Container>
                    <Summary
                        currentData={current}
                        openWeatherData={forecast}
                    />
                    {! _.isEmpty(forecast) ? (
                        <ForeacstTile
                            data={forecast.data.slice(0, 4)}
                        />
                    ) : (
                        <Grid className='forecast-list-loader'>
                            <Grid.Column computer={8} tablet={16} mobile={16}>
                                <div className='informer' style={{height: 210}}>
                                    <Dimmer active>
                                        <Loader />
                                    </Dimmer>
                                </div>
                            </Grid.Column>
                            <Grid.Column computer={8} tablet={16} mobile={16}>
                                <div className='informer' style={{height: 210}}>
                                    <Dimmer active>
                                        <Loader />
                                    </Dimmer>
                                </div>
                            </Grid.Column>
                        </Grid>
                    )}
                </Container>
            </MainContainer>
        );
    }
}

function mapStateToProps(state) {
    return {
        current: state.meteostation.current,
        forecast: state.meteostation.forecast
    }
}

export default connect(mapStateToProps)(Main)
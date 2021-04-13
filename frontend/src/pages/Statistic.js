import _ from 'lodash'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Dimmer, Loader, Grid, Button } from 'semantic-ui-react'

import MainContainer from '../components/MainContainer'
import FullStats from '../components/FullStats'

import moment from 'moment'

import * as meteoActions from '../store/meteostation/actions'

class Statistic extends Component {

    state = {
        loader: false,
    }

    componentDidMount() {
        const { dispatch, storeStatistic } = this.props

        let last_update = (! _.isEmpty(storeStatistic) ? moment().unix() - storeStatistic.update : null)

        if (last_update === null || (last_update < -180 || last_update > 180))
            dispatch(meteoActions.fetchDataStatistic())
    }

    changePeriod = ( period ) => {
        const { dispatch } = this.props

        if ( period !== this.state.period ) {
            this.setState({ loader: true, period })

            let date_start = moment().subtract(period,'d').format('YYYY-MM-DD'),
                date_end   = moment().format('YYYY-MM-DD')

            dispatch(meteoActions.fetchDataStatistic(date_start, date_end)).then(() => {
                this.setState({ loader: false })
            })
        }
    }

    render() {
        const { storeStatistic } = this.props
        const { loader } = this.state

        return (
            <MainContainer
                updateTime={moment().unix()}
            >
                <Container>
                    <div className='toolBar'>
                        <Button.Group size='mini'>
                            <Button color='grey' onClick={() => this.changePeriod(0)}>Сегодня</Button>
                            <Button color='grey' onClick={() => this.changePeriod(1)}>Вчера</Button>
                            <Button color='grey' onClick={() => this.changePeriod(7)}>Неделя</Button>
                            <Button color='grey' onClick={() => this.changePeriod(30)}>Месяц</Button>
                        </Button.Group>
                    </div>
                    { (! _.isEmpty(storeStatistic) && ! loader) ? (
                        <FullStats
                            storeStatistic={storeStatistic}
                            onChangePeriod={this.changePeriod}
                        />
                    ) : (
                        <Grid>
                            <Grid.Column computer={16} tablet={16} mobile={16}>
                                <div className='informer' style={{height: 330}}>
                                    <Dimmer active>
                                        <Loader />
                                    </Dimmer>
                                </div>
                            </Grid.Column>
                            <Grid.Column computer={16} tablet={16} mobile={16}>
                                <div className='informer' style={{height: 330}}>
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
        storeStatistic: state.meteostation.storeStatistic
    }
}

export default connect(mapStateToProps)(Statistic)
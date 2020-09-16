// actions are where most of the business logic takes place
// they are dispatched by views or by other actions
// there are 3 types of actions:
//  async thunks - when doing asynchronous business logic like accessing a service
//  sync thunks - when you have substantial business logic but it's not async
//  plain object actions - when you just send a plain action to the reducer

import * as types from './actionTypes'

const METEO_ENDPOINT = 'https://api.miksoft.pro'

export function fetchMeteoData() {
    return async(dispatch) => {
        try {
            const url = `${METEO_ENDPOINT}/get/general`
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json'
                }
            });

            const payload = await response.json()

            dispatch({ type: types.GET_METEO_DATA, payload })
        } catch (error) {
            console.error(error)
        }
    }
}

export function fetchStatData(period = 'today') {
    return async(dispatch) => {
        try {
            const url = `${METEO_ENDPOINT}/get/graphdata?period=${period}`
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json'
                }
            });

            const payload = await response.json()

            dispatch({ type: types.GET_STAT_DATA, payload })
        } catch (error) {
            console.error(error)
        }
    }
}

export function fetchForecastData() {
    return async(dispatch) => {
        try {
            const url = `${METEO_ENDPOINT}/get/forecast`
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json'
                }
            });

            const payload = await response.json()

            dispatch({ type: types.GET_FORECAST_DATA, payload })
        } catch (error) {
            console.error(error)
        }
    }
}
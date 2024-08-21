import React from 'react'
import dayjs from 'dayjs'
import type { GetServerSidePropsResult, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextSeo } from 'next-seo'

import { API, ApiModel } from '@/api'
import { setLocale } from '@/api/applicationSlice'
import { wrapper } from '@/api/store'
import AppLayout from '@/components/app-layout'
import WeatherIcon from '@/components/weather-icon'
import Widget from '@/components/widget'
import WeatherChart from '@/components/widget/WeatherChart'
import WidgetForecastTable from '@/components/widget-forecast-table'
import styles from '@/components/widget-forecast-table/styles.module.sass'
import { formatDate } from '@/tools/helpers'
import { convertHpaToMmHg, getMinMaxValues } from '@/tools/weather'
import { IconTypes } from '@/ui/icon/types'
import { Column } from '@/ui/table'

interface IndexPageProps {}

const filterRecentData = (data?: ApiModel.Weather[]): ApiModel.Weather[] | [] => {
    const now = dayjs.utc()
    const twelveHoursAgo = now.subtract(12, 'hours')

    return data?.filter((item) => dayjs.utc(item.date).isAfter(twelveHoursAgo)) || []
}

type WidgetType = {
    title?: string
    unit?: string
    color?: string
    icon?: IconTypes
    source: keyof ApiModel.Weather
}

const IndexPage: NextPage<IndexPageProps> = () => {
    const { i18n, t } = useTranslation()

    const { data: forecastHourly, isLoading: hourlyLoading } = API.useGetForecastQuery('hourly', {
        pollingInterval: 10 * 60 * 1000
    })
    const { data: forecastDaily, isLoading: dailyLoading } = API.useGetForecastQuery('daily', {
        pollingInterval: 10 * 60 * 1000
    })

    const { data: current, isLoading: currentLoading } = API.useGetCurrentQuery(undefined, {
        pollingInterval: 5 * 60 * 1000
    })
    const { data: history, isLoading: chartLoading } = API.useGetHistoryQuery(
        {
            start_date: formatDate(dayjs().subtract(1, 'day').format(), 'YYYY-MM-DD'),
            end_date: formatDate(new Date(), 'YYYY-MM-DD')
        },
        { pollingInterval: 60 * 1000 }
    )

    const widgets: WidgetType[] = [
        {
            title: t('temperature'),
            unit: '°C',
            color: 'fire',
            icon: 'Thermometer',
            source: 'temperature'
        },
        {
            title: t('humidity'),
            unit: '%',
            color: 'blue',
            icon: 'Water',
            source: 'humidity'
        },
        {
            title: t('windSpeed'),
            unit: 'м/с',
            color: 'purple',
            icon: 'Wind',
            source: 'windSpeed'
        },
        {
            title: t('cloudiness'),
            unit: '%',
            color: 'violet',
            icon: 'Cloud',
            source: 'clouds'
        }
    ]

    const tableColumnsDaily: Column<ApiModel.Weather>[] = [
        { header: t('date'), accessor: 'date', className: styles.cellDate, isSortable: true },
        { header: '', accessor: 'weatherId', className: styles.cellIcon, formatter: (weatherId) => <WeatherIcon weatherId={weatherId as number} /> },
        { header: t('celsius'), accessor: 'temperature', className: styles.cellTemperature, isSortable: true },
        { header: t('clouds'), accessor: 'clouds', className: styles.cellClouds, isSortable: true }
    ]

    const tableColumnsHourly: Column<ApiModel.Weather>[] = [
        { header: t('time'), accessor: 'date', className: styles.cellDate, isSortable: true },
        { header: '', accessor: 'weatherId', className: styles.cellIcon, formatter: (weatherId) => <WeatherIcon weatherId={weatherId as number} /> },
        { header: t('celsius'), accessor: 'temperature', className: styles.cellTemperature, isSortable: true },
        { header: t('clouds'), accessor: 'clouds', className: styles.cellClouds, isSortable: true },
        { header: t('pressure'), accessor: 'pressure', className: styles.cellPressure, formatter: (pressure) => convertHpaToMmHg(pressure), isSortable: true },
        { header: t('wind'), accessor: 'windSpeed', className: styles.cellWind, isSortable: true }
    ]

    return (
        <AppLayout>
            <NextSeo
                title={''}
                description={''}
                canonical={''}
                openGraph={{
                    description: '',
                    images: [
                        {
                            height: 1538,
                            url: '/images/pages/main.jpg',
                            width: 1768
                        }
                    ],
                    locale: i18n.language === 'ru' ? 'ru_RU' : 'en_US',
                    siteName: '',
                    title: '',
                    type: 'website',
                    url: ''
                }}
            />

            <div className={'widgets-list'}>
                {widgets?.map((widget) => (
                    <Widget
                        key={`widget-${widget.source}`}
                        unit={widget.unit}
                        title={widget.title}
                        icon={widget.icon}
                        loading={currentLoading}
                        chartLoading={chartLoading}
                        minMax={getMinMaxValues(history, widget.source)}
                        currentValue={current?.[widget.source]}
                        chart={
                            <WeatherChart
                                color={widget.color as any}
                                yAxisField={widget.source}
                                data={filterRecentData(history)}
                            />
                        }
                    />
                ))}

                <WidgetForecastTable
                    loading={dailyLoading}
                    columns={tableColumnsDaily}
                    data={forecastDaily?.map((forecast) => ({
                        ...forecast,
                        date: formatDate(forecast.date, 'dd, MMM D')
                    }))}
                />

                <WidgetForecastTable
                    loading={hourlyLoading}
                    columns={tableColumnsHourly}
                    data={forecastHourly?.map((forecast) => ({ ...forecast, date: formatDate(forecast.date, 'HH A') }))}
                />
            </div>
        </AppLayout>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async (context): Promise<GetServerSidePropsResult<IndexPageProps>> => {
            const locale = context.locale ?? 'en'
            const translations = await serverSideTranslations(locale)

            store.dispatch(setLocale(locale))

            return {
                props: {
                    ...translations
                }
            }
        }
)

export default IndexPage

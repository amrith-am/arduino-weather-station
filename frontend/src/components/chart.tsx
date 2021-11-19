import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'
import Highcharts from 'highcharts/highmaps'
import HighchartsReact from 'highcharts-react-official'

const options: Highcharts.Options = {
    // kindex: [
    //     '#98FB98', // 0
    //     '#ADFF2F', // 1
    //     '#7CFC00', // 2
    //     '#FFFF00', // 3
    //     '#FFD700', // 4
    //     '#FFA500', // 5
    //     '#FFA500', // 6
    //     '#FF8C00', // 7
    //     '#FF4500', // 8
    //     '#B22222', // 9
    //     '#FF0000', // 10
    //     '#FF1493', // 11
    // ],
    colors: [
        '#b8bc18',
        '#8bbc2e',
        '#38bc57',
        '#2884bc',
        '#bc4cb3',
        '#bc4c54',
        '#08B8F4',
        '#e64b24',
        '#d87040',
        '#e6a241',
        '#7face6',
        '#9bbc2f',
        '#9A8A7D',
    ],
    chart: {
        // backgroundColor: {
        //   linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
        //   stops: [
        //     [0, '#2a2a2b'],
        //     [1, '#3e3e40']
        //   ]
        // },
        borderRadius: 5,
        shadow: false,
        backgroundColor: '#373737',
        style: {
            // fontFamily: '\'Unica One\', sans-serif'
        },
        plotBorderColor: '#373737',
        marginTop: 30,
        height: 300,
    },
    title: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase',
            fontSize: '20px'
        },
        text: ''
    },
    subtitle: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase'
        }
    },
    xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    yAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
            color: '#F0F0F0',
            fontSize: '11px',
        },
        shared: true,
        xDateFormat: '%A, %d %B %Y, %H:%M'
    },
    plotOptions: {
        series: {
            dataLabels: {
                color: '#F0F0F3',
                style: {
                    fontSize: '13px'
                }
            },
            marker: {
                lineColor: '#333'
            }
        },
        boxplot: {
            fillColor: '#505053'
        },
        candlestick: {
            lineColor: 'white'
        },
        errorbar: {
            color: 'white'
        }
    },
    legend: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        itemStyle: {
            color: '#E0E0E3',
            fontSize: '11px',
            fontWeight: '400'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        },
        title: {
            style: {
                color: '#C0C0C0'
            }
        },
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 50,
        y: 8,
        floating: true,
    },
    credits: {
        style: {
            color: '#666'
        },
        enabled: false
    },
    // labels: {
    //     style: {
    //         color: '#707073'
    //     }
    // },
    drilldown: {
        activeAxisLabelStyle: {
            color: '#F0F0F3'
        },
        activeDataLabelStyle: {
            color: '#F0F0F3'
        }
    },
    navigation: {
        buttonOptions: {
            // symbolStroke: '#DDDDDD',
            theme: {
                fill: '#505053'
            }
        }
    },
    // scroll charts
    rangeSelector: {
        buttonTheme: {
            fill: '#505053',
            stroke: '#000000',
            style: {
                color: '#CCC'
            },
            states: {
                hover: {
                    fill: '#707073',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                },
                select: {
                    fill: '#000003',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                }
            }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
            backgroundColor: '#333',
            color: 'silver'
        },
        labelStyle: {
            color: 'silver'
        }
    },
    navigator: {
        handles: {
            backgroundColor: '#666',
            borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
            color: '#7798BF',
            lineColor: '#A6C7ED'
        },
        xAxis: {
            gridLineColor: '#505053'
        }
    },
    scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
    },
    lang: {
        loading: 'Загрузка...',
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        shortMonths: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек'],
        // exportButtonTitle: "Экспорт",
        // printButtonTitle: "Печать",
        rangeSelectorFrom: "С",
        rangeSelectorTo: "По",
        rangeSelectorZoom: "Период",
        downloadPNG: 'Скачать PNG',
        downloadJPEG: 'Скачать JPEG',
        downloadPDF: 'Скачать PDF',
        downloadSVG: 'Скачать SVG',
        printChart: 'Напечатать график'
    }
}

Highcharts.setOptions(options)

const Chart: React.FC<any> = (params) => {
    const { isLoading, config } = params

    // let index = 0,
    //     height = (typeof params.config.chart !== 'undefined' && typeof params.config.chart.height !== 'undefined') ?
    //         params.config.chart.height : 300
    //
    // for (let prop in params.data) {
    //     if (typeof params.data[prop] !== 'undefined' && params.data[prop].length) {
    //         params.config.series[index].data = params.data[prop]
    //         index++
    //     }
    // }

    return (
        <section className='chart'>
            {isLoading ? (
                <div className='informer' style={{height: 300}}>
                    <Dimmer active>
                        <Loader />
                    </Dimmer>
                </div>
            ) : (
                <HighchartsReact
                    highcharts={Highcharts}
                    options={config}
                    immutable={true}
                />
            )}
        </section>
    )
}

export default Chart

import React from 'react'

import styles from './styles.module.sass'

interface WeatherIconProps {
    weatherId: number;
}

const weatherIconsMapping: { [key: number]: string } = {
    200: 'thunderstorm', // Thunderstorm with light rain
    201: 'thunderstorm', // Thunderstorm with rain
    202: 'thunderstorm', // Thunderstorm with heavy rain
    210: 'thunderstorm', // Light thunderstorm
    211: 'thunderstorm', // Thunderstorm
    212: 'thunderstorm', // Heavy thunderstorm
    221: 'thunderstorm', // Ragged thunderstorm
    230: 'thunderstorm', // Thunderstorm with light drizzle
    231: 'thunderstorm', // Thunderstorm with drizzle
    232: 'thunderstorm', // Thunderstorm with heavy drizzle

    300: 'rain', // Light intensity drizzle
    301: 'rain', // Drizzle
    302: 'rain', // Heavy intensity drizzle
    310: 'rain', // Light intensity drizzle rain
    311: 'rain', // Drizzle rain
    312: 'rain', // Heavy intensity drizzle rain
    313: 'rain', // Shower rain and drizzle
    314: 'rain', // Heavy shower rain and drizzle
    321: 'rain', // Shower drizzle

    500: 'rain', // Light rain
    501: 'rain', // Moderate rain
    502: 'rain', // Heavy intensity rain
    503: 'rain', // Very heavy rain
    504: 'rain', // Extreme rain
    511: 'rain', // Freezing rain
    520: 'rain', // Light intensity shower rain
    521: 'rain', // Shower rain
    522: 'rain', // Heavy intensity shower rain
    531: 'rain', // Ragged shower rain

    600: 'snow', // Light snow
    601: 'snow', // Snow
    602: 'snow', // Heavy snow
    611: 'sleet', // Sleet
    612: 'sleet', // Light shower sleet
    613: 'sleet', // Shower sleet
    615: 'rain-snow', // Light rain and snow
    616: 'rain-snow', // Rain and snow
    620: 'rain-snow', // Light shower snow
    621: 'shower', // Shower snow
    622: 'shower', // Heavy shower snow
    701: 'mist', // Mist
    711: 'mist', // Smoke
    721: 'mist', // Haze
    731: 'mist', // Sand/dust whirls
    741: 'mist', // Fog
    751: 'mist', // Sand
    761: 'mist', // Dust
    762: 'mist', // Volcanic ash
    771: 'strong-wind', // Squalls
    781: 'strong-wind', // Tornado
    800: 'stars', // Clear sky
    801: 'cloudy', // Few clouds: 11-25%
    802: 'cloudy', // Scattered clouds: 25-50%
    803: 'cloudy', // Broken clouds: 51-84%
    804: 'cloudy' // Overcast clouds: 85-100%
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ weatherId }) => {
    let iconToRender

    switch (weatherIconsMapping[weatherId]) {
        case 'thunderstorm':
            iconToRender = <path d='M4.63,16.91c0,1.11,0.33,2.1,0.99,2.97s1.52,1.47,2.58,1.79l-0.66,1.68c-0.03,0.14,0.02,0.22,0.14,0.22h2.13l-0.98,4.3h0.28
	l3.92-5.75c0.04-0.04,0.04-0.09,0.01-0.14c-0.03-0.05-0.08-0.07-0.15-0.07h-2.18l2.48-4.64c0.07-0.14,0.02-0.22-0.14-0.22h-2.94
	c-0.09,0-0.17,0.05-0.23,0.15l-1.07,2.87c-0.71-0.18-1.3-0.57-1.77-1.16c-0.47-0.59-0.7-1.26-0.7-2.01c0-0.83,0.28-1.55,0.85-2.17
	c0.57-0.61,1.27-0.97,2.1-1.07l0.53-0.07c0.13,0,0.2-0.06,0.2-0.18l0.07-0.51c0.11-1.08,0.56-1.99,1.37-2.72
	c0.81-0.73,1.76-1.1,2.85-1.1c1.09,0,2.04,0.37,2.85,1.1c0.82,0.73,1.28,1.64,1.4,2.72l0.07,0.58c0,0.11,0.06,0.17,0.18,0.17h1.6
	c0.91,0,1.68,0.32,2.32,0.95c0.64,0.63,0.97,1.4,0.97,2.28c0,0.85-0.3,1.59-0.89,2.21c-0.59,0.62-1.33,0.97-2.2,1.04
	c-0.13,0-0.2,0.06-0.2,0.18v1.37c0,0.11,0.07,0.17,0.2,0.17c1.33-0.04,2.46-0.55,3.39-1.51s1.39-2.11,1.39-3.45
	c0-0.9-0.22-1.73-0.67-2.49c-0.44-0.76-1.05-1.36-1.81-1.8c-0.77-0.44-1.6-0.66-2.5-0.66H20.1c-0.33-1.33-1.04-2.42-2.11-3.26
	s-2.3-1.27-3.68-1.27c-1.41,0-2.67,0.44-3.76,1.31s-1.79,1.99-2.1,3.36c-1.11,0.26-2.02,0.83-2.74,1.73S4.63,15.76,4.63,16.91z
	 M12.77,26.62c0,0.39,0.19,0.65,0.58,0.77c0.01,0,0.05,0,0.11,0.01c0.06,0.01,0.11,0.01,0.14,0.01c0.17,0,0.33-0.05,0.49-0.15
	c0.16-0.1,0.27-0.26,0.32-0.48l2.25-8.69c0.06-0.24,0.04-0.45-0.07-0.65c-0.11-0.19-0.27-0.32-0.5-0.39
	c-0.17-0.02-0.26-0.03-0.26-0.03c-0.16,0-0.32,0.05-0.47,0.15c-0.15,0.1-0.26,0.25-0.31,0.45l-2.26,8.72
	C12.78,26.44,12.77,26.53,12.77,26.62z M16.93,23.56c0,0.13,0.03,0.26,0.1,0.38c0.14,0.22,0.31,0.37,0.51,0.44
	c0.11,0.03,0.21,0.05,0.3,0.05s0.2-0.02,0.32-0.08c0.21-0.09,0.35-0.28,0.42-0.57l1.44-5.67c0.03-0.14,0.05-0.23,0.05-0.27
	c0-0.15-0.05-0.3-0.16-0.45s-0.26-0.26-0.46-0.32c-0.17-0.02-0.26-0.03-0.26-0.03c-0.17,0-0.33,0.05-0.47,0.15
	c-0.14,0.1-0.24,0.25-0.3,0.45l-1.46,5.7c0,0.02,0,0.05-0.01,0.11C16.93,23.5,16.93,23.53,16.93,23.56z' />
            break

        case 'rain':
            iconToRender = <path d='M4.64,16.9c0,1.33,0.46,2.47,1.39,3.43c0.93,0.96,2.06,1.47,3.4,1.53c0.11,0,0.17-0.06,0.17-0.17v-1.34
	c0-0.11-0.06-0.17-0.17-0.17c-0.86-0.04-1.58-0.38-2.18-1.02c-0.6-0.64-0.9-1.39-0.9-2.26c0-0.83,0.28-1.54,0.84-2.16
	c0.56-0.61,1.26-0.97,2.09-1.07l0.53-0.03c0.13,0,0.2-0.06,0.2-0.19l0.06-0.53c0.11-1.08,0.56-1.99,1.37-2.71
	c0.81-0.73,1.76-1.09,2.85-1.09c1.09,0,2.04,0.36,2.85,1.09c0.81,0.73,1.27,1.63,1.39,2.71l0.08,0.58c0,0.11,0.06,0.17,0.18,0.17
	h1.61c0.89,0,1.66,0.32,2.31,0.96c0.65,0.64,0.98,1.39,0.98,2.27c0,0.87-0.3,1.62-0.9,2.26c-0.6,0.64-1.33,0.98-2.18,1.02
	c-0.13,0-0.2,0.06-0.2,0.17v1.34c0,0.11,0.07,0.17,0.2,0.17c0.87-0.02,1.67-0.26,2.4-0.71c0.73-0.45,1.31-1.05,1.73-1.8
	c0.42-0.75,0.63-1.57,0.63-2.44c0-0.89-0.22-1.72-0.67-2.47c-0.44-0.75-1.05-1.35-1.81-1.78S21.29,12,20.4,12h-0.32
	c-0.32-1.34-1.03-2.43-2.1-3.28s-2.3-1.28-3.68-1.28c-1.41,0-2.66,0.44-3.75,1.31c-1.09,0.87-1.79,1.99-2.1,3.35
	c-1.11,0.26-2.02,0.83-2.73,1.73S4.64,15.75,4.64,16.9z M10.09,24.1c0.09,0.21,0.25,0.37,0.46,0.46c0.2,0.1,0.41,0.11,0.62,0.02
	c0.22-0.09,0.36-0.24,0.45-0.45c0.1-0.22,0.11-0.43,0.02-0.64c-0.08-0.21-0.24-0.35-0.45-0.44c-0.2-0.11-0.4-0.12-0.61-0.03
	c-0.21,0.09-0.36,0.24-0.46,0.47C10.01,23.66,10.01,23.86,10.09,24.1z M10.72,21.28c0,0.16,0.05,0.31,0.15,0.45
	c0.1,0.15,0.26,0.25,0.46,0.32c0.19,0.11,0.4,0.12,0.62,0.01c0.22-0.1,0.37-0.3,0.44-0.6l0.9-3.38c0.06-0.25,0.04-0.47-0.08-0.67
	c-0.12-0.2-0.29-0.32-0.53-0.36c-0.08-0.02-0.16-0.03-0.24-0.03c-0.16,0-0.32,0.05-0.47,0.15c-0.15,0.1-0.26,0.25-0.32,0.44
	l-0.88,3.39C10.73,21.16,10.72,21.25,10.72,21.28z M12.58,26.87c0,0.12,0.02,0.22,0.06,0.29c0.09,0.22,0.24,0.37,0.45,0.45
	c0.09,0.05,0.2,0.08,0.33,0.08c0.06,0,0.16-0.02,0.3-0.06c0.22-0.08,0.38-0.23,0.47-0.45c0.1-0.22,0.1-0.44,0-0.66
	c-0.1-0.22-0.25-0.37-0.45-0.46c-0.2-0.09-0.4-0.09-0.62,0c-0.19,0.08-0.32,0.2-0.41,0.36C12.62,26.58,12.58,26.73,12.58,26.87z
	 M13.31,24.26c0,0.37,0.21,0.61,0.63,0.73c0.11,0.03,0.19,0.04,0.24,0.04c0.15,0,0.28-0.03,0.38-0.08c0.21-0.08,0.35-0.27,0.42-0.57
	l1.67-6.29c0.06-0.24,0.04-0.45-0.06-0.65c-0.1-0.19-0.27-0.32-0.49-0.38c-0.08-0.02-0.17-0.03-0.27-0.03
	c-0.16,0-0.32,0.05-0.48,0.15c-0.16,0.1-0.26,0.25-0.3,0.44l-1.71,6.34C13.32,24.1,13.31,24.2,13.31,24.26z M16.74,23.8
	c0,0.12,0.02,0.23,0.08,0.32c0.08,0.19,0.23,0.34,0.44,0.44c0.11,0.04,0.23,0.07,0.35,0.07c0.06,0,0.16-0.02,0.3-0.06
	c0.21-0.08,0.37-0.23,0.46-0.44c0.07-0.22,0.07-0.43-0.01-0.63c-0.08-0.2-0.22-0.35-0.42-0.45c-0.23-0.11-0.44-0.12-0.65-0.03
	c-0.21,0.09-0.36,0.24-0.46,0.47C16.77,23.59,16.74,23.69,16.74,23.8z M17.47,21.23c0,0.14,0.05,0.29,0.16,0.45
	c0.11,0.16,0.26,0.27,0.45,0.33c0.16,0.03,0.25,0.05,0.27,0.05c0.09,0,0.22-0.03,0.37-0.1c0.2-0.09,0.33-0.27,0.4-0.52l0.9-3.34
	c0.02-0.17,0.03-0.26,0.03-0.26c0-0.16-0.05-0.31-0.15-0.46c-0.1-0.15-0.25-0.25-0.45-0.31c-0.09-0.02-0.18-0.03-0.26-0.03
	c-0.16,0-0.32,0.05-0.47,0.15s-0.25,0.25-0.31,0.45l-0.9,3.36L17.47,21.23z' />
            break

        case 'snow':
            iconToRender = <path d='M4.64,16.95c0-1.16,0.35-2.18,1.06-3.08s1.62-1.48,2.74-1.76c0.31-1.36,1.01-2.48,2.1-3.36s2.34-1.31,3.75-1.31
	c1.38,0,2.6,0.43,3.68,1.28c1.08,0.85,1.78,1.95,2.1,3.29h0.32c0.89,0,1.72,0.22,2.48,0.66c0.76,0.44,1.37,1.04,1.81,1.8
	c0.44,0.76,0.67,1.59,0.67,2.48c0,1.32-0.46,2.47-1.39,3.42c-0.92,0.96-2.05,1.46-3.38,1.5c-0.13,0-0.2-0.06-0.2-0.17v-1.33
	c0-0.12,0.07-0.18,0.2-0.18c0.85-0.04,1.58-0.38,2.18-1.02s0.9-1.38,0.9-2.23c0-0.89-0.32-1.65-0.97-2.3s-1.42-0.97-2.32-0.97h-1.61
	c-0.12,0-0.18-0.06-0.18-0.17l-0.08-0.58c-0.11-1.08-0.58-1.99-1.39-2.72c-0.82-0.73-1.76-1.1-2.85-1.1c-1.1,0-2.05,0.37-2.86,1.11
	c-0.81,0.74-1.27,1.65-1.37,2.75l-0.06,0.5c0,0.12-0.07,0.19-0.2,0.19l-0.53,0.07c-0.83,0.07-1.53,0.41-2.1,1.04
	s-0.85,1.35-0.85,2.19c0,0.85,0.3,1.59,0.9,2.23s1.33,0.97,2.18,1.02c0.11,0,0.17,0.06,0.17,0.18v1.33c0,0.11-0.06,0.17-0.17,0.17
	c-1.34-0.04-2.47-0.54-3.4-1.5C5.1,19.42,4.64,18.27,4.64,16.95z M11,21.02c0-0.22,0.08-0.42,0.24-0.58
	c0.16-0.16,0.35-0.24,0.59-0.24c0.23,0,0.43,0.08,0.59,0.24c0.16,0.16,0.24,0.36,0.24,0.58c0,0.24-0.08,0.44-0.24,0.6
	c-0.16,0.17-0.35,0.25-0.59,0.25c-0.23,0-0.43-0.08-0.59-0.25C11.08,21.46,11,21.26,11,21.02z M11,24.65c0-0.24,0.08-0.44,0.24-0.6
	c0.16-0.15,0.35-0.23,0.58-0.23c0.23,0,0.43,0.08,0.59,0.23c0.16,0.16,0.24,0.35,0.24,0.59c0,0.24-0.08,0.43-0.24,0.59
	c-0.16,0.16-0.35,0.23-0.59,0.23c-0.23,0-0.43-0.08-0.59-0.23C11.08,25.08,11,24.88,11,24.65z M14.19,22.95
	c0-0.23,0.08-0.44,0.25-0.62c0.16-0.16,0.35-0.24,0.57-0.24c0.23,0,0.43,0.09,0.6,0.26c0.17,0.17,0.26,0.37,0.26,0.6
	c0,0.23-0.08,0.43-0.25,0.6c-0.17,0.17-0.37,0.25-0.61,0.25c-0.23,0-0.42-0.08-0.58-0.25S14.19,23.18,14.19,22.95z M14.19,19.33
	c0-0.23,0.08-0.43,0.25-0.6c0.18-0.16,0.37-0.24,0.57-0.24c0.24,0,0.44,0.08,0.61,0.25c0.17,0.17,0.25,0.36,0.25,0.6
	c0,0.23-0.08,0.43-0.25,0.59c-0.17,0.16-0.37,0.24-0.61,0.24c-0.23,0-0.42-0.08-0.58-0.24C14.27,19.76,14.19,19.56,14.19,19.33z
	 M14.19,26.61c0-0.23,0.08-0.43,0.25-0.61c0.16-0.16,0.35-0.24,0.57-0.24c0.24,0,0.44,0.08,0.61,0.25c0.17,0.17,0.25,0.37,0.25,0.6
	s-0.08,0.43-0.25,0.59c-0.17,0.16-0.37,0.24-0.61,0.24c-0.23,0-0.42-0.08-0.58-0.24C14.27,27.03,14.19,26.84,14.19,26.61z
	 M17.41,21.02c0-0.22,0.08-0.41,0.25-0.58c0.17-0.17,0.37-0.25,0.6-0.25c0.23,0,0.43,0.08,0.59,0.24c0.16,0.16,0.24,0.36,0.24,0.58
	c0,0.24-0.08,0.44-0.24,0.6c-0.16,0.17-0.35,0.25-0.59,0.25c-0.24,0-0.44-0.08-0.6-0.25C17.5,21.45,17.41,21.25,17.41,21.02z
	 M17.41,24.65c0-0.22,0.08-0.42,0.25-0.6c0.16-0.15,0.36-0.23,0.6-0.23c0.24,0,0.43,0.08,0.59,0.23s0.23,0.35,0.23,0.59
	c0,0.24-0.08,0.43-0.23,0.59c-0.16,0.16-0.35,0.23-0.59,0.23c-0.24,0-0.44-0.08-0.6-0.24C17.5,25.07,17.41,24.88,17.41,24.65z' />
            break

        case 'sleet':
            iconToRender = <path d='M4.09,16.95c0-1.16,0.36-2.19,1.08-3.09s1.64-1.49,2.74-1.74c0.31-1.37,1.01-2.49,2.1-3.37s2.35-1.32,3.77-1.32
	c0.81,0,1.55,0.13,2.2,0.4c0,0.01,0,0.01,0.01,0.02c0.84,0.32,1.58,0.84,2.21,1.55h0.03c0.68,0.73,1.13,1.6,1.37,2.62h0.31
	c1.08,0,2.02,0.29,2.83,0.86v-0.01c0.53,0.36,0.98,0.8,1.34,1.33c0.36,0.53,0.6,1.11,0.73,1.74c0.04,0.21,0.06,0.38,0.08,0.52v0.06
	c0,0.01,0,0.06,0.01,0.17s0.01,0.19,0.01,0.24v0.03c0,0.88-0.21,1.7-0.64,2.45c-0.42,0.75-1,1.36-1.74,1.81
	c-0.73,0.45-1.54,0.69-2.42,0.72c-0.13,0-0.2-0.06-0.2-0.17v-1.34c0-0.13,0.07-0.19,0.2-0.19c0.86-0.04,1.58-0.38,2.18-1.02
	c0.6-0.64,0.9-1.39,0.9-2.26c0-0.89-0.32-1.65-0.97-2.29c-0.64-0.64-1.41-0.96-2.31-0.96h-1.61c-0.12,0-0.18-0.06-0.18-0.17
	l-0.08-0.59c-0.1-1-0.52-1.86-1.27-2.59c-0.01-0.01-0.01-0.02-0.02-0.03s-0.02-0.02-0.02-0.03c-0.01-0.01-0.02-0.02-0.04-0.02
	c0-0.02-0.01-0.03-0.02-0.03c-0.73-0.66-1.58-1.04-2.56-1.12c-0.07-0.01-0.18-0.01-0.34-0.01c-1.1,0-2.05,0.37-2.86,1.1
	s-1.27,1.64-1.37,2.72l-0.08,0.59c-0.03,0.09-0.11,0.14-0.22,0.14L8.75,13.7c-0.84,0.1-1.55,0.46-2.11,1.07s-0.84,1.34-0.84,2.18
	v0.04h0.03c0.01,0.48,0.11,0.93,0.3,1.35c0.2,0.43,0.46,0.79,0.8,1.09c0.21,0.18,0.45,0.34,0.74,0.48v0.01
	c0.4,0.19,0.8,0.3,1.21,0.32c0.11,0,0.17,0.06,0.17,0.18v1.34c0,0.11-0.06,0.17-0.17,0.17c-0.52-0.03-1.01-0.13-1.48-0.3v0.01
	c-0.83-0.29-1.54-0.77-2.11-1.43s-0.95-1.44-1.11-2.31v-0.03c-0.01-0.01-0.01-0.02-0.01-0.04C4.11,17.57,4.09,17.27,4.09,16.95z
	 M9.59,24.12c0-0.03,0.01-0.07,0.02-0.13c0.01-0.05,0.02-0.09,0.02-0.12l0.09-0.59c0.07-0.24,0.2-0.41,0.41-0.53
	s0.43-0.14,0.68-0.08c0.23,0.07,0.39,0.21,0.51,0.41c0.11,0.21,0.13,0.42,0.07,0.63l-0.14,0.6c-0.1,0.44-0.35,0.66-0.76,0.66
	c-0.03,0-0.08-0.01-0.14-0.02c-0.06-0.01-0.1-0.02-0.14-0.02c-0.21-0.06-0.36-0.17-0.46-0.33C9.64,24.45,9.59,24.29,9.59,24.12z
	 M10.33,21.18c0-0.24,0.08-0.43,0.23-0.59s0.35-0.23,0.59-0.23s0.43,0.08,0.59,0.23s0.23,0.35,0.23,0.59c0,0.23-0.08,0.42-0.23,0.58
	s-0.35,0.23-0.59,0.23c-0.23,0-0.42-0.08-0.57-0.24C10.42,21.59,10.33,21.4,10.33,21.18z M11.97,27.17c0-0.04,0.01-0.11,0.04-0.23
	l0.13-0.59c0.07-0.23,0.21-0.4,0.41-0.51c0.21-0.12,0.42-0.14,0.63-0.07c0.23,0.04,0.41,0.17,0.53,0.37
	c0.12,0.2,0.15,0.43,0.08,0.68l-0.13,0.59c-0.1,0.41-0.37,0.61-0.8,0.61c-0.07,0-0.16-0.01-0.24-0.03
	c-0.22-0.06-0.38-0.17-0.49-0.33C12.03,27.5,11.97,27.34,11.97,27.17z M12.76,24.26c0-0.23,0.08-0.43,0.23-0.58
	c0.16-0.16,0.35-0.23,0.59-0.23s0.43,0.08,0.59,0.23c0.16,0.16,0.23,0.35,0.23,0.58c0,0.24-0.08,0.43-0.23,0.59
	c-0.16,0.16-0.35,0.23-0.59,0.23c-0.23,0-0.42-0.08-0.58-0.24C12.84,24.68,12.76,24.49,12.76,24.26z M13.38,21.99
	c0-0.1,0.01-0.19,0.03-0.27l0.23-0.9c0.07-0.23,0.21-0.41,0.41-0.53c0.21-0.12,0.42-0.15,0.64-0.08c0.24,0.07,0.41,0.2,0.53,0.4
	s0.14,0.41,0.07,0.63l-0.26,0.9c-0.08,0.28-0.22,0.46-0.41,0.56c-0.19,0.1-0.41,0.12-0.64,0.06c-0.2-0.04-0.35-0.14-0.45-0.3
	C13.41,22.3,13.37,22.14,13.38,21.99z M16.14,24.13c0-0.03,0-0.08,0.01-0.13s0.01-0.09,0.01-0.11l0.09-0.59
	c0.07-0.24,0.2-0.41,0.41-0.53s0.43-0.14,0.68-0.08c0.23,0.07,0.4,0.21,0.51,0.41c0.12,0.21,0.14,0.42,0.07,0.63l-0.14,0.6
	c-0.1,0.44-0.35,0.66-0.76,0.66c-0.03,0-0.08-0.01-0.14-0.02c-0.06-0.01-0.11-0.02-0.14-0.02c-0.2-0.06-0.35-0.17-0.45-0.33
	C16.2,24.46,16.14,24.3,16.14,24.13z M16.88,21.19c0-0.24,0.08-0.43,0.23-0.59c0.16-0.16,0.35-0.23,0.59-0.23
	c0.24,0,0.43,0.08,0.59,0.23c0.16,0.16,0.23,0.35,0.23,0.59c0,0.23-0.08,0.43-0.23,0.58C18.14,21.92,17.95,22,17.71,22
	c-0.24,0-0.43-0.08-0.58-0.24C16.97,21.61,16.88,21.42,16.88,21.19z' />
            break

        case 'rain-snow':
            iconToRender = <path d='M4.65,16.96c0,1.32,0.47,2.46,1.4,3.41c0.93,0.96,2.06,1.46,3.38,1.5c0.12,0,0.18-0.06,0.18-0.17v-1.33
	c0-0.12-0.06-0.18-0.18-0.18c-0.84-0.04-1.57-0.38-2.17-1.02s-0.91-1.37-0.91-2.22c0-0.84,0.28-1.57,0.85-2.19
	c0.57-0.62,1.26-0.97,2.1-1.04l0.53-0.07c0.12,0,0.19-0.06,0.19-0.18l0.07-0.5c0.1-1.09,0.55-2.01,1.36-2.75s1.76-1.11,2.86-1.11
	c1.08,0,2.03,0.37,2.84,1.1c0.81,0.73,1.28,1.63,1.4,2.71l0.07,0.58c0,0.12,0.06,0.18,0.19,0.18h1.6c0.9,0,1.67,0.32,2.32,0.97
	c0.64,0.64,0.97,1.41,0.97,2.3c0,0.84-0.3,1.58-0.9,2.22c-0.6,0.63-1.33,0.97-2.18,1.02c-0.13,0-0.2,0.06-0.2,0.18v1.33
	c0,0.11,0.07,0.17,0.2,0.17c1.33-0.04,2.46-0.54,3.38-1.5s1.38-2.09,1.38-3.42c0-0.89-0.22-1.72-0.67-2.48
	c-0.44-0.76-1.05-1.36-1.81-1.8c-0.76-0.44-1.59-0.66-2.48-0.66h-0.31c-0.33-1.34-1.03-2.43-2.11-3.29
	c-1.07-0.85-2.3-1.28-3.68-1.28c-1.41,0-2.66,0.44-3.75,1.31s-1.79,1.99-2.1,3.35c-1.13,0.29-2.04,0.88-2.75,1.77
	S4.65,15.8,4.65,16.96z M10.05,23.98c0,0.17,0.05,0.34,0.16,0.51c0.11,0.17,0.27,0.28,0.47,0.35c0.23,0.07,0.44,0.06,0.64-0.04
	c0.19-0.09,0.33-0.28,0.39-0.56l0.14-0.61c0.05-0.23,0.02-0.44-0.09-0.63s-0.28-0.33-0.52-0.4c-0.22-0.07-0.44-0.04-0.64,0.08
	s-0.34,0.3-0.4,0.53l-0.14,0.59C10.06,23.83,10.05,23.89,10.05,23.98z M10.81,21.08c0,0.21,0.08,0.4,0.25,0.57
	c0.16,0.17,0.34,0.25,0.56,0.25c0.24,0,0.44-0.08,0.6-0.24c0.16-0.16,0.24-0.35,0.24-0.59c0-0.23-0.08-0.43-0.24-0.59
	c-0.16-0.16-0.36-0.24-0.6-0.24c-0.23,0-0.42,0.08-0.58,0.23C10.89,20.65,10.81,20.85,10.81,21.08z M11.42,18.81
	c-0.01,0.16,0.03,0.31,0.14,0.45c0.1,0.15,0.26,0.25,0.48,0.32c0.21,0.06,0.41,0.04,0.62-0.07S13,19.23,13.07,19l0.28-0.9
	c0.07-0.24,0.05-0.46-0.07-0.65c-0.12-0.19-0.3-0.32-0.54-0.39c-0.22-0.07-0.43-0.05-0.63,0.07c-0.2,0.11-0.34,0.28-0.41,0.5
	l-0.24,0.92c0,0.02-0.01,0.06-0.02,0.12C11.43,18.72,11.42,18.77,11.42,18.81z M12.59,27.1c0,0.18,0.05,0.34,0.15,0.5
	c0.1,0.16,0.26,0.27,0.48,0.33c0.08,0.02,0.17,0.03,0.25,0.03c0.43,0,0.69-0.2,0.79-0.61l0.14-0.59c0.06-0.26,0.03-0.48-0.08-0.68
	c-0.12-0.2-0.29-0.32-0.52-0.37c-0.21-0.07-0.42-0.05-0.63,0.07c-0.21,0.12-0.34,0.29-0.41,0.51l-0.14,0.59
	C12.6,26.97,12.59,27.04,12.59,27.1z M13.36,24.2c0,0.22,0.08,0.41,0.25,0.58c0.16,0.16,0.35,0.24,0.57,0.24
	c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.59c0-0.23-0.08-0.42-0.23-0.58c-0.16-0.16-0.35-0.23-0.59-0.23
	c-0.24,0-0.43,0.08-0.59,0.23S13.36,23.97,13.36,24.2z M13.99,21.93c-0.01,0.15,0.03,0.31,0.13,0.47c0.1,0.16,0.25,0.26,0.45,0.3
	c0.23,0.06,0.44,0.04,0.64-0.06s0.33-0.29,0.41-0.56l0.27-0.9c0.07-0.22,0.05-0.43-0.07-0.63c-0.12-0.2-0.29-0.33-0.53-0.4
	c-0.22-0.07-0.43-0.04-0.64,0.08c-0.21,0.12-0.34,0.3-0.41,0.53l-0.23,0.9C14,21.74,13.99,21.83,13.99,21.93z M16.75,24.08
	c0,0.16,0.05,0.32,0.15,0.48c0.1,0.16,0.26,0.27,0.46,0.33c0.03,0,0.08,0.01,0.14,0.02c0.06,0.01,0.1,0.02,0.14,0.02
	c0.41,0,0.66-0.22,0.76-0.66l0.14-0.6c0.07-0.21,0.05-0.42-0.07-0.63c-0.11-0.21-0.28-0.34-0.51-0.41
	c-0.25-0.06-0.48-0.04-0.68,0.08s-0.34,0.29-0.41,0.53l-0.09,0.59c0,0.02-0.01,0.07-0.02,0.12S16.75,24.04,16.75,24.08z
	 M17.49,21.12c0,0.22,0.08,0.42,0.25,0.57c0.15,0.16,0.34,0.24,0.57,0.24c0.24,0,0.43-0.08,0.59-0.23s0.23-0.35,0.23-0.58
	c0-0.24-0.08-0.43-0.23-0.59s-0.35-0.23-0.59-0.23c-0.24,0-0.43,0.08-0.59,0.23C17.57,20.69,17.49,20.88,17.49,21.12z M18.1,18.81
	c0,0.17,0.05,0.33,0.16,0.48c0.11,0.15,0.27,0.26,0.49,0.32c0.02,0,0.06,0.01,0.12,0.02s0.11,0.02,0.14,0.02
	c0.1,0,0.22-0.03,0.36-0.09c0.21-0.11,0.35-0.29,0.41-0.52l0.24-0.9c0.06-0.23,0.04-0.44-0.08-0.63c-0.11-0.2-0.28-0.33-0.51-0.4
	c-0.23-0.07-0.44-0.05-0.64,0.06c-0.19,0.11-0.33,0.27-0.39,0.51l-0.28,0.91c0,0.02-0.01,0.06-0.02,0.12
	C18.1,18.74,18.1,18.78,18.1,18.81z' />
            break

        case 'snower':
            iconToRender = <path d='M4.6,16.93c0-1.16,0.36-2.18,1.09-3.08c0.72-0.9,1.65-1.48,2.78-1.73c0.29-1.38,0.98-2.5,2.07-3.39S12.88,7.4,14.3,7.4
	c1.39,0,2.63,0.43,3.72,1.28c1.08,0.85,1.79,1.95,2.12,3.3h0.34c0.9,0,1.73,0.22,2.48,0.66c0.76,0.44,1.35,1.04,1.79,1.8
	c0.43,0.76,0.65,1.59,0.65,2.49c0,1.34-0.46,2.48-1.37,3.44c-0.92,0.96-2.04,1.46-3.37,1.5c-0.12,0-0.18-0.06-0.18-0.17v-1.34
	c0-0.11,0.06-0.17,0.18-0.17c0.84-0.07,1.57-0.42,2.17-1.05s0.9-1.37,0.9-2.22c0-0.89-0.32-1.66-0.96-2.31
	c-0.64-0.64-1.4-0.97-2.29-0.97h-1.63c-0.12,0-0.19-0.06-0.22-0.18l-0.07-0.57c-0.07-0.71-0.3-1.36-0.7-1.94s-0.91-1.03-1.53-1.36
	c-0.62-0.33-1.3-0.49-2.02-0.49c-1.1,0-2.05,0.36-2.86,1.09c-0.81,0.73-1.27,1.64-1.37,2.72l-0.07,0.54c0,0.09-0.05,0.14-0.16,0.14
	L9.31,13.7c-0.84,0.07-1.55,0.41-2.11,1.03c-0.57,0.62-0.85,1.35-0.85,2.2c0,0.87,0.3,1.62,0.89,2.25c0.59,0.63,1.31,0.97,2.17,1.02
	c0.12,0,0.18,0.06,0.18,0.17v1.34c0,0.11-0.06,0.17-0.18,0.17c-0.66-0.03-1.28-0.18-1.88-0.45S6.42,20.8,6,20.36
	c-0.43-0.44-0.77-0.95-1.02-1.55S4.6,17.59,4.6,16.93z M10.02,23.7c0-0.03,0.01-0.08,0.02-0.13s0.02-0.09,0.02-0.11l0.27-1.03
	c0.07-0.22,0.2-0.4,0.4-0.51c0.2-0.12,0.41-0.14,0.64-0.07c0.23,0.07,0.4,0.2,0.52,0.4c0.12,0.2,0.14,0.41,0.07,0.64l-0.24,1.01
	c-0.13,0.44-0.38,0.66-0.76,0.66c-0.03,0-0.05,0-0.09,0c-0.03,0-0.07-0.01-0.11-0.01c-0.04-0.01-0.07-0.01-0.1-0.01
	c-0.21-0.06-0.37-0.18-0.48-0.34S10.02,23.86,10.02,23.7z M11.34,18.88c0-0.02,0-0.06,0.01-0.11c0.01-0.05,0.01-0.08,0.01-0.09
	l0.3-1.05c0.06-0.19,0.17-0.34,0.32-0.45c0.15-0.1,0.31-0.15,0.47-0.15c0.02,0,0.05,0,0.08,0c0.03,0,0.06,0.01,0.09,0.01
	c0.03,0.01,0.06,0.01,0.08,0.01c0.23,0.07,0.4,0.2,0.51,0.4c0.12,0.2,0.14,0.41,0.07,0.64l-0.24,1c-0.07,0.28-0.2,0.47-0.4,0.59
	s-0.42,0.12-0.65,0.02c-0.22-0.06-0.38-0.17-0.49-0.34S11.34,19.04,11.34,18.88z M12.57,26.83c0-0.03,0.01-0.07,0.02-0.13
	s0.02-0.09,0.02-0.12l0.29-0.99c0.06-0.24,0.2-0.42,0.4-0.54c0.2-0.12,0.42-0.15,0.65-0.08c0.23,0.07,0.39,0.2,0.51,0.41
	s0.13,0.42,0.07,0.65l-0.25,1.04c-0.11,0.41-0.37,0.61-0.8,0.61c-0.05,0-0.13-0.01-0.24-0.04c-0.22-0.04-0.38-0.14-0.49-0.3
	C12.63,27.18,12.57,27.01,12.57,26.83z M13.91,22.06c0-0.06,0.01-0.14,0.04-0.25l0.27-1.03c0.07-0.23,0.2-0.4,0.41-0.51
	c0.2-0.12,0.42-0.14,0.65-0.07c0.23,0.06,0.39,0.19,0.51,0.39c0.11,0.2,0.13,0.41,0.06,0.65l-0.24,0.99
	c-0.13,0.45-0.37,0.68-0.72,0.68c-0.04,0-0.15-0.02-0.31-0.06c-0.22-0.04-0.38-0.14-0.49-0.3C13.97,22.4,13.91,22.23,13.91,22.06z
	 M16.73,23.74c0-0.07,0.01-0.15,0.03-0.24l0.28-0.99c0.07-0.24,0.2-0.42,0.41-0.54s0.41-0.15,0.63-0.09
	c0.23,0.07,0.41,0.2,0.53,0.41c0.12,0.2,0.15,0.41,0.09,0.63l-0.29,1.06c-0.1,0.41-0.36,0.61-0.79,0.61c-0.09,0-0.18-0.01-0.26-0.03
	c-0.2-0.04-0.35-0.14-0.46-0.3C16.8,24.08,16.74,23.91,16.73,23.74z M18.11,18.98c0-0.03,0.02-0.12,0.05-0.26l0.3-1.03
	c0.04-0.21,0.13-0.37,0.29-0.47c0.16-0.1,0.32-0.15,0.49-0.14c0.04-0.01,0.13,0,0.24,0.03c0.22,0.05,0.39,0.18,0.52,0.38
	c0.12,0.17,0.14,0.38,0.07,0.65l-0.24,1.03c-0.13,0.43-0.38,0.65-0.76,0.65c-0.06,0-0.17-0.02-0.34-0.06
	c-0.21-0.06-0.36-0.17-0.46-0.31C18.16,19.29,18.11,19.14,18.11,18.98z' />
            break

        case 'cloudy':
            iconToRender = <path d='M4.61,16.88c0-1.15,0.36-2.17,1.08-3.07c0.72-0.9,1.63-1.48,2.74-1.73c0.31-1.37,1.02-2.49,2.11-3.37s2.35-1.32,3.76-1.32
	c1.38,0,2.61,0.43,3.69,1.28s1.78,1.95,2.1,3.29h0.33c0.9,0,1.73,0.22,2.49,0.65s1.37,1.03,1.81,1.79c0.44,0.76,0.67,1.58,0.67,2.48
	c0,0.88-0.21,1.7-0.63,2.45s-1,1.35-1.73,1.8c-0.73,0.45-1.54,0.69-2.41,0.72H9.41c-1.34-0.06-2.47-0.57-3.4-1.53
	C5.08,19.37,4.61,18.22,4.61,16.88z M6.32,16.88c0,0.87,0.3,1.62,0.9,2.26s1.33,0.98,2.19,1.03h11.19c0.86-0.04,1.59-0.39,2.19-1.03
	c0.61-0.64,0.91-1.4,0.91-2.26c0-0.88-0.33-1.63-0.98-2.27c-0.65-0.64-1.42-0.96-2.32-0.96H18.8c-0.11,0-0.17-0.06-0.17-0.18
	l-0.07-0.57c-0.11-1.08-0.58-1.99-1.4-2.72c-0.82-0.73-1.77-1.1-2.86-1.1c-1.09,0-2.05,0.37-2.85,1.1
	c-0.81,0.73-1.27,1.64-1.37,2.72l-0.08,0.57c0,0.12-0.07,0.18-0.2,0.18H9.27c-0.84,0.1-1.54,0.46-2.1,1.07S6.32,16.05,6.32,16.88z'
            />
            break

        case 'mist':
            iconToRender = <path d='M7.33,16.58c0-0.23,0.08-0.41,0.23-0.56c0.16-0.15,0.37-0.22,0.64-0.22h5.71c0.27,0,0.48,0.07,0.64,0.22
	c0.16,0.15,0.23,0.33,0.23,0.56c0,0.27-0.08,0.49-0.23,0.64s-0.37,0.23-0.64,0.23H8.2c-0.27,0-0.48-0.08-0.64-0.23
	S7.33,16.86,7.33,16.58z M7.33,10.67c0-0.22,0.08-0.41,0.23-0.55C7.72,9.97,7.93,9.9,8.2,9.9h2.96c0.27,0,0.48,0.07,0.64,0.22
	c0.16,0.14,0.24,0.33,0.24,0.55c0,0.27-0.08,0.48-0.24,0.64c-0.16,0.16-0.37,0.24-0.64,0.24H8.2c-0.27,0-0.48-0.08-0.64-0.23
	S7.33,10.94,7.33,10.67z M8.32,19.54c0-0.22,0.09-0.42,0.28-0.6c0.18-0.18,0.39-0.28,0.6-0.28c0.26,0,0.46,0.09,0.62,0.27
	s0.24,0.38,0.24,0.61c0,0.27-0.08,0.49-0.23,0.65c-0.15,0.16-0.36,0.23-0.63,0.23c-0.23,0-0.44-0.08-0.61-0.24
	C8.4,20.01,8.32,19.8,8.32,19.54z M9.74,13.61c0-0.23,0.07-0.44,0.22-0.61c0.15-0.18,0.33-0.27,0.54-0.27
	c0.26,0,0.48,0.09,0.64,0.27c0.16,0.18,0.24,0.38,0.24,0.61c0,0.27-0.08,0.49-0.23,0.65c-0.16,0.16-0.37,0.23-0.65,0.23
	c-0.23,0-0.41-0.08-0.55-0.24S9.74,13.88,9.74,13.61z M10.73,19.54c0-0.23,0.08-0.44,0.24-0.61s0.38-0.27,0.64-0.27h3.83l0.88,0.88
	c0,0.26-0.09,0.47-0.27,0.64s-0.38,0.24-0.61,0.24h-3.83c-0.27,0-0.49-0.08-0.65-0.24S10.73,19.81,10.73,19.54z M12.05,13.61
	c0-0.22,0.09-0.42,0.28-0.6c0.18-0.18,0.39-0.28,0.6-0.28h3.83c0.26,0,0.47,0.09,0.63,0.27c0.16,0.18,0.24,0.38,0.24,0.61
	c0,0.27-0.08,0.49-0.23,0.65c-0.16,0.16-0.37,0.23-0.64,0.23h-3.83c-0.23,0-0.44-0.08-0.61-0.24
	C12.14,14.09,12.05,13.88,12.05,13.61z M12.81,10.67c0-0.22,0.08-0.41,0.24-0.55c0.16-0.14,0.37-0.22,0.64-0.22h5.71
	c0.23,0,0.43,0.08,0.61,0.23c0.18,0.15,0.27,0.33,0.27,0.54c0,0.26-0.09,0.48-0.27,0.64c-0.18,0.16-0.38,0.24-0.61,0.24h-5.71
	c-0.27,0-0.49-0.08-0.65-0.24C12.88,11.15,12.81,10.94,12.81,10.67z M15.44,16.58c0-0.21,0.09-0.4,0.27-0.55
	c0.18-0.15,0.38-0.23,0.61-0.23s0.43,0.08,0.61,0.23c0.18,0.15,0.27,0.34,0.27,0.55c0,0.26-0.09,0.47-0.27,0.63
	c-0.18,0.16-0.38,0.24-0.61,0.24c-0.23,0-0.44-0.08-0.61-0.24C15.53,17.06,15.44,16.85,15.44,16.58z M16.98,19.54
	c0-0.23,0.08-0.44,0.24-0.61c0.16-0.18,0.37-0.27,0.63-0.27h1.87c0.26,0,0.47,0.09,0.63,0.26c0.16,0.17,0.24,0.38,0.24,0.62
	c0,0.27-0.08,0.49-0.23,0.65c-0.15,0.16-0.37,0.23-0.64,0.23h-1.87c-0.27,0-0.48-0.08-0.64-0.23
	C17.06,20.03,16.98,19.81,16.98,19.54z M17.85,16.58c0-0.21,0.09-0.4,0.27-0.55c0.18-0.15,0.38-0.23,0.61-0.23h3.07
	c0.22,0,0.4,0.08,0.54,0.23c0.14,0.15,0.22,0.33,0.22,0.55c0,0.27-0.07,0.48-0.21,0.64c-0.14,0.16-0.32,0.23-0.55,0.23h-3.07
	c-0.23,0-0.44-0.08-0.61-0.24C17.94,17.06,17.85,16.85,17.85,16.58z M18.29,13.61c0-0.22,0.09-0.42,0.28-0.6
	c0.18-0.18,0.39-0.28,0.6-0.28h1.96c0.21,0,0.39,0.09,0.54,0.27c0.15,0.18,0.23,0.38,0.23,0.61c0,0.27-0.07,0.48-0.22,0.64
	c-0.14,0.16-0.33,0.24-0.55,0.24h-1.96c-0.23,0-0.44-0.08-0.61-0.24C18.38,14.09,18.29,13.88,18.29,13.61z M21.03,10.67
	c0-0.22,0.07-0.4,0.22-0.55C21.4,9.97,21.58,9.9,21.8,9.9c0.27,0,0.48,0.07,0.64,0.22c0.16,0.14,0.24,0.33,0.24,0.55
	c0,0.27-0.08,0.48-0.24,0.64c-0.16,0.16-0.37,0.24-0.64,0.24c-0.23,0-0.41-0.08-0.55-0.24C21.1,11.15,21.03,10.94,21.03,10.67z' />
            break

        case 'strong-wind':
            iconToRender = <path d='M3.1,16.97c0,0.24,0.09,0.45,0.28,0.62c0.16,0.19,0.37,0.28,0.63,0.28H18.7c0.29,0,0.53,0.1,0.73,0.3
	c0.2,0.2,0.3,0.45,0.3,0.74c0,0.29-0.1,0.53-0.3,0.72c-0.2,0.19-0.44,0.29-0.74,0.29c-0.29,0-0.54-0.1-0.73-0.29
	c-0.16-0.18-0.36-0.26-0.6-0.26c-0.25,0-0.46,0.09-0.64,0.26s-0.27,0.38-0.27,0.61c0,0.25,0.09,0.46,0.28,0.63
	c0.56,0.55,1.22,0.83,1.96,0.83c0.78,0,1.45-0.27,2.01-0.81c0.56-0.54,0.83-1.19,0.83-1.97s-0.28-1.44-0.84-2
	c-0.56-0.56-1.23-0.84-2-0.84H4.01c-0.25,0-0.46,0.09-0.64,0.26C3.19,16.51,3.1,16.72,3.1,16.97z M3.1,13.69
	c0,0.23,0.09,0.43,0.28,0.61c0.17,0.18,0.38,0.26,0.63,0.26h20.04c0.78,0,1.45-0.27,2.01-0.82c0.56-0.54,0.84-1.2,0.84-1.97
	c0-0.77-0.28-1.44-0.84-1.99s-1.23-0.83-2.01-0.83c-0.77,0-1.42,0.27-1.95,0.8c-0.18,0.16-0.27,0.38-0.27,0.67
	c0,0.26,0.09,0.47,0.26,0.63c0.17,0.16,0.38,0.24,0.63,0.24c0.24,0,0.45-0.08,0.63-0.24c0.19-0.21,0.42-0.31,0.7-0.31
	c0.29,0,0.53,0.1,0.73,0.3c0.2,0.2,0.3,0.44,0.3,0.73c0,0.29-0.1,0.53-0.3,0.72c-0.2,0.19-0.44,0.29-0.73,0.29H4.01
	c-0.25,0-0.46,0.09-0.64,0.26C3.19,13.23,3.1,13.44,3.1,13.69z' />
            break

        case 'stars':
            iconToRender = <path d='M5.37,16.18c0.65-0.03,1.2-0.28,1.65-0.75c0.45-0.47,0.68-1.03,0.68-1.68c0,0.65,0.22,1.21,0.67,1.68
	c0.45,0.47,1,0.72,1.65,0.75c-0.65,0.03-1.2,0.28-1.65,0.75c-0.45,0.47-0.67,1.03-0.67,1.68c0-0.65-0.22-1.21-0.68-1.68
	C6.57,16.46,6.02,16.21,5.37,16.18z M7.7,8.98c1.26-0.06,2.33-0.55,3.21-1.47c0.88-0.92,1.32-2.01,1.32-3.28
	c0,1.27,0.44,2.36,1.32,3.28s1.95,1.4,3.22,1.47c-0.83,0.04-1.59,0.27-2.29,0.71c-0.69,0.43-1.24,1.01-1.65,1.73
	c-0.4,0.72-0.6,1.49-0.6,2.33c0-1.27-0.44-2.37-1.32-3.29C10.03,9.53,8.96,9.04,7.7,8.98z M11.02,19.75
	c0.95-0.04,1.76-0.41,2.42-1.1c0.66-0.69,0.99-1.51,0.99-2.47c0,0.96,0.33,1.78,0.99,2.47c0.66,0.69,1.46,1.06,2.41,1.1
	c-0.95,0.04-1.75,0.41-2.41,1.1c-0.66,0.69-0.99,1.51-0.99,2.47c0-0.96-0.33-1.78-0.99-2.47C12.77,20.16,11.97,19.8,11.02,19.75z
	 M17.83,15.01c0.95-0.04,1.75-0.41,2.41-1.1c0.66-0.69,0.98-1.51,0.98-2.48c0,0.96,0.33,1.78,0.99,2.47s1.47,1.06,2.42,1.1
	c-0.95,0.04-1.76,0.41-2.42,1.1c-0.66,0.69-0.99,1.51-0.99,2.47c0-0.96-0.33-1.78-0.98-2.47C19.58,15.42,18.78,15.05,17.83,15.01z'
            />
            break

        default:
            iconToRender = ''
            break
    }

    return (
        <svg
            viewBox='0 0 30 30'
            className={styles.weatherIcon}
        >
            {iconToRender}
        </svg>
    )
}

export default WeatherIcon

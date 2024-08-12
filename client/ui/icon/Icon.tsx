import React from 'react'

import { IconTypes } from './types'

interface IconProps {
    name: IconTypes
}

const Icon: React.FC<IconProps> = ({ name }) => {
    let iconToRender

    switch (name) {
        case 'Menu':
            iconToRender = <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
            break
        case 'Light':
            iconToRender = (
                <path d='M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z' />
            )
            break
        case 'Dark':
            iconToRender = (
                <path d='M14 4c.34 0 .68.02 1.01.07C13.1 6.23 12 9.05 12 12s1.1 5.77 3.01 7.93c-.33.05-.67.07-1.01.07-4.41 0-8-3.59-8-8s3.59-8 8-8m0-2C8.48 2 4 6.48 4 12s4.48 10 10 10c1.82 0 3.53-.5 5-1.35-2.99-1.73-5-4.95-5-8.65s2.01-6.92 5-8.65C17.53 2.5 15.82 2 14 2' />
            )
            break
        case 'Thermometer':
            iconToRender = (
                <path d='M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4m-4-2V5c0-.55.45-1 1-1s1 .45 1 1v1h-1v1h1v2h-1v1h1v1z' />
            )
            break
        case 'Water':
            iconToRender = (
                <path d='M21.98 14H22zM5.35 13c1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.4.98 3.31 1v-2c-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1v2c1.9 0 2.17-1 3.35-1m13.32 2c-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.1 1-3.34 1-1.24 0-1.38-1-3.33-1-1.95 0-2.1 1-3.34 1v2c1.95 0 2.11-1 3.34-1 1.24 0 1.38 1 3.33 1 1.95 0 2.1-1 3.34-1 1.19 0 1.42 1 3.33 1 1.94 0 2.09-1 3.33-1 1.19 0 1.42 1 3.33 1v-2c-1.24 0-1.38-1-3.33-1M5.35 9c1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.4.98 3.31 1V8c-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1C3.38 7 3.24 8 2 8v2c1.9 0 2.17-1 3.35-1' />
            )
            break
        case 'Wind':
            iconToRender = (
                <>
                    <path d='M4 3h6v2H4zM1 7h5v2H1zm2 12h5v2H3z'></path>
                    <path d='m22.21 18.61-2.28-4.1c-.27-.48-.73-.83-1.26-.97l-2.69-.67c-.02-.47-.14-.92-.37-1.33l3.96-6.59c.65-1.08.3-2.48-.78-3.13-.36-.22-.77-.32-1.17-.32-.56 0-1.12.21-1.56.62l-3.43 3.21c-.4.37-.63.9-.63 1.45v3.4c-.47.17-.89.45-1.23.82H3.28C2.02 11 1 12.02 1 13.28c0 1.02.67 1.91 1.65 2.19l4.51 1.29c.18.05.37.08.55.08.36 0 .72-.1 1.03-.29l2.24-1.34c.29.26.63.47 1.02.61V21c-1.1 0-2 .9-2 2h6c0-1.1-.9-2-2-2v-4.28l4.61 4.61c.45.45 1.03.67 1.61.67.58 0 1.17-.22 1.61-.67.72-.72.88-1.83.38-2.72M7.72 14.84 3.2 13.55c-.12-.03-.2-.15-.2-.27 0-.15.13-.28.28-.28h6.73c0 .15.01.3.03.44zM13 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m1-3.86V6.78l3.43-3.21c.05-.05.19-.12.34-.04.13.08.18.25.1.38l-3.74 6.24zm6.42 9.78c-.05.05-.24.16-.4 0l-4.85-4.85c.08-.09.16-.18.24-.28l2.78.69 2.28 4.1c.06.11.04.25-.05.34'></path>
                </>
            )
            break
        case 'Cloud':
            iconToRender = (
                <path d='M12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6m0-2C9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96C18.67 6.59 15.64 4 12 4' />
            )
            break
    }

    return <svg viewBox='0 0 24 24'>{iconToRender}</svg>
}

export default Icon

import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from 'semantic-ui-react'

import version from '../data/version'

const Footer = () => {
    return (
        <Container textAlign='center' className='footer'>
            <div>Powered by Arduino, PHP + MySQL, ReactJS</div>
            <div>Copyright ©
                <a href='https://miksoft.pro' className='copyright-link' title='' target='_blank'>
                    <img src='http://miksoft.pro/favicon.ico' alt='' /> Mik
                </a> 2021, Version {version}
            </div>
        </Container>
    )
}

export default Footer
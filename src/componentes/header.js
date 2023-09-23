import React from 'react'
import MenuDesktop from './MenuDesktop'
import {BrowserView, MobileView} from 'react-device-detect'
import { NavLink } from 'react-router-dom'


export default function Header() {
    const logo = 'https://oliveda-photography.es/wp-content/uploads/2023/06/logo.png'
    return (
        <>
            <header>
                <BrowserView>
                    <div style={{ textAlign: 'center' }}>
                        <div>
                            <NavLink to='/'>
                                <img
                                alt="logo 1"
                                style={{ maxWidth: '10%' }}
                                src={logo}/>
                            </NavLink>
                        </div>
                        <div style={{ display: 'inline-block' }}><MenuDesktop /></div>
                    </div>
                </BrowserView>
                <MobileView>
                <div style={{ textAlign: 'center' }}>
                        <div>
                            <NavLink to='/'>
                                <img
                                alt="logo 2"
                                style={{ maxWidth: '40%' }}
                                src={logo}/>
                            </NavLink>
                        </div>
                        <div><MenuDesktop /></div>
                    </div>
                </MobileView>
            </header>
        </>
    )
}
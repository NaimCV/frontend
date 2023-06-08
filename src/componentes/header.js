import React from 'react'
import MenuDesktop from './MenuDesktop'
import {BrowserView, MobileView} from 'react-device-detect'
import { NavLink } from 'react-router-dom'


export default function Header() {
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
                                src='https://oliveda-photography.es/wp-content/uploads/2021/09/cropped-MARCA.png'/>
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
                                src='https://oliveda-photography.es/wp-content/uploads/2021/09/cropped-MARCA.png'/>
                            </NavLink>
                        </div>
                        <div><MenuDesktop /></div>
                    </div>
                </MobileView>
            </header>
        </>
    )
}
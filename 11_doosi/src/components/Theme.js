import React from 'react'
import { THEME } from './DATA'

const Theme = () => {
    return (
        <section className='theme'>
            {
                THEME.map((it, idx) => {
                    return (
                        <>
                            <div className="tit">{it.tit}</div>
                            <div className="des">{it.des}</div>
                            <div className="stit">
                                <figure>
                                    <img src={process.env.PUBLIC_URL + "/assets/img/theme_" + it.stit01 + ".jpg"} alt="" />
                                    <div>{it.stit01}</div>
                                </figure>
                                <figure>
                                    <img src={process.env.PUBLIC_URL + "/assets/img/theme_" + it.stit02 + ".jpg"} alt="" />
                                    <div>{it.stit02}</div>
                                </figure>
                                <figure>
                                    <img src={process.env.PUBLIC_URL + "/assets/img/theme_" + it.stit03 + ".jpg"} alt="" />
                                    <div>{it.stit03}</div>
                                </figure>
                                <figure>
                                    <img src={process.env.PUBLIC_URL + "/assets/img/theme_" + it.stit04 + ".jpg"} alt="" />
                                    <div>{it.stit04}</div>
                                </figure>

                            </div>

                        </>
                    )
                })
            }


        </section>
    )
}

export default Theme
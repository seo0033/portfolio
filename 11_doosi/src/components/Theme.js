import React from 'react'
import { Link } from 'react-router-dom'
import { THEME } from './Data'

const Theme = () => {
    return (
        <section className='theme'>
            {
                THEME.map((it, idx) => {
                    return (
                        <>
                            <div className="tit">{it.tit}</div>
                            <div className="des">
                                <p>{it.des}</p>
                                <Link>구독하기</Link>
                            </div>
                            <div className="stit">
                                <figure>
                                    <img src={process.env.PUBLIC_URL + "/assets/img/theme_" + it.stit01 + ".jpg"} alt="" />
                                    <p>{it.stit01}</p>
                                </figure>
                                <figure>
                                    <img src={process.env.PUBLIC_URL + "/assets/img/theme_" + it.stit02 + ".jpg"} alt="" />
                                    <p>{it.stit02}</p>
                                </figure>
                                <figure>
                                    <img src={process.env.PUBLIC_URL + "/assets/img/theme_" + it.stit03 + ".jpg"} alt="" />
                                    <p>{it.stit03}</p>
                                </figure>
                                <figure>
                                    <img src={process.env.PUBLIC_URL + "/assets/img/theme_" + it.stit04 + ".jpg"} alt="" />
                                    <p>{it.stit04}</p>
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
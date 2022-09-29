import React from 'react'
import { Link } from 'react-router-dom'

const category = [
    { id: 1, tit: 'FLOWER', link: '/sub01' },
    { id: 2, tit: 'PLANT', link: '/sub01' },
    { id: 3, tit: 'PROP', link: '/sub01' }
]

const Categories = () => {
    return (
        <div>
            <section className="Categories sc">
                <div className="inner">
                    {
                        category.map((it) => {
                            return (
                                <figure key={it.id}>
                                    <Link to={it.link}>
                                        <div className="box">
                                            <img src={process.env.PUBLIC_URL + "/assets/img/cate_0" + it.id + ".png"} alt="" />
                                        </div>
                                        <div className='tit'>{it.tit}</div>
                                    </Link>
                                </figure>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Categories
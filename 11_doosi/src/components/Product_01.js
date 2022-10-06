import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CATEGORY, PRODUCT_01 } from './DATA'

const Product_01 = () => {
    const [tablink, setTablink] = useState(0);
    return (
        <div className="product_01">
            <div className="tab_menu">
                <ul>
                    {
                        CATEGORY.map((it, idx) => {
                            return (
                                <Link><li onClick={() => setTablink(idx)}>{it.tit}</li></Link>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="tab_pd">
                <div className="box">
                    {PRODUCT_01.map((it, idx) => {
                        return (
                            <figure>
                                <table>
                                    <tr>
                                        <th>Title</th>
                                        <td>{it.tit}</td>
                                    </tr>
                                    <tr>
                                        <th>Price</th>
                                        <td>{it.price}</td>
                                    </tr>
                                </table>
                                <Link><img src={process.env.PUBLIC_URL + "/assets/img/sub01_product_0" + it.id + ".jpg"} alt="" /></Link>
                            </figure>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Product_01
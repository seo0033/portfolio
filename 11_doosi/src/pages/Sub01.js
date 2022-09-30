import React from 'react'
import { Link } from 'react-router-dom';
import { CATEGORY } from '../components/DATA';

const FLOWER = [
  { id: 1, tit: "옐로 소국, 골드코스트", cart: "ADD CART" },
  { id: 2, tit: "핑크 소국, 라즈베리", cart: "ADD CART" },
  { id: 3, tit: "옐로 소국, 골드코스트", cart: "ADD CART" },
  { id: 4, tit: "옐로 소국, 골드코스트", cart: "ADD CART" },
  { id: 5, tit: "옐로 소국, 골드코스트", cart: "ADD CART" },
]``

const Sub01 = ({ Content }) => {
  const num = 0;
  return (
    <section className='marcket sub01'>
      <div className="sub_v">
        <h2>{Content[num].pha}</h2>
      </div>
      <div className='side_link'>{Content[num].con}/{CATEGORY[0].tit}</div>
      <div className="product">
        <div className="tab_menu">
          <ul>
            {
              CATEGORY.map((it) => {
                return (
                  <li><Link to={it.link}>{it.tit}</Link></li>
                )
              })
            }
          </ul>
        </div>
        <div className="tab_pd">
          <img src={process.env.PUBLIC_URL + "/assets/img/sub01_product_0" + { FLOWER.id }} alt="" />
        </div>

      </div>

    </section>
  )
}

export default Sub01
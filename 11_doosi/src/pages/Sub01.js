import React from 'react'
import { Link } from 'react-router-dom';
import { CATEGORY } from '../components/DATA';
import Product_01 from '../components/Product_01';
import '../css/Spage.scss'


const Sub01 = ({ Content }) => {
  const num = 0;
  return (
    <section className='marcket sub01'>
      <div className="sub_v sc">
        <figure>
          <img src={process.env.PUBLIC_URL + "/assets/img/sub_bg_03.png"} alt="" />
          <h2>{Content[num].pha}</h2>
        </figure>
      </div>
      <div className="container sub_top">
        <div className='sub_cate'>{Content[num].con} / {CATEGORY[0].tit}</div>
        <div className="sub_tit border_b">{CATEGORY[0].tit}</div>
        <Product_01 />
      </div>
    </section>
  )
}

export default Sub01
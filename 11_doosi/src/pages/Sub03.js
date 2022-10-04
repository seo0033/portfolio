import React from 'react'
import { CATEGORY } from '../components/DATA';
import '../css/Spage.scss'

const Sub03 = ({ Content }) => {
  const num = 2;
  return (
    <section className='class sub03'>
      <div className="sub_v sc">
        <figure>
          <img src={process.env.PUBLIC_URL + "/assets/img/sub_bg_04.png"} alt="" />
          <h2>{Content[num].pha}</h2>
        </figure>
      </div>
      <div className="container sub_top">
        <div className='sub_cate'>{Content[num].con} / {CATEGORY[0].tit}</div>
        <div className="sub_tit border_b">{CATEGORY[0].tit}</div>
      </div>
    </section>
  )
}

export default Sub03
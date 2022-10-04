import React from 'react'
import '../css/Spage.scss'
import { CATEGORY } from '../components/DATA';

const Sub02 = ({ Content }) => {
  const num = 1;
  return (
    <section className='class sub02'>
      <div className="sub_v sc">
        <figure>
          <img src={process.env.PUBLIC_URL + "/assets/img/sub_bg_02.png"} alt="" />
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

export default Sub02
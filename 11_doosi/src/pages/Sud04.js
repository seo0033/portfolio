import React from 'react'
import { CATEGORY } from '../components/DATA';
import '../css/Spage.scss'

const Sud04 = ({ Content }) => {
  const num = 3;
  return (
    <section className='class sub04'>
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

export default Sud04
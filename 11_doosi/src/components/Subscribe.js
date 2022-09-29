import React from 'react'
const sub_content = [
    { id: 1, num: "01", tit: "Good Price", des: "신선한 꽃을 더 좋은 가격으로 만나볼 수 있도록\n꽃 구매부터 유통까지 모든 단계를 바꿔가고 있습니다." },
    { id: 2, num: "02", tit: "Good Quality", des: "좋은 품질의 꽃을 받아보실 수 있도록 600평 규모의 작업장과\n100평 규모의 저온창고를 통해 꽃을 관리하여 발송하고 있습니다." },
    { id: 3, num: "03", tit: "High Satisfaction", des: "살아있는 꽃이기에 유통과정에서 품질 이슈가 생길 수 있습니다.\n그런 경우, 꽃 컨디션에 만족할 때까지 재배송 해드리고 있습니다." }
]

const Subscribe = () => {
    return (
        <section className='Subscribe sc'>
            <div className="left">
                <h2>Subscribe</h2>
                <span>구독신청</span>
                <ul>
                    <li>
                        {
                            sub_content.map((it) => {
                                return (
                                    <li>
                                        <span>{it.num}</span>
                                        <h3>{it.tit}</h3>
                                        <p>{it.des}</p>
                                    </li>
                                )
                            })
                        }
                    </li>
                </ul>
            </div>
            <div className="right">
                <img src={process.env.PUBLIC_URL + "/assets/img/subscribe.png"} alt="" />
            </div>
        </section>
    )
}

export default Subscribe
import { FaStar } from "react-icons/fa";

// header Nav
const NAVLINK = [
    { id: 1, content: "Market", link: "/sub01/01" },
    { id: 2, content: "Class", link: "/sub02" },
    { id: 3, content: "Subscribe", link: "/sub03" },
    { id: 4, content: "Review", link: "/sub04" },
]

//main Category_sc
const CATEGORY = [
    { id: 1, tit: 'FLOWER', link: '/sub01/01' },
    { id: 2, tit: 'PLANT', link: '/sub01/02' },
    { id: 3, tit: 'PROP', link: '/sub01/03' }
]

//main Subscribe_sc
const S_CONTENT = [
    { id: 1, num: "01", tit: "Good Price", des: "신선한 꽃을 더 좋은 가격으로 만나볼 수 있도록\n꽃 구매부터 유통까지 모든 단계를 바꿔가고 있습니다." },
    { id: 2, num: "02", tit: "Good Quality", des: "좋은 품질의 꽃을 받아보실 수 있도록 600평 규모의 작업장과\n100평 규모의 저온창고를 통해 꽃을 관리하여 발송하고 있습니다." },
    { id: 3, num: "03", tit: "High Satisfaction", des: "살아있는 꽃이기에 유통과정에서 품질 이슈가 생길 수 있습니다.\n그런 경우, 꽃 컨디션에 만족할 때까지 재배송 해드리고 있습니다." }
]

//Sub01 product_01
const PRODUCT_01 = [
    { id: 1, tit: "옐로 소국, 골드코스트", price: "13.0", view: "VIEW" },
    { id: 2, tit: "핑크 소국, 라즈베리", price: "14.0", view: "VIEW" },
    { id: 3, tit: "설렘, 꽃다발", price: "13.0", view: "VIEW" },
    { id: 4, tit: "p_01", price: "12.0", view: "VIEW" },
    { id: 5, tit: "p_02", price: "11.0", view: "VIEW" },
    { id: 6, tit: "p_03", price: "13.0", view: "VIEW" },
    { id: 7, tit: "p_03", price: "13.0", view: "VIEW" },
    { id: 8, tit: "p_03", price: "13.0", view: "VIEW" },
    { id: 9, tit: "p_03", price: "13.0", view: "VIEW" },
]

//Sub04 review
const REVIEW = [
    { id: 1, tit: "파머스마켓 후기", des01: "파머스마켓은 비용도 이득이고 내 마음에 드는 \n꽃을 골라 선택할 수 있어요.", des02: "도매시장에 가서 꽃을 사려면 저렴하긴 해도 많은 양을 \n사야해서 여러 종류를 사기는 어려워요.", des03: "파머스마켓은 필요한 양만큼 소량으로 꽃을\n 다채롭게 주문할 수 있어서 비용적인 면에서도\n훨씬 이득이고 내 맘에 드는 꽃을 골라 선택할 수 있어\n진짜 마음에 들어요!", count: 5 },
    { id: 2, tit: "파머스마켓 후기", des01: "착한 가격으로 생생한 생화를 만나볼 수 있어요", des02: "오프라인 꽃집에 가면 꽃이 비싼데, \n온라인 꽃 정기구독이나 파머스마켓을 이용하면 정말 착한 가격으로 \n생생한 생화를 만나볼 수 있어서 좋아요.", des03: "파머스마켓은 필요한 양만큼 소량으로 꽃을\n다채롭게 주문할 수 있어서 비용적인 면에서도\n훨씬 이득이고 내 맘에 드는 꽃을 골라 선택할 수 있어\n진짜 마음에 들어요!", count: 3 },
    { id: 3, tit: "파머스마켓 후기", des01: "더위에도 싱싱한 꽃들을 만나볼 수 있어요", des02: "요즘 더워서 괜찮을까 싶었는데\n싱싱한 꽃들로 이렇게 도착했어요!\n저는 총 4가지 파머스마켓 라인으로 취향대로 골라봤답니다.", des03: "선물하기 좋은 생화 꽃다발도 있고 저처럼 원하는 대로 스타일링 해봐도 좋아요.", count: 2 },
    { id: 4, tit: "파머스마켓 후기", des01: "하나하나 알아가는 재미가 있어요!", des02: "여러 가지를 함께 챙겨 보내주셨는데\n제가 고른 것의 이름, 꽃말과 다듬고 관리하는 방법까지\n플로리스트가 세심하게 작성한 카드까지 함께 \n보내주셔서 하나하나 알아가는 재미도 있었어요!", des03: "파머스마켓은 필요한 양만큼 소량으로 꽃을\n 다채롭게 주문할 수 있어서 비용적인 면에서도\n훨씬 이득이고 내 맘에 드는 꽃을 골라 선택할 수 있어\n진짜 마음에 들어요!", count: 5 }
]

const THEME = [
    { id: 1, tit: "CITY", des: ": 떠나고 싶지만 못 떠나는 지금 꽃으로 여행을 해보세요.", id: 1, stit01: "NEWYORK", stit02: "PARIS", stit03: "SYDNEY", stit04: "JEJU" },
    { id: 2, tit: "NATURAL", des: ": 떠나고 싶지만 못 떠나는 지금 꽃으로 여행을 해보세요.", id: 1, stit01: "NEWYORK", stit02: "PARIS", stit03: "SYDNEY", stit04: "JEJU" },
    { id: 3, tit: "PERFORMANCE", des: ": 떠나고 싶지만 못 떠나는 지금 꽃으로 여행을 해보세요.", id: 1, stit01: "NEWYORK", stit02: "PARIS", stit03: "SYDNEY", stit04: "JEJU" },
]
const THEME_C = [
    { id: 1, stit01: "NEWYORK", stit02: "PARIS", stit03: "SYDNEY", stit04: "JEJU" },
    { id: 1, stit01: "NEWYORK", stit02: "PARIS", stit03: "SYDNEY", stit04: "JEJU" },
    { id: 1, stit01: "NEWYORK", stit02: "PARIS", stit03: "SYDNEY", stit04: "JEJU" },
]

export { NAVLINK, CATEGORY, S_CONTENT, PRODUCT_01, REVIEW, THEME, THEME_C };



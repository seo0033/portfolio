import { Route, Routes } from 'react-router-dom';
import Wrapper from './pages/Wrapper';
import Header from './pages/Header';
import Main from './pages/Main';
import Marcket_P01 from './pages/Marcket_P01';
import Marcket_P02 from './pages/Marcket_P02';
import Marcket_P03 from './pages/Marcket_P03';
import Sub02 from './pages/Class';
import Sub03 from './pages/Subscribe';
import Sub04 from './pages/Review';
import Footer from './pages/Footer';
import './css/basic.scss'


const App = () => {

  const MAINDATA = [
    { id: 1, con: "Market", pha: "Small But Precious Flower Gift", link: "/sub01/01" },
    { id: 2, con: "Class", pha: "Dense Break Time With Doosi", link: "/sub02" },
    { id: 3, con: "Subscribe", pha: "May We Present You A Worthwhile Rest", link: "/sub03" },
    { id: 4, con: "Review", pha: "Time To Rest With Flowers", link: "/sub04" },
  ]

  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Main Content={MAINDATA} />} />
        <Route path='/sub01/01' element={<Marcket_P01 Content={MAINDATA} />} />
        <Route path='/sub01/02' element={<Marcket_P02 Content={MAINDATA} />} />
        <Route path='/sub01/03' element={<Marcket_P03 Content={MAINDATA} />} />
        <Route path='/sub02' element={<Sub02 Content={MAINDATA} />} />
        <Route path='/sub03' element={<Sub03 Content={MAINDATA} />} />
        <Route path='/sub04' element={<Sub04 Content={MAINDATA} />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;

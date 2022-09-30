import { Route, Routes } from 'react-router-dom';
import Wrapper from './pages/Wrapper';
import Header from './pages/Header';
import Main from './pages/Main';
import Sub01 from './pages/Sub01';
import Sub02 from './pages/Sub02';
import Sub03 from './pages/Sub03';
import Sub04 from './pages/Sud04';
import Footer from './pages/Footer';
import './css/basic.scss'


const App = () => {

  const MAINDATA = [
    { id: 1, con: "Market", pha: "Small But Precious Flower Gift", link: "/sub01" },
    { id: 2, con: "Class", pha: "Small But Precious Flower Gift", link: "/sub02" },
    { id: 3, con: "Subscribe", pha: "Small But Precious Flower Gift", link: "/sub03" },
    { id: 4, con: "Review", pha: "Small But Precious Flower Gift", link: "/sub04" },
  ]

  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Main Content={MAINDATA}/>} />
        <Route path='/sub01' element={<Sub01 Content={MAINDATA} />} />
        <Route path='/sub02' element={<Sub02 Content={MAINDATA} />} />
        <Route path='/sub03' element={<Sub03 Content={MAINDATA} />} />
        <Route path='/sub04' element={<Sub04 Content={MAINDATA} />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;

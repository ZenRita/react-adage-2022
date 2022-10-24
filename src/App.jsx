import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './pages/common/Header';
import Footer from './pages/common/Footer';
import Category from './pages/components/Category';
import Main from './pages/components/Main';
import './asset/scss/app.scss';

function App() {
  return (
    <BrowserRouter>

      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/category/:brand" element={<Category/>}></Route>
        {/* 추후에 useParams() 함수 메소드를 통해서 던질 값에 대해서는 변수 명을 일치시킬 것 */}
        <Route></Route>
      </Routes>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;

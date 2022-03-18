
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Common/Footer';
import Header from './Common/Header';
import Header_top from './Common/Header_top';
import Main from './Main/Main';
import Num1 from './Class/1/Num1';
import MainFinal from './Main/MainFinal';
import Num1_detail from './Class/1/Num1_detail';
import Num2 from './Class/2/Num2';
import Num2_detail from './Class/2/Num2_detail';
import Num3 from './Class/3/Num3';
import Num3_detail from './Class/3/Num3_detail';
import Sorry from './Class/Sorry';
import Num4 from './Class/4/Num4';
import Num4_detail from './Class/4/Num4_detail';
import Num5 from './Class/5/Num5';
import Num5_detail from './Class/5/Num5_detail';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainFinal/>}></Route>
          <Route path="/class1" element={<Num1/>}></Route>
          <Route path="/class1/:floor" element={<Num1_detail/>}></Route>

          <Route path="/class2" element={<Num2/>}></Route>
          <Route path="/class2/:floor" element={<Num2_detail/>}></Route>

          <Route path="/class3" element={<Num3/>}></Route>
          <Route path="/class3/:floor" element={<Num3_detail/>}></Route>

          <Route path="/class4" element={<Num4/>}></Route>
          <Route path="/class4/:floor" element={<Num4_detail/>}></Route>

          <Route path="/class5" element={<Num5/>}></Route>
          <Route path="/class5/:floor" element={<Num5_detail/>}></Route>


          {/* 맵 자료부족으로 채우지 못함 */}
          <Route path="/class6" element={<Sorry/>}></Route>
          <Route path="/class11" element={<Sorry/>}></Route>
          <Route path="/class12" element={<Sorry/>}></Route>
          <Route path="/class15" element={<Sorry/>}></Route>
          <Route path="/class17" element={<Sorry/>}></Route>
          <Route path="/class18" element={<Sorry/>}></Route>
          <Route path="/class19" element={<Sorry/>}></Route>
          <Route path="/class20" element={<Sorry/>}></Route>
          <Route path="/class21" element={<Sorry/>}></Route>
          <Route path="/class23" element={<Sorry/>}></Route>
          <Route path="/class24" element={<Sorry/>}></Route>
          <Route path="/class25" element={<Sorry/>}></Route>
          <Route path="/class26" element={<Sorry/>}></Route>
          <Route path="/class27" element={<Sorry/>}></Route>
          <Route path="/class28" element={<Sorry/>}></Route>
          <Route path="/class29" element={<Sorry/>}></Route>
          <Route path="/class30" element={<Sorry/>}></Route>
          <Route path="/class31" element={<Sorry/>}></Route>
          <Route path="/class32" element={<Sorry/>}></Route>
          <Route path="/class33" element={<Sorry/>}></Route>
          <Route path="/class34" element={<Sorry/>}></Route>
          <Route path="/class35" element={<Sorry/>}></Route>
          <Route path="/class36" element={<Sorry/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

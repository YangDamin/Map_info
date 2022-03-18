
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
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
import Num7 from './Class/7/Num7';
import Num7_detail from './Class/7/Num7_detail';
import Num8 from './Class/8/Num8';
import Num8_detail from './Class/8/Num8_detail';
import Num9 from './Class/9/Num9';
import Num9_detail from './Class/9/Num9_detail';
import Num10 from './Class/10/Num10';
import Num10_detail from './Class/10/Num10_detail';
import Num13 from './Class/13/Num13';
import Num13_detail from './Class/13/Num13_detail';
import Num14 from './Class/14/Num14';
import Num14_detail from './Class/14/Num14_detail';
import Num16 from './Class/16/Num16';
import Num16_detail from './Class/16/Num16_detail';
import Num22 from './Class/22/Num22';
import Num22_detail from './Class/22/Num22_detail';

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

          <Route path="/class7" element={<Num7/>}></Route>
          <Route path="/class7/:floor" element={<Num7_detail/>}></Route>

          <Route path="/class8" element={<Num8/>}></Route>
          <Route path="/class8/:floor" element={<Num8_detail/>}></Route>

          <Route path="/class9" element={<Num9/>}></Route>
          <Route path="/class9/:floor" element={<Num9_detail/>}></Route>

          <Route path="/class10" element={<Num10/>}></Route>
          <Route path="/class10/:floor" element={<Num10_detail/>}></Route>
          {/* <Route path="/class10/:where/:floor" element={<Num10_detail/>}></Route>  => 하면 params 하나 더 추가!*/}

          <Route path="/class13" element={<Num13/>}></Route>
          <Route path="/class13/:floor" element={<Num13_detail/>}></Route>

          <Route path="/class14" element={<Num14/>}></Route>
          <Route path="/class14/:floor" element={<Num14_detail/>}></Route>

          <Route path="/class16" element={<Num16/>}></Route>
          <Route path="/class16/:floor" element={<Num16_detail/>}></Route>

          <Route path="/class22" element={<Num22/>}></Route>
          <Route path="/class22/:floor" element={<Num22_detail/>}></Route>


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

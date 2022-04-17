import React from "react"
import { Link } from "react-router-dom";
import Footer from "../../Common/Footer";
import Header from "../../Common/Header";
import Header_top from "../../Common/Header_top";
import '../F.css'

const Num1 = () => {

    return (
        <div>
            <div class="row">
                <div class="row" style={{"width":"150px", "marginLeft":"110px", "fontFamily": 'GmarketSansLight'}}>
                    <input type="button" value="뒤로가기" class="btn btn-outline-dark bg-light text-black flex-shrink-0 me-2 mt-3" onClick={(e)=>{ e.preventDefault(); window.location="/"; }}></input>
                </div>
                <div class="row">
                    <h1 style={{ "fontFamily": 'GmarketSansLight', "padding": "20px" }}>공학관</h1>
                </div>
            </div>
            <div class="container">
                <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
                    <Link to="/class1/1" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>1F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">1101A~1163</p>
                                            <p>실습실</p> <p>창의코딩실</p> <p>장비실</p> <p>스튜디오</p> <p>스타트업큐브</p> <p>학생회</p> <p>세미나실</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/class1/2" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>2F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">A1201~A1210</p>
                                            <p>1201~1263</p> <p>교수실</p> <p>연구실</p> <p>세미나실</p> <p>행정실</p> <p>실험실</p> <p>실습실</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/class1/3" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>3F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">A1301~A1310</p>
                                            <p>1301~1367</p> <p>교수실</p> <p>연구실</p> <p>실험실</p> <p>연구소</p> <p>공동기기실</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/class1/4" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>4F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">A1400~A1409</p>
                                            <p>1412~1423-1</p> <p>강의실</p> <p>교수실</p> <p>실험실</p> <p>연구실</p> <p>세미나실</p> <p>실습실</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Num1;
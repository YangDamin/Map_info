import React from "react"
import { Link } from "react-router-dom";
import '../F.css'

const Num7 = () => {

    return (
        <div>
            <div class="row">
                <div class="row" style={{"width":"150px", "marginLeft":"110px", "fontFamily": 'GmarketSansLight'}}>
                    <input type="button" value="뒤로가기" class="btn btn-outline-dark bg-light text-black flex-shrink-0 me-2 mt-3" onClick={(e)=>{ e.preventDefault(); window.location="/"; }}></input>
                </div>
                <div class="row">
                    <h1 style={{ "fontFamily": 'GmarketSansLight', "padding": "20px" }}>자연과학관</h1>
                </div>
            </div>
            <div class="container">
                <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-6">
                    <Link to="/class7/1" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>1F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">7101~7114</p>
                                            <p>강의실</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/class7/2" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>2F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">7201~7221</p>
                                            <p>강의실</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/class7/3" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>3F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">7301~7333</p>
                                            <p>교수실</p> <p>강의실</p> <p>세미나실</p> <p>연수실</p> <p>간호대학 학생회실</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/class7/4" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>4F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">7401~7430</p>
                                            <p>교수실</p> <p>간호대 교학팀</p> <p>회의실</p> <p>실습실</p> <p>편의점</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/class7/5" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>5F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">7501~7533</p>
                                            <p>교수실</p> <p>세미나실</p> <p>상담실</p> <p>분석실</p> <p>창업동아리실</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/class7/6" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>6F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">7601~7634</p>
                                            <p>교수실</p> <p>예비실</p> <p>연구부</p> <p>실습실</p> <p>수리계산실</p> <p>시약실</p> <p>연구조교실</p> 
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

export default Num7;
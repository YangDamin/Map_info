import React from "react"
import { Link } from "react-router-dom";
import '../F.css'

const Num13 = () => {

    return (
        <div>
            <div class="row">
                <div class="row" style={{"width":"150px", "marginLeft":"110px", "fontFamily": 'GmarketSansLight'}}>
                    <input type="button" value="뒤로가기" class="btn btn-outline-dark bg-light text-black flex-shrink-0 me-2 mt-3" onClick={(e)=>{ e.preventDefault(); window.location="/"; }}></input>
                </div>
                <div class="row">
                    <h1 style={{ "fontFamily": 'GmarketSansLight', "padding": "20px" }}>사회경영 2관</h1>
                </div>
            </div>
            <div class="container">
                <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-6">
                    <Link to="/class13/1" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>1F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">13101~13104</p>
                                            <p>통합스쿨 컴퓨터 실습실</p> <p>의사소통상담센터</p> <p>기계실</p> <p>전기실</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/class13/2" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>2F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">13201~13215</p>
                                            <p>교수실</p> <p>강의실</p> <p>경영대 학생회실</p> <p>세미나실</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/class13/3" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>3F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">13301~13313</p>
                                            <p>교수실</p> <p>강의실</p> <p>고시반</p> <p>미화부실</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/class13/4" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>4F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">13401~13414</p>
                                            <p>교수실</p> <p>강의실</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/class13/5" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>5F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">13501~13514</p>
                                            <p>교수실</p> <p>강의실</p> <p>법학과 학생회실</p> <p>법학연구소</p> <p>교수휴게실</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/class13/6" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>6F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">13602~13611</p>
                                            <p>교수실</p> <p>e강의실</p> <p>회의실</p> <p>역량교육혁신원</p> <p>eStudio</p>
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

export default Num13;
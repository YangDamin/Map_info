import React from "react"
import { Link } from "react-router-dom";
import Footer from "../../Common/Footer";
import Header from "../../Common/Header";
import Header_top from "../../Common/Header_top";
import '../F.css'

const Num2 = () => {

    return (
        <div>
            <div class="row">
                <div class="row" style={{"width":"150px", "marginLeft":"110px", "fontFamily": 'GmarketSansLight'}}>
                    <input type="button" value="뒤로가기" class="btn btn-outline-dark bg-light text-black flex-shrink-0 me-2 mt-3" onClick={(e)=>{ e.preventDefault(); window.location="/"; }}></input>
                </div>
                <div class="row">
                    <h1 style={{ "fontFamily": 'GmarketSansLight', "padding": "20px" }}>대학본부-인문 1관</h1>
                </div>
            </div>
            <div class="container">
                <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-6">
                    <Link to="/class2/1" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>1F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">2103~2113</p>
                                            <p>교무팀</p> <p>입학팀</p> <p>심층입학상담실</p> <p>시설팀</p> <p>Cafe</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/class2/2" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>2F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">2201~2214</p>
                                            <p>총장실</p> <p>비서실</p> <p>기획처장실</p> <p>예산팀</p> <p>혁신지원사원팀</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/class2/3" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>3F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">2302~2312</p>
                                            <p>행정서비스팀</p> <p>교무처장실</p> <p>교원인사팀</p> <p>우편실</p> <p>재무팀</p> <p>학생처장실</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/class2/4" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>4F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">2401~2450</p>
                                            <p>교수실</p> <p>철학 사학 국어국문 영어영문학과 세미나실</p> <p>인문대 PC실</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/class2/5" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>5F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">2501~2552</p>
                                            <p>교수실</p> <p>일본학연구소</p> <p>지역사회갈등전환센터</p> <p>인문대학 교학팀</p> <p>문서고</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/class2/6" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>6F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">2601~2634</p>
                                            <p>이사장실</p> <p>한림과학원</p> <p>교수실</p> <p>아시아문화연구원</p>
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

export default Num2;
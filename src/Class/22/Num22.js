import React from "react"
import { Link } from "react-router-dom";
import '../F.css'

const Num22 = () => {

    return (
        <div>
            <div class="row">
                <div class="row" style={{"width":"150px", "marginLeft":"110px", "fontFamily": 'GmarketSansLight'}}>
                    <input type="button" value="뒤로가기" class="btn btn-outline-dark bg-light text-black flex-shrink-0 me-2 mt-3" onClick={(e)=>{ e.preventDefault(); window.location="/"; }}></input>
                </div>
                <div class="row">
                    <h1 style={{ "fontFamily": 'GmarketSansLight', "padding": "20px" }}>산학협력관</h1>
                </div>
            </div>
            <div class="container">
                <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-6">
                    <Link to="/class22/B1" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>B1</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">디자인센터</p>
                                            <p>LINC 사업단 융합실습실</p> <p>세미나실</p> <p>MDF실</p> <p>방제센터</p> <p>기계실</p> <p>발전기실</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/class22/1" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>1F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">FAB-LAB 강원 (메이커스페이스)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/class22/2" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>2F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">산학협력단 행정실</p>
                                            <p>글로벌사회공헌연구소</p> <p>세미나실</p> <p>문서고</p> <p>교수실</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/class22/3" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>3F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">산학부 총장실</p>
                                            <p>LINC 단장실</p> <p>행정실</p> <p>세미나실</p> <p>지역건강증진센터</p> <p>강의실</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/class22/4" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>4F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">교수실</p>
                                            <p>빅데이터 스튜디오</p> <p>랩</p> <p>교수실</p> <p>나노신소재실험실</p> <p>CAFE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/class22/5" style={{ "textDecoration": "none", "color": "black" }}>
                        <div class="col">
                            <div class="card radius-15 bg-light">
                                <div class="card-body text-center">
                                    <div class="p-4 radius-15">
                                        <div class="mb-0 mt-3 text-white" id="F"><p>5F</p></div>
                                        <div style={{ "fontFamily": 'GmarketSansLight' }}>
                                            <p class="mb-3 mt-5">디티엑스</p>
                                            <p>한림AI융합연구원</p> <p>여러 회사들</p>
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

export default Num22;
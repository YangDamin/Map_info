import React from "react"
import { useParams } from "react-router-dom";
import Footer from "../../Common/Footer";
import Header from "../../Common/Header";
import Header_top from "../../Common/Header_top";

const Num14_detail = () => {
    const {floor} = useParams();
    console.log(floor + "층");

    return(
        <div>
            <Header_top/>
            <Header/>
            <div class="row">
                <div class="row" style={{"width":"150px", "marginLeft":"110px", "fontFamily": 'GmarketSansLight'}}>
                    <input type="button" value="뒤로가기" class="btn btn-outline-dark bg-light text-black flex-shrink-0 me-2 mt-3" onClick={(e)=>{ e.preventDefault(); window.location="/class13" }}></input>
                </div>
                <div class="row">
                    <h1 style={{ "fontFamily": 'GmarketSansLight', "padding": "20px" }}>국제교육관 {floor}층 안내도</h1>
                </div>
                <div class="col">
                <img src={floor==1 ? "/image/14_국제관/국제관1층.png" : null} width={"1300px"}></img>
                <img src={floor==2 ? "/image/14_국제관/국제관2층.png" : null} width={"1300px"}></img>
                <img src={floor==3 ? "/image/14_국제관/국제관3층.png" : null} width={"1300px"}></img>
                <img src={floor==4 ? "/image/14_국제관/국제관4층.png" : null} width={"1300px"}></img>
                <img src={floor==5 ? "/image/14_국제관/국제관5층.png" : null} width={"1300px"}></img>
                <img src={floor==6 ? "/image/14_국제관/국제관6층.png" : null} width={"1300px"}></img>
                
                
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Num14_detail;
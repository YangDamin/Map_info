import React from "react"
import { useParams } from "react-router-dom";

const Num5_detail = () => {
    const {floor} = useParams();
    console.log(floor + "층");

    return(
        <div>
            <div class="row">
                <div class="row" style={{"width":"150px", "marginLeft":"110px", "fontFamily": 'GmarketSansLight'}}>
                    <input type="button" value="뒤로가기" class="btn btn-outline-dark bg-light text-black flex-shrink-0 me-2 mt-3" onClick={(e)=>{ e.preventDefault(); window.location="/class5" }}></input>
                </div>
                <div class="row">
                    <h1 style={{ "fontFamily": 'GmarketSansLight', "padding": "20px" }}>대학본부별관 {floor}층 안내도</h1>
                </div>
                <div class="col">
                <img src={floor==1 ? "/image/5_대학본부별관/대학본부별관1층.png" : null} width={"1300px"}></img>
                <img src={floor==2 ? "/image/5_대학본부별관/대학본부별관2층.png" : null} width={"1300px"}></img>
                <img src={floor==3 ? "/image/5_대학본부별관/대학본부별관3층.png" : null} width={"1300px"}></img>
                <img src={floor==4 ? "/image/5_대학본부별관/대학본부별관4층.png" : null} width={"1300px"}></img>
                
                
                </div>
            </div>
        </div>
    )
}

export default Num5_detail;
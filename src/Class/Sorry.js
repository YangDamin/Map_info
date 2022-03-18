import React from "react"
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import Header_top from "../Common/Header_top";
import './Sorry.css'

const Sorry = () => {
    return (
        <div>
            <Header_top />
            <Header />
            {/* <img src="/image/sorry.PNG"></img> */}
            <section class="p-0 bg-img cover-background" style={{ "backgroundImage": "url(https://bootdey.com/img/Content/bg1.jpg)" }}>
                <div class="container-fluid d-flex flex-column">
                    <div class="row align-items-center justify-content-center min-vh-100">
                        <div class="col-md-9 col-lg-6 my-5">
                            <div class="text-center error-page">
                                <h1 class="mb-4 text-secondary">Sorry</h1>
                                <p class="w-sm-80 mx-auto mt-5 mb-4 text-white">건물 내부 정보가 부족하거나, 출입이 불가하여 현재 보류 중인 건물입니다.</p>
                                <p class="w-sm-80 mx-auto mb-5 text-white">다음 업데이트에 추가될 예정입니다.</p>
                                <div>
                                    <a href="/" class="btn btn-info btn-lg me-sm-2 mb-2 mb-sm-0">Return Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Sorry;
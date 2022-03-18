import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer class="bg-dark pt-4 mt-lg-5 text-white">
            <div class="container" id="footer_container">
                <div class="row">
                    <p>(주)Damin</p>
                    <div> <a href="#" class="link-light text-decoration-none">제작자 메일</a> <br /> <a href="#" class="link-light text-decoration-none">cxz26@naver.com</a>
                    </div>
                </div>
                <div class="pb-3 pt-3">
                    <hr class="border-light mt-0" />
                    <p class="mb-0">Copyright &copy; 2022 YangDamin</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

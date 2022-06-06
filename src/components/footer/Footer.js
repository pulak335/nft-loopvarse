import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div class="title">
            <h1>STAY TUNED WITH LOOPVERSE</h1>
        </div>
        <div class="subcrib-box d-flex">
            <div class="sp-border">
                <input type="text" placeholder="Enter your email address"/>
            </div>
            <button>GET CONNECTED</button>
        </div>
        <p class="footer-text">Don't hesitate to subscribe to latest news about ICo markets as well as crucial financial knowledge to become successful
        investors globally</p>


        <div class="d-flex justify-content-between container-footer">
            <a href="">
                <img src="./images/social/default/inststagram.png" alt="" srcset=""/>
            </a>
            <a href="">
                <img class="" src="./images/social/default/medium.png" alt="" srcset=""/>
            </a>
            <a href="">
                <img src="./images/social/default/twitter.png" alt="" srcset=""/>
            </a><a href="">
                <img class="" src="./images/social/default/talegram.png" alt="" srcset=""/>
            </a>
        </div>
        <p class="copyright">
            Copyright © 2022. All rights reserved by Your Company.
        </p>
        </div>
    )
}

export default Footer

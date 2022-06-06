import React from 'react';
import './Header.css';
import Logo from '../../imgs/Vector.png'
function Header() {
    return (
        <div className="header">
             <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img className="img-logo" src={Logo} alt="" srcSet=""/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">nft mINT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Staking</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">DAPP</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ABOUT US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">WHITEPAPER</a>
                        </li>
                    </ul>
                    <form className="d-flex nav-form" role="search">
                            <div className="dropdown">
                                <button className="ether-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i className="fa-brands fa-ethereum me-2"></i>Ethereum<i className="fa-solid fa-chevron-down ms-2"></i>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>

                        <button className="btn-custom" >
                            <p><i className="fa-solid fa-wallet me-2"></i>Connet to the wallet</p>
                        </button>

                        <div className="social ms-4">
                            <a href="">
                                <img src="./images/social/default/inststagram.png" alt="" srcset=""/>
                            </a>
                            <a href="">
                                <img className="mx-2" src="./images/social/default/medium.png" alt="" srcset=""/>
                            </a>
                            <a href="">
                                <img src="./images/social/default/twitter.png" alt="" srcset=""/>
                            </a><a href="">
                                <img className="ms-2" src="./images/social/default/talegram.png" alt="" srcset=""/>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
       </div>
    )
}

export default Header

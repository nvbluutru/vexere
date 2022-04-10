import React from 'react'
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import style from "./Header.module.css";
export default function Header() {
    return (
        <header className={style.header}>
            <Container>
                <div className={style.header__content}>
                    <div className={style.header__logo}>
                        <Link to="/">
                            <img src={require("../../../assets/images/logo/logo.svg").default} alt="" />
                        </Link>
                    </div>
                    <nav className={style.header__navigation}>
                        <ul className={style.header__menu}>
                            <li>
                                <a href='https://vexere.com/'>Thuê xe</a>
                            </li>
                            <li>
                                <a href='https://vexere.com/'>Xe Limousine</a>
                            </li>
                            <li>
                                <a href='https://vexere.com/'>Quản lý đơn hàng</a>
                            </li>
                            <li>
                                <a href='https://vexere.com/'>Trở thành đối tác</a>
                            </li>
                        </ul>
                        <div className={style.header__contact}>
                            <button className={style.header__hotline}>
                                <i className="fa-solid fa-phone"></i> Hotline
                                <div className={style["header__contact--view"]}>
                                    <b>Hotline: </b>02599955500
                                </div>
                            </button>
                        </div>
                        <div className={style.header__login}>
                            <Link to="/login">
                                <button className={style.header__primary}>
                                    <i className="fa-solid fa-user"></i> Đăng nhập
                                </button>
                            </Link>
                            <Link to="/register">
                                <button><i className="fa-solid fa-user-plus"></i> Đăng ký</button>
                            </Link>
                        </div>
                    </nav>
                </div>
            </Container>
        </header>
    )
}

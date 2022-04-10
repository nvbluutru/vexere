import React from 'react'
import style from "./Register.module.css"
import { Link } from "react-router-dom"
export default function Register() {
    return (
        <section className={style.register}>
            <div className={style.register__image}>
                <img src={require("../../assets/images/bus_login.avif")} alt="" />
            </div>
            <div className={style.register__right}>
                <div className={style.register__content}>
                    <h3>Đăng ký Vexere.com</h3>
                    <p>Wellcome back! Please enter your details.</p>
                    <form className={style.register__form}>
                        <div className={style.register__item}>
                            <label>Họ và tên</label>
                            <input type="text" placeholder="Nguyễn Văn A" />
                        </div>
                        <div className={style.register__item}>
                            <label>Địa chỉ email</label>
                            <input type="text" placeholder="testemail@gmail.com" />
                        </div>
                        <div className={style.register__item}>
                            <label>Password</label>
                            <input type="password" placeholder="************" />
                        </div>
                        <div className={style.register__item}>
                            <label>Nhập lại Password</label>
                            <input type="password" placeholder="************" />
                        </div>
                        <button className={`${style.register__submit} ${style["register__submit--color"]}`}>
                            <span>
                                <i className="fa-solid fa-user-plus"></i>Đăng ký
                            </span>
                        </button>
                        <button className={style.register__submit}>
                            <span>
                                <img src={require("../../assets/images/logo/logo_goole.png")} alt="" />Đăng nhập bằng tài khoản google
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

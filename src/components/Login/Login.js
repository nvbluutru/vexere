import React, { useState, useEffect, useContext } from 'react'
import style from "./Login.module.css"
import { Link } from "react-router-dom"
import { NotificationManager } from 'react-notifications';
import axios from "axios";
import { useCookies } from 'react-cookie';
export default function Login() {
    const defaultInput = {
        username: "",
        password: ""
    }
    const [valid, setValid] = useState(defaultInput);
    const [loadSubmit, setLoadSubmit] = useState(false);
    const [cookies, setCookie] = useCookies(['token']);
    useEffect(() => {
        console.log(valid)
    }, [valid])
    const checkValid = () => {
        for (let i in valid) {
            if (valid[i].trim() === "") {
                const firstUpperCase = i[0].toUpperCase();
                return `${firstUpperCase + i.slice(1)} không được bỏ trống!`
            }
        }
        return false;
    }
    const checkLogin = async ({ username, password }) => {
        try {
            const res = await axios.post("http://localhost:3000/api/v1/user/login", { username, password })
            if (res.status === 200) {
                return res.data;
            }
        } catch (err) {
            return err.response.data;
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const checkEmpty = checkValid();
        if (checkEmpty) {
            return NotificationManager.error(checkEmpty, 'Thất bại!', 3000);
        }
        setLoadSubmit(true);
        const login = await checkLogin({ username: valid.username, password: valid.password });
        setLoadSubmit(false);
        if (login.status !== 200) {
            return NotificationManager.error(login.message, 'Thất bại!', 3000);
        }
        const date = new Date();
        date.setTime(date.getTime() + (0.01 * 60 * 60 * 1000))
        setCookie('token', login.token, { path: '/', expires: date });
        NotificationManager.success('Đăng nhập thành công!', 'Thành công', 3000);
    }
    return (
        <section className={style.login}>
            <div className={style.login__image}>
                <img src={require("../../assets/images/bus_login.avif")} alt="" />
            </div>
            <div className={style.login__right}>
                <div className={style.login__content}>
                    <h3>Đăng nhập Vexere.com</h3>
                    <p>Wellcome back! Please enter your details.</p>
                    <form className={style.login__form} onSubmit={handleSubmit}>
                        <div className={style.login__item}>
                            <label>Địa chỉ email hoặc số điện thoại</label>
                            <input type="text" onChange={(e) => { setValid({ ...valid, username: e.target.value }) }} placeholder="testemail@gmail.com" />
                        </div>
                        <div className={style.login__item}>
                            <div className={style.login__block}>
                                <label>Password</label>
                                <Link to="/">Quên mật khẩu?</Link>
                            </div>
                            <input type="password" onChange={(e) => { setValid({ ...valid, password: e.target.value }) }} placeholder="************" />
                        </div>
                        <button disabled={loadSubmit} className={`${style.login__submit} ${style["login__submit--color"]}`}>
                            <span>
                                <i className="fa-solid fa-user-check"></i>
                                {loadSubmit ? "Đang đăng nhập..." : "Đăng nhập"}
                                {loadSubmit && <img src={require("../../assets/images/loading.gif")} alt="" />}
                            </span>
                        </button>
                        <button className={style.login__submit}>
                            <span>
                                <img src={require("../../assets/images/logo/logo_goole.png")} alt="" />Đăng nhập bằng tài khoản google
                            </span>
                        </button>
                        <button className={style.login__submit}>
                            <span>
                                <i className="fa-solid fa-phone"></i>Đăng nhập bằng số điện thoại
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

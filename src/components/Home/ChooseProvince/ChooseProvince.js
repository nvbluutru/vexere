import React from 'react'
import style from "./ChooseProvince.module.css";

export default function ChooseProvince({ status }) {
    return (
        status === true && <div className={style.province}>
            <div className={style.province__item}>
                <h6>Tỉnh - Thành Phố</h6>
                <ul>
                    <li>Bình Thuận</li>
                    <li>Ninh Thuận</li>
                    <li>Bình Thuận</li>
                    <li>Bình Thuận</li>
                    <li>Bình Thuận</li>
                </ul>
            </div>
            <div className={style.province__item}>
                <h6>Quận - Huyện</h6>
                <ul>
                    <li>Bình Thuận</li>
                    <li>Ninh Thuận</li>
                    <li>Bình Thuận</li>
                    <li>Bình Thuận</li>
                    <li>Bình Thuận</li>
                </ul>
            </div>
        </div>
    )
}

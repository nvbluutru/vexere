import React from 'react'
import style from "./ChooseProvince.module.css";
import { useDispatch } from 'react-redux';
import { changeFrom, changeTo } from '../../../redux/actions';

export default function ChooseProvince({ status, type = "from" }) {
    const dispatch = useDispatch()
    const handleChangeLocation = (e) => {
        const value = e.target.textContent;
        if (type === "from") {
            dispatch(changeFrom(value))
        } else if (type === "to") {
            dispatch(changeTo(value))
        }
    }
    return (
        status && <div className={style.province}>
            <div className={style.province__item}>
                <h6>Tỉnh - Thành Phố</h6>
                <ul>
                    <li onClick={handleChangeLocation}>Bình Thuận</li>
                    <li onClick={handleChangeLocation}>Ninh Thuận</li>
                    <li onClick={handleChangeLocation}>Phú Yên</li>
                </ul>
            </div>
        </div>
    )
}

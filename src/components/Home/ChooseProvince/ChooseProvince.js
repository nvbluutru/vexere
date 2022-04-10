import React from 'react'
import style from "./ChooseProvince.module.css";
import { useDispatch } from 'react-redux';
import { changeFromStation, changeToStation, changeStatusShowFrom, changeStatusShowTo } from '../../../redux/actions';

export default function ChooseProvince({ status, type = "from" }) {
    const dispatch = useDispatch()

    const handleChangeLocation = (e) => {
        const value = e.target.textContent;
        if (type === "from") {
            dispatch(changeFromStation(value))
            dispatch(changeStatusShowFrom(false))
        } else if (type === "to") {
            dispatch(changeToStation(value))
            dispatch(changeStatusShowTo(false))
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

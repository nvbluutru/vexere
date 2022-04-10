import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ChooseProvince from '../ChooseProvince/ChooseProvince';
import style from "./Banner.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { NotificationManager } from 'react-notifications';
import { convertStation } from '../../../redux/actions';

export default function Banner() {
    const dispatch = useDispatch();
    const valueFrom = useSelector((state) => state.fromStation)
    const valueTo = useSelector((state) => state.toStation)
    const [startDate, setStartDate] = useState(new Date());
    const [statusShowFrom, setStatusShowFrom] = useState(false);
    const [statusShowTo, setStatusShowTo] = useState(false);

    const showChooseFrom = (status) => {
        setStatusShowFrom(status);
    }
    const showChooseTo = (status) => {
        setStatusShowTo(status);
    }
    const handleConvertChoose = () => {
        dispatch(convertStation())
    }
    const checkSetStartDate = (date) => {
        const currentDate = new Date();
        const chooseDate = new Date(date);
        console.log(currentDate, chooseDate)
        if (chooseDate.getTime() < currentDate.getTime() && currentDate.getDay() !== chooseDate.getDay()) {
            return NotificationManager.error('Không được chọn ngày bé hơn', 'Thất bại!', 5000);
        }
        setStartDate(date);
    }
    return (
        <section className={style.banner}>
            <img src={require("../../../assets/images/banner_bus.avif")} alt="" />
            <div className={style.banner__form}>
                <h3 className={style.banner__title}>VeXeRe - Cam kết hoàn 150% nếu nhà xe không giữ vé</h3>
                <form className={style.banner__trip}>
                    <div className={style.banner__item}>
                        <i className={`${style.banner__icon} fa-solid fa-location-dot`}></i>
                        <input type="text" value={valueFrom} onFocus={() => { showChooseFrom(true) }} />
                        <i onClick={handleConvertChoose} className={`${style.banner__convert} fa-solid fa-arrow-right-arrow-left`}></i>
                        <ChooseProvince status={statusShowFrom} type="from" />
                    </div>
                    <div className={style.banner__item}>
                        <i className={`${style.banner__icon} fa-solid fa-location-dot`}></i>
                        <input type="text" value={valueTo} onFocus={() => { showChooseTo(true) }} />
                        <ChooseProvince status={statusShowTo} type="to" />
                    </div>
                    <div className={style.banner__item}>
                        <i className={`${style.banner__icon} fa-solid fa-calendar-check`}></i>
                        <DatePicker selected={startDate} onChange={(date) => checkSetStartDate(date)} />
                    </div>
                    <button className={style.banner__submit}>Tìm chuyến</button>
                </form>
            </div>
        </section>
    )
}

import React, { useState } from 'react'
import ChooseProvince from '../ChooseProvince/ChooseProvince';
import style from "./Banner.module.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { NotificationManager } from 'react-notifications';

export default function Banner() {
    const [startDate, setStartDate] = useState(new Date());
    const [statusShowFrom, setStatusShowFrom] = useState({
        value: "Chọn điểm xuất phát",
        show: false
    });
    const [statusShowTo, setStatusShowTo] = useState({
        value: "Chọn điểm đi",
        show: false
    });
    const showChooseFrom = (status) => {
        setStatusShowFrom({ ...statusShowFrom, show: status });
    }
    const showChooseTo = (status) => {
        setStatusShowTo({ ...statusShowTo, show: status });
    }
    const handleConvertChoose = () => {
        const valueFromOld = statusShowFrom.value;
        const valueToOld = statusShowTo.value;
        setStatusShowFrom({
            ...statusShowFrom,
            value: valueToOld
        })
        setStatusShowTo({
            ...statusShowFrom,
            value: valueFromOld
        })
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
    console.log(startDate)
    return (
        <section className={style.banner}>
            <img src={require("../../../assets/images/banner_bus.avif")} alt="" />
            <div className={style.banner__form}>
                <h3 className={style.banner__title}>VeXeRe - Cam kết hoàn 150% nếu nhà xe không giữ vé</h3>
                <from className={style.banner__trip}>
                    <div className={style.banner__item}>
                        <i className={`${style.banner__icon} fa-solid fa-location-dot`}></i>
                        <input type="text" value={statusShowFrom.value} onFocus={() => { showChooseFrom(true) }} onBlur={() => { showChooseFrom(false) }} />
                        <i onClick={handleConvertChoose} className={`${style.banner__convert} fa-solid fa-arrow-right-arrow-left`}></i>
                        <ChooseProvince status={statusShowFrom.show} />
                    </div>
                    <div className={style.banner__item}>
                        <i className={`${style.banner__icon} fa-solid fa-location-dot`}></i>
                        <input type="text" value={statusShowTo.value} onFocus={() => { showChooseTo(true) }} onBlur={() => { showChooseTo(false) }} />
                        <ChooseProvince status={statusShowTo.show} />
                    </div>
                    <div className={style.banner__item}>
                        <i className={`${style.banner__icon} fa-solid fa-calendar-check`}></i>
                        <DatePicker selected={startDate} onChange={(date) => checkSetStartDate(date)} />
                    </div>
                    <button className={style.banner__submit}>Tìm chuyến</button>
                </from>
            </div>
        </section>
    )
}

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ChooseProvince from '../ChooseProvince/ChooseProvince';
import style from "./Banner.module.css";
import { NotificationManager } from 'react-notifications';
import { convertStation, changeStatusShowFrom, changeStatusShowTo } from '../../../redux/actions';
import { DatePicker } from 'antd';
import moment from 'moment';
export default function Banner() {
    const dispatch = useDispatch();
    const valueFrom = useSelector((state) => state.fromStation.value)
    const valueTo = useSelector((state) => state.toStation.value)
    const statusShowFrom = useSelector((state) => state.fromStation.statusShow)
    const statusShowTo = useSelector((state) => state.toStation.statusShow)
    const [startDate, setStartDate] = useState(new Date());
    const showChooseFrom = (status) => {
        dispatch(changeStatusShowFrom(status))
        dispatch(changeStatusShowTo(false))
    }
    const showChooseTo = (status) => {
        dispatch(changeStatusShowTo(status))
        dispatch(changeStatusShowFrom(false))
    }
    const handleConvertChoose = () => {
        if (valueFrom === "Thành phố nơi đi" || valueTo === "Thành phố nơi đến") {
            return;
        }
        dispatch(convertStation())
    }
    const checkSetStartDate = (date) => {
        const currentDate = new Date();
        const chooseDate = new Date(date);
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
                        <input type="text" value={valueFrom} onClick={() => { showChooseFrom(!statusShowFrom) }} />
                        <i onClick={handleConvertChoose} className={`${style.banner__convert} fa-solid fa-arrow-right-arrow-left`}></i>
                        <ChooseProvince status={statusShowFrom} type="from" />
                    </div>
                    <div className={style.banner__item}>
                        <i className={`${style.banner__icon} fa-solid fa-location-dot`}></i>
                        <input type="text" value={valueTo} onClick={() => { showChooseTo(!statusShowTo) }} />
                        <ChooseProvince status={statusShowTo} type="to" />
                    </div>
                    <div className={style.banner__item}>
                        <i className={`${style.banner__icon} fa-solid fa-calendar-check`}></i>
                        <DatePicker style={{ width: "100%", border: "none", height: "100%", "padding-left": "50px" }} defaultValue={moment(new Date(), "DD/MM/YYYY")} format="DD/MM/YYYY" />
                    </div>
                    <button className={style.banner__submit}>Tìm chuyến</button>
                </form>
            </div>
        </section>
    )
}

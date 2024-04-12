/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import TabBar from "./tabBar";
import ChooseDate from "./datePicker";

// Css
import "../css/createCalendar.css";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import Typography from "@mui/material/Typography";
// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Link from "@mui/material/Link";
// import Box from "@mui/material/Box";
// import Tabs from "@mui/material/Tabs";
// import PropTypes from "prop-types";
// import Tab from "@mui/material/Tab";
// import TodayIcon from "@mui/icons-material/Today";


function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function InfoDoctor() {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Lê Văn Dũ",
      age: "35",
      phone: "0965649422",
      email: "duvan99@gmail.com",
      img: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*",
    },
  ]);

  const [banners] = useState([
    {
      idBanner: 1,
      imgBanner: "https://hoadavietnam.com/wp-content/uploads/2017/11/dong-day-suc-khoe-banner-min.png",
    }
  ]);

  const Card = (props) => {
    return (
      <div className="infoDiv">
        <div className="imgDoctor">
          <img src={props.props.img}/>
        </div>
        <div className="textInfo">
          <p className="nameDoctor"><b>Họ và tên:</b> {props.props.name}</p>
          <p className="ageDoctor"><b>Tuổi:</b> {props.props.age}</p>
          <p className="emailDoctor"><b>Email:</b> {props.props.email}</p>
          <p className="phoneDoctor"><b>Số điện thoại:</b> {props.props.phone}</p>
        </div>
      </div>
    );
  };

  const Banner = (props) => {
    return (
      <div className="imgBanner">
        <img src={props.props.imgBanner}/>
      </div>
    )
  };

  // Chọn lịch



  // const [value, setValue] = useState(0);

  // const [fixed, setFixed] = useState(true);

  // const minute = ["00", "15", "30", "45"];
  // const hourMoning = ["7", "8", "9", "10"];
  // const hourAfternoon = ["13", "14", "15", "16"];

  // const [selectedButton, setSelectedButton] = useState(null);

    
  return (
    <div className="content">
      <TabBar/>
      <div className="mainInfo">
        <div className="mainDiv">
          <div className="titlePage">
            <p className="titleHome">
              <a href="/">Trang Chủ </a><p className="p-symbol">/</p><a href="/create-calendar"> Tạo Lịch Khám</a>
            </p>  
          </div>
          <div className="createCalendar">
            <div className="infoDoctor">
              {doctors.map((item) => (
                <Card props={item}></Card>
              ))}
            </div> 
            <div className="createCalendars">
              <div className="inputCalendar">
                <div className="chooseDate">
                  <p className="titleInput">Ngày</p>
                  <ChooseDate/>
                </div>
                <div className="morningTime">
                  <p className="titleInput">Buổi sáng</p>
                  <ul className="timeDiv">
                    <li className="listTime">07:00 - 07:15</li>
                    <li className="listTime">07:15 - 07:30</li>
                    <li className="listTime">07:30 - 07:45</li>
                    <li className="listTime">07:45 - 08:00</li>
                    <li className="listTime">08:00 - 08:30</li>
                    <li className="listTime">07:00 - 08:45</li>
                    <li className="listTime">07:00 - 09:00</li>
                    <li className="listTime">09:00 - 09:15</li>
                    <li className="listTime">09:15 - 09:30</li>
                    <li className="listTime">09:30 - 09:45</li>
                    <li className="listTime">09:45 - 10:00</li>
                    <li className="listTime">10:00 - 10:15</li>
                    <li className="listTime">10:15 - 10:30</li>
                    <li className="listTime">10:30 - 10:45</li>
                    <li className="listTime">10:45 - 11:00</li>
                  </ul>
                </div>
                
                <div className="eveningTime">
                  <p className="titleInput">Buổi chiều</p>
                  <ul className="timeDiv">
                    <li className="listTime">13:00 - 13:15</li>
                    <li className="listTime">13:15 - 13:30</li>
                    <li className="listTime">13:30 - 13:45</li>
                    <li className="listTime">13:45 - 14:00</li>
                    <li className="listTime">14:00 - 14:15</li>
                    <li className="listTime">14:15 - 14:30</li>
                    <li className="listTime">14:30 - 14:45</li>
                    <li className="listTime">14:45 - 15:00</li>
                    <li className="listTime">15:00 - 15:15</li>
                    <li className="listTime">15:15 - 15:30</li>
                    <li className="listTime">15:30 - 15:45</li>
                    <li className="listTime">15:45 - 16:00</li>
                    <li className="listTime">16:00 - 16:15</li>
                    <li className="listTime">16:15 - 16:30</li>
                    <li className="listTime">16:30 - 16:45</li>
                    <li className="listTime">16:45 - 17:00</li>
                  </ul>
                </div>
                <div className="submitButton">
                  <input type="submit" value="Tạo Lịch" className="createCalendarButton"/>
                </div>

              </div>
              
              <div className="bannerDiv">
                {banners.map((item) => (
                  <Banner props={item}></Banner>
                ))}
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
    
  );
}

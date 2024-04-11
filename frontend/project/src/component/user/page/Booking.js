import React, { useState, useEffect } from "react";
import Header from "./Header";
import "../css/booking.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import TodayIcon from "@mui/icons-material/Today";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Booking() {
  const [value, setValue] = useState(0);

  const [fixed, setFixed] = useState(true);

  const minute = ["00", "15", "30", "45"];
  const hourMoning = ["7", "8", "9", "10"];
  const hourAfternoon = ["13", "14", "15", "16"];

  const [selectedButton, setSelectedButton] = useState(null);

  //Xử lí sự kiện chỉ chọn đc 1 button thời gian
  const handleButtonClick = (buttonValue) => {
    setSelectedButton(buttonValue);
  };

  //Xử lí sự kiện khi đổi tab ngày
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelectedButton(null);
  };

  console.log(selectedButton);
  console.log(typeof selectedButton);

  useEffect(() => {
    const handlSRoll = () => {
      setFixed(window.scrollY <= 300);
    };

    window.addEventListener("scroll", handlSRoll);
  }, []);

  //Trả về component danh sách thời gian
  const ChooseTime = (props) => {
    console.log(props);
    return (
      <div>
        <div className="time">
          {props.listHour.map((hour) =>
            props.listmMnute.map((minute) => (
              <button
                type="radio"
                name="time"
                className={`btn btn-outline-primary btn-time ${
                  selectedButton === hour + ":" + minute ? "active" : ""
                }`}
                onClick={() => handleButtonClick(hour + ":" + minute)}
              >
                {hour} : {minute} -{" "}
                {minute == "45"
                  ? (parseInt(hour) + 1).toString() + " : 00"
                  : hour + " : " + (parseInt(minute) + 15).toString()}
              </button>
            ))
          )}
        </div>
      </div>
    );
  };
  console.log(value);
  return (
    <div>
      <Header></Header>

      <div className="bg-slate-100 pd-20">
        <div role="presentation" className="container mb-3">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Trang chủ
            </Link>
            <Typography color="text.primary">Bác sĩ</Typography>
          </Breadcrumbs>
        </div>
        <section className="container relative pd-10 bg-white border-radius-main pd-b-20">
          <div className="d-flex border-head ">
            <div className="image-doctor p-10">
              <img
                src="https://cdn.youmed.vn/photos/9a9e2c4d-035b-4798-b051-a2e1fbd98a4c.jpg?width=180"
                class="rounded-circle"
                alt="Cinque Terre"
              ></img>
            </div>
            <div className="infor-doctor aligan-just">
              <h1>Bác sĩ chuyên khoa Trần Văn A </h1>
              <div className="d-flex" style={{ alignItems: "center;" }}>
                <span className="text-sm text-gray-600 ">Chuyên khoa: </span>
                <span className="pd-10-l-r text-black font-medium">
                  Nhi Khoa
                </span>
              </div>

              <div
                className="d-flex"
                style={{ alignItems: "center;", paddingTop: "10px" }}
              >
                <span className="text-sm text-gray-600 ">Nơi công tác: </span>
                <span className="pd-10-l-r text-black font-medium">
                  BV Phụ Sản – Nhi Đà Nẵng
                </span>
              </div>
            </div>
          </div>
          <br />
          <div className="time-register">
            <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
              >
                <Tab
                  label="T2 , Ngày 10-4"
                  className="mr-l-r-12"
                  {...a11yProps(0)}
                />
                <Tab
                  label="T3 ,Ngày 10-4"
                  className="mr-l-r-12"
                  {...a11yProps(1)}
                />
                <Tab
                  label="T4 ,Ngày 10-4"
                  className="mr-l-r-12"
                  {...a11yProps(2)}
                />
                <Tab
                  label="T5 ,Ngày 10-4"
                  className="mr-l-r-12"
                  {...a11yProps(3)}
                />
                <Tab
                  label="T6 ,Ngày 10-4"
                  className="mr-l-r-12"
                  {...a11yProps(4)}
                />
                <Tab
                  label="T7 ,Ngày 10-4"
                  className="mr-l-r-12"
                  {...a11yProps(5)}
                />
                <Tab
                  label="CN ,Ngày 10-4"
                  className="mr-l-r-12"
                  {...a11yProps(6)}
                />
              </Tabs>
              {/** Chỗ này là Select button chọn thời gian
               * Mỗi Tab Panel là đại diện cho một ngày
               */}
              <TabPanel value={value} index={0}>
                <div className="choose-time">
                  <div className="session">
                    <TodayIcon></TodayIcon>
                    <span className="title-time">Buổi sáng</span>
                  </div>
                  <ChooseTime
                    listHour={hourMoning}
                    listmMnute={minute}
                  ></ChooseTime>
                  <div className="session border-top">
                    <TodayIcon></TodayIcon>
                    <span className="title-time">Buổi Chiều</span>
                  </div>
                  <ChooseTime
                    listHour={hourAfternoon}
                    listmMnute={minute}
                  ></ChooseTime>
                </div>
              </TabPanel>

              {/**Panel Ngày 2 */}
              <TabPanel value={value} index={1}>
                <div className="choose-time">
                  <div className="session">
                    <TodayIcon></TodayIcon>
                    <span className="title-time">Buổi sáng</span>
                  </div>
                  <ChooseTime
                    listHour={hourMoning}
                    listmMnute={minute}
                  ></ChooseTime>
                  <div className="session border-top">
                    <TodayIcon></TodayIcon>
                    <span className="title-time">Buổi Chiều</span>
                  </div>
                  <ChooseTime
                    listHour={hourAfternoon}
                    listmMnute={minute}
                  ></ChooseTime>
                </div>
              </TabPanel>

              {/* Panel ngày 3*/}
              <TabPanel value={value} index={2}>
                <div className="choose-time">
                  <div className="session">
                    <TodayIcon></TodayIcon>
                    <span className="title-time">Buổi sáng</span>
                  </div>
                  <ChooseTime
                    listHour={hourMoning}
                    listmMnute={minute}
                  ></ChooseTime>
                  <div className="session border-top">
                    <TodayIcon></TodayIcon>
                    <span className="title-time">Buổi Chiều</span>
                  </div>
                  <ChooseTime
                    listHour={hourAfternoon}
                    listmMnute={minute}
                  ></ChooseTime>
                </div>
              </TabPanel>

              {/**Panel Ngày 4 */}
              <TabPanel value={value} index={3}>
                <div className="choose-time">
                  <div className="session">
                    <TodayIcon></TodayIcon>
                    <span className="title-time">Buổi sáng</span>
                  </div>
                  <ChooseTime
                    listHour={hourMoning}
                    listmMnute={minute}
                  ></ChooseTime>
                  <div className="session border-top">
                    <TodayIcon></TodayIcon>
                    <span className="title-time">Buổi Chiều</span>
                  </div>
                  <ChooseTime
                    listHour={hourAfternoon}
                    listmMnute={minute}
                  ></ChooseTime>
                </div>
              </TabPanel>

              {/**Panel ngày 5 */}
              <TabPanel value={value} index={4}>
                <div className="choose-time">
                  <div className="session">
                    <TodayIcon></TodayIcon>
                    <span className="title-time">Buổi sáng</span>
                  </div>
                  <ChooseTime
                    listHour={hourMoning}
                    listmMnute={minute}
                  ></ChooseTime>
                  <div className="session border-top">
                    <TodayIcon></TodayIcon>
                    <span className="title-time">Buổi Chiều</span>
                  </div>
                  <ChooseTime
                    listHour={hourAfternoon}
                    listmMnute={minute}
                  ></ChooseTime>
                </div>
              </TabPanel>
              {/**Panel ngày 6 */}
              <TabPanel value={value} index={5}>
                <div className="choose-time">
                  <div className="session">
                    <TodayIcon></TodayIcon>
                    <span className="title-time">Buổi sáng</span>
                  </div>
                  <ChooseTime
                    listHour={hourMoning}
                    listmMnute={minute}
                  ></ChooseTime>
                  <div className="session border-top">
                    <TodayIcon></TodayIcon>
                    <span className="title-time">Buổi Chiều</span>
                  </div>
                  <ChooseTime
                    listHour={hourAfternoon}
                    listmMnute={minute}
                  ></ChooseTime>
                </div>
              </TabPanel>
              {/**Panel ngày 7 */}
              <TabPanel value={value} index={6}>
                <div className="choose-time">
                  <div className="session">
                    <TodayIcon></TodayIcon>
                    <span className="title-time">Buổi sáng</span>
                  </div>
                  <ChooseTime
                    listHour={hourAfternoon}
                    listmMnute={minute}
                  ></ChooseTime>
                  <div className="session border-top">
                    <TodayIcon></TodayIcon>
                    <span className="title-time">Buổi Chiều</span>
                  </div>
                  <ChooseTime
                    listHour={hourAfternoon}
                    listmMnute={minute}
                  ></ChooseTime>
                </div>
              </TabPanel>
            </Box>
          </div>
          {/** Button đặt khám bệnh. Nếu chưa chọn thời gian khám thì button sẽ bị disable */}
          <div
            className={`wrap_btn-booking-fixed container bg-white ${
              fixed ? "btn-fixed" : "btn-relative"
            }`}
          >
            <button
              type="button"
              className={`btn btn-primary ${
                selectedButton == null ? "disabled" : ""
              }`}
            >
              Đặt khám ngay
            </button>
          </div>

          <div
            className="aligan-just mt-5 history pd-20"
            style={{ padding: "30px" }}
          >
            <h1 className="text-lg font-semibold"> Giới thiệu</h1>
            <p>
              BS. CK1. Trần Văn A có chuyên môn giỏi, tận tâm và giàu kinh
              nghiệm, với tốt nghiệp loại giỏi lớp chuyên khoa I chuyên ngành
              Nhi khoa Đại học Y Dược Huế và có kinh nghiệm 10 năm làm việc tại
              khoa nhi tổng hợp Bệnh viện Phụ sản - Nhi Đà Nẵng. Bác sĩ A còn
              được đào tạo và làm việc tại Bệnh viện Nhi Đồng 2 TP Hồ Chí Minh.
              Hiện là Phó trưởng khoa Nhi Tổng Hợp bệnh viện phụ sản nhi Đà
              Nẵng, ủy viên BCH chi hội ung thư nhi Việt Nam
            </p>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
}

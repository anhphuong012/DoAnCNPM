import React, { useState } from "react";
import TabBar from "./tabBar";

// Css
import "../css/watchCalendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function WatchCalendar() {
  const [watchList, setWatchList] = useState([
    {
      id: 1,
      date: "13/04/2024",
      time: "13:00 - 13:15",
      phone: "0356560562"
    },
    {
      id: 1,
      date: "13/04/2024",
      time: "13:00 - 13:15",
      phone: "0356560562"
    },
    {
      id: 1,
      date: "13/04/2024",
      time: "13:00 - 13:15",
      phone: "0356560562"
    },
    {
      id: 1,
      date: "13/04/2024",
      time: "13:00 - 13:15",
      phone: "0356560562"
    },
    {
      id: 1,
      date: "13/04/2024",
      time: "13:00 - 13:15",
      phone: "0356560562"
    },
    {
      id: 1,
      date: "13/04/2024",
      time: "13:00 - 13:15",
      phone: "0356560562"
    },
    {
      id: 1,
      date: "13/04/2024",
      time: "13:00 - 13:15",
      phone: "0356560562"
    },
  ]);

  return (
    <div className="bodyWatchCalendar">
      <TabBar/>
      <div className="bodyMain">
        <div className="bodyMainDiv">
          <div className="titleDiv">
            <p className="titlePageWatch">Lịch bệnh nhân đã đặt khám:</p>
          </div>
          <div className="cardDiv">
            {watchList.map(appointment => (
              <div className="viewCards" key={appointment.id}>
                <div className="nameDiv nameDivBig">
                  <p className="titleNameExaminer">Tên bệnh nhân:</p>
                  <p className="nameExaminer">{appointment.name}</p>
                </div>
                <div className="nameDiv dateDivMedium">
                  <p className="titleDateAppointment">Ngày đặt lịch:</p>
                  <p className="dateAppointment">{appointment.date}</p>
                </div>
                <div className="nameDiv timeDivMedium">
                  <p className="titletimeAppointment">Thời gian khám:</p>
                  <p className="timeAppointment">{appointment.time}</p>
                </div>
                <div className="nameDiv phoneDivMedium">
                  <p className="titlePhoneAppointment">Số điện thoại người khám:</p>
                  <p className="phoneAppointment">{appointment.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
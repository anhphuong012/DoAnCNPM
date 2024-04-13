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

    }
  ]);

  return (
    <div className="bodyWatchCalendar">
      <TabBar/>
      <div className="bodyMain">
        <div className="titleDiv">
          <p className="titlePageWatch">Lịch bệnh nhân đã đặt khám</p>
        </div>
        <div className="cardDiv">
          <div className="viewCards">
            <div className="nameDiv">
              <p className="titleNameExaminer">Tên bệnh nhân:</p>
              <p className="nameExaminer"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}





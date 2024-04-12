import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/date.css";

export default function DatePickerComponent() {
    const [dateObj, setDateObj] = useState(null);

    const handleDate = (dt) => {
        setDateObj(dt);
    };

    return (
        <div>
            <DatePicker
                selected={dateObj}
                dateFormat="dd/MM/yyyy"
                onChange={date => handleDate(date)}
                className="datePicker"
                placeholderText="Ngày/Tháng/Năm"
                showIcon
                toggleCalendarOnIconClick
                
            />
        </div>
    );
}


import React, { useState, Component } from "react";
import Header from "./Header";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import "../css/search.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ListSearch() {
  const Doctor = (props) => {
    return (
      <div>
        <ListItem
          alignItems="flex-start"
          sx={{ paddingBottom: 2.3, paddingTop: 2.3 }}
        >
          <ListItemAvatar sx={{ width: 100, height: 83, marginTop: 0 }}>
            <Avatar
              alt="Remy Sharp"
              src="https://cdn.youmed.vn/photos/9a9e2c4d-035b-4798-b051-a2e1fbd98a4c.jpg?width=160"
              sx={{ width: 80, height: 80 }}
            />
          </ListItemAvatar>
          <div className="infor-doctor">
            <a href="" className="name-doctor">
              <span className=" "> BS. Nguyễn Văn A</span>
            </a>

            <div className="infor-center">
              <span className="text-sm py-1 px-3 bg-gray-100  border-radius">
                Khoa Nhi
              </span>
            </div>

            <span className="text-sm ">
              711 Trần Hưng Đạo, Phường Điện Ngọc, Thị xã Điện Bàn, Quảng Nam
            </span>
          </div>

          <div className="warp-btn-booking ">
            <button className="btn btn-primary">Đặt khám</button>
          </div>
        </ListItem>
        <Divider variant="fullWidth" component="li" />
      </div>
    );
  };
  return (
    <div>
      <Header></Header>
      <section className="bg-white mt-4 boder-b">
        <div className="header-container mr-l-r-auto">
          <div className="wrap-search mr-l-r-auto just-center">
            <div class="input-group mb-3 input-group-lg w-50 ">
              <input
                placeholder="Triệu chứng, Bác sĩ,Khoa..."
                type="text"
                class="form-control search bg-gray-100"
              />
              <button className="btn-search ">
                <i class="bi bi-search color-primary"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 pd-30 ">
        <div className="container w-90">
          <div className="bg-white result-search">
            <span>Kết quả tìm kiếm</span>
          </div>
          <Divider></Divider>
          <List
            sx={{
              width: "100%",
              maxWidth: "100%",
              bgcolor: "background.paper",
              paddingBottom: "10px",
            }}
            style={{ borderRadius: "0px 0px 10px 10px" }}
          >
            {/*
                Map item khi call API ở đây 
            */}
            <Doctor></Doctor>
          </List>
        </div>
      </section>
    </div>
  );
}

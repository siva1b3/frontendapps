import React from "react";
import "./Sidebar.css";

import PushButton from "./PushButton";

function Sidebar({
  pageState,
  setPageState,
  imageZoom,
  setImageZoom,
  image,
  setImage,
}) {
  console.log(pageState);
  return (
    <>
      <h1 className="sidebar-heading">List of Actions</h1>
      <div className="button-group">
        <PushButton
          label="A T Detection"
          color="hsl(210, 100%, 50%)"
          onClick={() => {
            setPageState("atd_page");
          }}
          className="btn atd-btn"
        />
        <PushButton
          label="A T Recoginition"
          color="hsl(140, 70%, 40%)"
          onClick={() => {
            setPageState("atr_page");
          }}
          className="btn atr-btn"
        />
        <PushButton
          label="change Detection"
          onClick={() => {
            setPageState("cd_page");
          }}
          color="#f0ad4e"
          className="btn change-btn"
        />

        <hr />

        {image && pageState === "atd_page" && (
          <PushButton
            label="Zoom In"
            onClick={() => {
              setImageZoom((prevImageZoom) => {
                if (prevImageZoom >= 3) {
                  return 3;
                }
                return prevImageZoom + 0.05;
              });
            }}
            color="#5bc0de"
            className="btn zoom-btn"
          />
        )}
        {image && pageState === "atd_page" && (
          <PushButton
            label="Zoom Out"
            onClick={() => {
              setImageZoom((prevImageZoom) => {
                if (prevImageZoom <= 1) {
                  return 1;
                }
                return prevImageZoom - 0.05;
              });
            }}
            color="#d9534f"
            className="btn zoom-btn"
          />
        )}
        {image && pageState === "atd_page" && (
          <PushButton
            label="Image fit"
            onClick={() => {
              setImageZoom(1);
            }}
            color={imageZoom !== "fit" ? "#AA00FF" : "#FF5722"}
            className="btn zoom-btn"
          />
        )}
      </div>
    </>
  );
}

export default Sidebar;

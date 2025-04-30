import React from "react";
import "./MainBody.css";

import Sidebar from "./SideBar";
import Content from "./Content";

function MainBody({
  pageState,
  setPageState,
  imageZoom,
  setImageZoom,
  image,
  setImage,
}) {
  return (
    <div className="mainbody">
      <div className="sidebar">
        <Sidebar
          pageState={pageState}
          setPageState={setPageState}
          imageZoom={imageZoom}
          setImageZoom={setImageZoom}
          image={image}
          setImage={setImage}
        />
      </div>
      <div className="content">
        <Content
          pageState={pageState}
          setPageState={setPageState}
          imageZoom={imageZoom}
          setImageZoom={setImageZoom}
          image={image}
          setImage={setImage}
        />
      </div>
    </div>
  );
}

export default MainBody;

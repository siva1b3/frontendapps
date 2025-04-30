import React from "react";
import "./Sidebar.css";
import UnderConstruction from "./UnderConstruction";
import Atdpage from "./AtdPage";

function Content({
  pageState,
  setPageState,
  imageZoom,
  setImageZoom,
  image,
  setImage,
}) {
  return (
    <>
      {pageState === "atd_page" && (
        <Atdpage
          pageState={pageState}
          setPageState={setPageState}
          imageZoom={imageZoom}
          setImageZoom={setImageZoom}
          image={image}
          setImage={setImage}
        />
      )}
      {pageState === "atr_page" && (
        <UnderConstruction page_heading={"atr page"} />
      )}
      {pageState === "cd_page" && (
        <UnderConstruction page_heading={"change detection page"} />
      )}
    </>
  );
}

export default Content;

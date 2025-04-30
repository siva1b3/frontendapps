import React from "react";
import UnderConstructionLogo from "./UnderConstruction.png";

function UnderConstruction({ page_heading }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#f9f9f9",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <img
        src={UnderConstructionLogo}
        alt="Under Construction"
        style={{ width: "150px", marginBottom: "20px" }}
      />
      <h1>{page_heading}</h1>
      <h2 style={{ color: "#333" }}>This page is under construction</h2>
      <p style={{ color: "#666" }}>
        We're working hard to bring it to life. Stay tuned!
      </p>
    </div>
  );
}

export default UnderConstruction;

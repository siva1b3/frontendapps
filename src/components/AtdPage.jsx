import React, { useState } from "react";
import "./Atdpage.css";

function Atdpage({
  pageState,
  setPageState,
  imageZoom,
  setImageZoom,
  image,
  setImage,
}) {
  const [sliderValue, setSliderValue] = useState(50);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  console.log(imageZoom);

  const handleImageUpload = (e) => {
    setImageZoom(1);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          console.log("Width:", img.width);
          console.log("Height:", img.height);
          setImageDimensions({ width: img.width, height: img.height });
          setImage(event.target.result);
          // You can also save width and height to state if you want
          // setImageDimensions({ width: img.width, height: img.height });
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="atd-container">
      <div className="atd-preview-area">
        <div
          className="container2"
          style={{
            width: `${100 * imageZoom}%`,
            height: `${100 * imageZoom}%`,
          }}
        >
          <div
            className="image-container"
            style={
              imageDimensions.width >= imageDimensions.height
                ? { width: "100%" }
                : { height: "100%" }
            }
          >
            <img src={image} alt="image" />
          </div>
        </div>
      </div>

      <div className="atd-controls">
        {/* Custom file input */}
        <label className="file-upload-label">
          Upload Image
          <input type="file" onChange={handleImageUpload} />
        </label>

        {/* Select dropdown */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "10px",
            columnGap: "20px",
            rowGap: "10px",
          }}
        >
          <label>
            <input type="radio" name="option" value="1" />
            Option 1
          </label>
          <label>
            <input type="radio" name="option" value="2" />
            Option 2
          </label>
          <label>
            <input type="radio" name="option" value="3" />
            Option 3
          </label>
          <label>
            <input type="radio" name="option" value="4" />
            Option 4
          </label>
        </div>

        {/* Slider with value */}
        <div className="slider-container">
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(e.target.value)}
          />
          <span>{sliderValue}</span>
        </div>

        {/* Submit button */}
        <button disabled={!image}>Submit</button>
      </div>
    </div>
  );
}

export default Atdpage;

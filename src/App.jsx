import { useState } from "react";
import MainBody from "./components/Mainbody";

function App() {
  const [pageState, setPageState] = useState("atd_page");
  const [imageZoom, setImageZoom] = useState(1);
  const [image, setImage] = useState(null);

  return (
    <MainBody
      pageState={pageState}
      setPageState={setPageState}
      imageZoom={imageZoom}
      setImageZoom={setImageZoom}
      image={image}
      setImage={setImage}
    />
  );
}

export default App;

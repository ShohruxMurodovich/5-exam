import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom"
import Channel from "./Pages/Channel/Channel";
import Video from "./Pages/Video/Video";
import "./Assets/main.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/channel/:id" element={<Channel />} />
      <Route path="/video/:id" element={<Video />} />
    </Routes>
  );
}

export default App;

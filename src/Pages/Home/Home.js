import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import VideoItem from "../../Components/VideoItem/VideoItem";
import AvatarBig from "../../Assets/Images/avatarbig1.png"
import avatar7 from "../../Assets/Images/avatar7.png"
import "./Home.css"
import { Link } from "react-router-dom";

const Home = () => {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setPhotos([...data]))
  }, [])

  const [food , setFood] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=7`)
      .then(response => response.json())
      .then(data => setFood([...data]))
  }, [])


  return (
    <>
      <Header />
      <div className="hero">
        <Sidebar />
        <div className="hero__inner">
        <Link to={`/channel/1`} className="hero__channel">
              <img src={AvatarBig} alt="avatar" />
              <h2 className="hero__channel-title">Dollie Blair</h2>
            </Link>
          <ul className="hero__list">
            {
              photos.slice(0, 15).map((item) => (
                <VideoItem obj={item}/>
              ))
            }
          </ul>

          <h2 className="hero__channel-title active-title">Recommended</h2>
          <ul className="hero__list">
            {
              photos.slice(0, 16).map((item) => (
                <li className="hero__item hero__item--active" key={item.id}>
                <Link className="hero__item-link--active" to={`/video/${item.id}`}>
                <img className="hero__item-img--active" src={item.thumbnailUrl} alt={item.title} />
                <p className="hero__item-text--active">{item.title.slice(1, 32 )}</p>
                <div className="item-case--active">
                  <span className="item-inner-text--active">80k views  ·  3 days ago</span>
                  <span className="item-inner-text--active">Name</span>
                </div>
                </Link>
              </li>
              ))
            }
          </ul>

            <div className="hero-case">
            <Link to={`/channel/7`} className="hero__channel">
              <img src={avatar7} alt="avatar" />
              <h2 className="hero__channel-title">Dollie Blair</h2>
            </Link>
            <span className="hero-rec">Recommended channel for you</span>
            </div>
            <ul className="hero__list">
            {
              food.slice(0, 10).map((item) => (
                <VideoItem obj={item}/>
              ))
            }
          </ul>
        </div>
      </div>

    </>
  )
}

export default Home;
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Dislike, Like, More, Share, Switch } from "../../Assets/Images/Icons/Icon";
import Header from "../../Components/Header/Header";
import "./Video.css";
import SubscribeBtn from "../../Components/SubscribeBtn/SubscribeBtn";
import { Context } from "../../Context/ChannelContext";
import VideoItem from "../../Components/VideoItem/VideoItem";


const Video = () => {



  const { id } = useParams()

  const { channel } = useContext(Context)

  const [video, setVideo] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?id=${id}`)
    .then(response => response.json())
    .then(data => setVideo([...data]))
  }, [])



  const [recPhoto, setRecPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then(response => response.json())
      .then(data => setRecPhotos([...data]))
  }, [id])

  const [filteredVideo, setFilteredVideo] = useState(
    channel.filter(item => item.id === video.albumId)
  )

  return (
    <>
      <Header />
      <div className="video">

        <div className="video-left">
          {
            video.map((item) => (
              <div key={item.id}>
                <img className="video-img" src={item.url} alt={item.title} />
                <h2 className="video-title">{item.title}</h2>
                <div className="video-case">
                  <p className="video-view">123k views</p>
                  <div className="video-inner-case">
                    <button type="button" className="like-btn"><Like className="like" />123K</button>
                    <button type="button" className="like-btn"><Dislike className="like" />435K</button>
                    <button type="button" className="like-btn"><Share className="like" />Share</button>
                    <More />
                  </div>
                </div>
                <hr className="line" />
                <div className="video-channel">
                  <div className="video-channel-inner">
                    {
                      channel.slice(6,7).map(chan =>(
                        <>
                        <img className="video-chan-img" src={chan.src} alt="Placeholder"/>
                        <Link to={`/channel/7`} className="channel-description">
                          <h3 className="channel-text">{chan.name}</h3>
                          <span className="channel-pub">Published on 14 Jun 2019</span>
                          <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
                        </Link>
                        </>
                      ))
                    }

                  </div>
                  <SubscribeBtn />
                </div>
              </div>
            ))

          }
        </div>

        <div className="video-right">
          <div className="video-right__case">
            <h2 className="video-right__title">Next</h2>
            <span className="switch">Autoplay <Switch /></span>
          </div>
          <ul className="video-rec">
            {
              recPhoto.slice(0, 15).map((item) => (
                <VideoItem obj={item} key={item.id} />
              ))
            }
          </ul>

        </div>

      </div>
    </>
  )

}

export default Video;
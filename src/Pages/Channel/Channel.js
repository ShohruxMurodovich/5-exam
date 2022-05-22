import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import channelImg from '../../Assets/Images/singlechannel.png';
import './Channel.css';
import { Context } from '../../Context/ChannelContext';
import SubscribeBtn from '../../Components/SubscribeBtn/SubscribeBtn';
import { Notic } from '../../Assets/Images/Icons/Icon';
import  Search  from '../../Assets/Images/search.png';
import VideoItem from '../../Components/VideoItem/VideoItem';

const Channel = () => {
  const { id } = useParams();
  const { channel } = useContext(Context);
  const [singleChannel, setSingleChannel] = useState([]);

  const [filteredChanel, setFilteredChanel] = useState(
    channel.filter((item) => item.id === id - 0),
  );

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then((response) => response.json())
      .then((data) => setSingleChannel([...data]));
  }, [id]);

  return (
    <>
      <Header />
      <div className='channel'>
        <Sidebar />
        <div className='channel-inner'>
          <img className='channel-img' src={channelImg} alt='Channel image' />
          <div className='channel-header'>
            <div className='channel-name'>
              {filteredChanel.map((val) => (
                <>
                  <img className='channel-ava' src={val.src} alt={val.name} />
                  <div className="case">
                    <h3 className='channel-title'>{val.name}</h3>
                    <span className='channel-subs'>245K subscribed</span>
                  </div>
                </>
              ))}
            </div>
            <div className="channel-right">
              <Notic />
              <SubscribeBtn />
            </div>
          </div>

          <div className="channel-main">

            <div className="channel-inner-left">
              <ul className='channel-list'>
                <li className='channel-item'>Home</li>
                <li className='channel-item'>Videos</li>
                <li className='channel-item'>Playlists</li>
                <li className='channel-item'>Channels</li>
                <li className='channel-item'>Discussion</li>
                <li className='channel-item'>About</li>
                <li className='channel-item active'><img src={Search} alt="search" /></li>
              </ul>

              {
                singleChannel.splice(0, 1).map(item => (
                  <div className='single' key={item.id}>
                    <img className='single-img' src={item.url} />
                    <div className="single-case">
                      <h4 className='single-title'>{item.title}</h4>
                      <p className="single-text">Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. </p>
                      <span className='single-view'>11k views  ·  6 months ago</span>
                    </div>
                  </div>
                ))
              }

            </div>

            <div className="channel-inner-right">
              <h3 className='rec-title'>Recommended channel</h3>
              {
                channel.slice(7, 10).map(item => (
                  <div className="rec-case">
                    <img className='rec-img' src={item.src} />
                    <h3 className='rec-name'>{item.name}</h3>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="channel-video">
            {
              filteredChanel.map(item => (
                <h3 key={item.id} className='channel-video__text'>{item.name} videos</h3>
              ))
            }


            <ul className="channel-video-list">
              {
                singleChannel.splice(0, 15).map((item) => (
                  <VideoItem obj={item} key={item.id} />
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Channel;
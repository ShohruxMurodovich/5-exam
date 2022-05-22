import "./Sidebar.css"
import React, { useContext } from 'react'
import OptionItem from "./OptionItem/OptionItem"
import { HomeIcon, Trending, Subscriptions, Library, History, WatchLater, Favourites, LikedVideos, Music, Games, ShowMore, Settings } from "../../Assets/Images/Icons/Icon"
import { NavLink } from "react-router-dom"
import { Context } from "../../Context/ChannelContext"


export default function Sidebar() {

  const { channel } = useContext(Context);

  return (
    <div className="sidebar">
      <ul className="options">
        <OptionItem text="Home" to="/" Icon={HomeIcon} />
        <OptionItem text="Trending" to="/trending" Icon={Trending} />
        <OptionItem text="Subscriptions" to="/subscription" Icon={Subscriptions} />
        <OptionItem text="Library" to="/library" Icon={Library} />
        <OptionItem text="History" to="/history" Icon={History} />
        <OptionItem text="Watch later" to="/watchlater" Icon={WatchLater} />
        <OptionItem text="Favourites" to="/favourites" Icon={Favourites} />
        <OptionItem text="Liked Videos" to="/liked" Icon={LikedVideos} />
        <OptionItem text="Music" to="/music" Icon={Music} />
        <OptionItem text="Games" to="/games" Icon={Games} />
        <OptionItem text="Show More" to="/more" Icon={ShowMore} />
      </ul>

      <h2 className="title">Subscriptions</h2>

      <ul className="subs__list">
        {
          channel.slice(0 , 6).map((item) =>(
            <li className="subs__item"><NavLink className="subs__link" to={`/channel/${item.id}`}><img className="subs__img" src={item.src} alt="avatar" /> <h3 className="subs__text">{item.name}</h3></NavLink></li>
          ))
        }
      </ul>

      <button onClick={document.body.classList.toggle('dark')} type="button" className="settings"><Settings /><p className="settings__text">Setting</p></button>
    </div>

  )
}

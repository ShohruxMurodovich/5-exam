import "./VideoItem.css"
import React from 'react'
import { Link } from 'react-router-dom';

export default function VideoItem({obj}) {

  const {id , title , thumbnailUrl} = obj;

  return (
    <li className="hero__item" key={id}>
    <Link className="hero__item-link" to={`/video/${id}`}>
    <img className="hero__item-img" src={thumbnailUrl} alt={title} />
    <p className="hero__item-text">{title.slice(1, 30 )}</p>
    <div className="item-case">
      <span className="item-inner-text">80k views  ·  3 days ago</span>
      <span className="item-inner-text">Name</span>
    </div>
    </Link>
  </li>
  )
}

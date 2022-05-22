import React, { useState } from "react";

import avatar1 from "../Assets/Images/avatar1.png"
import avatar2 from "../Assets/Images/avatar2.png"
import avatar3 from "../Assets/Images/avatar3.png"
import avatar4 from "../Assets/Images/avatar4.png"
import avatar5 from "../Assets/Images/avatar5.png"
import avatar6 from "../Assets/Images/avatar6.png"
import avatar7 from "../Assets/Images/avatar7.png"
import avatar8 from "../Assets/Images/avatar8.png"
import avatar9 from "../Assets/Images/avatar9.png"
import avatar10 from "../Assets/Images/avatar10.png"

const Context = React.createContext(null)


const ChannelProvider = ({children}) =>{

  const [channel , setChannel] = useState([
    {
      id: 1,
      name: "Gussie Singleton",
      src: avatar1,
    },
    {
      id: 2,
      name: "Nora Francis",
      src: avatar2,
    },
    {
      id: 3,
      name: "Belle Briggs",
      src: avatar3,
    },
    {
      id: 4,
      name: "Eunice Cortez",
      src: avatar4,
    },
    {
      id: 5,
      name: "Emma Hanson",
      src: avatar5,
    },
    {
      id: 6,
      name: "Leah Berry",
      src: avatar6,
    },
    {
      id: 7,
      name: "Food & Drink",
      src: avatar7,
    },
    {
      id: 8,
      name: "Flora Benson",
      src: avatar8,
    },
    {
      id: 9,
      name: "Violet Cobb",
      src: avatar9,
    },
    {
      id: 10,
      name: "Phillip Mullins",
      src: avatar10,
    },
  ])

  return <Context.Provider value={{channel , setChannel}}>
    {children}
  </Context.Provider>
}


export {Context , ChannelProvider}
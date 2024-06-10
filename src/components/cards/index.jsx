import React, { useState } from 'react'
import './cards.scss'
import { CATEGORY_DATA, YOUTUBE_DATA } from '../../static'
import CardItem from "./CardItem"
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { BiSolidVideos } from "react-icons/bi";


const Cards = ({search}) => {

    const [data, setData] = useState("all")
    // console.log(data);

    let categoryFilter =  YOUTUBE_DATA?.filter(el => ((data === "all" ? el : '') || el.category === data) && el.title.toLowerCase().includes(search))
        
    let cards = categoryFilter?.map(el => (
        <CardItem key={el.id} image={el.img} title={el.title} channel={el.channel} />
    ))

    let categories = CATEGORY_DATA?.map(el => (
        <li key={el}>
            <data  value={el} onClick={(e)=> setData(e.target.value)} className='categories__item'>{el}</data>
        </li>
    ))
    return (
        <>
            <div className="content">
                <div className="sidebar">
                    <GoHomeFill className='sidebar__icons' />
                    <SiYoutubeshorts className='sidebar__icons' />
                    <BiSolidVideos className='sidebar__icons' />
                </div>
                <div className="cards__wrapper">
                    <div className="categories">
                        <ul>
                            <li>
                                <data value="all" onClick={(e)=> setData(e.target.value)} className='categories__item' >All</data>
                            </li>
                            {categories}
                        </ul>
                    </div>
                    <div className="cards">
                        {cards}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Cards




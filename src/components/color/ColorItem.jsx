import React from "react";
import "./style.css"
import {StarRating} from "../starRating";

export const ColorItem =({title,color,rating=0,onRemove=f=>f,onRate=f=>f}) => {
    return (
        <section className ="color-item">
            <h1>{title}</h1>
            <button className='remove-btn' onClick={onRemove}>X</button>
            <div className='color'
            style={{backgroundColor:color}}>
            </div>
            <div>
                <StarRating starSelected={rating} onRate={onRate}/>
            </div>
        </section>
    )
}
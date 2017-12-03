import React from "react";
import "./Title.css";

const Title = props =>
    <div className='block'>
        <h1 className="title">{props.children}</h1>
        <h1 className="title">Score: {props.score} | Max Score: 12</h1>
    </div>;

export default Title;

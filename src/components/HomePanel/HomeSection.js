import React from 'react'
import {HomeSectionElement} from './HomeSection.elements'
import logo from "../../utils/images/heroImage.jpg";

const HomeSection = ({title,text}) => {
    return (
        <>
            <HomeSectionElement>
                <img src={logo}></img>
                <div class="panel">
                    <div class="left">
                        <h1>{title}</h1>
                    </div>
                    <div class="right">
                        <p>{text} </p>
                    </div>
                </div>
            </HomeSectionElement>
        </>
    )
}

export default HomeSection;

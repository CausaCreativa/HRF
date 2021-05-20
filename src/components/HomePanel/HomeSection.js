import React from 'react'
import {HomeSectionElement} from './HomeSection.elements'


const HomeSection = ({title,text}) => {
    return (
        <>
            <HomeSectionElement>
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

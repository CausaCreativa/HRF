import React from 'react'

import {ContainerBackgroundTop,BackgroundTop} from './Team.elements'
import {BackgroundAboutUsFour} from '../../pages/AboutUs/DataAboutUs'

const Team = () => {
    return (
        <>
           <ContainerBackgroundTop>
            <BackgroundTop {...BackgroundAboutUsFour}>
            </BackgroundTop>
            </ContainerBackgroundTop>
        </>
    )
}

export default Team

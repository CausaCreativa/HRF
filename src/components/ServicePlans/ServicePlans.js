import React from 'react'
import {Plan,Image,Text} from './ServicePlans.elements'


const InfoSection = ({pic,text}) => {
    return (
        <>
        <Plan>
            <Image pic={pic} />
            <Text>{text}</Text>
        </Plan>
        </>
    )
}

export default InfoSection


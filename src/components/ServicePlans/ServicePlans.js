import React from 'react'
import {Plan,Image,Text} from './ServicePlans.elements'


const InfoSection = ({pic,text,color}) => {
    return (
        <>
        <Plan>
            <Image pic={pic} />
            <Text color={color}>{text}</Text>
        </Plan>
        </>
    )
}

export default InfoSection


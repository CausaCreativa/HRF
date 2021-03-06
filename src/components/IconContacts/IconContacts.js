import React from 'react'
import {ContentIcon,BackgroundIcon,Icon} from './IconContacts.elements'


const IconContacts = (
  {imgUrl,text}

) => {
    return (
        <>
           
        <ContentIcon>
          <BackgroundIcon>
            <Icon src={imgUrl}></Icon>
          </BackgroundIcon>
          <p>{text}</p>
        </ContentIcon>
      
        </>
    )
}

export default IconContacts

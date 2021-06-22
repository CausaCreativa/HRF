import React from 'react'
import {Image,ContentElements} from './ComponentsModal.elements'


const ComponentsModal = ({data,state}) => {

    if(data != null){
        return(
            <ContentElements>
                {
                    data.map(function(component,num) {
                        return (
                            <Image  pic={component.pic}></Image>
                        )
                    })
                }
            </ContentElements>
        )
    }else{
        return(
            <div>
            </div>
        )
    }

}

export default ComponentsModal;
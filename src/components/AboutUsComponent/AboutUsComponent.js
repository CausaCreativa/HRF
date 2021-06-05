import React from 'react'
import {ContainerBackgroundTop,Container,BackgroundTop,Title,Image,ContentImage,ContentText,Text,ContentText2,Text2} from './AboutUsComponent.elements'
import {BackgroundAboutUsOne,ImageAbautUsComponent} from '../../pages/AboutUs/DataAboutUs'


const AboutUsComponent = () => {
    return (
        <>
        <ContainerBackgroundTop>
            <BackgroundTop {...BackgroundAboutUsOne}>
                <Title> ¿QUIENES SOMOS? </Title>
                <Container>
                    <ContentImage>
                        <Image  {...ImageAbautUsComponent} />
                    </ContentImage>
                    <ContentText>
                        <Text>“La ley es la logica, sin pasión” Aristoteles</Text>
                    </ContentText>
                    <ContentText2>
                        <Text2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisi, amet nisl, ante duis vestibulum, eget. Vitae consequat, mi tincidunt condimentum sed nascetur amet. Nunc faucibus lu <br></br><br></br>
                        Maecenas aliquet augue suspendisse eget posuere. Eget massa tempus habitasse non et id. Maecenas quisque eget ornare molestie id. Imperdiet adipiscing sit egestas ullamcorper. Et cras bibendum vitae libero, tortor.  
                        </Text2>
                    </ContentText2>
                </Container>
            </BackgroundTop>
        </ContainerBackgroundTop>
        </>
    )
}

export default AboutUsComponent

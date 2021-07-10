import React from 'react'


import {ContainerTeam,
        CardTeam,
        CardTeamText,
        ContainerTitle,
        CardImage,
        ContainerIcon,
        IconImg,
        ContainerPhoto

} from './Team.elements'


const Team = ({
    Background,
    imgStart,
    member1,
    Icon,
    desborde, 
    back,
    desbordePhoto
}) => {
    return (
        <>
        <ContainerTeam Background={Background[3]}>
            <ContainerTitle>
        <h1> Team</h1>
            </ContainerTitle>
            <CardTeam imgStart={imgStart[1]} desbordePhoto >
                <CardTeamText >
                    <h2>{member1[0]}</h2>
                    <h4>{member1[1]}</h4>
                    <ContainerIcon>
                        <a href="https://google.com">
                            <IconImg src={Icon[0]} />
                        </a>
                        <a href="https://google.com">
                            <IconImg src={Icon[1]} />
                        </a>
                        <a href="https://google.com">
                            <IconImg src={Icon[2]} />
                        </a>
                    </ContainerIcon>
                    <p> {member1[2]} </p>
                    <ul>
                        <li> {member1[3][0]}</li>
                        <li> {member1[3][1]}</li>
                        <li> {member1[3][2]}</li>
                    </ul>
                </CardTeamText>
                <CardImage desborde={desborde[1]} back={back} >
                <ContainerPhoto photo={member1[4]} desbordePhoto={desbordePhoto[0]} />
                </CardImage>
            </CardTeam>


            <CardTeam imgStart={imgStart} desbordePhoto={desbordePhoto[1]}>
                <CardTeamText >
                    <h2>{member1[0]}</h2>
                    <h4>{member1[1]}</h4>
                    <ContainerIcon>
                        <a href="https://google.com">
                            <IconImg src={Icon[0]} />
                        </a>
                        <a href="https://google.com">
                            <IconImg src={Icon[1]} />
                        </a>
                        <a href="https://google.com">
                            <IconImg src={Icon[2]} />
                        </a>
                    </ContainerIcon>
                    <p>{member1[2]}</p>
                </CardTeamText>
                <CardImage desborde={desborde[0]} back={back} >
                <ContainerPhoto photo={member1[4]} desbordePhoto={desbordePhoto[1]}/>
                </CardImage>
            </CardTeam>
            <CardTeam imgStart={imgStart[1]}>
                <CardTeamText >
                    <h2>{member1[0]}</h2>
                    <h4>{member1[1]}</h4>
                    <ContainerIcon>
                        <a href="https://google.com">
                            <IconImg src={Icon[0]} />
                        </a>
                        <a href="https://google.com">
                            <IconImg src={Icon[1]} />
                        </a>
                        <a href="https://google.com">
                            <IconImg src={Icon[2]} />
                        </a>
                    </ContainerIcon>
                    <p>{member1[2]}</p>
                </CardTeamText>
                <CardImage desborde={desborde[1]} back={back} >
                <ContainerPhoto photo={member1[4]} desbordePhoto={desbordePhoto[0]}/>
                </CardImage>
            </CardTeam>
            <CardTeam imgStart={imgStart} desbordePhoto={desbordePhoto[2]}>
                <CardTeamText >
                    <h2>{member1[0]}</h2>
                    <h4>{member1[1]}</h4>
                    <ContainerIcon>
                        <a href="https://google.com">
                            <IconImg src={Icon[0]} />
                        </a>
                        <a href="https://google.com">
                            <IconImg src={Icon[1]} />
                        </a>
                        <a href="https://google.com">
                            <IconImg src={Icon[2]} />
                        </a>
                    </ContainerIcon>
                    <ul>
                        <li> {member1[3][0]}</li>
                        <li> {member1[3][1]}</li>
                        <li> {member1[3][2]}</li>
                    </ul>
                </CardTeamText>
                <CardImage desborde={desborde[0]} back={back} >
                <ContainerPhoto photo={member1[4]} desbordePhoto={desbordePhoto[1]} />
                </CardImage>
            </CardTeam>


        </ContainerTeam>
        </>
    )
}

export default Team

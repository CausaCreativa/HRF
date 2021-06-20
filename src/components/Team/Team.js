import React from 'react'
import { Link } from 'react-router-dom'

import {ContainerTeam,
        CardTeam,
        CardTeamText,
        ContainerTitle,
        CardImage,
        ContainerIcon,
        IconImg

} from './Team.elements'


const Team = ({
    Background,
    imgStart,
    member1,
    Icon,
    desborde
}) => {
    return (
        <>
        <ContainerTeam Background={Background[3]}>
            <ContainerTitle>
        <h1> Team</h1>
            </ContainerTitle>
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
                <CardImage desborde={desborde[1]}>

                </CardImage>
            </CardTeam>


            <CardTeam imgStart={imgStart}>
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
                <CardImage desborde={desborde[0]} >

                </CardImage>
            </CardTeam>
            <CardTeam imgStart={imgStart}>
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
                <CardImage>

                </CardImage>
            </CardTeam>
            <CardTeam imgStart={imgStart}>
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
                <CardImage>

                </CardImage>
            </CardTeam>


        </ContainerTeam>
        </>
    )
}

export default Team

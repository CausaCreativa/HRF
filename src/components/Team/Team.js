import React from 'react'

import {ContainerTeam,
        CardTeam,
        CardTeamText

} from './Team.elements'


const Team = ({
    Background
}) => {
    return (
        <>
        <ContainerTeam Background={Background[3]}>
            <CardTeam>
                <CardTeamText>
                    <h1>
        Maria Jones
                    </h1>
                </CardTeamText>
            </CardTeam>
        </ContainerTeam>
        </>
    )
}

export default Team

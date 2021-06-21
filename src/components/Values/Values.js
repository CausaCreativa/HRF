import React from 'react'
import {ContainerValues,
        ContainerLogo,
        ValuesContainer,
        ValuesIcon,
        SectionValues,
        ContainerTitle
    
    } from './Values.elements'



const Values = ({
    Background,
    IconValues,
    ValuesHRF,
    desbordeValues,
    desbordeIcon,

    
}) => {
    return (
        <>
        <ContainerValues Background={Background[2]}>
            <ContainerTitle>
                <h1>
                    Valores
                </h1>
            </ContainerTitle>
            <SectionValues>
            <ValuesIcon IconValues={IconValues[0]} desbordeIcon={desbordeIcon[0]} />
                    <ValuesContainer ValuesHRF={ValuesHRF[0]} desbordeValues={desbordeValues[0]} />
            </SectionValues>
            <SectionValues>
            <ValuesIcon IconValues={IconValues[0]} desbordeIcon={desbordeIcon[1]} />
                    <ValuesContainer ValuesHRF={ValuesHRF[0]} desbordeValues={desbordeValues[1]} />
            </SectionValues>
            <SectionValues>
            <ValuesIcon IconValues={IconValues[0]} desbordeIcon={desbordeIcon[2]} />
                    <ValuesContainer ValuesHRF={ValuesHRF[0]} desbordeValues={desbordeValues[2]} />
            </SectionValues>
            <SectionValues>
            <ValuesIcon IconValues={IconValues[0]} desbordeIcon={desbordeIcon[3]} />
                    <ValuesContainer ValuesHRF={ValuesHRF[0]} desbordeValues={desbordeValues[3]} />
            </SectionValues>
            <SectionValues>
            <ValuesIcon IconValues={IconValues[0]} desbordeIcon={desbordeIcon[4]} />
                    <ValuesContainer ValuesHRF={ValuesHRF[0]} desbordeValues={desbordeValues[4]} />
            </SectionValues>
            <SectionValues>
            <ValuesIcon IconValues={IconValues[0]} desbordeIcon={desbordeIcon[5]} />
                    <ValuesContainer ValuesHRF={ValuesHRF[0]} desbordeValues={desbordeValues[5]} />
            </SectionValues>
            
        </ContainerValues>
        </>
    )
}

export default Values

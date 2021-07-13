import React from 'react'
import {ContainerValues,
        ContainerLogo,
        ValuesContainer,
        ValuesIcon,
        SectionValues,
        ContainerTitle,
    
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
        <ContainerValues Background={Background[3]} >
           <div  className="ii">
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
            <ValuesIcon IconValues={IconValues[1]} desbordeIcon={desbordeIcon[1]} />
                    <ValuesContainer ValuesHRF={ValuesHRF[1]} desbordeValues={desbordeValues[1]} />
            </SectionValues>
            <SectionValues>
            <ValuesIcon IconValues={IconValues[2]} desbordeIcon={desbordeIcon[2]} />
                    <ValuesContainer ValuesHRF={ValuesHRF[2]} desbordeValues={desbordeValues[2]} />
            </SectionValues>
            <SectionValues>
            <ValuesIcon IconValues={IconValues[3]} desbordeIcon={desbordeIcon[3]} />
                    <ValuesContainer ValuesHRF={ValuesHRF[3]} desbordeValues={desbordeValues[3]} />
            </SectionValues>
            <SectionValues>
            <ValuesIcon IconValues={IconValues[4]} desbordeIcon={desbordeIcon[4]} />
                    <ValuesContainer ValuesHRF={ValuesHRF[4]} desbordeValues={desbordeValues[4]} />
            </SectionValues>
            <SectionValues>
                    <ValuesContainer ValuesHRF={ValuesHRF[5]} desbordeValues={desbordeValues[5]} />
            </SectionValues>
             </div>
        </ContainerValues>
        </>
    )
}

export default Values

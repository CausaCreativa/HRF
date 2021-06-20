import styled from 'styled-components'

export const ContainerBackgroundModal = styled.div`
    height: 401px;
    position: relative;
`;

export const BackgroundModal = styled.div`
    background-image:url(${ props => props.Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    position: absolute;
`;


export const ModalMain = styled.section`
    position:fixed;
    background: white;
    width: 600px;
    height: 400px;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
`;

export const ModalHead = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;
export const ModalBody = styled.div`
    width: 100%;
    height: 100%;
`;

export const Title = styled.h4`
padding: 9px 112px;
text-align: center
`;
export const CloseButton = styled.button `
padding: 4px;
background-color: transparent;
border: #e6c7c7 solid 0.1px;
cursor: pointer;
`;
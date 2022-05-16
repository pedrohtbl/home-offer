import styled from "styled-components"

export const CustomButton = styled.button`
        width: 146px;
        border-radius: 37px;
        border: solid 2px var(--color-secundary);
        height: 47px;
        background-color: ${props => props.white? "#FFF" : "#FE8537"};
        color:${props => !props.white? "#FFF" : "#FE8537"} ;
        font-size: 20px;
        font-weight: 500;

        @media (min-width: 728px) {
            width: 212px;
            height: 69px;
            border-radius: 55px;
            border: solid 3px var(--color-secundary);
        }
`
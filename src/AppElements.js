import styled from "styled-components";

export const Wrapper = styled.div`
    transition: 0.5s;
    transform: ${({sidebar}) => sidebar ? 'translateX(280px)' : ''};
`
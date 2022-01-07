import styled from "styled-components";
import {RiCloseFill} from 'react-icons/ri'

export const SidebarBox = styled.div`
    width: 280px;
    height: 100vh;
    left: ${props => props.visibility  ? '0' : '-280px'};
    bottom: 0;
    position: fixed;
    box-shadow: inset -13px 0 20px -13px rgb(10 10 10 / 25%);
    background-color: #333;
    transition: 0.5s;
    z-index: 999;
`

export const CloseIcon = styled(RiCloseFill)`
    cursor: pointer;
    color: grey;
    font-size: 22px
`
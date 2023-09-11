import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLinks = styled(NavLink)`


    color: black;
    font-weight: 600;
    text-decoration: none;

    margin-left: 40px;
    :last-child{
        margin-right: 40px;
    }

    &.active {
        /* color: white; */
        color: #007edf;
        text-decoration: none;
    }
`

export const Header = styled(NavLink)`
    display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-bottom: 16px;
  border-bottom: 1px solid #b7b7b7;
`
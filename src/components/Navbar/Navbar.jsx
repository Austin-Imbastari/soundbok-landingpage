import React from "react";
import styled from "styled-components";

const Navbar = () => {
    return (
        <>
            <NavContainer>
                <h1>
                    <i>SOUNDBOKS</i>
                </h1>

                <LinkList>
                    <ul>
                        <li>Story</li>
                        <li>Pricing</li>
                        <li>About</li>
                    </ul>
                </LinkList>

                <div>
                    <button>Purchase</button>
                </div>
            </NavContainer>
        </>
    );
};

const NavContainer = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 90%;
    margin-left: 100px;
    margin-right: 100px;
    z-index: 69;

    h1 {
        font-size: 2rem;
        font-weight: 900;
    }

    button {
        display: inline-block;
        outline: 0;
        border: 0;
        cursor: pointer;
        background-color: #2d2928;
        border-radius: 50px;
        padding: 8px 20px;
        font-size: 16px;
        font-weight: 700;
        color: #fbfeff;
        line-height: 26px;
    }
`;

const LinkList = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    li {
        display: inline-block;
        margin-right: 50px;
        cursor: pointer;
        color: #2d2928;
        font-size: 1.2rem;
        letter-spacing: 1.2px;
        font-weight: 300;
    }
`;

export default Navbar;

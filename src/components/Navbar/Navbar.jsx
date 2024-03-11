/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

const Navbar = () => {
    return (
        <>
            <NavContainer>
                <h1>
                    <a href='#'>
                        <i>SOUNDBOKS</i>
                    </a>
                </h1>

                <LinkList>
                    <ul>
                        <a href='#'>
                            <li>Story</li>
                        </a>
                        <a href='#'>
                            <li>Configure</li>
                        </a>
                        <a href='#'>
                            <li>About</li>
                        </a>
                    </ul>
                </LinkList>

                <div>
                    <a target='_blank' href='https://soundboks.com/products/speakers/soundboks-go'>
                        <button>Purchase</button>
                    </a>
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
        /* border: 1px solid red; */
        font-size: 2rem;
        font-weight: 900;
        color: #2d2928;
        text-shadow: 0.07em 0 white, 0 0.07em white, -0.07em 0 white, 0 -0.07em white;

        a {
            text-decoration: none;
            color: #2d2928;
        }
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
        font-weight: 600;
        /* text-shadow: 0.07em 0 white, 0 0.07em white, -0.07em 0 white, 0 -0.07em white; */

        a {
            text-decoration: none;
            color: #2d2928;
        }
    }
`;

export default Navbar;

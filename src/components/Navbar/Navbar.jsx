/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Navbar = () => {
    const [color, setColor] = useState("#2d2928");

    useEffect(() => {
        const handleScroll = () => {
            const threshold = 810;
            const currentPosition = window.scrollY;

            if (currentPosition > threshold) {
                setColor("#ffffff");
            } else {
                setColor("#2d2928");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <NavContainer>
                <h1>
                    <a style={{ color: color }} href='#'>
                        <i>SOUNDBOKS</i>
                    </a>
                </h1>

                <LinkList>
                    <ul>
                        <a target='_blank' style={{ color: color }} href='https://soundboks.com/story'>
                            <li>Story</li>
                        </a>
                        {/* <a style={{ color: color }} href='#'>
                            <li>Configure</li>
                        </a> */}
                        <a target='_blank' style={{ color: color }} href='https://soundboks.com/products'>
                            <li>Products</li>
                        </a>
                    </ul>
                </LinkList>

                <div>
                    <a target='_blank' href='https://soundboks.com/products/speakers/soundboks-go'>
                        <button style={{ border: `1px solid ${color} ` }}>Purchase</button>
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
        mix-blend-mode: difference;
        color: white;
        a {
            text-decoration: none;
            /* color: #2d2928; */
            /* text-shadow: 3px 1px 4px rgba(255, 255, 255, 0.72); */
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
        font-size: 1.2rem;
        letter-spacing: 1.2px;
        font-weight: 600;
        /* color: #2d2928; */

        a {
            text-decoration: none;
            mix-blend-mode: difference;
            color: white;
        }
    }
`;

export default Navbar;

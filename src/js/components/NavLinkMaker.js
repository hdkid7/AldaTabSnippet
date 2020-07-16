// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { jsx, css } from "@emotion/core";
/** @jsx jsx */

const liStyle = css`
li {
  float: left;
  width: 12rem;
  height: 5rem;
  margin: 0 0 0 -1rem;
  position: relative;

  &:active {
    z-index: 6;
  }
`;
// eslint-disable-next-line react/prop-types
const NavLinkMaker = ({ route, children }) => {
  return (
    <li css={liStyle}>
      <NavLink
        exact
        to={`/${route}`}
        activeStyle={{
          fill: "#fff",
          color: "#000",
          zIndex: "2",
          borderBottomColor: "#FFF",
          display: "block"
        }}
      >
        <span
          css={css`
            display: flex;
            justify-content: center;
            z-index: 2;
            width: 6em;
            margin-right: 0.7em;
            height: 100%;
          `}
        >
          {children}

          <svg
            css={css`
              // for tab shadows
              // also screws up Firefox
              // filter: url(#shadow);
              position: absolute;
              top: -4.65em;
              fill: yellow;
              height: 13em;
              z-index: 1;
              pointer-events: none;
              &:active {
                fill: white;
              }
            `}
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 595.3 841.9"
            enableBackground="new 0 0 595.3 841.9"
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M515.3,325.1c-1-3.5-1.7-7.2-2.3-10.8c-0.2-1.1-0.1-2.2,0.3-3.2c-0.6-3.9-1.1-7.9-1.8-11.8
		c-6.4-38.1-19.7-55.2-47.1-55.3c-110.2-0.5-220.4-0.5-330.6,0c-23.8,0.1-36.7,12.6-42.9,41c-6.2,28.5-10.8,57.4-22.1,83.7
		c2.6,1.9,5.3,3.3,8.4,3.2c149.8-2.1,299.6-0.3,449.4-1c0,0,0,0,0,0c-6.1-11.4-9.3-24.9-10-39.6
		C515.9,329.3,515.5,327.2,515.3,325.1z"
              />
            </g>
            <path d="M36,314.6" />
          </svg>
        </span>
      </NavLink>
    </li>
  );
};

export default NavLinkMaker;

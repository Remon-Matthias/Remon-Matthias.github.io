import React from "react";
import {
  Container,
  Menu,
  MenuItem,
  Link,
  MobileIcon,
  Logo,
} from "./Navigation.elements";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import logo from "../../images/logo-small.svg";

const Navigation = ({ toggle, isOpen }) => {
  return (
    <>
      <Container>
        <MobileIcon>
          {/* <VscSmiley /> */}
          {isOpen ? (
            <RiCloseLine
              onClick={toggle}
              size="3.5em"
              style={{
                padding: 0,
                textShadow:
                  "0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa5000",
              }}
            />
          ) : (
            <RiBarChartHorizontalLine
              onClick={toggle}
              size="2.5em"
              style={{
                padding: "0.5rem ",
                // border: "solid 3px",
                textShadow:
                  "0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa5000",
              }}
            />
          )}
          {/* <RiBarChartHorizontalFill onClick={toggle} /> */}
          {/* <CgSmileNeutral onClick={toggle} /> */}
          {/* <p onClick={toggle}>Menu</p> */}
        </MobileIcon>
        <Menu isOpen={isOpen} onClick={toggle}>
          <Logo src={logo} alt="logo" />
          <MenuItem></MenuItem>
          <MenuItem>
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              activeClass="active"
            >
              Home
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              activeClass="active"
            >
              About
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              activeClass="active"
            >
              Skills
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              activeClass="active"
            >
              Projects
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              activeClass="active"
            >
              Contact
            </Link>
          </MenuItem>
        </Menu>
      </Container>
    </>
  );
};

export default Navigation;

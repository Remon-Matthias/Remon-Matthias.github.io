import React from "react";
import { Container, Menu, MenuItem, Link, MobileIcon } from "./NavBar.elements";
import { RiBarChartHorizontalLine } from "react-icons/ri";

const NavBar = ({ toggle, isOpen }) => {
  return (
    <>
      <Container>
        <MobileIcon>
          {/* <VscSmiley /> */}
          {/* {isOpen ? (
            <RiCloseLine
              onClick={toggle}
              size="3.5em"
              style={{
                padding: 0,
              }}
              color="#ffb566"
            />
          ) : (
            <RiBarChartHorizontalLine
              onClick={toggle}
              size="2em"
              style={{
                padding: "0.5rem ",
              }}
              color="#ffb566"
            />
          )} */}
          {/* <RiBarChartHorizontalFill onClick={toggle} /> */}
          {/* <CgSmileNeutral onClick={toggle} /> */}
          {/* <p onClick={toggle}>Menu</p> */}
          <RiBarChartHorizontalLine
            onClick={toggle}
            size="2em"
            style={{
              padding: "0.5rem ",
            }}
            color="#ffb566"
          />
        </MobileIcon>
        <Menu isOpen={isOpen} onClick={toggle}>
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

export default NavBar;

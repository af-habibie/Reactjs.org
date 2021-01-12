import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
import Container from "react-bootstrap/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// https://react-icons.github.io/react-icons
// https://react-icons.github.io/react-icons/icons?name=fa
import { FaGithub } from "react-icons/fa";

import "./Menu.css";
import logo from "./logo.svg";

export default class Menu extends Component {
  render() {
    return (
        <div>
            <ReactBootStrap.Navbar className="bg-dark-custom" variant="dark" expand="lg">
                <Container>
                    <ReactBootStrap.Navbar.Brand href="#home" className="pr-md-5 pr-0">
                    <img
                        src={logo}
                        height="55"
                        alt="React Bootstrap logo"
                    /> <span className="brand">React</span>
                    </ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                        <ReactBootStrap.Nav className="mr-auto">
                            <ReactBootStrap.Nav.Link href="#home">Docs</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="#link">Tutorial</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.NavDropdown title="Community" id="basic-nav-dropdown">
                                <ReactBootStrap.NavDropdown.Item href="#action/3.1">v 17.0.1</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item href="#action/3.2">Languages</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item href="#action/3.3">Github</ReactBootStrap.NavDropdown.Item>
                            </ReactBootStrap.NavDropdown>
                            <ReactBootStrap.Nav.Link href="#home">Blog</ReactBootStrap.Nav.Link>
                        </ReactBootStrap.Nav>
                        <ReactBootStrap.Form inline>
                            <div className="position-relative">
                                <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2 input-text-search" />
                                <FontAwesomeIcon icon={faSearch} className="text-muted position-absolute icon-search" />
                            </div>
                        </ReactBootStrap.Form>
                        <ReactBootStrap.Nav.Link href="#home" className="link-github">GitHub <FaGithub/></ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Navbar.Collapse>
                </Container>
            </ReactBootStrap.Navbar>
        </div>
    );
  }
}

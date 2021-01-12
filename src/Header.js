import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import './Header.css';

function Heading(props) {
    return <h1>{props.mainHeading}</h1>;
}

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slogan: "A JavaScript library for building user interfaces",
            title1: "Get Started",
            title2: "Take The Tutorial"
        }
    }
    render() {
        return (
            <div>
                <Container fluid className="p-0 bg-container">
                    <Jumbotron className="rounded-0 text-center">
                        <div className="p-4">
                            <Heading mainHeading="React" />
                            <p className="lead text-white">{this.state.slogan}</p>
                            <p className="pt-5">
                                <Button className="get-started rounded-0">{this.state.title1}</Button>
                                <a href="#/" className="take-the-tutorial pl-4">{this.state.title2} &rarr;</a>
                            </p>
                        </div>
                    </Jumbotron>
                </Container>
            </div>
        )
    }
}

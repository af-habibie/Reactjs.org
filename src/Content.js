import React, { Component } from 'react'
import { Container, Jumbotron, Button } from 'react-bootstrap'

export default class Content extends Component {
    render() {
        return (
            <div>
                <Container fluid className="p-0 bg-content">
                    <Jumbotron className="text-center rounded-0 mb-0">
                        <Button className="get-started rounded-0">Get Started</Button>
                        <a href="#/" className="take-the-tutorial pl-4">Take the Tutorial &rarr;</a>
                    </Jumbotron>
                </Container>
            </div>
        )
    }
}
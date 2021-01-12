import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default class Section extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className="p-5">
                        <Col>
                            <h4 className="font-weight-light mb-4">Declarative</h4>
                            <p className="lead">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
                            <p className="lead">Declarative views make your code more predictable and easier to debug.</p>
                        </Col>
                        <Col>
                            <h4 className="font-weight-light mb-4">Component-Based</h4>
                            <p className="lead">Build encapsulated components that manage their own state, then compose them to make complex UIs.Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
                            <p className="lead">Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
                        </Col>
                        <Col>
                            <h4 className="font-weight-light mb-4">Learn Once, Write Anywhere</h4>
                            <p className="lead">We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</p>
                            <p className="lead">React can also render on the server using Node and power mobile apps using React Native.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

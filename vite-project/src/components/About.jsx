import React from "react"
import Card from 'react-bootstrap/Card'

function About() {
    return (
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
            Hello, and welcome to my portfolio!.
          </Card.Text>
        </Card.Body>
      </Card>
    );
}
export default About;
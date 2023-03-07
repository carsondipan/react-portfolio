import React from "react"
import Card from 'react-bootstrap/Card'

function About() {
    return (
      <Card>
        <Card.Img className="h-32 w-100" href="https://placeholder.com" src="https://via.placeholder.com/350" />
        <Card.Body>
          <Card.Text>
           Thank you so much for viewing my portfolio! If you like what you see, you can contact me here!
          </Card.Text>
          <Card.Link href="mailto:carson.dipangrazio@gmail.com">Email</Card.Link>
          <Card.Link href="https://github.com/carsondipan">GitHub</Card.Link>
          <Card.Link href="https://www.linkedin.com/in/carsondipan/">LinkedIn</Card.Link>
        </Card.Body>
      </Card>
    );
}
export default About;
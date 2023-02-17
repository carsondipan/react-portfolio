import React from "react"


export default function Project() {
    return (
        <div class="projectContainer">
            <h2 class="text-center">Projects:</h2>
            <Row>
                <Col xs={12} md={6} lg={4}>
                    <a href="https://enigmatic-tundra-51864.herokuapp.com/" target="_"><img src={projectTitle} className='img-fluid rounded' alt='Project' /></a>
                    <h2 class="text-info">Project Title</h2>
                    <p>Lorem Ipsum</p>
                    <p><a class="btn btn-secondary" target="_" href="repositoryURL" role="button">Repository »</a> <a class="btn btn-primary" target="_" href="deployedPage" role="button">Deployment »</a></p>
                </Col>
            </Row>
        </div>
    )
};
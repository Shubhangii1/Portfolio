import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.jpeg";
import projImg4 from "../assets/img/project-img5.jpeg";
import projImg5 from "../assets/img/project-img5.jpeg";
import projImg6 from "../assets/img/project-img6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title:"IMDB Clone",
      description: "IMDB Clone using react and tmdb APIs",
      imgUrl: projImg1,
    },
    {
      title: <a href="https://github.com/Shubhangii1/Chit-Chat-Shubhangi">Chit-Chat</a>,
      description: "Real time chat Application using react and socket.io",
      imgUrl: projImg2,
    },
    {
      title: <a href="https://github.com/Shubhangii1/ShubhX">Decentralized Exchange</a>,
      description: "A token swap Decentralized Exchange",
      imgUrl: projImg3,
    },
    {
      title: <a href="https://github.com/Shubhangii1/Shubh-Collectibles">Shubh Collectibles</a>,
      description: "NFT collection project",
      imgUrl: projImg5,
    },
    {
      title: <a href="https://github.com/Shubhangii1/Decentralized-Drive">Decentralized Drive</a>,
      description: "Secure and Private Cloud storage",
      imgUrl: projImg5,
    },
    {
      title: "Sarvajit",
      description: "Twin probe to study Van-Allen Belt radiations",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>From frontend , Backend to Blockchain development I have build variety of projects with strong understanding of each and every concept. Everytime I visit a website I just think how it is made and how can I clone that.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>I have worked on simplest to complex all types of smart contracts. You can check them out on my Github- <b> <a href="https://github.com/Shubhangii1 " alt="link">Github </a> </b></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>You can visit my Github for more full stack web3 projects.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
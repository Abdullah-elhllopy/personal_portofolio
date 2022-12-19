import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/hoteltast.png";
import projImg2 from "../assets/img/vg.png";
import projImg3 from "../assets/img/jwhara.png";
import projImg4 from "../assets/img/netflex.png";
import projImg5 from "../assets/img/travel.png";
import projImg6 from "../assets/img/burger.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {

      url: "https://hotelstask.com/HtaskOrder/",
      imgUrl: projImg1,
    },
    {
      url: "https://vginv.com/",
      imgUrl: projImg2,
    },
    {
      url: "https://jwhara.net/",
      imgUrl: projImg3,
    },
  ];
  const personal_projects = [
    {
      url: "https://netflix-clone-rg.netlify.app/#/",
      imgUrl: projImg4,
      source_url : "https://github.com/Abdullah-elhllopy/netflex-clone"
    },
    {
      url: "https://giri-traveladvisor.netlify.app/",
      imgUrl: projImg5,
      source_url : "https://github.com/Abdullah-elhllopy/travel-advisor"
    },
    {
      url: "https://abdullah-elhllopy.github.io/Burger/",
      imgUrl: projImg6,
      source_url :"https://github.com/Abdullah-elhllopy/Burger-App"
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I show you to all the big and small websites I have done so far</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills d-flex mb-5 justify-content-center g-5 align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Real Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Personal Projects</Nav.Link>
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
                        <Row>
                          {
                            personal_projects.map((project, index) => {
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
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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

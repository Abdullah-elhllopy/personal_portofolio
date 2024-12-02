import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import procoorfm from "../assets/native/procoorfm.png";
import ApprovalRN from "../assets/native/ApprovalRN.png";
import Procoor_Tenants from "../assets/native/Procoor_Tenants.png"
import PROCOORCRM from "../assets/native/PROCOORCRM.png"
import qualitycontrol from "../assets/native/qualitycontrol.webp"
import procoorattendance from "../assets/native/procoorattendance.webp"
import yureka from "../assets/native/yureka.png"

import projImg1 from "../assets/img/hoteltast.png";




import projImg2 from "../assets/img/vg.png";
import projImg3 from "../assets/img/jwhara.png";
import projImg4 from "../assets/img/netflex.png";
import projImg5 from "../assets/img/travel.png";
import projImg6 from "../assets/img/burger.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ecommerce from "../assets/img/ecommerce2.png";
import digitalImg from "../assets/img/digitalImg.png"
import Api from "../assets/img/APIs.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {

      url: "https://yureka-blue.web.app/",
      imgUrl: yureka,

    },
    {

      url: "https://play.google.com/store/apps/details?id=com.procoorfm",
      imgUrl: procoorfm,

    },
    {

      url: "https://play.google.com/store/apps/details?id=com.procoor.ApprovalRN",
      imgUrl: ApprovalRN,

    },
    {

      url: "https://play.google.com/store/apps/details?id=com.procoor.Procoor_Tenants",
      imgUrl: Procoor_Tenants,

    },
    {

      url: "https://play.google.com/store/apps/details?id=com.procoor.PROCOORCRM",
      imgUrl: PROCOORCRM,

    },
    {

      url: "https://play.google.com/store/apps/details?id=com.procoor.apps.qualitycontrol",
      imgUrl: qualitycontrol,

    },
    {

      url: "https://play.google.com/store/apps/details?id=com.procoorattendance",
      imgUrl: procoorattendance,

    },
    // {

    //   url: "https://hotelstask.com/HtaskOrder/",
    //   imgUrl: projImg1,
    //   source_url: "https://www.youtube.com/watch?v=u_Z23WLjm7k"
    // },
    // {
    //   url: "https://vginv.com/",
    //   imgUrl: projImg2,
    // },
    // {
    //   url: "https://jwhara.net/",
    //   imgUrl: projImg3,
    // },
  ];
  const personal_projects = [
    {
      url: "https://netflix-clone-rg.netlify.app/#/",
      imgUrl: projImg4,
      source_url: "https://github.com/Abdullah-elhllopy/netflex-clone"
    },
    {
      url: "https://giri-traveladvisor.netlify.app/",
      imgUrl: projImg5,
      source_url: "https://github.com/Abdullah-elhllopy/travel-advisor"
    },
    {
      url: "https://abdullah-elhllopy.github.io/Burger/",
      imgUrl: projImg6,
      source_url: "https://github.com/Abdullah-elhllopy/Burger-App"
    },
    {
      url: "https://ecommerce-igaryii8r-abdullahahmed199654-gmailcom.vercel.app/",
      imgUrl: ecommerce,
      source_url: "https://github.com/Abdullah-elhllopy/ecommerce"
    },
    {
      imgUrl: digitalImg,
      source_url: "https://abdullah-elhllopy.github.io/digital_design/",
      source_url: "https://github.com/Abdullah-elhllopy/digital_design"
    },
    {
      imgUrl: Api,
      source_url: "https://github.com/Abdullah-elhllopy/memories"
    },
    {
      imgUrl: Api,
      source_url: "https://github.com/Abdullah-elhllopy/Tours"
    }
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

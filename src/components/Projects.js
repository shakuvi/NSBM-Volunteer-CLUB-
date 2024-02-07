import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Waruna De Silva",
      description: "Active President",
      imgUrl: projImg1,
    },
    {
      title: "Jeny Anthony",
      description: "Secretary",
      imgUrl: projImg2,
    },
    {
      title: "Hashini Wickramaarachchi",
      description: "Treasurer",
      imgUrl: projImg3,
    },
    {
      title: "Ms. Isuri Anuradha",
      description: "Mistresss In Charge",
      imgUrl: projImg4,
    },
    {
      title: "Mrs. Prasanshika Navodani",
      description: "Mistresss In Charge",
      imgUrl: projImg5,
    },
  ];

  const pastProjects = [
    {
      title: "Anupama Savinda",
      description: "PRESIDENT (2022-2023)",
      imgUrl: projImg6,
    },
    {
      title: "Vilochana Dissanayake",
      description: "PRESIDENT (2020-2022)",
      imgUrl: projImg7,
    },
    {
      title: "Navinda Nallaperuma",
      description: "FOUNDING PRESIDENT",
      imgUrl: projImg8,
    },
  ];

  const feedbacks = [
    {
      title: "Mrs. Thilini De Silva ",
      description: "Dean - Faculty of Business",
      imgUrl: projImg9,
    },
    {
      title: "Ms. Aushadhari Kaushalya",
      description: "Head of Student Affairs",
      imgUrl: projImg10,
    },
    {
      title: "Ms. Shehani Joseph",
      description: "Lecturer - Faculty of Business",
      imgUrl: projImg11,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Active Members</h2>
                  <p>
                    With over 400 hearts beating in unison, NSBM Green
                    University's Volunteer Club pulsates with a passion for
                    change.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Our Team</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Presidents</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Feedbacks</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {pastProjects.map((pastProject, index) => {
                            return <ProjectCard key={index} {...pastProject} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {feedbacks.map((feedback, index) => {
                            return <ProjectCard key={index} {...feedback} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import CertifImg1 from "../assets/img/project-img1.png";
import CertifImg2 from "../assets/img/project-img2.png";
import CertifImg3 from "../assets/img/project-img3.png";
import CertifImg4 from "../assets/img/project-img4.png";
import CertifImg5 from "../assets/img/project-img5.png";
import CertifImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
        title: "STTI Share Knowledge Batch 3",
        description: "Berkarir Diera digital",
        imgUrl: CertifImg1,
      },
      {
        title: "Kompetensi Akademik",
        description: "Bidang Matematika",
        imgUrl: CertifImg2,
      },
      {
        title: "Markplus Goes To Campus",
        description: "83th Edition",
        imgUrl: CertifImg3,
      },
      {
        title: "Kejuaraan Sains",
        description: "Bidang Matematika",
        imgUrl: CertifImg4,
      },
      {
        title: "Markplus Goes To Campus",
        description: "100th Edition",
        imgUrl: CertifImg5,
      },
      {
        title: "Certificate  Of Completion",
        description: "Workshop of succesful completion",
        imgUrl: CertifImg6,
      },
  ];
  
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Certifikat</h2>
                <p> Sertifikat dapat diberikan setelah seseorang menyelesaikan pelatihan, kursus, atau program pendidikan, atau setelah berhasil melewati ujian atau evaluasi yang ditetapkan.</p>
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
                    <Tab.Pane eventKey="section">
                      <p>Sertifikat memiliki nilai penting dalam dunia pendidikan, pekerjaan, dan profesionalisme karena mereka dapat digunakan sebagai bukti kompetensi, keterampilan, atau pengetahuan seseorang dalam bidang tertentu. </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Sertifikat memiliki nilai penting dalam dunia pendidikan, pekerjaan, dan profesionalisme karena mereka dapat digunakan sebagai bukti kompetensi, keterampilan, atau pengetahuan seseorang dalam bidang tertentu.</p>
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

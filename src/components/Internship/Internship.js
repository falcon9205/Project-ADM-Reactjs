import './internship.css';
import {Button, Container, Row, Col, Card } from 'react-bootstrap';


// import Project from "./components/Projects";
import React from 'react';


import ReadMore from './readmore';

// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

// const MySwal = withReactContent(Swal)

// MySwal.fire("SweetAlert2 is working!").then(() => {
//   return MySwal.fire(<p>Shorthand works too</p>)
// })


function internship() {

 
  return (
    <>
     <div className='container-fluid px-5 text-center  text-black'>

<div ><h2 className='title mt-5 border border-4 border-info'>INTERNSHIP OPPORTUNITIES</h2>
<p className=' para fs-4 text-center'> Our internship opportunities cover a broad spectrum of fields to cater to the diverse talents and interests of our participants.  These include:</p>
</div>


<Container>
      <Row className="justify-content-between">
        <Col xs={12} sm={6} md={6} lg={4} className="mb-5 card-animation">
    
        <Card className='patta'>
      <Card.Img className='card-img' variant="top" src="./assests/human resources.png"/>
      <Card.Body>
        <Card.Title>Human Resources</Card.Title>
        <Card.Text >
                    <ReadMore
                      text='Human Resources professionals support HR initiatives, provide counseling on policies and procedures, implement effective onboarding plans, and develop training and development programs.'
                      maxLength={100} // Adjust the maximum length as needed
                    />
                  </Card.Text>

        <Button  variant="primary">View Openings</Button>
       
      </Card.Body>
    </Card>
        </Col>

        <Col xs={12} sm={6} md={6} lg={4} className=" mb-5 card-animation">
        <Card className='patta' >
      <Card.Img variant="top" className='card-img' src="./assests/Graphic Designer.png"/>
      <Card.Body>
        <Card.Title>Graphic Designers</Card.Title>
        <Card.Text>
        <ReadMore
                      text=' Graphic Designers use  Adobe Photoshop to create visual concepts that engage users. They design logos, images, and illustrations, contributing to various departments for design concepts and layouts.'
                      maxLength={100} // Adjust the maximum length as needed
                    />
       
        </Card.Text>
        <Button variant="primary">View Openings</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} className=" mb-5 card-animation">
        <Card className='patta' >
      <Card.Img variant="top" className='card-img' src="./assests/medical volunteer.png"/>
      <Card.Body>
        <Card.Title>Medical Volunteers</Card.Title>
        {/* <Card.Text>
        Medical Volunteers offer essential support in healthcare facilities and clinics. They provide medical care and assist healthcare professionals in delivering treatments and performing medical procedures.
        </Card.Text> */}
         <Card.Text>
        <ReadMore
                      text='Medical Volunteers offer essential support in healthcare facilities and clinics. They provide medical care and assist healthcare professionals in delivering treatments and performing medical procedures. '
                      maxLength={100} // Adjust the maximum length as needed
                    />
       
        </Card.Text>

        <Button variant="primary">View Openings</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} className=" mb-5 card-animation">
        <Card className='patta'>
      <Card.Img variant="top" className='card-img' src="./assests/video editor.png"/>
      <Card.Body>
        <Card.Title>Video Editors</Card.Title>

        {/* <Card.Text>
        Video Editors creatively edit video content for publication on social platforms. They assemble raw footage, select shots based on quality and add music, dialogues, graphics, and effects for a polished final product.
        </Card.Text> */}
         <Card.Text>
        <ReadMore
                      text='Video Editors creatively edit video content for publication on social platforms. They assemble raw footage, select shots based on quality and add music, dialogues, graphics, and effects for a polished final product. '
                      maxLength={100} // Adjust the maximum length as needed
                    />
       
        </Card.Text>
        <Button variant="primary">View Openings</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} className=" mb-5 card-animation">
        <Card className='patta'>
      <Card.Img variant="top" className='card-img' src="./assests/ui-ux designer.png"/>
      <Card.Body>
        <Card.Title>UI/UX Designers</Card.Title>
        {/* <Card.Text>
        UI/UX Designers excel in creating user-friendly interfaces by collecting user requirements and conducting research. Their aim is to deliver outstanding user experiences through innovative designs.
        </Card.Text> */}
         <Card.Text>
        <ReadMore
                      text=' UI/UX Designers excel in creating user-friendly interfaces by collecting user requirements and conducting research. Their aim is to deliver outstanding user experiences through innovative designs. '
                      maxLength={100} // Adjust the maximum length as needed
                    />
       
        </Card.Text>

        <Button variant="primary">View Openings</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} className=" mb-5 card-animation">
        <Card className='patta'>
      <Card.Img variant="top" className='card-img' src="./assests/marketing.png"/>
      <Card.Body>
        <Card.Title>Marketing</Card.Title>
        {/* <Card.Text>
        Marketers contribute ideas, conduct marketing campaigns, devise effective strategies, and carry out research to promote products or services.
        </Card.Text> */}
        <Card.Text>
        <ReadMore
                      text=' Marketers contribute ideas, conduct marketing campaigns, devise effective strategies, and carry out research to promote products or services. '
                      maxLength={100} // Adjust the maximum length as needed
                    />
       
        </Card.Text>

        <Button variant="primary">View Openings</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} className=" mb-5 card-animation">
        <Card className='patta'>
      <Card.Img variant="top" className='card-img' src="./assests/campus ambassador.png"/>
      <Card.Body>
        <Card.Title>Campus Ambassadors</Card.Title>
        {/* <Card.Text>
        Campus Ambassadors display leadership skills by promoting an organization on campus. They create ideas for events and campaigns, fostering collaborations with firms and colleges.
        </Card.Text> */}
         <Card.Text>
        <ReadMore
                      text=' Campus Ambassadors display leadership skills by promoting an organization on campus. They create ideas for events and campaigns, fostering collaborations with firms and colleges.'
                      maxLength={100} // Adjust the maximum length as needed
                    />
       
        </Card.Text>
        <Button variant="primary">View Openings</Button>
      </Card.Body>
    </Card>
        </Col>  
       <Col xs={12} sm={6} md={6} lg={4} className=" mb-5 card-animation">
        <Card className='patta'>
      <Card.Img variant="top" className='card-img' src="./assests/charity intern.png"/>
      <Card.Body>
        <Card.Title>Charity Interns</Card.Title>
        {/* <Card.Text>
        Charity Interns possess communication skills and work on encouraging donations and fundraising activities to support charitable causes.
        </Card.Text> */}
         <Card.Text>
        <ReadMore
                      text='Charity Interns possess communication skills and work on encouraging donations and fundraising activities to support charitable causes.'
                      maxLength={100} // Adjust the maximum length as needed
                    />
       
        </Card.Text>
        <Button variant="primary">View Openings</Button>
      </Card.Body>
    </Card>
        </Col>
       <Col xs={12} sm={6} md={6} lg={4} className=" mb-5 card-animation">
        <Card className='patta'>
      <Card.Img variant="top" className='card-img' src="./assests/full stack developer.png"/>
      <Card.Body>
        <Card.Title>Full Stack Developers</Card.Title>
        {/* <Card.Text>
        Full Stack Developers handle both frontend and backend responsibilities. Frontend developers create user-friendly and responsive websites, while backend developers build APIs and manage data, along with communication, testing, debugging, and database management.
        </Card.Text> */}
         <Card.Text>
        <ReadMore
                      text='Full Stack Developers handle both frontend and backend responsibilities. Frontend developers create user-friendly and responsive websites, while backend developers build APIs and manage data, along with communication, testing, debugging, and database management.'
                      maxLength={100} // Adjust the maximum length as needed
                    />
       
        </Card.Text>
        <Button variant="primary">View Openings</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} className=" mb-5 card-animation">
        <Card className='patta'>
      <Card.Img variant="top" className='card-img' src="./assests/anchor.png" />
      <Card.Body>
        <Card.Title> Anchors</Card.Title>
        {/* <Card.Text>
        Anchors create and deliver presentations while coordinating events. They maintain a positive attitude, engage the audience, and exhibit good communication skills.
        </Card.Text> */}
         <Card.Text>
        <ReadMore
                      text=' Anchors create and deliver presentations while coordinating events. They maintain a positive attitude, engage the audience, and exhibit good communication skills.'
                      maxLength={100} // Adjust the maximum length as needed
                    />
       
        </Card.Text>
        <Button variant="primary">View Openings</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} className=" mb-5 card-animation">
        <Card className='patta'>
      <Card.Img variant="top" className='card-img' src="./assests/public relation.png"/>
      <Card.Body>
        <Card.Title>Public Relations</Card.Title>
        {/* <Card.Text>
        Professionals in Public Relations write and produce presentations, articles, press releases, and media posts. They handle public and press inquiries, speak at press conferences, and analyze media coverage.
        </Card.Text> */}
         <Card.Text>
        <ReadMore
                      text=' Professionals in Public Relations write and produce presentations, articles, press releases, and media posts. They handle public and press inquiries, speak at press conferences, and analyze media coverage.'
                      maxLength={100} // Adjust the maximum length as needed
                    />
       
        </Card.Text>
        <Button variant="primary">View Openings</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} className=" mb-5 card-animation">
        <Card className='patta'>
      <Card.Img variant="top" className='card-img' src="./assests/csr.png"/>
      <Card.Body>
        <Card.Title>CSR (Corporate Social Responsibility)</Card.Title>
        {/* <Card.Text>
        CSR personnel identify, measure, and monitor the social impact of an organization's activities. They influence the organization's culture by identifying CSR initiatives and engage with external bodies like charities and community groups.
        </Card.Text> */}
         <Card.Text className='card-desc'>
        <ReadMore 
                      text=' CSR personnel identify, measure, and monitor the social impact of an organizations activities. They influence the organizations culture by identifying CSR initiatives and engage with external bodies like charities and community groups.'
                      maxLength={50} // Adjust the maximum length as needed
                    />
       
        </Card.Text>
        <Button variant="primary">View Openings</Button>
      </Card.Body>
    </Card>
        </Col>
       
      </Row>
    </Container>

    <p className=' footer-text card my-5   p-4 '>
    These internship roles are designed to empower students, housewives, and individuals from all backgrounds to develop valuable skills and gain practical experience. We believe in providing opportunities for personal growth and meaningful contributions to society.The certificates we distribute upon completion of these internships represent not only a milestone in your personal and professional journey but also your active role in shaping a brighter future for yourself and the community.Join us in this incredible journey of knowledge, growth, and empowerment, whether through our certificate programs or by participating in our dynamic internships. Your achievements and contributions are our inspiration, and together, we can work towards shaping a more educated, empowered, and capable world.
    </p>
</div>
    </>
  )
}

export default internship;

   
  


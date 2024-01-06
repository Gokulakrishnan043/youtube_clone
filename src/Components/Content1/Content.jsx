import { Card, Container, Row, Col,Button } from "react-bootstrap";
import "./Content.scss";
import { mainVideosContent } from "../../data1/Data";


const Content = () => {
  return (
    <>
     <section id="videoCard">
 
 <div className="space" >
   <Button type="button">All</Button> 
   <Button type="submit">Mixes</Button>
   <Button type="submit">Music</Button>
   <Button type="submit">Cinema</Button>
   <Button type="submit">Aniruth</Button>
   <Button type="submit">FootBall</Button>
   <Button type="submit">Cricket</Button>
   <Button type="submit">JK Tamil</Button>
   <Button type="submit">VJ sidhu</Button>
   <Button type="submit">Yuan</Button>
 </div>
   <Container>
       <Row>
         {mainVideosContent.map((item) => {
           return (
             <>
               <Col xl={3} key={item.id}>
                 <div className="video_card my-2">
                   <Card>
                     <Card.Img variant="top" src={item.imgSrc} />
                     <Card.Body>
                       <Card.Title>{item.title}</Card.Title>
                       <Card.Text>{item.channelName}</Card.Text>
                       <Card.Text>{item.views}</Card.Text>
                       <Card.Text>{item.times}</Card.Text>
                     </Card.Body>
                   </Card>
                 </div>
               </Col>
             </>
           );
         })}
       </Row>
     </Container>
   </section>
    </>
  )
}

export default Content
import { useEffect } from "react";
import { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import SVG from "./SVG";

const Advisor = () => {

  const getData = () => {
    return fetch("https://api.adviceslip.com/advice")
    .then((res)=>res.json())
  }

  const [data, setData] = useState([])

  useEffect(
    () => {
      const result = async() => {
        try{
          const responseData = await getData()
          console.log(responseData)
          setData(responseData.slip)
        }catch(e){
          console.log(e)
        }
      }
      result()
    }, []
  )

  const refreshAdvice = () => {
    window.location.reload();
  }

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Card style={{ width: '35rem', height: '18rem' }}>

        <Card.Title>Advice {data.id}</Card.Title>

        <Card.Body>
          "{data.advice}"
        </Card.Body>

        <Card.Footer className="card-footer"><Button onClick={refreshAdvice}><SVG /></Button></Card.Footer>
        
      </Card>
    </Container>
  );
};

export default Advisor;

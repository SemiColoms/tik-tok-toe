import React,{useState} from "react"
import Icon from "./Icon/Icon"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import 'bootstrap/dist/css/bootstrap.css';
  import { Button,Card,CardBody, Row, Col, Container } from "reactstrap";

  import "./style.css"
  
  let tictokArray = new Array(9).fill("")
const App = () => {
      
      
       let [winMessage, setWinMessage] = useState("")
       let [isCross, setIsCross] = useState(true)

       // reset game 

       function resetGame(){
           tictokArray.fill("")
           setWinMessage("")
           setIsCross(true)
       }
       // check the winner 
       function checkWinner(){
            if(tictokArray[0] == tictokArray[1] && tictokArray[1] == tictokArray[2] && tictokArray[0] !== ""){
                  setWinMessage(tictokArray[0]+" wins")
            }
            else if(tictokArray[3] == tictokArray[4] && tictokArray[4] == tictokArray[5] && tictokArray[3] !== ""){
                  setWinMessage(tictokArray[3]+" wins")
            }
            else if(tictokArray[6] == tictokArray[7] && tictokArray[7] == tictokArray[8] && tictokArray[6] !== ""){
                  setWinMessage(tictokArray[6]+" wins")
            }
            // column
            else if(tictokArray[0] == tictokArray[3] && tictokArray[3] == tictokArray[6] && tictokArray[0] !== ""){
                  setWinMessage(tictokArray[0]+" wins")
            }
            else if(tictokArray[1] == tictokArray[4] && tictokArray[4] == tictokArray[7] && tictokArray[1] !== ""){
                  setWinMessage(tictokArray[1]+" wins")
            }
            else if(tictokArray[2] == tictokArray[5] && tictokArray[5] == tictokArray[8] && tictokArray[2] !== ""){
                  setWinMessage(tictokArray[2]+" wins")
            }
            // daigonals
            else if(tictokArray[0] == tictokArray[4] && tictokArray[4] == tictokArray[8] && tictokArray[0] !== ""){
                  setWinMessage(tictokArray[0]+" wins")
            }
            else if(tictokArray[2] == tictokArray[4] && tictokArray[4] == tictokArray[6] && tictokArray[2] !== ""){
                    setWinMessage(tictokArray[2]+" wins")
                }
            else if(tictokArray.indexOf("") == -1){
                  setWinMessage("Draw")
            }
                  
            }
        
             

       function fillArray(index){
            //  console.log(index)
            //  console.log("value=",tictokArray[index])
              if(winMessage){
                    return toast('Game is Already Over', {
                        position: "bottom-center",
                        autoClose: 5000,
                        });
              }
              else if(tictokArray[index] != ""){
                    return toast('Already Filled', {
                        position: "bottom-center",
                        autoClose: 5000,
                        });
              }
              else if(tictokArray[index] == ""){
                 let ans =  isCross==true ? "cross" : "circle"
                 
                  tictokArray[index] = ans
                  
                 setIsCross(!isCross)
              }
                checkWinner()
       }


    return(

        <Container className="p-5">

              <Row>
                    <Col md={6} className="offset-md-3"> 
                          {
                                winMessage?(
                                      <div>
                                                <h1 className="text-center">{winMessage}</h1>
                                                <Button onClick={resetGame}>Play Again</Button>
                                      </div>
                                ):(
                                      <h1> {isCross==true? "Cross's chance": "Circle Chance"} </h1>
                                )
                          }
                              <div className="grid">
                                     {tictokArray.map((value, index) =>(
                                           
                                          <Card onClick={()=>{fillArray(index)}}>
                                          <CardBody className="box">  
                                                <Icon choice={tictokArray[index]} />
                                          </CardBody>
                                    </Card>
                                     ))}

                                    
                              </div>

                    </Col>
              </Row>

        </Container>
        
          


    )
}

export default App
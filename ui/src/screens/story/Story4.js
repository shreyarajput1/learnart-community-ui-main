import { Link } from "react-router-dom";
import {BsCursorFill} from 'react-icons/bs';
import {IoEllipsisVertical}from 'react-icons/io5';
import {BsFillXDiamondFill}from 'react-icons/bs';
import {BiCaretRight}from 'react-icons/bi';
import {BiCaretLeft}from 'react-icons/bi';
import {stockData}from "../../components/data";
import Carousel from 'react-bootstrap/Carousel'
 function Story4(){
  return(
    <div className="inner-story">
     
    <Carousel style={{background:"#000",verticalAlign:"end",textAlign:"center"}}>
      
    {stockData.map((data) => { 
    if(data.id>="3")
      return(
    <Carousel.Item>
      <div class="container-fluid">
      <div className="header row">
    <div className="brand-logo ml-3 mt-3">
        <Link to="/feed" className="text-white ">
        <img src="https://www.learnart.in/assets/logos/type-white.png" class="logo"/> 
        </Link>
     </div>
        <span className="close" >
        <span><IoEllipsisVertical/></span>
        <Link to="/feed" className="closebutton">
        <BsFillXDiamondFill/>
        </Link>
        
        </span>
        </div>
        </div>
        
        
        <div class="row">
        <div className="col-sm-12">
      <div className="profile ml-1 mb-1" style={{display:"flex"}}> 
        <img src={data.u_img}/>
        <div>
          <p className="pt-1 px-2" style={{color:"white"}} >{data.u_name}</p>
         
        </div>
        </div>
        <div className="storyimg" >
              <img  src={data.storyimg} width="100%" height="100%"/>
        </div>
        </div>
       </div>
       
        <div className="footer storyfooter">
        <input className="message mr-2" type="message" placeholder="Reply.."/> 
          <span>
          <button className="send mt-1">
              <span><BsCursorFill/>
              </span>
              </button>  
          </span>  
        </div>
    </Carousel.Item>
      )
      
    })}
    
  </Carousel>
  
  </div>
  
  )
}


export default Story4;
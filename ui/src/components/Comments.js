import { FcComments, FaRegComments} from "react-icons/fc";
import React from "react";
class Comments extends React.Component { 
    constructor(props) {
      super(props);
      this.state = {
      
      }
    } 
  
    render() {
      return (
         <div>
        <strong><a className="">
                        <span className=""style={{color:"black"}}><FcComments/></span>
                         
         
                      </a>2</strong>
                      </div>          
      );
    }
  
  }
  export default Comments;
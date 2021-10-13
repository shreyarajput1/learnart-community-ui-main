import React from "react";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill} from "react-icons/bs";

class LikeButton extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      isCardView: true,
    }
  } 

  render() {
    return (
       <div>
      <strong><a className=""  onClick={()=>this.setState({ isCardView: !this.state.isCardView })}>
                      { this.state.isCardView
                       ? <span className=""><BsHeart/></span>
                        : <span className=""style={{color:"red"}}><BsHeartFill/></span>
                      }
       
                    </a>2</strong>
                    </div>          
    );
  }

}
export default LikeButton;
import { Route, Redirect,Link,match } from "react-router-dom";
import React,{useState} from 'react';
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
  }
  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };
  render() {
    if (this.state.islogout) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <ul>
          <li>
            <Link to="">Dashboard</Link>
          </li>
          <li>
            <Link to="">Master</Link>
          </li>
          <li>
            <Link to="">Pos</Link>
          </li>
          <li className="push-right">
            <button onClick={this.signOut} href="#">
              Sign Out
            </button>
          </li>
        </ul>
      
      </div>
    );
  }
}
 
export default Dashboard;
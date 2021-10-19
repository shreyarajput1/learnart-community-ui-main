import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";
import Profile from "../screens/profile/Profile";
//
function FeedLayout(props) {
  return(
    <div className="FeedLayout">  
      <Header />
      <div className="container-fluid">
        <div className="row ">
        
          <div className="col-12 col-lg-3 col-sm-4 col-xs-4">
            <Sidebar />
          </div>
          <div className= "col-12 col-lg-6 col-sm-4 col-xs-4">
            {props.children}
          </div>
          <div className="col-12 col-lg-3 col-sm-4 col-xs-4">
            <RightSidebar/>
        </div>
      </div>

      <Footer />
    </div>
    </div>
  );
}

export default FeedLayout;
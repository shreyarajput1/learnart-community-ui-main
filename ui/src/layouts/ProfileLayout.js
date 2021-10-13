import Footer from "../components/Footer";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";
import Profile from "../screens/profile/Profile";
//
function ProfileLayout(props) {
  return(
    <div className="ProfileLayout">  
    
      <div className="container-fluid">
        <div className="row ">
          <div className= "col-12 col-lg-8 col-sm-6 col-xs-6">
            <props.children/>
          </div>
          <div className="col-12 col-lg-4 col-sm-6 col-xs-6">
            <RightSidebar/>
        </div>
      </div>

      <Footer/>
    </div>
    </div>
  );
}

export default ProfileLayout;
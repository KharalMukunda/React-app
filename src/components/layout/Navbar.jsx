import {Link} from "react-router-dom";
import * as icons from "../../Assets/icon";
//import * as Images from "../../images";

const Navbar = () => {
  return (
    <>
    <nav>
      <div>
        {/* <div>
          <img src ={Images.hotCoffeeLogo} className = "" alt=''/>
        </div> */}
        <div>
        <imput type ="text" className="" placeholder="Search....."/>
        <Link to ="/">homePage</Link>
        <Link to ="/article">Article</Link>
        <img src = {icons.instagram} className="instagram" alt=""/>
        </div>

        </div>
      
    </nav>
    
    </>

  );
}
export default Navbar;


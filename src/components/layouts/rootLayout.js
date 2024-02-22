import '../../css/nav.css'
import {Link, Outlet} from 'react-router-dom'
const RootLayout = () => {


    return (
        
        <div className="rootLayout">
          <div className="Nav">
            <div className="heading ">
                <h2 className='text-start fs-1 text my-4 p-1 '>Red Rooster <span className="hSpan">Farm</span></h2>
            </div>
            <div className="navIcons  ">
        
                <Link to={'/'} className="home navicon "> Home </Link>
                <Link to={'farm'} className="products  navicon ">Products</Link>
                <Link to={'order'} className="aboutus   navicon  ">About Us</Link>
                <div className="contactus  navicon  ">Contact Us</div>
             
            </div>
            <div className="sign">
                <div className="signout"> Log Out </div>
            </div>
        </div>

        <Outlet/>

    </div>  );
}
 
export default RootLayout;
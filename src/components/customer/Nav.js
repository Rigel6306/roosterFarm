
import '../../css/nav.css'

const Nav = () => {



    return ( 

        <div className="Nav">
            <div className="heading ">
                <h2 className='text-start fs-1 text my-4 p-1 '>Red Rooster <span className="hSpan">Farm</span></h2>
            </div>
            <div className="navIcons  ">
                <div className="home navicon "> Home </div>
                <div className="products  navicon ">Products</div>
                <div className="aboutus   navicon  ">About Us</div>
                <div className="contactus  navicon  ">Contact Us</div>
            </div>
            <div className="sign">
                <div className="signout"> Log Out </div>
            </div>
        </div>

     );
}
 
export default Nav;
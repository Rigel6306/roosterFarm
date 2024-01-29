import '../../css/Home.css'
const Home = () => {
    return ( 
    <div class="background">
      
        <img src={require ('../../assets/1.jpg')}  alt="qdas"  />
        <div className="homeComponent " >
            <div  className="container">
                <p>PROVIDING QUALITY PRODUCTS</p>
                <p class="fs-3 fw-semibold">ORGANIC FRUITS &VEGETABLE</p>
                <p  class="fs-7">100% HEALTHY &AFFORDABLE</p>
            </div>
            <div className="btn">
                <button type="button" class="btn btn-outline-danger">Sign Up</button>
                <button type="button" class="btn btn-outline-danger">Sign In</button>
            </div>
        </div>
    </div>
    
     );
}
 
export default Home;
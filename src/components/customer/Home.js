import '../../css/Home.css'
const Home = () => {
    return ( 
    <div class="background">
      
        <img className='imgh' src={require ('../../assets/1.jpg')}  alt="qdas"  />
        <div className="homeComponent " >
            <div  className="container">
                <p class="fs-5 text-center">PROVIDING QUALITY PRODUCTS</p>
                <p class="fs-3 fw-semibold text-danger-emphasis text-center">ORGANIC FRUITS &VEGETABLE</p>
                <p  class="fs-7 text-center">100% HEALTHY &AFFORDABLE</p>
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
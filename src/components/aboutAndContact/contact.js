import '../../css/Contact.css'

const Contact = () => {
    return (  
        <div className="contactComponent">
        
            <div className='contact'>
                <div className='address'>
                    <div className="imgContainer">
                        <img className='imgc' src={require ('../../assets/location.png')}  alt="qdas"  />
                    </div>
                    <div>
                        <p className='pc' >Red Rooster Farm vzw, </p>
                        <p className='pc'>Groenendaalstraat 12, </p>
                        <p className='pc'>1560, Hoeilaart, Belgium</p>
                    </div>
                </div>

                <div className='phone'>
                    <div className="imgContainer">
                      <img className='imgc' src={require ('../../assets/phone.png')}  alt="qdas"  />
                    </div>
                    <div>
                        <p className='pc'>+94 768 645 584</p>
                        <p className='pc'>+94 768 645 585</p>
                    </div>
                </div>
                <div className='email'>
                    <div className="imgContainer">
                        <img className='imgc' src={require ('../../assets/email.png')}  alt="qdas"  />
                    </div>
                    <div>
                        <p className='pc'>redrooster@gmail.com</p>
                        <p className='pc'>redroosterfarm@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="write">
                <h1>Or write us</h1>
                <form>
                <label class="sign" for="username">Username:</label>
                    <input className='inpc' type="text" id="username" name="username" required />

                    <label class="sign" for="email">Email Address:</label>
                    <input className='inpc' type="text" id="email" name="email" required />

                    <label class="sign" for="message">Enter your message:</label>
                    <input className='inpc' type="text" id="message" name="message" required />
                </form>
                <button class="submit" type="submit">Submit</button>
            </div>




        </div>
    );
}
 
export default Contact;
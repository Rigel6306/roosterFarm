import '../../css/Signup.css'

const Signup = () => {
    return ( 
        <div className="signupComponent">
            <div className='signup'>
                <h1>Sign Up</h1>

                <form action="/signup" method="post" class="form">
                    <div class="personal">
                        <h5 className='hfs'>Personal Information</h5>
                        <label class="sign" for="username">Username:</label>
                        <input className='inps' type="text" id="username" name="username" required />

                        <label class="sign" for="email">Email Address:</label>
                        <input className='inps' type="email" id="email" name="email" required />

                        <label class="sign" for="password">Password:</label>
                        <input className='inps' type="password" id="password" name="password" required />

                        <label class="sign" for="contact">Contact Number:</label>
                        <input className='inps' type="contact" id="contact" name="contact" required />
                    </div>

                    <div class="delivery">
                        <h5 className='hfs'>Delivery Information</h5>
                        <label class="sign" for="address">Address:</label>
                        <input className='inps' type="address" id="address" name="address" required />

                        <label class="sign" for="province">Province:</label>
                        <input className='inps' type="province" id="province" name="province" required />

                        <label class="sign" for="district">District:</label>
                        <input className='inps' type="district" id="district" name="district" required />

                        <label class="sign" for="city">City:</label>
                        <input className='inps' type="city" id="city" name="city" required />
                    </div>
                            

                </form>
                <button class="admin btn btn-danger" type="submit">Sign Up</button>
            </div>
            
        </div>
     );
}
 
export default Signup;
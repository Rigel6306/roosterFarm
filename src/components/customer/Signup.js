import '../../css/Signup.css'

const Signup = () => {
    return ( 
        <div className="signupComponent">
            <h1>Sign Up</h1>

            <form action="/signup" method="post" class="form">
                <div class="personal">
                    <h5>Personal Information</h5>
                    <label class="sign" for="username">Username:</label>
                    <input type="text" id="username" name="username" required />
    
                    <label class="sign" for="email">Email Address:</label>
                    <input type="email" id="email" name="email" required />

                    <label class="sign" for="password">Password:</label>
                    <input type="password" id="password" name="password" required />

                    <label class="sign" for="contact">Contact Number:</label>
                    <input type="contact" id="contact" name="contact" required />
                </div>

                <div class="delivery">
                    <h5>Delivery Information</h5>
                    <label class="sign" for="address">Address:</label>
                    <input type="address" id="address" name="address" required />

                    <label class="sign" for="province">Province:</label>
                    <input type="province" id="province" name="province" required />

                    <label class="sign" for="district">District:</label>
                    <input type="district" id="district" name="district" required />

                    <label class="sign" for="city">City:</label>
                    <input type="city" id="city" name="city" required />
                </div>
                        

        </form>
        <button class="admin btn btn-danger" type="submit">Sign Up</button>
        </div>
     );
}
 
export default Signup;
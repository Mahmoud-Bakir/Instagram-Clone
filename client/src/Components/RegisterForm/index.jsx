import "../RegisterForm/style.css"
import logo from "../../assets/instagram.svg" 
import playstore from "../../assets/playstore.png" 
import micosoft from "../../assets/microsoft.png" 
import Partition from "../Partition";
import Button from "../Button";
const RegisterForm = () => {
    return (
        <>
          <div className="signup-form-container">
            <div>
            <img src={logo} alt="Instagram"/>
            </div>
            <p className="header">Sign up to see photos and videos from your friends.</p>
            <Button name={"Log in with Facebook"}/>
            <p>OR</p>
            <div className="part">
            <Partition Itype={"email"} holder={"Email"}/>
            </div>
            <div className="part">
            <Partition Itype={"text"} holder={"Full Name"}/>
            </div>
            <div className="part">
            <Partition Itype={"text"} holder={"Username"}/>
            </div>
            <div className="part">
            <Partition Itype={"password"} holder={"Password"}/>
            </div>
            <p className="subtitle">
            People who use our service may have uploaded your contact information to Instagram. Learn More
            </p>
            <p className="subtitle">
            By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .
            </p>
            <Button name={"Signup"}/>
          </div>
          <div className="existing-container">
            <p>Have an account? <span>Login</span></p>
          </div>
       </>
    );
}
export default RegisterForm;

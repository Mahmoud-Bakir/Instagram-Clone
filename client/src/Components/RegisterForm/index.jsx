import "../RegisterForm/style.css"
import logo from "../../assets/instagram.svg" 
import playstore from "../../assets/playstore.png" 
import micosoft from "../../assets/microsoft.png" 
import Partition from "../Partition";
import Button from "../Button";
import {useNavigate} from 'react-router-dom'; 
const RegisterForm = () => {
  const navigater = useNavigate()
  const login = () => navigater('/login')
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
            <p>Have an account? <span onClick={login}>Login</span></p>
          </div>
          <div className="get">
            <span>Get the app</span>
            <div className="stores">
             <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D985327B7-64EA-431A-BB2D-0AF9C99DE09E%26utm_campaign%3DsignupPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge"><img src={playstore} alt="playstore" className="play"/></a>
             <a href=""><img src={micosoft} alt="microsoft Store" className="micro" /></a>
            </div>
          </div> 
       </>
    );
}
export default RegisterForm;

import "./style.css"
import myImage from "../../assets/instagram.svg" 
import Partition from "../Partition";
const LoginForm = () => {
    return (
        <>
          <div className="form-container">
            <img src={myImage} alt="Instagram" />
            <div className="part">
            <Partition Itype={"email"} holder={"Phone number, username, or email"}/>
            </div>
            <div className="part">
            <Partition Itype={"password"} holder={"Password"}/>
            </div>
            

          </div>
     
       </>
    );
}
export default LoginForm;

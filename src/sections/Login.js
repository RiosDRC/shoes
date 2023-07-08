import { Link } from "react-router-dom";
import { facebook, google, logshoes, twitter } from "../assets";

const Login = () => {
    return (
        <div className="login">
            <div className="left">
                <img src={logshoes} alt="" />
            </div>
            <div className="right">
                <h1>Welcome Back!</h1>
                <form onSubmit={e=>e.preventDefault()}>
                    <p>Username</p>
                    <div className="username">
                        <i className="fa-solid fa-user"></i>
                        <input type="text" name="user" required placeholder="Username"/>
                    </div>

                    <p className="passwordTag">Password</p>
                    <div className="password">
                        <i className="fa-solid fa-lock"></i>
                        <input type="password" required placeholder="Password"/>
                    </div>

                    <p className="forgetTag">Forget password?</p>

                    <button>Login</button>

                    <div className="loginIcons">
                        <Link><img src={google} alt="" /></Link>
                        <Link><img src={facebook} alt="" /></Link>
                        <Link><img src={twitter} alt="" /></Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Login;
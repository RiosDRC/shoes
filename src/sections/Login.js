import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login">
            <div className="left">
                <img src="./image/logshoes.png" alt="" />
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
                        <Link><img src="./image/google.png" alt="" /></Link>
                        <Link><img src="./image/facebook.png" alt="" /></Link>
                        <Link><img src="./image/twitter.png" alt="" /></Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Login;
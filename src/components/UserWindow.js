import { useContext } from "react"
import { DataContext } from "../context/DataContext"

const UserWindow = () => {
    const { setIsUserVisible } = useContext(DataContext);

    const handleSubmit = e => {
      const formData = new FormData(e.target)
      console.log({info: {email: formData.get('email'), password: formData.get('password')}})
    }

  return (
    <div className="window">
        <div className="closeX">
            <i className="fa-solid fa-square-xmark" onClick={() => setIsUserVisible(prev=>!prev)}/>
        </div>
        <div className="userWindow">
          <h2>Shoe<span>s</span></h2>
          <form onSubmit={e => {e.preventDefault(); handleSubmit(e)}}>
            <label>Email</label>
            <input name='email' type="email" required/>
            <label>Password</label>
            <input name='password' type="password" required/>
            <button type="submit">Login</button>
            <h5>Forgot your password?</h5>
          </form>
        </div>
    </div>
  )
}

export default UserWindow
import { Link } from "react-router-dom"
import { ReactComponent as tonedLogo } from "../../imgs/toned-logo.svg"

export default function UserLogin() {
  return (
    <div>
      <form>
        {/* <tonedLogo /> */}
        <img src={tonedLogo} alt="logo" />
        <label htmlFor="username">Username</label>
        <input type="text" />
        <Link to="/exerciselog">
          <button>LOGIN</button>
        </Link>
      </form>

      <div>
        <form>
          <label>Don't Have an Account?</label>
          <Link to="/createuser">
            <button type="submit">SIGN UP!</button>
          </Link>
        </form>
      </div>
    </div>
  )
}

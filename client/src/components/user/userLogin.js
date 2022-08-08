import { Link } from "react-router-dom"

export default function UserLogin() {
  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" />
        <button>LOGIN</button>
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

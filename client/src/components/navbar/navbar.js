import React from "react"

// We import bootstrap to make our application look better.
// import "bootstrap/dist/css/bootstrap.css"

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom"

// Here, we display our Navbar
export default function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>

        <div>
          <ul>
            {/* <li>
              <NavLink to="/create">Create Exercise</NavLink>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  )
}

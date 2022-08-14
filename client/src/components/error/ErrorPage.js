import React from "react"
import { useNavigate } from "react-router"

import tonedTitle from "../../imgs/toned-title.svg"

export default function ErrorPage() {
  const navigate = useNavigate()

  return (
    <div className="center">
      <img src={tonedTitle} alt="toned" className="center" />
      <h2 className="tonedLabel">
        Sorry, something went wrong. Please Login to Continue
      </h2>
      <button
        onClick={() => navigate("/")}
        className="tonedButton"
        style={{ marginBottom: "5%" }}
      >
        Log In
      </button>
    </div>
  )
}

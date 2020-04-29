import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";


function Content() {
  const [toggleSwitch, setToggleSwitch] = useState(false)
  const [isPost, setIsPost] = useState(false)
  const [response, setResponse] = useState("")
  const isFirstRender = useRef(false)


  useEffect(() => {
    isFirstRender.current = true;
  }, [])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
    } else {
      let toggle = "";

      if (toggleSwitch) toggle = "plug_on";
      else toggle = "plug_off";

      axios.post("http://192.168.1.124:3000/" + toggle)
        .then(() => {

          setIsPost(false)
          setResponse("success")
        })
        .catch(() => {

          setIsPost(false)
          setResponse("failed")
        })
    }
  }, [toggleSwitch])

  return (
    <div>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child box">
            <p className='title'>Plug1</p>

            <div className="content">

              <div className="field">
                <input id="plugSwitch" type="checkbox" name="plugSwitch" defaultChecked={toggleSwitch} className="switch is-rounded" onClick={() => [setToggleSwitch(!toggleSwitch), setIsPost(true), setResponse("")]}></input>
                <label htmlFor="plugSwitch">
                  {toggleSwitch ? "ON" : "OFF"}
                </label>
              </div>

              {isPost ? <progress className="progress is-dark" max="100"></progress> : ""}

              {response === "failed" ? <span className="has-text-danger">ERROR</span> : ""}
              {response === "success" ? <span className="has-text-primary">Success</span> : ""}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content;
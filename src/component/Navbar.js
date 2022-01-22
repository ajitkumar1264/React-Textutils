import React from 'react'

export default function Navbar(props) {



    return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid mx-5">
        <a className="navbar-brand" href="/lo"><h4>Textutils</h4></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-3 " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
          </ul>
        </div>
       
        <button type="button" onClick={props.cos} class={`btn btn-${props.fot}`}>button</button>
        <div className={`form-check form-switch  mx-3 my-2 text-${props.mode==="light"?"dark":"light"}`}>
  <input className="form-check-input" type="checkbox" onClick={props.fun} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable to {props.mod}</label>
</div>

      </div>  
    </nav>
    )
}

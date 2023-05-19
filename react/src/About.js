import { Outlet, Link } from "react-router-dom";

import React from 'react'

export default function About() {
  return (
    <div>
         <Link to='/'>home</Link>
         <p> hello from about</p>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
            <Link to='/'>home</Link>
            <Link to="/about"> about </Link>
            <h1>Hello World React</h1>
    </header>
  )
}

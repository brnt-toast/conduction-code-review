import React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import Todo from './components/Todo'

const NUM = 3

export default function App() {
  return (
    <>
        <Header />
        <Todo />
        <Footer />
    </>
  )
}

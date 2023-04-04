import React from 'react'
import Header from '../../component/Header/Header'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <main>
        <Header />
        <Outlet />
      </main>
    </div>
  )
}

export default Home
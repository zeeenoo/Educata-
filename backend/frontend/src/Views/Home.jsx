import React from 'react'
import {NavBar, Footer} from "../components";
import { navbarData, footerData } from "../const/const";

function Home() {
  return (
    <div>
        <NavBar data={navbarData}/>
        <Footer data={footerData}/>
    </div>
  )
}

export default Home
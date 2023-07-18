'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.min.css';

export default function Home() {

  function addressCopy() {
    navigator.clipboard.writeText("Road no 12b, Panchsheel Path, Jagannathpur, Gamaharia, Jamshedpur, Jharkhand 832108");
    toast("Address copied")
  }

  function websiteCopy(){
    navigator.clipboard.writeText("https://ashishsahu1.github.io/");
    toast("Website Link copied")
  }

  function emailCopy(){
     navigator.clipboard.writeText("its.ashish.sahu@gmail.com");
    toast("Email copied")
  }

  function phoneCopy(){
     navigator.clipboard.writeText("8210209272");
    toast("Phone Number copied")
  }

  return (
    <main className={styles.main}>
      <div className="container">
        <div className="card">

          <div className="front side">
            <h1 className="logo">Ashish Sahu</h1>
          </div>

          <div className="back side">
            <h3 className="name">Ashish Sahu</h3>
            <div>Software developer</div>
            <div className="info">
              <div className="icons">
                <div className="linkedin"></div>
              </div>
              <p onClick={emailCopy}><span className="property">Email: </span>its.ashish.sahu@gmail.com</p>
              <p onClick={phoneCopy}><span className="property">Phone: </span>82102029272</p>
              <p onClick={websiteCopy}><span className="property">Website: </span>https://ashishsahu1.github.io/</p>
              <p onClick={addressCopy}><span className="property">Address: </span>Road no 12b, Panchsheel Path, Jagannathpur, Gamaharia, Jamshedpur, Jharkhand 832108</p>
            </div>
          </div>

        </div>
      </div>
      <ToastContainer />
    </main>
  )
}

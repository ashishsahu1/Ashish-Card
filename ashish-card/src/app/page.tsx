'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.min.css';
// import { CiLinkedin, CiTwitter } from 'react-icons/ci';
import { BsGithub,BsLinkedin,BsTwitter } from 'react-icons/bs';
import dp from "../assets/dpp2.jpeg"
// import dp2 from "../assets/dpp2-removebg-preview.png"
import dp3 from "../assets/dpp2-removebg-preview.png"

export default function Home() {

  function addressCopy() {
    navigator.clipboard.writeText("Road no 12b, Panchsheel Path, Jagannathpur, Gamaharia, Jamshedpur, Jharkhand 832108");
    toast("Address copied")
  }

  function websiteCopy() {
    navigator.clipboard.writeText("https://ashishsahu1.github.io/");
    toast("Website Link copied")
  }

  function emailCopy() {
    navigator.clipboard.writeText("its.ashish.sahu@gmail.com");
    toast("Email copied")
  }

  function phoneCopy() {
    navigator.clipboard.writeText("8210209272");
    toast("Phone Number copied")
  }

  function githubCopy() {
    navigator.clipboard.writeText("https://github.com/ashishsahu1");
    toast("Email copied")
  }

  function linkedinCopy() {
    navigator.clipboard.writeText("https://www.linkedin.com/in/ashishsahu2/");
    toast("Linkedin copied")
  }

  function twitterCopy() {
    navigator.clipboard.writeText("https://twitter.com/myself_Ashish_");
    toast("Twitter copied")
  }

  const openInNewTabGithub = () => {
    window.open("https://github.com/ashishsahu1", "_blank", "noreferrer");
  };

  const openInNewTabLinkedin = () => {
    window.open("https://www.linkedin.com/in/ashishsahu2/", "_blank", "noreferrer");
  };

  const openInNewTabTwitter = () => {
    window.open("https://twitter.com/myself_Ashish_", "_blank", "noreferrer");
  };

  return (
    <main className={styles.main}>
      <div className="container">
        <div className="card">

          <div className="front side">
            <Image
              className='img'
              src={dp3}
              width={370}
              height={400}
              alt="Picture of the author"
            />
            <h1 className="logo">Ashish Sahu</h1>
          </div>

          <div className="back side">
            <h3 className="name">Ashish Sahu</h3>
            <div className="info">

              <p onClick={emailCopy}><span className="property">Email: </span>its.ashish.sahu@gmail.com</p>
              <p onClick={phoneCopy}><span className="property">Phone: </span>82102029272</p>
              <p onClick={websiteCopy}><span className="property">Website: </span>https://ashishsahu1.github.io/</p>
              <p onClick={addressCopy}><span className="property">Address: </span>Road no 12b, Panchsheel Path, Jagannathpur, Gamaharia, Jamshedpur, Jharkhand 832108</p>
              <div className="icons">
                <div className="linkedin" onClick={githubCopy}  onDoubleClick={openInNewTabGithub}><BsGithub /></div>
                <div className="linkedin" onClick={linkedinCopy} onDoubleClick={openInNewTabLinkedin}><BsLinkedin /></div>
                <div className="linkedin" onClick={twitterCopy} onDoubleClick={openInNewTabTwitter}><BsTwitter /></div>
              </div>
              <p className='prompt'>*double click to open</p>
            </div>

          </div>

        </div>
      </div>
      <ToastContainer theme="dark" />
    </main>
  )
}

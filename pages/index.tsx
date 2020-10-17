import Head from 'next/head'
import styled, { keyframes } from "styled-components";
import { useSpring, animated } from 'react-spring'

// import styles from '../styles/Home.module.css'
import { Foot, Reviews } from '../components';
import { useState } from 'react';
const theme = {
  colorPrimary: "#2BB58E",
  colorSecondary: "#2B2D50",
  colorDark: "#707070",
  colorSuccess: "#30E3CA",
  colorRed: "#E24E4E",
  colorPurple: "#E049EA",
  colorLight: "#F8F8FF",
  colorWhite: "#FFF",
  colorInfo: "#83C1FD",
  colorBg: "#322F55",
  font: {
    xlarge: "4.6rem",
    large: "3rem",
    medium: "2.7rem",
    small: "2.4rem",
    xsmall: "1.8rem",
    xxsmall: "1.6rem",
    xxxsmall: "1.4rem",

    mainFont: "Gotham Rounded",
    extra: "Segoe UI",
    offSet: "Mongolian Baiti"
  },
  breakPoints: {
    bpLargest: "1700px",
    bpxxLarge: "1500px", // 1550px
    bpxLarge: "69.375rem", // 1110px
    bpLarge: "56.25rem", //900px
    bpMedium: "43.75rem",  //700px
    bpSmall: "37.5rem",//600px
    bpxSmall: "400px"
  }
}
const rotation = keyframes`
    0% {
        transform: rotate(0deg); 
    }
    20% {
        transform: rotate(180deg); 
    }
    100% {
        transform: rotate(360deg); 
    }
    
`

const triangle = keyframes`
  0% {
      right: 2rem; 
  }
  50%{
      right: 4rem
  }
  100%{
      right: 2rem;
  }
`
const triangleMedium = keyframes`
  0% {
      left: 2rem; 
  }
  50%{
      left: 4rem
  }
  100%{
      left: 2rem;
  }
`

const diamond = keyframes`
    0% {
        transform: rotateX(0deg)
    }
    50%{
        transform: rotateX(180deg)

    }
    100%{
        transform: rotateX(0deg)

    }
`
const smileEnvelope = keyframes`
    0% {
        transform: rotateY(0deg)
    }
    50%{
        transform: rotateY(180deg)

    }
    100%{
        transform: rotateY(0deg)

    }
`

const circle = keyframes`
    0% {
        transform: scale(1)
    }
    40%{
        transform: scale(1.2)
    }
    45%{
        transform: scale(1)
    }
    50%{
        transform: scale(1.2)
    }
    55%{
        transform: scale(1)
    }
`

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr repeat(7, min-content);
  grid-template-columns: repeat(10, [col-start] minmax(min-content, 1fr) [col-end] );
  overflow: hidden;

  .navbar-mobile{
    position: fixed;
    top: 0rem;
    right: 0rem;
    display: grid;
    align-items: center;
    place-items: center;
    padding: 2rem;
    z-index: 1200;
    display: none; 
    @media only screen and (max-width: ${theme.breakPoints.bpSmall}) {
        display: grid; 
    }
    &__icon{
        display: grid;
        align-items: center;
        place-items: center;
        align-self: center;
        height: 4rem;
        width: 4rem;
        padding: 0rem .1rem;
        transition: all .3s ease-in-out .1s;
        z-index: 1300;
        cursor: pointer;

        path{
            height: 100%;
            fill: white;
            color: white;
        }
    }
    &__overlay{
        content: "";
        position: fixed;
        top: 3rem;
        right: 3rem;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        background: linear-gradient(to bottom , ${theme.colorPrimary} 40% ,  ${theme.colorSecondary} ) ;
        /* transform: scale(0); */
        transition: all 1s cubic-bezier(.04,1.44,.91,-0.33);
    }
}
.navbar-mobile__list{
    position: fixed;
    top: 50%;
    /* left: -50%; */
    /* width: 25rem; */
    transform: translate(-50%, -50%);
    list-style: none;
    z-index: 1203;
    display: flex;
    flex-direction: column;
    &--item{
        text-transform: capitalize;
        padding: 1rem 5rem;
        margin: 1rem 0;
        cursor: pointer;
        text-align: center;
        background-image: linear-gradient(125deg,  transparent 50%,  ${theme.colorSecondary} 50% ) ;
        font-size: ${theme.font.small};
        transition: all .4s ease-in-out .1s;
        background-size: 230%;
        color: ${theme.colorBg};
        text-decoration: none;

        &:hover{
            background-position: 100%;
            transform: translateX(1rem);
        }
    }            

}
  .header{
    grid-column: 1/-1;
    width: 100%;
    /* height: 60vh; */
    background: ${theme.colorPrimary};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: max-content 1fr;
    color: ${theme.colorSecondary};
    align-self: flex-start;
    margin-bottom: 2rem;
    &-nav{
      grid-column: 1/-1;
      width: 100%;
      max-height: 7rem;
      display: flex;
      align-self: flex-start;
      justify-content: space-between;
      padding: 1rem 4rem;
      margin-bottom: 3.5rem;
      @media only screen and (max-width: ${theme.breakPoints.bpSmall}) {
        display: none; 
    }
      /* background: ${theme.colorSecondary}; */

      &__logo{
        height: 4.5rem;
        width: 6.5rem;
        /* border-radius: 50%; */
        overflow: hidden;
        &--image{
          object-fit: contain;
          height: 100%;
          width: 100%;
        }
      }
      &__list{
        display: flex;
        list-style-type: none;
        align-content: center;
        height: 100%;
        align-self: center;
      
        &--item{
          display: flex;
          padding: 1rem;
          align-self: center;
          font-size: ${theme.font.xsmall};
        }
      }
      &__button{
        place-self: center;
        border: solid 1px ${theme.colorSecondary};
        background: transparent;
        padding: 1rem 2rem;
        border-radius: 1rem;
        transition: all .2s .1s linear;
        &:focus{
          outline: none
        }
        &:hover{
          background: ${theme.colorSecondary};
          color: ${theme.colorPrimary};
        }
      }
    }
    &-text{
      display: grid;
      place-items: center;
      grid-template-rows: max-content;
      grid-auto-rows: max-content;
      align-self: center;
      justify-self: center;
      justify-items: flex-start;
      padding: 1.5rem;
      position: relative;
      @media only screen and (max-width: ${theme.breakPoints.bpLarge}) {
        grid-column: 1/-1;
        /* grid-row: 2; */
        text-align: center;
        justify-items: center;
      }
      &__title{
        font-size: ${theme.font.large};
        padding: 1.5rem 0;
      }
      &__subInfo{
        font-size: ${theme.font.xsmall};
        padding: 1rem 0;
        line-height: 1.5;
      }
      &__button{
        /* place-self: center; */
        border: solid 1px ${theme.colorSecondary};
        background: ${theme.colorSecondary};
        padding: 1rem 2rem;
        margin: 1rem 0;
        color: ${theme.colorWhite};
        border-radius: 1rem;
        transition: all .2s .1s linear;
        &:focus{
          outline: none
        }
        &:hover{
          background: ${theme.colorPrimary};
          color: ${theme.colorSecondary};
          border: solid 1px ${theme.colorSecondary};
        }
      }
      
      &--floatingIcons{
        position: absolute;
      }
      .ex{
        top: 0;
        left: 0;
        transition: all 1s ease-in;
        animation: ${rotation} 2s ease-in-out 0s infinite; 
        @media only screen and (max-width: ${theme.breakPoints.bpLarge}) {
          top: 12rem;
          left: -3rem;
        }
      }
      .diamond{
        position: absolute;
        bottom: 5rem;
        right: 0;
        backface-visibility: visible;
        /* transform: rotateX('angle') */
        transition: all 2s ease-in;
        animation: ${diamond} 3s ease-in-out 0s infinite; 
      }
      .smileEnvelop{
        position: absolute;
        top: 1rem;
        right: -8rem;
        backface-visibility: visible;
        /* transform: rotateX('angle') */
        transition: all 2s ease-in;
        animation: ${smileEnvelope} 3s ease-in-out 0s infinite;
      }
    }
    &-container-image{
        position: relative;
        .header-image{
          @media only screen and (max-width: ${theme.breakPoints.bpSmall}) {
           width: 80%;
          }
        }
        @media only screen and (max-width: ${theme.breakPoints.bpLarge}) {
          grid-column: 1/-1;
          grid-row: 2;
          text-align: center;
        }
        @media only screen and (max-width: ${theme.breakPoints.bpSmall}) {
          grid-row: 1;
    }
        &--floatingIcons{
          position: absolute;
        }
        .circle{
          position: absolute;
          top: 1rem;
          right: 10rem;
          backface-visibility: visible;
          /* transform: rotateX('angle') */
          transition: all 2s ease-in;
          animation: ${circle} 3s ease-in-out 0s infinite;
          @media only screen and (max-width: ${theme.breakPoints.bpxLarge}) {
            top: -3rem;
          } 
        }
        .doubleTriangle{
          position: absolute;
          bottom: 1rem;
          right: 10rem;
          max-width: 6rem;
          backface-visibility: visible;
          /* transform: rotateX('angle') */
          transition: all 2s ease-in;
          animation: ${triangle} 3s ease-in-out 0s infinite;
          @media only screen and (max-width: ${theme.breakPoints.bpLarge}) {
            bottom: 15rem;
            left: 6rem;
            animation: ${triangleMedium} 3s ease-in-out 0s infinite;
          }
        }
      }
    &-waveSvg{
      grid-column: 1/-1;
      width: 100%;
    }
  }

  .features{
    grid-column: 2/10;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-template-rows: max-content;
    justify-items: center;
    color: ${theme.colorSecondary};
    align-self: flex-start;
    margin-bottom: 2rem;
    @media only screen and (max-width: ${theme.breakPoints.bpLarge}) {
      margin: 2rem;
    }
    @media only screen and (max-width: ${theme.breakPoints.bpSmall}) {
      grid-column: 1/-1;
      margin: 2rem 0;
    }
    &-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      @media only screen and (max-width: ${theme.breakPoints.bpLarge}) {
        margin: 2rem;
      }
      &__image{
        align-self: center;
        justify-self: center;
      }
      &__text{
        text-align: center;
        h3{
          font-size: ${theme.font.medium};
          padding: 2rem 1rem;
        }
        p{
          font-size: ${theme.font.xsmall};
          padding: .2rem 1rem;
        }
      }
    }
  }

  .quickMessage{
    grid-column: 2/10;
    width: 97%;
    /* height: 60vh; */
    /* background: ${theme.colorPrimary}; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr) );
    grid-template-rows: max-content;
    box-shadow:  0.3rem 0.3rem .7rem #00000073,
      -0.3rem -0.3rem .7rem rgba(230 230 230 / 29%);
    color: ${theme.colorSecondary};
    align-self: flex-start;
    justify-items: center;
    padding: 1rem 2rem 0%;
    margin: 2rem 1rem;
    @media only screen and (max-width: ${theme.breakPoints.bpSmall}) {
      grid-column: 1/-1;
      margin: 2rem 0;
    }
    
    &-image{
      max-height: 28rem;
    }
    &-text{
      text-align: left;
      @media only screen and (max-width: ${theme.breakPoints.bpLarge}) {
        text-align: center;
      }
      h3{
        font-size: ${theme.font.medium};
        padding: 2rem 0rem;
      }
      p{
        font-size: ${theme.font.xsmall};
        padding: .2rem 0rem;
      }
    }
    &-button{
      border: solid 1px ${theme.colorSecondary};
      background: ${theme.colorSecondary};
      padding: 1rem 2rem;
      margin: 1rem 0;
      color: ${theme.colorWhite};
      border-radius: 1rem;
      transition: all .2s .1s linear;
      &:focus{
        outline: none
      }
      &:hover{
        background: ${theme.colorPrimary};
        color: ${theme.colorSecondary};
        border: solid 1px ${theme.colorSecondary};
      }
    }
  }

  .courses{
    grid-column: 2/10;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
    grid-template-rows: max-content 1fr;
    /* grid-gap: 2rem 4rem; */
    justify-items: center;
    color: ${theme.colorSecondary};
    align-self: flex-start;
    margin: 3rem;
    @media only screen and (max-width: ${theme.breakPoints.bpSmall}) {
      grid-column: 1/-1;
      margin: 2rem 0;
    }

    &-title{
      grid-column: 1/-1;
      text-align: center;
      font-size: ${theme.font.medium};
      padding: 2rem 1rem;
      color: ${theme.colorSecondary};
      &--sub{
        font-size: ${theme.font.xxsmall};
        display: flex;
        padding: .2rem 0rem;
      }
    } 
    &-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      border-radius: 1.2rem;
      max-width: 30rem;
      overflow: hidden;
      align-self: flex-start;
      margin-top: 1rem;
      box-shadow:  0.3rem 0.3rem .7rem #00000073,
      -0.3rem -0.3rem .7rem rgba(230 230 230 / 29%);
      @media only screen and (max-width: ${theme.breakPoints.bpLarge}) {
        margin: 2rem;
      }
      &__image{
        align-self: center;
        justify-self: center;
        object-fit: cover;
        width: 100%;
      }
      &__text{
        text-align: left;
        padding: 1.5rem;
        h3{
          opacity: .6;
          font-size: ${theme.font.xxsmall};
          padding: 2rem 1rem;
        }
        &--span{
          font-size: ${theme.font.xsmall};
          opacity: 1;
          padding: .2rem 0rem;
          color: ${theme.colorSecondary};
        }
        &--paragraph{
          font-size: ${theme.font.xxsmall};
          opacity: .6;
          padding: .2rem 0rem;
        }
        &--stats{
          display: flex;
          width: 100%;
          border-top: solid 1px #00000036;
          justify-content: space-between;
          padding: 1rem;
          margin-top: .6rem;
          font-size: ${theme.font.xxsmall};
          opacity: .6;
        }
      }
    }
    &-button{
      grid-column: 1/-1;
      border: solid 1px ${theme.colorSecondary};
      background: ${theme.colorSecondary};
      padding: 1rem 2rem;
      margin: 3rem 0;
      color: ${theme.colorWhite};
      border-radius: 1rem;
      transition: all .2s .1s linear;
      &:focus{
        outline: none
      }
      &:hover{
        background: ${theme.colorPrimary};
        color: ${theme.colorSecondary};
        border: solid 1px ${theme.colorSecondary};
      }
    }
  }

`
export default function Home() {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(!true) 
  const toggleMobileNav = () => {
    setMobileNavIsOpen(!mobileNavIsOpen)
  }
  // const closeMobileNav = () => {
  //     setMobileNavIsOpen(false)
  // }
  const spring = useSpring({
    transform: mobileNavIsOpen ? "scale(170)" : "scale(0)"
  })
  const springMove = useSpring({
    left: mobileNavIsOpen ? "50%;" : "-50%"
  })
  return (
    <Container>
       <div className="navbar-mobile">
                <span className="navbar-mobile__icon" onClick={toggleMobileNav} >
                    <img src="/images/menu.svg" alt="menu svg"/>
                </span>
                <animated.div style={{ transform: spring.transform }} className="navbar-mobile__overlay"></animated.div>
            </div>
            <animated.ul style={{ left: springMove.left }} onClick={toggleMobileNav} className="navbar-mobile__list">
                <a href='/' className="navbar-mobile__list--item">home</a>
                <a href='#about' className="navbar-mobile__list--item">About</a>
                <a href='#skills' className="navbar-mobile__list--item">Pricing</a>
                <a href='#project' className="navbar-mobile__list--item">courses</a>
                <a href='#contact' className="navbar-mobile__list--item">contact</a>
            </animated.ul>

      <div className="header">
        <nav className="header-nav">
          <div className="header-nav__logo">
            <img className="header-nav__logo--image" src="/images/logo1.png" alt="" />
          </div>
          <ul className="header-nav__list">
            <li className="header-nav__list--item">Home</li>
            <li className="header-nav__list--item">About</li>
            <li className="header-nav__list--item">Pricing</li>
            <li className="header-nav__list--item">Courses</li>
            <li className="header-nav__list--item">Contact</li>
          </ul>
          <button className="header-nav__button">Sign In</button>
        </nav>

        <div className="header-text">
          <h1 className="header-text__title">
            Easily the Netflix of Education
            <br /> for African students
          </h1>
          <p className="header-text__subInfo">
            Learn and improve your skills across
            <br /> business, tech, design and more.
            <br /> taught by expert to help your work force
            <br /> do what ever comes next.
          </p>
          <img className="header-text__image" src="/images/mobileLink.png" alt="mobile App Links" />
          <button className="header-text__button">Get Started</button>

          <img className="header-text--floatingIcons ex" src="/images/ex.png" alt="ex icon" />
          <img className="header-text--floatingIcons diamond" src="/images/diamond.png" alt="png icon" />
          <img className="header-text--floatingIcons smileEnvelop" src="/images/smileEnvelop.png" alt="png icon" />
        </div>

        <div className="header-container-image">
          <img className="header-image" src="/images/feature.png" alt="feature Image" />

          <img className="header-container-image--floatingIcons circle" src="/images/circle.png" alt="icon" />
          <img className="header-container-image--floatingIcons doubleTriangle" src="/images/doubleTriangle.png" alt="png icon" />

        </div>

        <img className="header-waveSvg" src="/images/wave.png" alt="header-waveSvg" />

      </div>
      <div className="features">
        <div className="features-container">
          <img src="/images/teacherIcon.png" alt="teacher Icon" className="features-container__image" />
          <div className="features-container__text">
            <h3>Genius Teachers</h3>
            <p>
              Afrilearn integrates genius
              <br /> teachers from all over the
              <br /> continent.
            </p>
          </div>
        </div>
        <div className="features-container">
          <img src="/images/videoIcon.png" alt="teacher Icon" className="features-container__image" />
          <div className="features-container__text">
            <h3>Engaging Video Lessons</h3>
            <p>
              Includes developers and animators to
              <br /> deliver engaging video
              <br /> lessons.
            </p>
          </div>
        </div>
        <div className="features-container">
          <img src="/images/examIcon.png" alt="teacher Icon" className="features-container__image" />
          <div className="features-container__text">
            <h3> Exam Practice </h3>
            <p>
              Practice what you've learned via
            <br /> gamified exam practice via Web
            <br /> and App subscription services.
            </p>
          </div>
        </div>
      </div>

      <div className="quickMessage">
        <img className="quickMessage-image" src="/images/girlCircle.png" alt="girl Circle" />
        <div className="quickMessage-text">
          <h3>
            Learn To Code Anytime
            And Everywhere
          </h3>
          <p>
            Easily the Netflix of education for African students,
            Afrilearn integrates genius teachers, developers and
            animators to deliver engaging video lessons and gamified
            exam practice via Web and App subscription services.
          </p>
          <button className="quickMessage-button">Get Started</button>
        </div>
      </div>

      <div className="courses">
        <h3 className="courses-title">
          Check Out Our Newest <br />
          <span className="courses-title--sub">With Our Growing Catalog Of Over 150 programs From Beginner To Advanced</span>
        </h3>
        <div className="courses-container">
          <img className="courses-container__image" src="/images/js.png" alt="js icon" />
          <div className="courses-container__text">
            <h3>Javascript</h3>
            <span className="courses-container__text--span">The Complete JavaScript course</span> <br />
            <p className="courses-container__text--paragraph">
              JavaScript is how you build interactivity on the web pages, its easy and flexible...
            </p>
            <p className="courses-container__text--stats">
              <span>12 Lectures</span>
              <span>14 videos</span>
            </p>
          </div>
        </div>

        <div className="courses-container">
          <img className="courses-container__image" src="/images/angular.png" alt="css icon" />
          <div className="courses-container__text">
            <h3>Angular</h3>
            <span className="courses-container__text--span">Learn Angular Fundamentals</span> <br />
            <p className="courses-container__text--paragraph">
              Learn how to build and launch Angular web applications using ...
            </p>
            <p className="courses-container__text--stats">
              <span>12 Lectures</span>
              <span>14 videos</span>
            </p>
          </div>
        </div>

        <div className="courses-container">
          <img className="courses-container__image" src="/images/html.png" alt="html icon" />
          <div className="courses-container__text">
            <h3>HTML</h3>
            <span className="courses-container__text--span">Ultimate Web Developer Course</span> <br />
            <p className="courses-container__text--paragraph">
              HTML is the building blocks of the web. It gives pages structure and ..
            </p>
            <p className="courses-container__text--stats">
              <span>12 Lectures</span>
              <span>14 videos</span>
            </p>
          </div>
        </div>

        <button className="courses-button">View More</button>
      </div>

      {/* <Reviews /> */}

      <Foot />

    </Container>
  )
}

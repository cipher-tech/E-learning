import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import styled from "styled-components";
import { Foot, Reviews } from '../components';
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
const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr repeat(7, min-content);
  grid-template-columns: repeat(10, [col-start] minmax(min-content, 1fr) [col-end] );
  overflow: hidden;

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
      /* background: ${theme.colorSecondary}; */

      &__logo{
        height: 4.5rem;
        width: 4.5rem;
        border-radius: 50%;
        overflow: hidden;
        &--image{
          object-fit: cover;
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
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-template-rows: max-content;
    justify-items: center;
    color: ${theme.colorSecondary};
    align-self: flex-start;
    margin-bottom: 2rem;
    &-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
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
    width: 100%;
    /* height: 60vh; */
    /* background: ${theme.colorPrimary}; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: max-content;
    box-shadow:  0.3rem 0.3rem .7rem #00000073,
      -0.3rem -0.3rem .7rem rgba(230 230 230 / 29%);
    color: ${theme.colorSecondary};
    align-self: flex-start;
    justify-items: center;
    padding: 1rem 2rem 0%;
    margin: 2rem 1rem;
    &-image{
      max-height: 28rem;
    }
    &-text{
      text-align: left;
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
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    grid-template-rows: max-content 1fr;
    /* grid-gap: 2rem 4rem; */
    justify-items: center;
    color: ${theme.colorSecondary};
    align-self: flex-start;
    margin: 3rem;

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
  return (
    <Container>
      <div className="header">
        <nav className="header-nav">
          <div className="header-nav__logo">
            <img className="header-nav__logo--image" src="/images/logo.jpg" alt="" />
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
        </div>
        <img className="header-image" src="/images/feature.png" alt="feature Image" />

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
          Check Out Our Newest <br/>
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
              Learn how to build and launch React web applications using ...
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

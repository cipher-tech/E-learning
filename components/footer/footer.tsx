import React from 'react'
import styled from 'styled-components'

// import image from "../images/footerImg.jpg"
// import { ReactComponent as MapMarker } from "../images/svgIcons/map-marker.svg"
// import { ReactComponent as Phone } from "../images/svgIcons/phone-handset.svg"
// import { ReactComponent as Envelope } from "../images/svgIcons/envelope.svg"
// import { ReactComponent as Instagram } from "../images/svgIcons/instagram.svg"
// import logo from "../images/logo.svg"
// import { Link } from 'react-router-dom'
// import routes from '../navigation/routes'
// import CoinWidget from './widget/wigjet'

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
    /* height: 50vh; */
    grid-template-columns: 40rem calc(100% - 40rem); 
    align-items: flex-start;
    grid-column: 1/-1;
    background: rgb(5 4 4 / 96%);
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    max-width: 100vw;
    padding: 0rem 0rem;
    @media only screen and (max-width: ${theme.breakPoints.bpSmall}) {
        grid-template-columns: 100%; 
        width: 100%;
    }
    .footer-options{
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        text-align: center;
        justify-self: center;
        /* justify-self: center; */
        align-self: center;
        width: 100%;
        height: 100%;
        background: #020202 ;
        @media only screen and (max-width: ${theme.breakPoints.bpSmall}) {
            grid-row: end;
        }
        &-img{
            align-self: center;
            height: 5rem;
            /* width: 5rem; */
            margin: 2rem 1rem;
            /* border-radius: 50%; */
            overflow: hidden;

            img{
                height: 100%;
                width: 100%;
            }
        }
        &__socialLink{
            font-weight: lighter;
            font-size: ${theme.font.xsmall};
            padding: 1rem 0;
            color: ${theme.colorWhite };
            a{
                color: ${theme.colorWhite};
                text-decoration: none;
                font-size: ${theme.font.medium};
                margin-top: 1rem;
                &:visited, &:hover{
                    color: ${theme.colorWhite};
                }
                path{
                    fill: ${theme.colorWhite};
                    height: 100%;
                }
            }
        }
        &__credit{
            color: ${theme.colorPrimary};
            padding-top: 3rem;
            display: flex;
            /* width: 71%; */
            align-self: center;
        }
    }
    .footer-groupList{
        width: 100%;
        display: grid;
        padding: 2rem 3.5rem;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
        @media only screen and (max-width: ${theme.breakPoints.bpSmall}) {
            grid-template-columns: repeat(auto-fit, minmax(max-content 1fr));
            justify-items: center;
        }
    }
    .footer-list{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        list-style-type: none;
        text-align: left;
        width: max-content;
        align-self: flex-start;
        @media only screen and (max-width: ${theme.breakPoints.bpSmall}) {
            justify-content: center;
            width: 100%;
        }
        &-item{
            font-size: ${theme.font.xsmall};
            display: flex;
            justify-content: end;
            padding: 1rem 1rem;
            color: ${theme.colorWhite};
            text-decoration: none;
            @media only screen and (max-width: ${theme.breakPoints.bpLarge}) {
                justify-content: center;
            }
            &__icon{
                margin-right: 2.5rem;
                path{
                    fill: ${theme.colorPrimary} !important;
                    height: 100%;
                }
            }
            @media only screen and (max-width: ${theme.breakPoints.bpSmall}) {
                justify-content: center;
                width: 100%;
            }
        }
        &-item:first-child{
            font-size: ${theme.font.large};
            text-align: center;
            font-weight: 500;
            padding: 2rem .5rem;
            color: ${theme.colorPrimary};
            @media only screen and (max-width: ${theme.breakPoints.bpSmall}) {
                justify-content: center;
                width: 100%;
                
            }
        }
    }
`
const Footer = (props) => {
    return (
        <Container>
            {/* {props.children} */}
            <div className="footer-options">
                <div id="google_translate_element"></div>
                <span className="footer-options-img">
                    <img src={"/images/logo.png"} alt="logo" />
                </span>
                <p className="footer-options__socialLink">
                Afrilearn actively leverages a network of high-quality teachers, animators, and developers 
                to provide affordable, world-class education for Africans, anywhere.
                    <br />{/*  */}
                    <a href="/"> {/* <Instagram /> */} @Afrilearn</a>
                </p>
                <span className="footer-options__credit">
                    © {new Date().getFullYear()} cipher-tech
                </span>
            </div>
            <div className="footer-groupList">
                <ul className="footer-list">
                    <li className="footer-list-item"> Quick Links </li>
                    <a href="/" className="footer-list-item"> Contact</a>
                    <a href="/" className="footer-list-item"> Rates</a>
                    <a href="/" className="footer-list-item"> FAQ</a>
                    <a href={"/"} className="footer-list-item">About</a>
                    <a href={"/"} className="footer-list-item">Policies</a>
                </ul>
                {/* <ul className="footer-list">
                    <li className="footer-list-item">  </li>
                </ul> */}
                <ul className="footer-list">
                    <li className="footer-list-item"> Contact </li>
                    <li className="footer-list-item">  Location: Nigeria </li>
                    <a href="tel:+2348027855262" className="footer-list-item"> Tel: + 234 802 785 000 </a>
                    <a href="tel:+2348051544949" className="footer-list-item">  Tel: + 234 805 154 0000 </a>
                    <a href="mailto:hello@myafri.com" className="footer-list-item">  Mail us: hello@myafrilearn.com </a>
                </ul>

            </div>
            {/* <p className="footer-credit">
                C Cipher 2020
            </p> */}
        </Container>
    )
}

export default Footer
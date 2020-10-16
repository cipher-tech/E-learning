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
            width: 5rem;
            margin: 2rem 1rem;
            border-radius: 50%;
            overflow: hidden;

            img{
                height: 100%;
                width: 100%;
            }
        }
        &__socialLink{
            font-weight: lighter;
            font-size: ${theme.font.medium};
            color: ${theme.colorWhite + "70"};
            a{
                color: ${theme.colorWhite};
                text-decoration: none;
                font-size: ${theme.font.medium};
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
            display: flex;
            justify-content: end;
            padding: 1rem 1rem;
            color: ${theme.colorWhite};
            text-decoration: none;
            &__icon{
                margin-right: 2.5rem;
                path{
                    fill: ${theme.colorPrimary} !important;
                    height: 100%;
                }
            }
            @media only screen and (max-width: ${theme.breakPoints.bpSmall}) {
                justify-content: flex-start;
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
                    <img src={"/images/logo.jpg"} alt="logo" />
                </span>
                <p className="footer-options__socialLink">
                    Follow us on instagram for updates
                    <br />{/*  */}
                    <a href="/"> {/* <Instagram /> */} @Afrilearn</a>
                </p>
                <span className="footer-options__credit">
                    © 2020 Afrilearn
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
                    <li className="footer-list-item">  Nigeria </li>
                    <a href="tel:+2348066060467" className="footer-list-item">  +234 906 408 2900 </a>
                    <a href="tel:+2348066060467" className="footer-list-item">   +234 810 133 3244 </a>
                    <a href="mailto:cjgrandexchange@gmail.com" className="footer-list-item">  Mail us </a>
                </ul>

            </div>
            {/* <p className="footer-credit">
                C Cipher 2020
            </p> */}
        </Container>
    )
}

export default Footer
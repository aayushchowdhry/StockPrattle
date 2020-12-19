import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {bellSvg, settingsSvg} from './svgs.jsx';
import Ticker from 'react-ticker';

export default class NavBar extends Component{
    constructor(props){
        super(props);
        var toadd = []; var i = 0;
        while (i<20){
            if (i%2 == 0){
                toadd.push(({name:"SENSEX", value: "$$$", color: "#00B140"}));
            } else {
                toadd.push(({name:"NIFTY", value: "$$$", color: "#E21010"}));
            }
            i++;
        }
        this.state = {sbItems: toadd}
    }

    mouseIn(but){
        but.target.style.background = '#00B140';
        but.target.style.color = '#FFFFFF';
    }

    mouseOut(but){
        but.target.style.background = 'none';
        but.target.style.color = '#00B140';
    }

    render(){
    return (
        <div id="header" style={navBarStyle.header}>
        <div id="logoDiv" style={navBarStyle.logoDiv}>
            <img src={require("../../images/LogoGreen.jpeg")} alt="Stock Prattle Logo" style={navBarStyle.logo}/>
        </div>
        <div id="headerFunction" style={navBarStyle.headerFunction}>
            <div id="otherHeaderStuff" style={navBarStyle.otherHeaderStuff}>
                <div id="searchDiv" style={navBarStyle.searchDiv}>
                    <input id="searchBar" type="text" placeholder = {"Search"} style={navBarStyle.searchBar}/>
                </div>
                <button style={navBarStyle.button}>
                    {bellSvg}
                </button>
                <button style={navBarStyle.button}>
                    {settingsSvg}
                </button>
                <button id="accountButton" style={navBarStyle.button} onMouseOver={this.mouseIn}
                onMouseLeave={this.mouseOut} onClick={this.accountClick}>Help</button>
                <button id="accountButton" style={navBarStyle.button} onMouseOver={this.mouseIn}
                onMouseLeave={this.mouseOut} onClick={this.accountClick}>Contact Us</button>
                <div id="dropDown"/>
            </div>
        <marquee style={navBarStyle.stockTicker}>
        <div id="stockBar" style={navBarStyle.stockBar}>
            {this.state.sbItems.map((i, index) => (
                <p key={index} style={navBarStyle.sbTitle}>{i.name}<p style={{color: i.color, margin: 0}}>{i.value}</p></p>
            ))}
        </div>
        </marquee>
        </div>
        </div>
        )
    }
}

const navBarStyle= { header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: "140px",
        boxSizing: "border-box",
        background: "none",
        overflow: "none",
        // border: "thick solid black",
    }, headerFunction: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        height: "100%",
        // border: "thick solid black",
        boxSizing: "border-box",
        background: "none",
        marginRight: "10px",
        overflow: "hidden"
    }, stockTicker: {
        height: "50px",
        marginBottom: "10px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "20px",
        // border: "thick solid black",
        boxSizing: "border-box",
        background: "rgba(229, 229, 229, 0.6)",
        borderRadius: "20px",
        overflow: "scroll"
    }, stockBar: {
        height: "50px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "20px",
        // border: "thick solid black",
        boxSizing: "border-box",
        backgroundColor: "none",
        borderRadius: "20px",
    }, otherHeaderStuff: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        //border: "thick solid black",
        boxSizing: "border-box",
        background: "none"
    },searchDiv: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // border: "thick solid black",
        boxSizing: "border-box",
        background: "none"
    }, logoDiv: {
        height: "150px",
        width: "190px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // border: "thick solid black",
        boxSizing: "border-box",
        background: "none"
    },logo: {
        height: "133.75px",
        width: "138.75px"
    }, searchBar:{
        width: "600px",
        height: "40px",
        // paddingLeft: "10px",
        background: "rgba(0, 177, 64, 0.05)",
        border: "1px solid #00B140",
        boxSizing: "border-box",
        borderRadius: "50px",
        fontFamily: "Dosis",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "18px",
        textAlign: "center",
        outline: "none",
        // margin: "0px"
    }, button: {
        background: "none",
        width: "130px",
        height: "45px",
        marginRight: "30px",
        borderRadius: "30px",
        borderWidth: "0px",
        color: "#00B140",
        fontFamily: "Dosis",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "18px",
        outline: "none",
        cursor: "pointer",
        // border: "thick solid black",
    }, sbTitle: {
        margin: "0px",
        fontFamily: "Dosis",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "18px",
        outline: "none",
        display: "flex",
        flexDirection: "row",
        gap: "10px"
    }
}
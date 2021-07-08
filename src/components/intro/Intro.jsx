import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backSpeed: 120,
            strings: ["Developer", "Volunteer", "Goofy Goober"]
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/alanpic.jpeg" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi, my name is</h2>
                    <h1>Alan Rodriguez</h1>
                    <h3>I am a <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/arrow3.png" alt=""/> 
                </a>
            </div>
        </div>
    )
}

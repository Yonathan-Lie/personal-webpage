"use client"

import React from "react";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import {useEffect, useRef} from "react";
// @ts-ignore
import Typed from "typed.js";

export default function Hero() {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Front-End Developer", "Programmer"],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 800,
            loop: true,
            fadeOut: true,
            cursorChar: "",
        });

        return () => {
            typed.destroy();
        };
    }, []);

    const icons = [
        {
            src1: "/svgs/html.svg",
            alt1: "html",
            src2: "/svgs/css.svg",
            alt2: "css"
        }, {
            src1: "/svgs/js.svg",
            alt1: "javascript",
            src2: "/svgs/ts.svg",
            alt2: "typescript"
        }, {
            src1: "/svgs/react.svg",
            alt1: "react",
            src2: "/svgs/next.svg",
            alt2: "next"
        }, {
            src1: "/svgs/bs.svg",
            alt1: "bootstrap",
            src2: "/svgs/tailwind.svg",
            alt2: "tailwind"
        },
    ]

    return (
        <section id={"Home"}>
            <div className="bg-[#f9f9f9]">
                <div className="container lg:py-36 pt-16">
                    <div className="flex flex-col w-full h-full items-center justify-center">
                        <div
                            className={"flex lg:flex-row flex-col w-full justify-center items-center lg:items-start flex-wrap rounded-lg lg:border lg:shadow-lg "}>
                            <div
                                className={"lg:w-3/5 w-full order-2 lg:order-1 lg:p-6 px-8 flex flex-col items-center lg:items-start my-auto"}>
                                <div className={"h-28"}>
                                    <h1 className={"pb-4"}>Hi There, I&#39;m a <br/><span ref={el}></span></h1>
                                </div>
                                <p className={"text-center lg:text-start pb-4"}>Hi, I&#39;m Yonathan. Physics graduate
                                    turned front-end developer with a passion for
                                    creating beautiful and user-friendly web applications. Currently Based on Jakarta,
                                    Indonesia 📍
                                </p>
                                <div className={"flex flex-row gap-x-2"}>
                                    <Link href={"https://www.linkedin.com/in/yonathan-l/"}
                                          className={"transition ease-in-out hover:-translate-y-1g hover:decoration-blue-600 hover:text-blue-600 hover:scale-105"}>
                                        <FontAwesomeIcon icon={faLinkedin} size={"2x"}/>
                                    </Link>
                                    <Link href={"https://github.com/Yonathan-Lie"}
                                          className={"transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:decoration-blue-600 hover:text-blue-600"}>
                                        <FontAwesomeIcon icon={faGithub} size={"2x"}/>
                                    </Link>
                                </div>
                            </div>
                            <div
                                className={"text-center lg:w-2/5 w-3/5 order-1 lg:order-2 p-6 flex justify-center items-center"}>
                                <div className="aspect-square relative w-full border rounded-full">
                                    <Image src={"/profile.jpeg"} alt={"profile photo"} fill
                                           className={"object-cover rounded-full "} style={{}}/>
                                </div>
                            </div>
                            <div
                                className={"flex lg:flex-row flex-col lg:border-t w-full order-3 px-6 py-3 justify-between items-center"}>
                                <h2 className={"lg:border-none border-b border-t m-4 lg:h-1/2 flex justify-center items-center px-4"}>Tech
                                    Stack </h2>
                                <div
                                    className={"grid lg:grid-cols-4 grid-cols-2 lg:border-l  lg:ps-6 gap-4 grow lg:ms-8"}>
                                    {icons.map((iconData, index) => {
                                        return (
                                            <div key={index}
                                                 className={"flex flex-row gap-x-1 justify-center transition ease-in-out hover:-translate-y-1 hover:scale-105"}>
                                                <Image src={iconData.src1} alt={iconData.alt1} height={50} width={50}/>
                                                <Image src={iconData.src2} alt={iconData.alt2} height={50} width={50}/>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
import React from "react";
import Image from "next/image";

export default function Hero() {

    const icons = [
        {
            src: "/svgs/html.svg",
            alt: "html"
        }, {
            src: "/svgs/css.svg",
            alt: "css"
        }, {
            src: "/svgs/js.svg",
            alt: "javascript"
        }, {
            src: "/svgs/ts.svg",
            alt: "typescript"
        }, {
            src: "/svgs/react.svg",
            alt: "react"
        }, {
            src: "/svgs/next.svg",
            alt: "next"
        }, {
            src: "/svgs/bs.svg",
            alt: "bootstrap"
        }, {
            src: "/svgs/tailwind.svg",
            alt: "tailwind"
        }, {
            src: "/svgs/git.svg",
            alt: "git"
        }, {
            src: "/svgs/github.svg",
            alt: "github"
        },
    ]

    return (
        <div className="bg-[#f9f9f9]">
            <div className="container h-screen">
                <div className="flex flex-col w-full h-full items-center justify-center">
                    <div className={"flex flex-row w-full justify-center flex-wrap rounded-lg border shadow-lg"}>
                        <div className={"border-r md:w-3/5 w-full p-6"}>
                            <h1>Front-End React Developer👋🏻</h1>
                            <p>Hi, I&#39;m Yonathan. Physics graduate turned front-end developer with a passion for
                                creating
                                beautiful and user-friendly web applications. Currently Based on Jakarta, Indonesia 📍
                            </p>
                            <div className={"flex flex-row gap-x-2"}>
                                <i className="bi bi-github"></i>
                            </div>
                        </div>
                        <div className={"text-center md:w-2/5 w-full p-6 flex justify-center items-center"}>
                            <div className="aspect-square relative w-full h-full border rounded-full ">
                                <Image src={"/example_image1.png"} alt={"profile photo"} fill
                                       className={"object-cover rounded-full "} style={{}}/>
                            </div>
                        </div>
                        <div className={"flex flex-row border-t w-full px-6 py-3"}>
                            <div className={"w-1/5 flex justify-center items-center"}>Tech Stack |</div>
                            <div className={"flex flex-row w-4/5 justify-around"}>
                                {icons.map((iconData, index) => {
                                    return (
                                        <Image src={iconData.src} alt={iconData.alt} height={50} width={50}
                                               key={index}/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
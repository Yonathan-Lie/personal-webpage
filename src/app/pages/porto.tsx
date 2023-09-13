import Image from "next/image";
import Link from "next/link";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";


export default function Porto() {

    const porto = [
        {
            image: "/profileWeb.png",
            tag: "Profile Web",
            alt: "Profile Web",
            desc: "my online presence and the collection of personal information and activities shared on the internet",
            stack: ["NextJS", "Tailwind", "DaisyUI"],
            repo: "Code",
            repolink: "https://github.com/",
            redirect: "#"
        },
    ]

    return (
        <section id={"Portfolio"}>
            <div className="container py-4">
                <div className="flex flex-col w-full items-center justify-center">
                    <div className={"w-full lg:text-start text-center my-4"}>
                        <h3>Portfolio</h3>
                        <h2>Proof of Skills 😎</h2>
                    </div>
                    {porto.map((portoData, index) => {
                        return (
                            <div key={index}
                                 className={"flex flex-row w-full justify-center flex-wrap rounded-lg border shadow-md my-4"}>
                                <div className={"border-r w-full p-6 flex lg:flex-row flex-col-reverse"}>
                                    <div
                                        className={"lg:w-2/5 px-4 flex flex-col justify-center items-center text-center"}>
                                        <div className={"flex flex-col justify-center items-center my-2 gap-y-1"}>
                                            <h2 className={"mr-1"}>{portoData.tag}</h2>
                                            <p>{portoData.desc}</p>
                                        </div>

                                        <div className={"flex flex-row"}>
                                            {portoData.stack.map((value, index) => {
                                                return (
                                                    <strong key={index} className={"rounded-lg border p-2 m-2"}>
                                                        {value}
                                                    </strong>
                                                )
                                            })}
                                        </div>
                                        <Link href={portoData.repolink}
                                              className={"hover:underline hover:decoration-blue-600 hover:text-blue-600"}>
                                            <p>{portoData.repo}<FontAwesomeIcon icon={faGithub} className={"pl-1"}/></p>
                                        </Link>
                                    </div>
                                    <div className="rounded-lg border shadow-md lg:w-3/5 w-full p-4 relative"
                                         style={{aspectRatio: 16 / 9}}>
                                        <Link href={portoData.redirect}>
                                            <Image src={portoData.image} alt={portoData.alt} fill
                                                   className={"object-contain rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-105"}/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
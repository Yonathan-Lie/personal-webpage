import React from "react";
import Image from "next/image";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
// import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";

export default function Projects() {

    const project = [
        {
            image: "/photomatics.png",
            alt: "Photomatics",
            tag: "Photomatics.id",
            desc: "Photomatics is a company that provides photo booth rental services, self-portrait studio, and automatic photo taking machines ",
            stack: ["NextJS", "Bootstrap"],
            redirect: "https://photomatics.id/",
            note: "June 2023",
            redirectCode: "https://wa.me/6289503965969?text=Hi%20Yonathan%2C%20Can%20I%20request%20live%20demo%20for%20photomatics%3F"
        }, {
            image: "/Pulih.png",
            alt: "Pulih",
            tag: "PULIH",
            desc: "Yayasan Pulih is a non-profit organization that provides psychosocial support to individuals and communities who have experienced trauma",
            stack: ["NextJS", "Bootstrap"],
            redirect: "https://yayasan-pulih-v2.vercel.app/",
            note: "In-Progress",
            redirectCode: "https://wa.me/6289503965969?text=Hi%20Yonathan%2C%20Can%20i%20request%20live%20demo%20for%20Yayasan%20Pulih's%20Code%3F"
        },
    ]

    return (
        <section id={"Project"}>
            <div className="bg-[#f9f9f9]">
                <div className="container py-4">
                    <div className="flex flex-col w-full items-center justify-center py-4">
                        <div className={"w-full lg:text-start text-center mt-2"}>
                            <h3>Project</h3>
                            <h2>Where Things Done Professionally</h2>
                        </div>
                        {project.map((projectData, index) => {
                            return (
                                <div key={index}
                                     className={"flex flex-row w-full justify-center flex-wrap rounded-lg border shadow-md my-4"}>
                                    <div className={"border-r w-full p-6 flex lg:flex-row flex-col"}>
                                        <div className="rounded-lg border shadow-md lg:w-3/5 p-4 relative"
                                             style={{aspectRatio: 16 / 9}}>
                                            <Link href={projectData.redirect}>
                                                <Image src={projectData.image} alt={projectData.alt} fill
                                                       className={"object-cover rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-105 "}/>
                                            </Link>
                                        </div>
                                        <div
                                            className={"lg:w-2/5 px-4 flex flex-col my-auto justify-between h-full"}>
                                            <div className="flex sm:flex-row flex-col sm:justify-between justify-center items-center py-2 w-full">
                                                <h2>{projectData.tag}</h2>
                                                <div className={"my-auto"}>
                                                    <p className={"bg-[#181a2a] text-white rounded-full align-middle text-center px-2"}>{projectData.note}</p>
                                                </div>
                                            </div>
                                            <p>{projectData.desc}</p>
                                            <div>
                                                <div className={"flex flex-row w-100 mb-2"}>
                                                    {projectData.stack.map((value, index) => {
                                                        return (
                                                            <div key={index}
                                                                 className={"border rounded-lg p-2 mr-2"}>{value}</div>
                                                        )
                                                    })}
                                                </div>
                                                <div>
                                                    <div className="grid grid-cols-2 justify-between ">
                                                        <div>
                                                            <Link href={projectData.redirect}>
                                                                <p className={"text-white text-center rounded-lg bg-[#181a2a] flex items-center justify-center"}>
                                                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare}
                                                                                     className={"p-2"}/>View Site</p>
                                                            </Link>
                                                        </div>
                                                        <div>
                                                            <Link href={projectData.redirectCode}>
                                                                <p className={"rounded-lg text-center flex items-center justify-center"}>
                                                                    <FontAwesomeIcon icon={faWhatsapp}
                                                                                     className={"p-2"}/>Req Code</p>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
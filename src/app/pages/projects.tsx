import React from "react";
import Image from "next/image";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

export default function Projects() {

    const project = [
        {
            image: "/photomatics.png",
            alt: "Photomatics",
            tag: "Photomatics.id",
            desc: "Photomatics is a company that provides photo booth rental services, self-portrait studio, and automatic photo taking machines ",
            stack: ["NextJS", "Bootstrap"],
            repo: "Code",
            repolink: "https://github.com/",
            redirect: "https://photomatics.id/",
            note:""
        }, {
            image: "/Pulih.png",
            alt: "Pulih",
            tag: "PULIH",
            desc: "Yayasan Pulih is a non-profit organization that provides psychosocial support to individuals and communities who have experienced trauma",
            stack: ["NextJS", "Bootstrap"],
            repo: "Code",
            repolink: "https://github.com/",
            redirect: "https://yayasan-pulih-v2.vercel.app/",
            note:"(work in progress)"
        },
    ]

    return (
        <div className="bg-[#f9f9f9]">
            <div className="container">
                <div className="flex flex-col w-full items-center justify-center py-4">
                    <div className={"w-full lg:text-start text-center mt-2"}>
                        <h3>Project</h3>
                        <h2>Things Done Professionally</h2>
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
                                                   className={"object-cover rounded-lg"}/>
                                        </Link>
                                    </div>
                                    <div
                                        className={"lg:w-2/5 px-4 flex flex-col justify-center items-center text-center"}>
                                        <div className={"flex flex-col justify-center items-center my-2"}>
                                            <h2 className={"mr-1 "}>{projectData.tag}</h2>
                                            <small>{projectData.note}</small>
                                            <p className={"pt-1"}>{projectData.desc}</p>
                                        </div>

                                        <div className={"flex flex-row"}>
                                            {projectData.stack.map((value, index) => {
                                                return (
                                                    <strong key={index} className={"mx-2 rounded-lg border p-2"}>
                                                        {value}
                                                    </strong>
                                                )
                                            })}
                                        </div>
                                        <div className="pt-2 flex flex-row gap-x-3 w-full items-center justify-around">
                                            <Link href={projectData.redirect}>
                                                <p><FontAwesomeIcon icon={faArrowUpRightFromSquare} className={"pr-1"}/>View Site</p>
                                            </Link>
                                            <Link href={projectData.repolink}>
                                                <p>{projectData.repo}<FontAwesomeIcon icon={faGithub} className={"pl-1"}/></p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {

    const project = [
        {
            image: "/photomatics.png",
            alt: "Photomatics",
            tag: "Photomatics.id",
            desc: "Photomatics is a company that provides photo booth rental services, self-portrait studio, and automatic photo taking machines ",
            stack: ["NextJS", "Bootstrap"],
            repo: "ceritanya repo",
            redirtag: "Photomatics.id",
            redirect: "https://photomatics.id/"
        }, {
            image: "/Pulih.png",
            alt: "Pulih",
            tag: "PULIH",
            desc: "Yayasan Pulih is a non-profit organization that provides psychosocial support to individuals and communities who have experienced trauma",
            stack: ["NextJS", "Bootstrap"],
            repo: "ceritanya repo",
            redirtag: "acikiwir",
            redirect: "#"
        },
    ]

    return (
        <div className="bg-[#f9f9f9]">
            <div className="container h-screen">
                <div className="flex flex-col w-full h-full items-center justify-center">
                    <div className={"w-full text-start my-4"}>
                        <h3>Project</h3>
                        <h2>something here</h2>
                    </div>
                    {project.map((projectData, index) => {
                        return (
                            <div key={index}
                                 className={"flex flex-row w-full justify-center flex-wrap rounded-lg border shadow-md my-4"}>
                                <Link href={projectData.redirect}>
                                    <div className={"border-r w-full p-6 flex flex-row"}>
                                        <div className="rounded-lg border shadow-md w-3/5 p-4 relative" style={{aspectRatio:16/9}}>
                                            <Image src={projectData.image} alt={projectData.alt} fill
                                                   className={"object-cover rounded-lg"}/>
                                        </div>
                                        <div
                                            className={"w-2/5 px-2 flex flex-col justify-center items-center text-center"}>
                                            <div className={"flex flex-row justify-center items-center"}>
                                                <h2 className={"mr-1"}>{projectData.tag}</h2>
                                            </div>
                                            <p>{projectData.desc}</p>

                                            <div className={"flex flex-row"}>
                                                {projectData.stack.map((value, index) => {
                                                    return (
                                                        <strong key={index} className={"rounded-lg border p-2"}>
                                                            {value}
                                                        </strong>
                                                    )
                                                })}
                                            </div>
                                            <Link href={"https://github.com/"} className={"z-[1000]"}>
                                                <div>{projectData.repo}</div>
                                            </Link>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
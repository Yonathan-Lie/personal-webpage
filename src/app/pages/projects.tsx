import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {

    const project = [
        {
            image: "/example_image1.png",
            alt: "Photomatics",
            tag: "Photomatics.id",
            desc: "descrpition of ",
            stack: ["NextJS", "asd"],
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
                    <div className={"flex flex-row w-full justify-center flex-wrap rounded-lg border shadow-lg"}>
                        {project.map((projectData, index) => {
                            return (
                                <div className={"border-r w-full p-6 flex flex-row"} key={index}>
                                    <div className="rounded-lg border shadow-md w-3/5 p-4 relative">
                                        <Image src={projectData.image} alt={projectData.alt} fill
                                               className={"object-cover rounded-lg"}/>
                                    </div>
                                    <div className={"w-2/5 px-2 flex flex-col justify-center items-center"}>
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
                                        <Link href={projectData.redirect}>{projectData.redirtag}</Link>
                                        <div>{projectData.repo}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
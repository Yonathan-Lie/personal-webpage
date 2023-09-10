import React from "react";

export default function Projects() {

    const project = [
        {
            image: "a",
            tag: "name",
            time: "time",
            desc: "descrpition of asdubiaubwdiuabwd",
            stack: ["asd", "asdasf"],
            repo: "ceritanya repo",
            redirect: "ini harusnya link"
        },
    ]

    return (
        <div className="bg-[#fff]">
            <div className="container h-screen">
                <div className="flex flex-col w-full h-full items-center justify-center">
                    <div className={"flex flex-row w-full justify-center flex-wrap rounded-lg border shadow-lg"}>
                        {project.map((projectData, index) => {
                            return (
                                <div className={"border-r w-full p-6 flex flex-row"} key={index}>
                                    <div className="rounded-lg border shadow-md w-3/5 p-4">{projectData.image}</div>
                                    <div className={"w-2/5 px-4 flex flex-col justify-center items-center"}>
                                        <div className={"flex flex-row justify-center items-center"}>
                                            <h2>{projectData.tag}</h2>
                                            <h3>{projectData.time}</h3>
                                        </div>
                                        <div>{projectData.desc}</div>

                                        {projectData.stack.map((value, index) => {
                                            return (
                                                <div key={index}>
                                                    <div>{value}</div>
                                                </div>
                                            )
                                        })}
                                        <div>{projectData.redirect}</div>
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
import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function Porto() {

    const porto = [
        {
            image: "/example_image1.png",
            tag: "Profile Web",
            alt: "Profile Web",
            desc: "descrpition of ",
            stack: ["NextJS", "Tailwind"],
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
                        <h3>Portfolio</h3>
                        <h2>A way to show different skills and ideas</h2>
                    </div>
                    {porto.map((portoData, index) => {
                        return (
                            <div key={index}
                                 className={"flex flex-row w-full justify-center flex-wrap rounded-lg border shadow-md my-4"}>
                                <div className={"border-r w-full p-6 flex flex-row"}>
                                    <div className={"w-2/5 px-2 flex flex-col justify-center items-center"}>
                                        <div className={"flex flex-row justify-center items-center"}>
                                            <h2 className={"mr-1"}>{portoData.tag}</h2>
                                        </div>
                                        <p>{portoData.desc}</p>

                                        <div className={"flex flex-row"}>
                                            {portoData.stack.map((value, index) => {
                                                return (
                                                    <strong key={index} className={"rounded-lg border p-2"}>
                                                        {value}
                                                    </strong>
                                                )
                                            })}
                                        </div>
                                        <Link href={portoData.redirect}>{portoData.redirtag}</Link>
                                        <div>{portoData.repo}</div>
                                    </div>
                                    <div className="rounded-lg border shadow-md w-3/5 p-4 relative">
                                        <Image src={portoData.image} alt={portoData.alt} fill
                                               className={"object-cover rounded-lg"}/>
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
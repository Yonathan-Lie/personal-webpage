import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="container h-screen bg-secondary">
            <div className="flex flex-col w-full h-full items-center justify-center">
                <div className={"flex flex-row w-full justify-center flex-wrap rounded-lg border shadow-lg"}>
                    <div className={"text-center md:w-2/5 w-full p-6 flex justify-center items-center"}>
                        <div className="aspect-square relative w-full h-full border rounded-full ">
                            <Image src={"/example_image1.png"} alt={"profile photo"} fill
                                   className={"object-cover rounded-full "} style={{}}/>
                        </div>
                    </div>
                    <div className={"border-l md:w-3/5 w-full p-6"}>
                        <h1>I&#39;m A Programmer</h1>
                        <p>Hi, I&#39;m Yonathan. Physics graduate turned front-end developer with a passion for creating
                            beautiful and user-friendly web applications.
                        </p>
                    </div>
                </div>
            </div>
            <div className={"border w-full px-6"}>stack</div>
        </div>
    )
}
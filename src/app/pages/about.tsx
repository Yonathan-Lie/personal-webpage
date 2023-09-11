import Image from "next/image";
import React from "react";

export default function About() {
    return (
        <div className="bg-[#fff]">
            <div className="container h-screen">
                <div className="flex flex-col w-full h-full items-center justify-center">
                    <div className={"flex flex-row w-full justify-center flex-wrap rounded-lg border shadow-lg"}>
                        <div className={"text-center md:w-2/5 w-full p-6 flex justify-center items-center"}>
                            <div className={"w-full h-full relative"}>
                                <Image src={"/example_image1.png"} alt={""} fill className={"object-cover"}/>
                            </div>
                        </div>
                        <div
                            className={"border-l md:w-3/5 w-full p-6 flex flex-col justify-center items-start"}>
                            <h3>About me</h3>
                            <h2>Yonathan</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit ium</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
import Image from "next/image";
import React from "react";

export default function About() {
    return (
        <div className="bg-[#fff]">
            <div className="container h-screen">
                <div className="flex flex-col w-full h-full items-center justify-center">
                    <div className={"flex flex-row w-full justify-center flex-wrap rounded-lg border shadow-lg"}>
                        <div className={"text-center border-r md:w-3/5 w-full p-6 flex justify-center items-center"}>
                            <h3>mini tag</h3>
                            <h2>name</h2>
                        </div>
                        <div className={"text-center md:w-2/5 w-full p-6 flex justify-center items-center"}>
                            gambar
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
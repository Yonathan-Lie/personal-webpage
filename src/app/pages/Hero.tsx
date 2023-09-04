import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="container h-screen bg-secondary">
            <div className="flex flex-col w-full h-full items-center justify-center">
                <div className={"flex flex-row w-full justify-center flex-wrap"}>
                    <div className={"border w-3/5 text-end p-6"}>nama dll
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <div className={"border text-center w-2/5 p-6 "}>
                        <div className={"border m-0 p-0"} style={{
                            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
                            height: "auto",
                            aspectRatio: 1,
                            objectFit: "contain",
                            position: "relative",
                            overflow: "clip",
                        }}>
                            <Image
                                src="https://placehold.co/600x400.png" // Replace with your image source
                                alt="Square Image"
                                fill
                                objectFit="cover"
                                className={"child"}
                            />
                        </div>
                    </div>
                </div>
                <div className={"border w-full px-6"}>stack</div>
            </div>

            {/*<div className="card lg:card-side bg-base-100 shadow-xl">*/}
            {/*    <figure><img src="https://placehold.co/300x300" alt="Album"/></figure>*/}
            {/*    <div className="card-body">*/}
            {/*        <h2 className="card-title">New album is released!</h2>*/}
            {/*        <p>Click the button to listen on Spotiwhy app.</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}
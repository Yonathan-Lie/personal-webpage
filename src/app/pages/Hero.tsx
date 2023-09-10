import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="bg-[#f9f9f9]">
            <div className="container h-screen">
                <div className="flex flex-col w-full h-full items-center justify-center">
                    <div className={"flex flex-row w-full justify-center flex-wrap rounded-lg border shadow-lg"}>
                        <div className={"text-center md:w-2/5 w-full p-6 flex justify-center items-center"}>
                            <div className="aspect-square relative w-full h-full border rounded-full ">
                                <Image src={"/example_image1.png"} alt={"profile photo"} fill
                                       className={"object-cover rounded-full "} style={{}}/>
                            </div>
                        </div>
                        <div className={"border-l md:w-3/5 w-full p-6"}>
                            <h1 className={""}>Front-End React Developer👋🏻</h1>
                            <p>Hi, I&#39;m Yonathan. Physics graduate turned front-end developer with a passion for
                                creating
                                beautiful and user-friendly web applications. Currently Based on Jakarta, Indonesia 📍
                            </p>
                            <div className={"flex flex-row gap-x-2"}>
                                <Image src={"/svgs/js.svg"} alt={"javascript"} height={50} width={50}/>
                                <Image src={"/svgs/js.svg"} alt={"javascript"} height={50} width={50}/>
                            </div>
                        </div>
                        <div className={"flex flex-row border w-full px-6"}>
                            <div className={"w-1/5 flex justify-center items-center"}>Tech Stack |</div>
                            <div className={"flex flex-row w-4/5 justify-around"}>
                                <Image src={"/svgs/html.svg"} alt={"javascript"} height={50} width={50}
                                       className={"object-contain"}/>
                                <Image src={"/svgs/css.svg"} alt={"javascript"} height={50} width={50}
                                       className={"object-contain"}/>
                                <Image src={"/svgs/js.svg"} alt={"javascript"} height={50} width={50}
                                       className={"object-contain"}/>
                                <Image src={"/svgs/ts.svg"} alt={"typescript"} height={50} width={50}
                                       className={"object-contain"}/>
                                <Image src={"/svgs/bootstrap.svg"} alt={"javascript"} height={50} width={50}
                                       className={"object-contain"}/>
                                <Image src={"/svgs/tailwind.svg"} alt={"javascript"} height={50} width={50}
                                       className={"object-contain"}/>
                                <Image src={"/svgs/react.svg"} alt={"javascript"} height={50} width={50}
                                       className={"object-contain"}/>
                                <Image src={"/svgs/next.svg"} alt={"next"} height={50} width={50}
                                       className={"object-contain"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
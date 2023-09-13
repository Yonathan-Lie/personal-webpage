import Image from "next/image";
import React from "react";

export default function About() {
    return (
        <section id={"About"}>
            <div className="bg-[#fff]">
                <div className="container py-16">
                    <div className="flex flex-col w-full h-full items-center justify-center">
                        <div
                            className={"flex lg:flex-row flex-col w-full justify-center flex-wrap rounded-lg border shadow-lg"}>
                            <div className={"text-center lg:w-2/5 w-full p-6 flex justify-center items-center"}>
                                <div className={"w-full h-full relative object-contain"} style={{}}>
                                    <Image src={"/developer.jpg"} alt={""} fill className={"object-cover rounded-lg"}/>
                                </div>
                            </div>
                            <div
                                className={"lg:w-3/5 w-full p-6 flex flex-col justify-center items-center text-center lg:text-left lg:items-start"}>
                                <h3 className={""}>About me</h3>
                                <h2>Yonathan</h2>
                                <p>As a physics graduate, I&#39;m equipped with a strong foundation in analytical
                                    thinking, precision, analytics, and attention to detail—skills that seamlessly
                                    translate
                                    into the world of web development. I have an impressive understanding and skills in
                                    HTML,
                                    CSS, JavaScript, TypeScript, Tailwind, Bootstrap, React, and NextJs. My expertise
                                    lies
                                    in crafting dynamic, engaging interfaces through writing clean and optimized code
                                    and
                                    utilizing cutting-edge development tools and techniques.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
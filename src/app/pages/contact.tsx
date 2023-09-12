import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="bg-[#f9f9f9] py-8" id={"Contact"}>
            <div className="container">
                <h3>Contact</h3>
                <h2>Dont be shy! Contact me anytime!</h2>

                <div className=" gap-4 py-4 flex lg:flex-row lg:justify-between md:justify-normal flex-col">
                    <div className={"flex flex-row items-center gap-3"}>
                        <Link href={"https://www.linkedin.com/in/yonathan-l/"}>
                            <FontAwesomeIcon icon={faLinkedin} size={"3x"} className={"hover:underline hover:decoration-blue-600 hover:text-blue-600"}/>
                        </Link>
                        <div className="flex flex-col">
                            <Link href={"https://www.linkedin.com/in/yonathan-l/"} className={"hover:underline hover:decoration-blue-600 hover:text-blue-600"}><strong>Linkedin</strong></Link>
                            <Link href={"https://www.linkedin.com/in/yonathan-l/"} className={"hover:underline hover:decoration-blue-600 hover:text-blue-600"}><p>Yonathan L</p></Link>
                        </div>
                    </div>

                    <div>
                        <div className={"flex flex-row items-center gap-3"}>
                            <FontAwesomeIcon icon={faEnvelope} size={"3x"}/>
                            <div className="flex flex-col">
                                <strong>Email</strong>
                                <p>work.Thanl@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

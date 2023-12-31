import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons";


export default function MyFooter() {
    return (
        <div className={"bg-[#2d2e32]  w-full py-8"}>
            <div className="container">
                <div className="flex flex-row justify-between items-center text-white">
                    <strong className={"text-inherit"}>
                        <p>Created, Developed and Designed by Yonathan </p>
                    </strong>
                    <div className={"text-inherit flex gap-x-3"}>
                        <Link href={"https://www.linkedin.com/in/yonathan-l/"}>
                            <FontAwesomeIcon icon={faLinkedin} size={"xl"}/>
                        </Link>
                        <Link href={"https://github.com/Yonathan-Lie"}>
                            <FontAwesomeIcon icon={faGithub} size={"xl"}/>
                        </Link>
                        <Link href={"https://www.instagram.com/yonathan.lie/"}>
                            <FontAwesomeIcon icon={faInstagram} size={"xl"}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
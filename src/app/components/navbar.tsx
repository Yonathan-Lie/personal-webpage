import Link from "next/link";

export default function MyNavbar() {
    return (
        <div className="navbar bg-base-100 fixed z-[1000]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href={"#home"}>Home</Link></li>
                        <li><Link href={"#About"}>About</Link></li>
                        <li><Link href={"#Project"}>Project</Link></li>
                        <li><Link href={"#Portfolio"}>Portfolio</Link></li>
                        <li><Link href={"#Contact"}>Contact</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Yonathan.dev</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={"#home"}>Home</Link></li>
                    <li><Link href={"#About"}>About</Link></li>
                    <li><Link href={"#Project"}>Project</Link></li>
                    <li><Link href={"#Portfolio"}>Portfolio</Link></li>
                    <li><Link href={"#Contact"}>Contact</Link></li>
                </ul>
            </div>

        </div>
    )
}
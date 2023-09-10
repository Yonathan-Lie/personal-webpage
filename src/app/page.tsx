import Hero from "@/app/pages/Hero";
import About from "@/app/pages/about";
import Projects from "@/app/pages/projects";
import Contact from "@/app/pages/contact";
import MyNavbar from "@/app/components/navbar";
import MyFooter from "@/app/components/footer";

export default function Home() {
    return (
        <>
            <MyNavbar/>
            <Hero/>
            <About/>
            <Projects/>
            <Contact/>
            <MyFooter/>
        </>
    )
}

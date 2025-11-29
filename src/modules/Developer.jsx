import BootLoader from "./BootLoader"
import Navbar from "./NavBar"
import Intro from "./Intro"
import IconBar from "./IconBar"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"
import { useState } from "react"

function Developer () {

    const [isLoading, setIsLoading] = useState(true)
    const [showContent, setShowContent] = useState(false)


    const handleLoadingComplete = () => {
        setIsLoading(false);
        setTimeout(() => {
            setShowContent(true);
        }, 10);
    }

    const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    };

    if(isLoading) {
        return <BootLoader onComplete={handleLoadingComplete} />
    }

    return (
        <>
            {/* 1. OUTER MAIN: Always Black, No Opacity Change */}
            <main className="bg-black w-full flex justify-center items-center font-mono">
                
                {/* 2. INNER DIV: Starts invisible, Fades In */}
                <div className={`transition-opacity duration-1000 ease-in ${showContent ? 'opacity-100' : 'opacity-0'}
                    bg-slate-950 w-full flex justify-start items-center flex-col`}
                >

                    <Navbar></Navbar>
                    
                    <div className="flex flex-col justify-start items-center mt-20 w-full min-h-screen md:mt-36" id="home">
                        <section className="w-full">
                            <Intro 
                            heading={"Hi, I'm Ahmad Irfan"}
                            subheading={"Web Developer. Aspiring AI Engineer"}
                            paragraph={`I develop websites using leading technology stack. I have a thing for beautiful
                            design that is simple yet it delivers the message well.`}
                            buttonText={"Hire me"}
                            onButtonClick={scrollToContact}
                            />
                        </section>

                        <IconBar />

                        <section className="w-full">
                            <About 
                                heading={"About me"}
                                subheading={"Pursuing MSAI&AS at Nust, Islamabad"}
                                paragraph={`I am a passionate tech professional with a BS in Computer Science from IQRA University Karachi. 
                                    I have since worked with several clients, helping them develop their online stores. Additionally, I have
                                    also interned at institues such as HBL Micro Finance Bank and Hubco Ltd and worked with a startup as 
                                    a full time web development resource. Currently I'm pursuing a Masters in AI and Autonomous Systems
                                    to broaden my horizons and keep up with the latest industry trends. 
                                    `}
                            />
                        </section>

                        <section className="w-full">
                            <Projects heading={"Projects"}/>
                        </section>

                        <section className="w-full">
                            <Contact />
                        </section>

                        <footer>
                            <Footer />
                        </footer>
                    </div>

                </div>

            </main>
        </>
    )

}

export default Developer
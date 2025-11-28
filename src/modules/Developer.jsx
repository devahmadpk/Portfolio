import BootLoader from "./BootLoader"
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

    if(isLoading) {
        return <BootLoader onComplete={handleLoadingComplete} />
    }

    return (
        <>
            {/* 1. OUTER MAIN: Always Black, No Opacity Change */}
            <main className="bg-black w-full h-screen flex justify-center items-center">
                
                {/* 2. INNER DIV: Starts invisible, Fades In */}
                <div className={`transition-opacity duration-1000 ease-in ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                    
                    <div className="bg-red-400 p-2">
                        <h1 className="text-white">Loading Developer Portfolio...</h1>
                    </div>

                </div>

            </main>
        </>
    )

}

export default Developer
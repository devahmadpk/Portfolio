

function Landing() {

    return (
        <>
        {/* Main div that contains 50 - 50 split of both portfolios */}
            <main className="flex flex-col w-full h-screen">
                <div className="w-full bg-slate-950 font-mono h-1/2 text-white flex justify-center items-center
                    hover:h-3/4 transition-all duration-500 ease-in-out
                ">
                        <h2 className="text-2xl">Web Developer</h2>
                    
                </div>

                <div className="w-full bg-stone-100 text-black h-1/2 flex justify-center items-center
                    hover:h-3/4 transition-all duration-500 ease-in-out
                ">
                        <h2 className="text-2xl">Blog Writer</h2>
                    
                </div>
            </main>
        </>
    )
}

export default Landing



function Intro({ heading, subheading, paragraph, buttonText, onButtonClick }) {
  return (
    <div className="flex flex-col justify-center items-start w-full text-white py-10 px-6 text-left md:px-12" >
      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        {heading}
      </h1>
      <h2 className="text-lg md:text-xl font-medium mb-4">
        {subheading}
      </h2>
      <p className="text-sm md:text-lg opacity-80 ">
        {paragraph}
      </p>

      {/* Conditionally render the button only if buttonText is provided */}
      {buttonText && (
        <button
          onClick={onButtonClick}
          className="px-6 py-2 border border-teal-400 text-teal-400 text-lg rounded hover:bg-teal-400 hover:text-slate-950 transition-all duration-300 ease-in-out cursor-pointer hover:shadow-[0_0_15px_rgba(45,212,191,0.5)] mt-8"
        >
          {buttonText}
        </button>
      )}
    </div>
  )
}

export default Intro
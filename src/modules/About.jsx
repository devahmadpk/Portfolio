




function About({ heading, subheading, paragraph }) {
  return (
    <div className="flex flex-col justify-center items-start w-full text-white py-10 px-6 text-left md:px-12">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-teal-400">
        {heading}
      </h1>
      <h2 className="text-lg md:text-xl font-medium mb-4">
        {subheading}
      </h2>
      <p className="text-sm md:text-lg opacity-80 ">
        {paragraph}
      </p>
    </div>
  )
}

export default About
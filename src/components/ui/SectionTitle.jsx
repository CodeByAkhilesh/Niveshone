import React from 'react'

const SectionTitle = ({title, gradientTitle}) => {
  return (
    <>
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-10 lg:mb-25 tracking-tighter">
          {title}{" "}
          <span className="bg-linear-to-r from-[#3aab50] to-[#268eff] bg-clip-text text-transparent">
            {gradientTitle}
          </span>
        </h2>
    </>
  )
}

export default SectionTitle

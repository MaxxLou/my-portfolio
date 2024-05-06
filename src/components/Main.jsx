import { FaGithub, FaLinkedin } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"
import mainBg from "../assets/mainBG.jpg"

export default function Main() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-center scale-x-[1]"
        src={mainBg}
        alt="photo"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/60 md:bg-white/25">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center ">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Maksym Luzin
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            <TypeAnimation
              sequence={[
                "I'm a Junior Frontend Developer",
                1000,
                "I'm a Junior Frontend Engineer",
                1000,
                "I'm a Junior Website Designer",
                1000,
                "I'm a Junior Website Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[100px] w-full">
            <a href="https://www.linkedin.com/in/maksym-luzin/">
              <FaLinkedin className="cursor-pointer" size={36} />
            </a>
            <a href="https://github.com/MaxxLou">
              <FaGithub className="cursor-pointer" size={36} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className="w-full h-auto bg-gray-300 md:pl-16">
      <p className="pt-16 m-auto text-sm text-center">
        All rights reserved &copy; {year}
      </p>
      <div className="flex justify-between m-auto pt-6 pb-12 max-w-[65px] w-full">
        <a href="https://www.linkedin.com/in/maksym-luzin/">
          <FaLinkedin className="cursor-pointer" size={24} />
        </a>
        <a href="https://github.com/MaxxLou">
          <FaGithub className="cursor-pointer" size={24} />
        </a>
      </div>
    </div>
  )
}

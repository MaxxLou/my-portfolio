import ProjectItems from "./ProjectItems"
import youtube from "../assets/youtube-home-page.jpg"
import hangman from "../assets/hangman-game.jpg"
import weather from "../assets/weather-app.jpg"
import shop from "../assets/shopping-cart.jpg"

export default function Projects() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h3 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h3>
      <p className="text-center py-8">
        You are presented with several projects developed during the process of
        learning React.<br/> Additionally, you can explore the code on GitHub.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItems
          img={hangman}
          title="Hangman Game"
          href="https://maxxlou.github.io/hangman/"
        />
        <ProjectItems
          img={youtube}
          title="YouTube home page"
          href="https://maxxlou.github.io/youtube-home-page/"
        />
        <ProjectItems
          img={weather}
          title="Weather App"
          href="https://github.com/MaxxLou/weather"
        />
        <ProjectItems
          img={shop}
          title="Shopping Cart"
          href="https://github.com/MaxxLou/shopping-cart"
        />
      </div>
    </div>
  )
}

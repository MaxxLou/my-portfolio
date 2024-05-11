import WorkItem from "./WorkItem"

const data = [
  {
    year: 2024,
    title: "Frontend Developer, freelance",
    duration: "Present",
    details:
      "Create functional interfaces; Implement my own ideas in pet projects;    Expand my knowledge, applying it in practice.",
  },
  {
    year: 2020,
    title: "UX/UI Designer / Product Designer, TABLETKI.UA",
    duration: "3 years",
    details:
      "Created static and animated advertising creatives, conducted A/B testing; developed landing pages using the Wix website builder; redesigned and created UI Kits; designed presentations.",
  },
  {
    year: 2015,
    title: "Graphic designer, freelance",
    duration: "5 years",
    details:
      "Designed business cards, informational posters for patients at a private clinic, music festival posters; drew vector images for various websites; created collages from photographs.",
  },
]

export default function Work() {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h3 className="text-4xl pb-6 font-bold text-center text-[#001b5e]">Work</h3>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  )
}

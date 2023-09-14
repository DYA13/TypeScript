type skill = [number, string, number]

const html: skill = [1, "html", 10]
const css: skill = [2, "css", 20]
const js: skill = [3, "js", 30]

const allSkills: skill[] = [
  [1, "html", 10],
  [2, "css", 20],
  [3, "js", 30]
]

type Module = {
  index: number
  title: string
  hours: number
}
type FinalProject = {
  descriptionFinalProject: string
  hoursFinalproject: number
}

type ModuleWithFinalProject = Module | FinalProject

const m1: ModuleWithFinalProject = {
  index: 1,
  title: "HTML basics",
  hours: 5,
  descriptionFinalProject: "Semantic Markup",
  hoursFinalproject: 2
}

const m2: ModuleWithFinalProject = {
  index: 2,
  title: "CSS basics",
  hours: 8
}
const m3: ModuleWithFinalProject = {
  index: 3,
  title: "JS basics",
  hours: 12,
  descriptionFinalProject: "CRM",
  hoursFinalproject: 12
}

const m4: ModuleWithFinalProject = {
  descriptionFinalProject: "Game development",
  hoursFinalproject: 12
}

const course1: ModuleWithFinalProject[] = [
  { index: 1, title: "HTML basics", hours: 5 },
  { index: 2, title: "CSS basics", hours: 8 },
  { index: 3, title: "JS basics", hours: 12 }
]

const course2: ReadonlyArray<Module> = [
  { index: 1, title: "HTML basics", hours: 5 },
  { index: 2, title: "CSS basics", hours: 8 },
  { index: 3, title: "JS basics", hours: 12 }
]

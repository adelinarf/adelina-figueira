import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { EducationCard } from "@/components/education-card";
import { CoursesCard } from "@/components/courses-card";
import { WorkCard } from "@/components/work-card";
import {TechnologiesCard} from "@/components/technologies-card";
import {ImageComponent} from "@/components/image-component";


const courses = [
             { "code" : "CAD101EN", "name" : "Introduction to Cloud Development with HTML, CSS, and JavaScript by IBM" },
             { "code" : "LFS112x" , "name" : " Ethics in AI and Big Data by The Linux Foundation"},
             { "code" : "LFS110x", "name" : "Business Considerations for 5G, IoT and AI by The Linux Foundation"},
             {"code" : "AI0101EN" , "name" : "AI for Everyone: Master the Basics by IBM"}
        ]
const work = [
  { "role" : "Freelance Writer", "time" : "Since 2018" , "tasks":["Developed strong research, analytical, and communication skills through diverse writing assignments",
    "Managed multiple projects simultaneously, adhering to strict deadlines and client requirements.","Cultivated an independent work ethic and strong self-discipline."]}
   ]
const projects = [
{
  "name":"Pacman Game",
  "description":"Developed a functional Pacman game using Assembly language, demonstrating a deep understanding of low-level programming, memory management, and system architecture", 
  "language":"Assembly",
  "button_name":"Go to GitHub repository",
  "image":"/assembly.jpg",
  "link":"https://github.com/adelinarf/PacmanAssembly"
},
{
  "name":"Language Interpreter",
  "description":"Developed a language interpreter using tsPEG", 
  "language":"Typescript",
  "button_name":"Go to GitHub repository",
  "image":"/typescript.png",
  "link":"https://github.com/adelinarf/St-khos"
},
{
  "name":"Console based Wordle",
  "description":"Developed a console based version of the Wordle game on Haskell.", 
  "language":"Haskell",
  "button_name":"Go to GitHub repository",
  "image":"/haskell.png",
  "link":"https://github.com/adelinarf/Wordle"
},
{
  "name":"Game developed from scratch",
  "description":"Developed a simple game, handling the AI of the game, including the movement, world representation, decision making, tactics and interface", 
  "language":"Developed in Godot using GDScript",
  "button_name":"Go to GitHub repository",
  "image":"/game.png",
  "link":"https://github.com/adelinarf/Proyecto1-CI6450"
},
{
  "name":"Web App that manages food reservations",
  "description":"Developed a web app that allows stores to prevent food waste by looking for customers willing to buy the leftover food at the end of the day", 
  "language":"Javascript, ReactJS and Firebase",
  "button_name":"See it LIVE",
  "image":"/leftovers.png",
  "link":"https://leftovers-6215b.web.app/"
}
  ]

const technologies = [
  {"name":"Python","url":"/python.png"},
  {"name":"JavaScript","url":"/javascript.png"},
  {"name":"HTML","url":"/html.png"},
  {"name":"CSS","url":"/css.png"},
  {"name":"C#","url":"/csharp.png"},
  {"name":"Haskell","url":"/haskell.png"},
  {"name":"C","url":"/c.png"},
  {"name":"Typescript","url":"/typescript.png"},
  {"name":"Kotlin","url":"/kotlin.png"},
  {"name":"Django","url":"/django.jpg"},
  {"name":"Flask","url":"/flask.png"},
  {"name":"Angular","url":"/angular.png"},
  {"name":"React JS and Native","url":"/react.png"},
  {"name":"Git","url":"/git.png"}
]




export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-8">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Hi! My name is Adelina Figueira and I am a &nbsp;</span>
        <span className={title({ color: "violet" })}>software engineer&nbsp;</span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          OPEN TO WORK
        </div>
        <div className="flex flex-col items-center justify-center">
          <ImageComponent/>
        </div>
      </div>
      <div id="education" className="inline-block max-w-9/10 text-center justify-center mt-12">
        <span className={title({ color: "violet" })}>Education&nbsp;</span>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-1 mt-12">
        <EducationCard/>
        </div>
      </div>
      <div id="courses" className="inline-block max-w-9/10 text-center justify-center mt-12">
        <span className={title({ color: "violet" })}>Online Courses&nbsp;</span>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-2 mt-12">
        {courses.map((item : any,i : any) => (
            <CoursesCard key={"courses_"+i} code={item.code} name={item.name}/>
          ))}        
        </div>
      </div>

      <div id="experience" className="inline-block max-w-9/10 text-center justify-center mt-12">
        <span className={title({ color: "violet" })}>Professional Experience&nbsp;</span>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-1 mt-12 px-4">
        {work.map((item : any,i : any) => (
          <WorkCard key={"work_"+i} role={item.role} time={item.time} tasks={item.tasks}/>            
          ))}
        </div>
      </div>

      <div id="projects" className="inline-block max-w-9/10 text-center justify-center mt-12">
        <span className={title({ color: "violet" })}>Projects&nbsp;</span>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-3 mt-12 px-4">
        {projects.map((item : any,i : any) => (
            <ProjectCard key={"project_"+i} name={item.name} description={item.description} language={item.language} button_name={item.button_name}
        image={item.image} link={item.link}/>
          ))}
        </div>
      </div>

      <div id="technologies" className="inline-block max-w-9/10 text-center justify-center mt-12">
        <span className={title({ color: "violet" })}>Technologies&nbsp;</span>
        <div className="gap-2 grid grid-cols-1 sm:grid-cols-1 mt-12 px-4">
        <div className={subtitle({ class: "mt-4" })}>
         I'm skilled in these technologies.
        </div>
        <TechnologiesCard data={technologies}/>
        </div>
      </div>



      <div className="flex gap-3 mt-12">
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full"})}
          href="https://www.linkedin.com/in/adelina-figueira-67335a185/"
        >
          <LinkedInIcon size={20} />
          LinkedIn
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href="https://github.com/adelinarf"
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

    </section>
  );
}

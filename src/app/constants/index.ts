import type { IconLabelProps, ProjectProps } from "@/app/types";
import NodejsIcon from "@/icons/Nodejs.svg";
import CSSIcon from "@/icons/css.svg";
import TailwindIcon from "@/icons/tailwindcss.svg";
import HTMLIcon from "@/icons/html5.svg";
import JavaScriptIcon from "@/icons/javascript.svg";
import TypeScriptIcon from "@/icons/typescript.svg";
import FireBaseIcon from "@/icons/firebase.svg";
import MongoIcon from "@/icons/mongodb.svg";
import PostgressIcon from "@/icons/postgresql.svg";
import PiniaIcon from "@/icons/pinia.svg";
import ReduxIcon from "@/icons/redux.svg";
import NestIcon from "@/icons/Nest.svg";
import NuxtIcon from "@/icons/nuxt.svg";
import NextIcon from "@/icons/Next.js.svg";
import ReactIcon from "@/icons/React.svg";
import VueIcon from "@/icons/vue.svg";


export const SKILLS: IconLabelProps[] = [
  {
    icon: CSSIcon,
    text: "Css",
  },
  {
    icon: HTMLIcon,
    text: "HTML",
  },
  {
    icon: JavaScriptIcon,
    text: "JavaScript",
  },
  {
    icon: TypeScriptIcon,
    text: "TypeScript",
  },
  {
    icon: TailwindIcon,
    text: "Tailwind",
  },
  {
    icon: ReactIcon,
    text: "React",
  },

  {
    icon: NestIcon,
    text: "Nest",
  },
  {
    icon: NuxtIcon,
    text: "Nuxt",
  },
  {
    icon: NextIcon,
    text: "Next",
  },
  {
    icon: VueIcon,
    text: "Vue",
  },

  {
    icon: ReduxIcon,
    text: "Redux",
  },
  {
    icon: PiniaIcon,
    text: "Pinia",
  },

  {
    icon: FireBaseIcon,
    text: "FireBase",
  },
  {
    icon: MongoIcon,
    text: "MongoDB",
  },
  {
    icon: PostgressIcon,
    text: "PostgresSQL",
  },
  {
    icon: NodejsIcon,
    text: "Node",
  },

];
export const PROJECTS: ProjectProps[] = [
  {
    name: "Estatein RealEstate",
    image: NuxtIcon,
    description: "High-end real estate website with property listings, filters, and booking system.",
    demo: "https://estate-app-nuxt3.vercel.app",
    repo: "https://github.com/yourusername/portfolio",
  },
  {
    name: "Candleaf E‑Commerce",
    image: VueIcon,
    description: "Minimalist online store built with Next.js, TailwindCSS, and Stripe integration.",
    demo: "https://candleaf-front.vercel.app",
    repo: "https://github.com/yourusername/ecommerce-store",
  },
  {
    name: "Avion E‑Commerce",
    image: ReactIcon,
    description: "Scalable e‑commerce app with CMS integration, shopping cart, and responsive UI.",
    demo: "https://avion-steel.vercel.app/",
    repo: "https://github.com/yourusername/avion-store",
  },

  {
    name: "Hasa Media",
    image:ReactIcon,
    description: "Media services agency website with CMS-managed content and service showcase.",
    demo: "https://hasamedia.io",
    repo: "https://github.com/yourusername/media-agency",
  },
  {
    name: "Synapso CRM",
    image: NextIcon,
    description: "Custom CRM system with headless CMS, analytics, and role-based access control.",
    demo: "https://yoursaasapp.com",
    repo: "https://github.com/yourusername/crm-system",
  },
];

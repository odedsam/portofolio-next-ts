import type { IconLabelProps, ProjectProps } from "@/app/types";
import { CSSIcon, FireBaseIcon, HTMLIcon, JavaScriptIcon, MongoIcon, NestIcon, NextIcon, VueIcon, NodejsIcon, NuxtIcon,PiniaIcon,PostgressIcon,ReactIcon,ReduxIcon,TailwindIcon,TypeScriptIcon } from "@/icons"


export const SKILLS: IconLabelProps[] = [
  { icon: CSSIcon, text: "CSS",},
  { icon: HTMLIcon, text: "HTML"},
  { icon: JavaScriptIcon, text: "JavaScript"},
  { icon: TypeScriptIcon, text: "TypeScript"},
  { icon: TailwindIcon, text: "Tailwind"},
  { icon: ReactIcon, text: "React"},
  { icon: NestIcon, text: "Nest"},
  { icon: NuxtIcon, text: "Nuxt"},
  { icon: NextIcon, text: "Next"},
  { icon: VueIcon, text: "Vue"},
  { icon: ReduxIcon, text: "Redux"},
  { icon: PiniaIcon, text: "Pinia"},
  { icon: FireBaseIcon, text: "FireBase"},
  { icon: MongoIcon, text: "MongoDB",},
  { icon: PostgressIcon, text: "PostgresSQL"},
  { icon: NodejsIcon, text: "Node"},
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

export type Project = {
  id: number
  client: string
  category: string
  image: string
  href: string
  featured?: boolean
  gradient?: string  // optional — defaults to black if not set
}

export const allProjects: Project[] = [
  {
    id: 1,
    client: "Client Five",
    category: "Photo",
    image: "/Images/pexels-lisa-fotios-7918258.jpg",
    href: "#",
  },
  {
    id: 2,
    client: "Client Six",
    category: "Video",
    image: "/Images/pramod-tiwari-f8gKP82Quh4-unsplash.jpg",
    href: "#",
  },
  {
    id: 3,
    client: "Client Seven",
    category: "Video + Photo",
    image: "/Images/lucas-kapla-R79qkPYvrcM-unsplash.jpg",
    href: "#",
  },
  {
    id: 4,
    client: "Client Eight",
    category: "Photo",
    image: "/Images/SnapInsta.to_525899523_17918403495120722_8963852674745615430_n.jpg",
    href: "#",
  },
  {
    id: 5,
    client: "SecondZ",
    category: "Video",
    image: "/Images/pramod-tiwari-f8gKP82Quh4-unsplash.jpg",
    href: "/work/secondz",
    gradient: "101,67,33",
  },
  {
    id: 6,
    client: "AptoNow",
    category: "Video",
    image: "/Images/pexels-lisa-fotios-7918258.jpg",
    href: "/work/aptonow",
    gradient: "30,60,30",
  },
  {
    id: 7,
    client: "PappaRich",
    category: "Video + Photo",
    image: "/Images/lucas-kapla-R79qkPYvrcM-unsplash.jpg",
    href: "/work/papparich",
    gradient: "10,10,40",
  },
  {
    id: 8,
    client: "Nene Chicken",
    category: "Video + Photo",
    image: "/Images/abstract-painting-texture-with-orange-green-and-2026-03-25-23-56-46-utc.webp",
    href: "/work/nene-chicken",
    gradient: "180,80,20",
  },
]
import { Card, CardContent } from "@/components/ui/card";

import TypescriptIcon from "@/assets/typescript-svgrepo-com.svg?react";
import JavascriptIcon from "@/assets/javascript-svgrepo-com.svg?react";
import PythonIcon from "@/assets/python-svgrepo-com.svg?react";
import PhpIcon from "@/assets/php-svgrepo-com.svg?react";
import NodeIcon from "@/assets/node-js-svgrepo-com.svg?react";
import ReactIcon from "@/assets/react-svgrepo-com.svg?react";
import VueIcon from "@/assets/vue-svgrepo-com.svg?react";
import NextIcon from "@/assets/next-dot-js-svgrepo-com.svg?react";
import TailwindIcon from "@/assets/tailwindcss-icon-svgrepo-com.svg?react";
import MongoIcon from "@/assets/mongodb-logo-svgrepo-com.svg?react";
import SqliteIcon from "@/assets/sqlite-svgrepo-com.svg?react";
import FirebaseIcon from "@/assets/firebase-svgrepo-com.svg?react";
import MysqlIcon from "@/assets/mysql-logo-svgrepo-com.svg?react";
import FlaskIcon from "@/assets/flask-svgrepo-com.svg?react";
import CssIcon from "@/assets/css-3-svgrepo-com.svg?react";
import ExpressIcon from "@/assets/express-svgrepo-com.svg?react";

const iconMap = {
  javascript: JavascriptIcon,
  typescript: TypescriptIcon,
  python: PythonIcon,
  php: PhpIcon,
  node: NodeIcon,
  react: ReactIcon,
  vue: VueIcon,
  next: NextIcon,
  tailwind: TailwindIcon,
  mongo: MongoIcon,
  sqlite: SqliteIcon,
  firebase: FirebaseIcon,
  mysql: MysqlIcon,
  flask: FlaskIcon,
  css: CssIcon,
  express: ExpressIcon,
} as const;

type IconKey = keyof typeof iconMap;

interface DataProjects {
  image: string;
  title: string;
  description: string;
  svgIcons: IconKey[];
  repoLink: string;
  demoLink: string;
}

const projectsData: DataProjects[] = [
  {
    image: "/WIP.png",
    title: "Go - Home",
    description:
      "Proyecto escolar en el cual se administra un sistema de compra-venta de bienes raíces (casas, terrenos). Se cuenta con un panel del administrador (vendedor), el comprador (cliente) y usuarios visitantes que puedan observar los bienes que están disponibles. \nNota: El proyecto se creó en 2020, sin embargo se han actualizado las versiones de las tecnologías utilizadas.",
    svgIcons: ["javascript", "node", "react", "mongo", "express"],
    repoLink: "1",
    demoLink: "1",
  },
  {
    image: "/WIP.png",
    title: "Read - Watch - Learn",
    description:
      "Proyecto escolar en donde se creó una aplicación web como una plataforma para poder aprender inglés mediante archivos y videos.",
    svgIcons: ["node", "react", "express", "mongo", "css"],
    repoLink: "2",
    demoLink: "2",
  },
  {
    image: "/WIP.png",
    title: "Control de calificaciones",
    description:
      "Aplicación web para llevar el control de calificaciones de estudiantes. ",
    svgIcons: ["php", "javascript", "css", "mysql"],
    repoLink: "2",
    demoLink: "2",
  },
  {
    image: "/WIP.png",
    title: "Control de incidencias",
    description:
      "Aplicación con GUI para llevar el control  de las incidencias que se reporten en las instalaciones de una institución",
    svgIcons: ["python", "mysql"],
    repoLink: "2",
    demoLink: "2",
  },
  {
    image: "/WIP.png",
    title: "Sistema de Intranet",
    description:
      "Sistema de Intranet para crear comunicados, subir y compartir documentos, imágenes y videos a los trabajadores de una empresa.",
    svgIcons: ["typescript", "node", "react", "next", "tailwind", "mongo"],
    repoLink: "2",
    demoLink: "2",
  },
  {
    image: "/WIP.png",
    title: "Control de folios",
    description:
      "Aplicación web para llevar el control de los folios de almacen de una empresa.",
    svgIcons: ["python", "javascript", "react", "flask", "sqlite", "css"],
    repoLink: "2",
    demoLink: "2",
  },
];

const ProjectsSection: React.FC<{ data: DataProjects }> = ({ data }) => (
  <section>
    <div>
      <img src={data.image} alt={data.title} width={500} loading="lazy" />
      <h2 className="text-2xl md:text-3xl font-bold text-black">
        {data.title}
      </h2>
      <p className="text-justify font-semibold">{data.description}</p>
      <div
        className="flex flex-wrap gap-2"
        role="list"
        aria-label="Tecnologías utilizadas"
      >
        {data.svgIcons.map((iconKey, index) => {
          const IconComponent = iconMap[iconKey];
          return (
            <div
              key={index}
              className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              role="listitem"
              title={iconKey}
            >
              <IconComponent width={35} height={35} />
            </div>
          );
        })}
      </div>
      <p>{data.repoLink}</p>
      <p>{data.demoLink}</p>
    </div>
  </section>
);

const Projects: React.FC = () => {
  return (
    <section>
      <h1 className="flex justify-center text-4xl font-bold italic my-10 text-black border-white">
        Proyectos 🗂️
      </h1>
      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {projectsData.map((data, index) => (
              <Card className="cursor-pointer">
                <CardContent>
                  <ProjectsSection key={index} data={data} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

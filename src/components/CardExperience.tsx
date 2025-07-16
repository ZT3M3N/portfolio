import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface Technology {
  name: string;
  category?:
    | "programming-language"
    | "frontend"
    | "backend"
    | "database"
    | "framework"
    | "cms";
}

interface Achievement {
  description: string;
  impact?: string;
  url1?: string;
  url2?: string;
}

interface ProjectSection {
  title?: string;
  subtitle: string;
  period?: string;
  technologies: Technology[];
  achievements: Achievement[];
}

const portfolioData: ProjectSection[] = [
  {
    title: "Auxiliar de Sistemas",
    subtitle: "Desarrollo de Intranet",
    period: "Abril / 2024 - Actual",
    technologies: [
      { name: "JavaScript", category: "programming-language" },
      { name: "TypeScript", category: "programming-language" },
      { name: "Node.js", category: "backend" },
      { name: "React.js", category: "frontend" },
      { name: "Next.js", category: "framework" },
      { name: "MongoDB", category: "database" },
    ],
    achievements: [
      {
        description:
          "Desarrollé un sistema de intranet para la empresa, con la finalidad compartir anuncios y documentos importantes (políticas de la empresa), permitiendo a los empleados acceder a ellos en cualquier momento.",
        impact:
          "Más organización para los empleados al querer consultar las políticas de la empresa.",
      },
    ],
  },
  {
    subtitle: "Desarrollo de una aplicación web para control de inventario",
    technologies: [
      { name: "JavaScript", category: "programming-language" },
      { name: "Python", category: "programming-language" },
      { name: "React.js", category: "frontend" },
      { name: "Flask", category: "backend" },
      { name: "SQLite", category: "database" },
    ],
    achievements: [
      {
        description:
          "Desarrollé una aplicación de tipo web con la finalidad de agilizar a la hora de atender los productos que se encuentran en el almacén de la empresa, además de llevar un buen control y gestión de estos.",
      },
    ],
  },
  {
    subtitle: "Mantenimiento de los sitios web de la empresa",
    technologies: [{ name: "Wordpress", category: "cms" }],
    achievements: [
      {
        description:
          "Reestructuré los sitios web con los que cuenta la empresa hechas con el CMS Wordpress, pues los sitios carecían de UX e intuitividad. \nEstos están disponibles en: https://farmaciasyireh.com/ y https://hotelcastillopalenque.com/",
      },
    ],
  },
];

const TechnologyBadge: React.FC<{ technology: Technology }> = ({
  technology,
}) => {
  const getCategoryColor = (category: Technology["category"]): string => {
    switch (category) {
      case "frontend":
        return "bg-blue-500/30 border-blue-400";
      case "backend":
        return "bg-green-500/30 border-green-400";
      case "database":
        return "bg-orange-500/30 border-orange-400";
      case "framework":
        return "bg-gray-500/30 border-gray-400";
      case "programming-language":
        return "bg-yellow-500/30 border-yellow-400";
      case "cms":
        return "bg-blue-100/30 border-blue-400";
      default:
        return "bg-purple-500/30 border-purple-400";
    }
  };

  return (
    <Badge
      variant="secondary"
      className={`${getCategoryColor(
        technology.category
      )} text-white transition-all duration-200 hover:scale-105`}
    >
      {technology.name}
    </Badge>
  );
};

const AchievementItem: React.FC<{ achievement: Achievement }> = ({
  achievement,
}) => (
  <li className="flex items-start gap-3 group">
    <span className="text-purple-300 mt-1 transition-colors duration-200 group-hover:text-purple-200 text-4xl">
      ‣
    </span>
    <span className="transition-colors duration-200 group-hover:text-white">
      {achievement.description}
    </span>
  </li>
);

const ProjectSection: React.FC<{ section: ProjectSection }> = ({ section }) => (
  <section className="space-y-6 transform transition-all duration-300 hover:scale-[1]">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <h2 className="text-2xl md:text-3xl font-bold text-white">
        {section.title}
      </h2>
      {section.period && (
        <span className="text-purple-200 text-lg font-medium md:text-right">
          {section.period}
        </span>
      )}
    </div>
    {section.subtitle && (
      <h3 className="text-xl text-purple-100 font-semibold">
        {section.subtitle}
      </h3>
    )}
    <div className="flex flex-wrap gap-2 mb-6">
      {section.technologies.map((tech, index) => (
        <TechnologyBadge key={`${tech.name}-${index}`} technology={tech} />
      ))}
    </div>

    <ul className="space-y-3 text-purple-100 leading-relaxed">
      {section.achievements.map((achievement, index) => (
        <AchievementItem key={index} achievement={achievement} />
      ))}
    </ul>
  </section>
);

const CardExperience: React.FC = () => {
  return (
    <>
      <h1 className="flex justify-center text-4xl font-bold italic my-10 text-black border-white">
        Experiencia Profesional 💼
      </h1>
      <div className="max-w-4xl mx-auto">
        <Card className="bg-[#0743a0] border-blue-500 shadow-2xl transition-all duration-300 hover:shadow-2xl">
          <CardContent className="p-8 md:p-12 space-y-12 text-[20px]">
            {portfolioData.map((section, index) => (
              <ProjectSection key={index} section={section} />
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CardExperience;

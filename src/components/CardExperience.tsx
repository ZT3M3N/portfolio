import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "./ui/card";

interface SectionProps {
  title: string;
  period?: string;
  badges: string[];
  items: string[];
}

interface PortfolioSection {
  title: string;
  period?: string;
  badges: string[];
  items: string[];
}

const Section = ({ title, period, badges, items }: SectionProps) => {
  return (
    <section className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
        {period && <span className="text-white text-xl">{period}</span>}
      </div>
      <div className="flex flex-wrap gap-2 mb-10">
        {badges.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="bg-purple-500/30 text-white border-purple-400"
          >
            {tech}
          </Badge>
        ))}
      </div>
      <ul className="space-y-3 text-purple-100 leading-relaxed">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="text-purple-300 mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const CardExperience = () => {
  const sections: PortfolioSection[] = [
    {
      title: "Desarrollo de...",
      period: "2024 - Actualidad",
      badges: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      items: ["lorem 1", "lorem2", "lorem 3", "lorem 4", "lorem 5", "lorem 6"],
    },
    {
      title: "Desarrollo de...",
      badges: ["1", "2", "3", "4", "5"],
      items: ["lorem1"],
    },
    {
      title: "Desarrollo de...",
      badges: ["1", "2", "3"],
      items: ["lorem1"],
    },
  ];

  return (
    <div className="flex-1 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-[#057ac4] border-white/20 shadow-2xl">
        <CardContent className="p-8 md:p-12 space-y-12">
          {sections.map((section) => (
            <Section
              key={section.title}
              title={section.title}
              period={section.period}
              badges={section.badges}
              items={section.items}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default CardExperience;

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface LanguagesData {
  name: string;
  level: string;
}

const languages: LanguagesData[] = [
  {
    name: "Español",
    level: "Nativo",
  },
  {
    name: "Inglés",
    level: "B1 - Intermedio",
  },
];

const LanguagesSection: React.FC<{ data: LanguagesData }> = ({ data }) => (
  <section>
    <div>
      <h3 className="text-2xl font-bold text-black">{data.name}</h3>
      <h3 className="text-2xl font-bold text-black">{data.level}</h3>
    </div>
  </section>
);

const Languages: React.FC = () => {
  return (
    <section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="flex justify-center text-4xl font-bold italic my-10 text-black border-white">
          Idiomas 💬
        </h1>
        <div className="min-h-screen">
          <div className="max-w-6xl mx-auto">
            <div className="md:grid-cols-2 gap-10">
              {languages.map((data, index) => (
                <Card className="cursor-pointer">
                  <CardContent>
                    <LanguagesSection key={index} data={data} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default Languages;

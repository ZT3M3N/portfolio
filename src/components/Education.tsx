import { Card, CardContent } from "@/components/ui/card";

interface EducationInfo {
  name: string;
  universityName: string;
  period: string;
  image?: string;
}

const educationData: EducationInfo[] = [
  {
    name: "Ingeniería en Sistemas Computacionales",
    universityName: "Instituto Tecnológico Superior de los Ríos",
    period: "2018 - 2023",
  }
]

const EducationSection: React.FC<{ data: EducationInfo }> = ({ data }) => (
  <section>
    <h2 className="text-2xl md:text-3xl font-bold text-black">{data.name}</h2>
    <p className="text-justify font-semibold">{data.universityName}</p>
    <p className="text-justify font-semibold">{data.period}</p>
  </section>
)

const Education: React.FC = () => {
  return (
    <section>
      <h1 className="flex justify-center text-4xl font-bold italic my-10 text-black border-white">Educación🏫</h1>
      <div className="min-h-screen">
        <div className="max-w-3xl mx-auto">
          {educationData.map((data, index) => (
            <Card className="cursor-pointer">
              <CardContent>
                <EducationSection key={index} data={data} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

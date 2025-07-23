import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface CertificatesData {
  image: string;
  title: string;
  platform: string;
  url: string;
}

const certificates: CertificatesData[] = [
  {
    image: "/santander-logo.jpg",
    title: "Python",
    platform: "Santander Open Academy",
    url: "https://drive.google.com/file/d/1FM_XOTe224vXvknJ6DJRmBlFANPLuHp5/view?usp=sharing",
  },
  {
    image: "/capacitate-logo.png",
    title: "Desarrollador Front-End",
    platform: "Capacítate para el empleo",
    url: "https://drive.google.com/file/d/1HL4fNRrqA3n4rvnZwQR9b2XlAJ67zHa-/view?usp=sharing",
  },
];

const CertificatesSection: React.FC<{ data: CertificatesData }> = ({
  data,
}) => (
  <section>
    <div>
      <img src={data.image} width={200} alt={data.title} />
      <h3 className="text-2xl font-bold text-black">{data.title}</h3>
      <a href={data.url} target="_blank">
        Ver certificado
      </a>
    </div>
  </section>
);

const Certificates: React.FC = () => {
  return (
    <section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="flex justify-center text-4xl font-bold italic my-10 text-black border-white">
          Certificados 📜
        </h1>
        <div className="min-h-screen">
          <div className="max-w-6xl mx-auto">
            <div className="md:grid-cols-4 gap-10">
              {certificates.map((data, index) => (
                <Card className="cursor-pointer">
                  <CardContent>
                    <CertificatesSection key={index} data={data} />
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

export default Certificates;

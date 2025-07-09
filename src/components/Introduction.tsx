type IntroductionProps = {
  name: string;
  description: string;
};

const Introduction: React.FC<IntroductionProps> = ({ name, description }) => {
  return (
    <section>
      <h1>{name}</h1>
      <p>{description}</p>
    </section>
  );
};

export default Introduction;

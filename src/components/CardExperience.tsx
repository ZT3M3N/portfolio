import {Badge} from '@/components/ui/badge';
import {Card, CardContent} from '@/components/ui/card';

interface Technology {
  name: string;
  category?: 'frontend' | 'backend' | 'database' 
}

interface Achievement {
  description: string;
  impact?: string;
}

interface ProjectSection {
  title: string;
  subtitle?: string;
  period?: string;
  technologies: Technology[];
  achievements: Achievement[];
}

const portfolioData: ProjectSection[] = [
  {
    title: 'Auxiliar de Sistemas',
    subtitle: '',
    period: '',
    technologies: [{name: '1', category: 'frontend'}],
    achievements: [{description: 'X', impact: 'Y'}]
  },
  {
    title: 'Auxiliar de Sistemas',
    subtitle: '',
    period: '',
    technologies: [{name: '1', category: 'backend'}],
    achievements: [{description: 'X', impact: 'Y'}]
  },
  {
    title: 'Auxiliar de Sistemas',
    subtitle: '',
    period: '',
    technologies: [{name: '1', category: 'backend'}],
    achievements: [{description: 'X', impact: 'Y'}]
  },
];

const TechnologyBadge: React.FC<{technology: Technology}> = ({technology}) => {
  const getCategoryColor = (category: Technology['category']): string => {
    switch (category){
      case 'frontend': return 'bg-blue-500/30 border-blue-400';
      case 'backend': return 'bg-green-500/30 border-green-400';
      case 'database': return 'bg-orange-500/30 border-orange-400';
      default: return 'bg-purple-500/30 border-purple-400';
    }
  };

  return (
    <Badge variant='secondary' className={`${getCategoryColor(technology.category)} text-white transition-all duration-200 hover:scale-105`}>
      {technology.name}
    </Badge>
  )
};

const AchievementItem: React.FC<{achievement: Achievement}> = ({achievement}) => (
  <li className='flex items-start gap-3 group'>
    <span className='text-purple-300 mt-1 transition-colors duration-200 group-hover:text-purple-200'>
      •
    </span>
    <span className='transition-colors duration-200 group-hover:text-white'>{achievement.description}
    </span>
  </li>
);

const ProjectSection: React.FC<{section: ProjectSection}> = ({section}) => (
  <section>
    <div>
      <h2>
        {section.title}
      </h2>
      {section.period && (
        <span>
          {section.period}
        </span>
      )}
    </div>
    {section.subtitle && (
      <h3>
        {section.subtitle}
      </h3>
    )}
    <div>
      {section.technologies.map((tech, index) => (
        <TechnologyBadge key={`${tech.name}-${index}`} technology={tech} />
      ))}
    </div>
    <ul>
    {section.achievements.map((achievement, index) => (
      <AchievementItem key={index} achievement={achievement} />
    ))}
    </ul>
  </section>
);

const CardExperience: React.FC = () => {
  return (
    <div>
      <div> 
        <Card>
          <CardContent>
            {portfolioData.map((section, index) => (
              <ProjectSection key={index} section={section}/>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CardExperience
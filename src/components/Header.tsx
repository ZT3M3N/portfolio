type HeaderProps = {
  title: string;
  subtitle?: string;
};

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="text-left">
      <h1 className="text-2xl text-black">{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
      <button>Es - es</button>
      <button>EN - en</button>
    </header>
  );
};

export default Header;

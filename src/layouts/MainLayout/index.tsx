import Header from './components/Header';

interface IMainLayoutProps {
  children: React.ReactNode;
}
const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;

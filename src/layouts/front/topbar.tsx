import Logo from '/pomeluce.svg';
import { TopbarMenu } from '@/components';

const { topMenu } = config();

const topbar: React.FC<{}> = () => {
  return (
    <main className="flex items-center h-[65px] bg-backdrop2 border-b border-rim2 sticky top-0 z-50">
      <div className="flex justify-between items-center px-3 w-full 2xl:w-page 2xl:m-auto">
        <section className="flex items-center xl:items-stretch md:mr-6">
          <div className="flex justify-center items-center">
            <Link to="/" className="flex justify-between items-center gap-1 font-bold mr-5 hover:text-link1">
              <img className="w-6 h-6" src={Logo} />
              <span className="font-bold text-xl uppercase">rapidify-react</span>
            </Link>
          </div>
          <main className="xl:flex justify-center items-center gap-3 font-bold opacity-95 hidden">
            {topMenu.menu.map((menu, index) => (
              <NavLink key={index} to={menu.key} className={({ isActive }) => `flex items-center gap-1 hover:text-link1 ${isActive ? 'text-link1' : ''}`}>
                {menu.label}
              </NavLink>
            ))}
          </main>
        </section>
        <TopbarMenu />
      </div>
    </main>
  );
};

export default topbar;

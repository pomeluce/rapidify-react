import { Menu } from '../arco';
import './styles/avatar-menu.scss';

const avatarMenu: React.FC<{}> = () => {
  const { user } = useUserStore();

  const avatar = (className: string) => (
    <ArcoAvatar className={className}>
      <img src={`/src/assets${user.avatar}`} />
    </ArcoAvatar>
  );

  const dropList = (
    <main className="flex flex-col bg-backdrop2 p-2 border shadow-xl rounded cursor-pointer">
      <div className="flex items-center gap-5 p-3 border-b">
        {avatar('w-10 h-10')}
        <div className="flex flex-col gap-2">
          <span>{user.name}</span>
          <span className='text-xs'>{user.email}</span>
        </div>
      </div>
      {Menu({
        className: 'avatar-menu',
        options: [
          {
            key: '1',
            icon: IconPeople({ size: 18 }),
            label: '个人中心',
          },
          {
            key: '2',
            icon: IconSetting({ size: 18 }),
            label: '用户设置',
          },
          {
            key: '3',
            icon: IconLogout({ size: 18 }),
            label: '退出登录',
          },
        ],
      })}
    </main>
  );

  const [visible, setVisible] = useState(false);

  return (
    <ArcoDropdown popupVisible={visible} onVisibleChange={vis => setVisible(vis)} trigger="click" droplist={dropList} position="bottom">
      {avatar('w-8 h-8')}
    </ArcoDropdown>
  );
};

export default avatarMenu;
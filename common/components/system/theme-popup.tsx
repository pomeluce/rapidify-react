import { Menu } from '../arco';

const themePopup: React.FC<{ size?: number }> = ({ size }) => {
  const { theme, setTheme } = useTheme();
  const [themePopupVisible, setThemePopupVisible] = useState<boolean>(false);

  const iconProps = size ? { size } : {};

  const themePopup = () => {
    return (
      <main className="bg-backdrop2 shadow-xl border border-rim2 rounded cursor-pointer">
        <Menu
          className="theme-popup"
          selectedKeys={[`theme-${theme}`]}
          options={[
            {
              key: 'theme-system',
              icon: IconRiComputerFill(iconProps),
              label: '跟随系统',
              onClick: () => {
                setThemePopupVisible(false);
                setTheme('system');
              },
            },
            {
              key: 'theme-light',
              icon: IconRiSunFill(iconProps),
              label: '亮色主题',
              onClick: () => {
                setThemePopupVisible(false);
                setTheme('light');
              },
            },
            {
              key: 'theme-dark',
              icon: IconRiMoonClearFill(iconProps),
              label: '暗色主题',
              onClick: () => {
                setThemePopupVisible(false);
                setTheme('dark');
              },
            },
          ]}
        />
      </main>
    );
  };

  return (
    <ArcoTrigger
      onClickOutside={() => setThemePopupVisible(false)}
      onClick={() => setThemePopupVisible(true)}
      popup={() => themePopup()}
      popupVisible={themePopupVisible}
      position="bottom"
    >
      <ArcoButton className="flex justify-center items-center" size="large" shape="circle">
        {(theme === 'system' ? IconRiComputerFill : theme === 'light' ? IconRiSunFill : IconRiMoonClearFill)(iconProps)}
      </ArcoButton>
    </ArcoTrigger>
  );
};

export default themePopup;
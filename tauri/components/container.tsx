import { open } from '@tauri-apps/plugin-shell';
import Logo from '/pomeluce.svg';
import { app } from '@tauri-apps/api';

const popupContainer: React.FC<{}> = () => {
  const [visible, setVisible] = useState(false);
  const [version, setVersion] = useState<string>('unknown');

  const { initialMenu, showAbout } = useAppMenu();
  const { registerKey } = useAppKey();

  const linkOpen = () => open('https://github.com/pomeluce/rapidify-react');

  useEffect(() => {
    // 初始化菜单
    initialMenu();
    // about 页面监听
    showAbout(() => setVisible(true));
    // 按键绑定
    registerKey();
  }, []);

  useAsyncEffect(async () => {
    setVersion(await app.getVersion());
  }, []);

  return (
    <>
      <ArcoModal
        title={null}
        visible={visible}
        footer={null}
        closable={false}
        alignCenter={false}
        style={{ top: '15%', marginLeft: 'auto', marginRight: 'auto' }}
        onCancel={() => setVisible(false)}
      >
        <main className="p-5 px-10 flex flex-col justify-center items-center gap-10">
          <div className="py-3 flex justify-center items-center gap-5">
            <ArcoImage className="outline-size-0 select-none focus-visible:outline-0 focus-visible:shadow-none" src={Logo} preview={false} />
            <section className="flex flex-col gap-2 items-start">
              <span className="font-semibold text-2xl">Rapidify-Tauri</span>
              <span>Tauri template app for react</span>
            </section>
          </div>
          <footer>
            version {version} @
            <a className="text-link1 cursor-pointer" onClick={linkOpen}>
              rapidify-tauri
            </a>
          </footer>
        </main>
      </ArcoModal>
    </>
  );
};

export default popupContainer;

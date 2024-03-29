import { ReactNode } from 'react';
import { ProviderContext } from './context';
import { GlobalTheme, GlobalThemeOverrides } from './interface';
import { defaultProps } from './config';
import { RtlEnabledStae } from './internal-interface';

export interface ConfigProviderProps {
  clsPrefix?: string;
  theme?: GlobalTheme;
  themeOverrides?: GlobalThemeOverrides;
  direction?: 'ltr' | 'rtl' | RtlEnabledStae;
  children?: ReactNode;
}

const ConfigProvider: React.FC<ConfigProviderProps> = (props: ConfigProviderProps) => {
  return <ProviderContext.Provider value={props}>{props.children}</ProviderContext.Provider>;
};

ConfigProvider.defaultProps = defaultProps;

export default ConfigProvider;

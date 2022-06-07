import { Header } from "./Header";

export const Layout = ({
  navigation,
  settings,
  children,
}) => {
  return (
    <div className="layout_container">
      <Header
        navigation={navigation}
        settings={settings}
      />
      <main>{children}</main>
    </div>
  );
};

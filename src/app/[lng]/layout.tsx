import { dir } from "i18next";
import { PropsWithChildren } from "react";
import { languages } from "../i18n/settings";

export const generateStaticParams = async () => {
  return languages.map((lng) => ({ lng }));
};

const RootLayout: React.FC<PropsWithChildren & { params: { lng: string } }> = ({
  children,
  params: { lng },
}) => {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

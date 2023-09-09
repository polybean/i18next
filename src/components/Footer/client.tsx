"use client";

import { useTranslation } from "../../app/i18n/client";
import FooterBase from "./FooterBase";

const Footer: React.FC<{ lng: string }> = ({ lng }) => {
  const { t } = useTranslation(lng, "footer");
  return <FooterBase t={t} lng={lng} />;
};

export default Footer;

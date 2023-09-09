import { useTranslation } from "../../app/i18n";
import FooterBase from "./FooterBase";

const Footer: React.FC<{ lng: string }> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "footer");
  return <FooterBase t={t} lng={lng} />;
};

export default Footer;

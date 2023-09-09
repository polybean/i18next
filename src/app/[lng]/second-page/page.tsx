import Link from "next/link";
import Footer from "../../../components/Footer/server";
import { useTranslation } from "../../i18n";

const Page: React.FC<{ params: { lng: string } }> = async ({
  params: { lng },
}) => {
  const { t } = await useTranslation(lng, "second-page");

  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}`}>{t("back-to-home")}</Link>
      <Footer lng={lng} />
    </>
  );
};

export default Page;

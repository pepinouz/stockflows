import HtmlHead from "../components/general/HtmlHead";
import Base from "../components/structure/Base";
import PageHeading from "../components/headings/PageHeading"

export default function Home() {
  return (
    <>
      <HtmlHead title="TG Base Next App" />
      <Base>
        <PageHeading text={"TG Base Next JS App"}/>
      </Base>
    </>
  );
}

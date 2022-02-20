import HtmlHead from "../../components/general/HtmlHead";
import Base from "../../components/structure/Base";
import PageHeading from "../../components/headings/PageHeading";

export default function Dashboard() {
  return (
    <>
      <HtmlHead title="Dashboard" />
      <Base>
        <PageHeading text={"Dashboard"} />
      </Base>
    </>
  );
}

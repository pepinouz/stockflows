import HtmlHead from "../../components/general/HtmlHead";
import Base from "../../components/structure/Base";
import PageHeading from "../../components/headings/PageHeading";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import DefaultModal from "../../components/modals/DefaultModal";
import { useState } from "react";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <HtmlHead title="Dashboard" />
      <Base>
        <PageHeading text={"Dashboard"} />
        <br/>
        <PrimaryButton
          label={"Click on me"}
          onClick={() => setShowModal(!showModal)}
        />
        <DefaultModal
          key={showModal}
          header="Le titre"
          content="Le contenus peut être n'importe quoi, un texte, une component, du jsx."
          showModal={showModal}
          onCancel={() => setShowModal(!showModal)}
          onClose={() => setShowModal(!showModal)}
          onOk={() => setShowModal(!showModal)}
        />
      </Base>
    </>
  );
}

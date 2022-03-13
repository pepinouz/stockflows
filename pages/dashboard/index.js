import { useState } from "react";

import HtmlHead from "../../components/general/HtmlHead";
import Base from "../../components/structure/Base";
import PageHeading from "../../components/headings/PageHeading";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import DefaultModal from "../../components/modals/DefaultModal";
import Table from "../../components/tables/Table";
import ImageCard from "../../components/cards/ImageCard";
import ImageCardSkeleton from "../../components/skeleton/cards/ImageCardSkeleton";
import FloatingInput from "../../components/forms/FloatingInput";

const tableHeader = [
  {
    key: "label",
    dataIndex: "label",
    title: "",
  },
  {
    key: "2021",
    dataIndex: "firstYear",
    title: "2021",
  },
  {
    key: "2022",
    dataIndex: "secondYear",
    title: "2021",
  },
  {
    key: "2022",
    dataIndex: "thirdYear",
    title: "2022",
  },
];

const tableRows = [
  {
    label: "Revenus",
    firstYear: <FloatingInput type="number" name="rev"/>,
    secondYear: <FloatingInput type="number" name="rev"/>,
    thirdYear: "360 000",
  },
  {
    label: "Coût",
    firstYear: <FloatingInput type="number" name="cost"/>,
    secondYear: "240 000",
    thirdYear: "360 000",
  },
];

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <HtmlHead title="Dashboard" />
      <Base>
        <div className="flex flex-row">
          <div className="basis-1/2">
            <PageHeading text={"Dashboard"} />
          </div>
          <div className="flex justify-end basis-1/2">
            <PrimaryButton
              label={"Click on me"}
              onClick={() => setShowModal(!showModal)}
            />
          </div>
        </div>
        <br />
        <div className="grid xl:grid-cols-3 lg:grid-cols-2">
          <ImageCard
            title={"This is a card mofo"}
            image="https://uploads-ssl.webflow.com/60a52a7dc2e7990e30d3dca2/61290fc7262ab42205be0c41_card-cover-3.png"
            descritption={
              "Voici une courte description. And if it wasn't for the time in the taxi and you, when you called it out, you said it was anxiety. Well, you held me from the back of the front seat and you told me all the times that you lied to me"
            }
          />
          <ImageCard
            title={"This is a card mofo"}
            image="https://uploads-ssl.webflow.com/60a52a7dc2e7990e30d3dca2/61cc9efd952764009440eb63_sendtosage-api-diagram.png"
            descritption={
              "Voici une courte description. And if it wasn't for the time in the taxi and you, when you called it out, you said it was anxiety. Well, you held me from the back of the front seat and you told me all the times that you lied to me"
            }
          />
          <ImageCardSkeleton/>
        </div>

        <br />
        <Table headers={tableHeader} rows={tableRows} />
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

import { useState } from "react";
import MPrimaryBtn from "../../core/ui-kit/buttons/primaryBtn";
import MKMailingModal from "../../core/ui-kit/modals/mailingModal";

export default function MWhitePaper() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <div className={"pv-50 bg-dark d-flex justify-content-center"}>
        <MPrimaryBtn
          label={"WhitePaper"}
          key={"whitePaperRequest"}
          size={"large"}
          type={"danger"}
          action={() => setModalVisible(true)}
        />
      </div>

      <MKMailingModal visible={modalVisible} action={toggleModal}/>
    </>
  );
}

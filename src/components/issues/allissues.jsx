import { Row, Col } from "antd";
import { tempIssues } from "../../core/data/examples/issues_temp";
import MIssueCard from "../../core/ui-kit/card/issuecard";
import MPrimaryBtn from "../../core/ui-kit/buttons/primaryBtn";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

export default function MIssueOverView() {
  const router = useRouter();
  const navigateToNewIssue = async () => {
    await router.push("/issue/new");
  };
  return (
    <>
      <MPrimaryBtn
        key="addNewIssue"
        type="danger"
        size="large"
        icon={<PlusCircleOutlined />}
        label="New Issue"
        className="d-block m-auto mt-40"
        action={navigateToNewIssue}
      />
      <Row className="container pt-30">
        {tempIssues.map((el, index) => (
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={8}
            xl={6}
            className="pb-30 justify-content-center d-flex"
            key={el.id}
          >
            <MIssueCard key={"issueCard" + index} info={el} />
          </Col>
        ))}
      </Row>
    </>
  );
}

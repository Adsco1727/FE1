import { useState } from "react";
import { Modal, Form, Input } from "antd";
import { useForm } from "antd/lib/form/Form";
import { MailOutlined } from "@ant-design/icons";

export default function MKMailingModal(props) {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(false);
    form.submit();
    // props.action();
  };

  const [form] = useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };

  return (
    <Modal
      title={<p className={"c-green font-20"}>WhitePaper of DPO</p>}
      visible={props.visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={props.action}
    >
      <Form
        preserve={false}
        form={form}
        key={"whitePaper-form"}
        layout={"vertical"}
        onFinish={onFinish}
        validateMessages={validateMessages}
        scrollToFirstError
      >
        <Form.Item
          key={"userEmail"}
          name={"email"}
          label="Your email address"
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}
          hasFeedback
        >
          <Input
            key={"userEmailInput"}
            size={"large"}
            placeholder={"example@example.com"}
            prefix={<MailOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

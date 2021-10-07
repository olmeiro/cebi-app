import "antd/dist/antd.css";

import { Button, Modal, Form, Input, Radio } from 'antd';


function CollectionCreateForm ({ visible, onCreate, onCancel, idpredio, data})  {
 
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Actualizar predio"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="idpredio"
          label="ID Predio"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="number"/>
        </Form.Item>
        <Form.Item
          name="numpredial"
          label="Número predial"
          rules={[
            {
              required: true,
              message: "Por favor ingrese el número del predio!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Avalúo"
          label="Avalúo"
          rules={[
            {
              required: true,
              message: "Por favor ingrese el número del avalúo!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="departamento" label="Departamento">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="municipio" label="Municipio">
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CollectionCreateForm;

import { Form, Input, Button } from 'antd';
import { useForm } from '../hooks/useForm';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
};

export default  function CrearPredios ({ children }) {

  const [{ numpredial, avaluo, nombre, departamento, municipio }, handleInputChanges, reset] = useForm({
    numpredial: "",
    avaluo: "",
    nombre: "",
    departamento: "",
    municipio: "",
  });
  
  
  const onFinish = async (values) => {
    console.log("data: ",values);

    const url = 'http://localhost:3000/api/predios';

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(values), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(function(response) {
      if (!response.ok) {
        reset();
        throw new Error("HTTP error, status = " + response.status);
      }else{
        reset();
        alert("Predio Creado.")
        return response.json();
      }
    })

  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="numpredial"
        name="numpredial"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input onChange={handleInputChanges} />
      </Form.Item>

      <Form.Item
        label="avaluo"
        name="avaluo"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input onChange={handleInputChanges} />
      </Form.Item>

      <Form.Item
        label="nombre"
        name="nombre"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input onChange={handleInputChanges} />
      </Form.Item>

      <Form.Item
        label="departamento"
        name="departamento"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input onChange={handleInputChanges} />
      </Form.Item>

      <Form.Item
        label="municipio"
        name="municipio"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input onChange={handleInputChanges} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
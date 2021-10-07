import React, { useEffect, useState } from "react";
import { useForm } from '../hooks/useForm';
import { Form, Input, InputNumber, Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useRouter } from "next/dist/client/router";


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
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const getPredioId =  (id) => {
  const url = `http://localhost:3000/api/predio/${id}`;

  fetch(url, {
    method: 'GET',
    body: JSON.stringify(), 
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(function(response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }else{
      console.log("Data recuperada.")
      return response.json();
    }
  })
};

export default  function UpdatePredios ({ children }) {
  const router = useRouter();
  const { id } = router.query;

  const dataPredio = getPredioId(id);
  console.log(dataPredio);

  const [ numpredial, avaluo, nombre, departamento, municipio , handleChange, reset] = useForm({
    numpredial: 118,
    avaluo: "",
    nombre: "",
    departamento: "",
    municipio: "",
  });

  const onFinish = (values) => {
    const url = `http://localhost:3000/api/predio/${id}`;

    fetch(url, {
      method: 'PUT', // or 'PUT'
      body: JSON.stringify(values), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(function(response) {
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }else{
        alert("Predio actualizado.")
        return response.json();
      }
    })
  };

  return (

   <>
      <Header style={{backgroundColor:'white', marginLeft:'50px', marginBottom:'10px'}}>
        <h1>Actualizar Predio: TODO: Traer los datos antiguos</h1>
      </Header>
     
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
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input onChange={handleChange}/>
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
        <Input onChange={handleChange} />
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
        <Input onChange={handleChange} />
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
        <Input onChange={handleChange} />
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
        <Input onChange={handleChange} />
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
   </>
  );
};

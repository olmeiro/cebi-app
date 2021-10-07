import { Table, Tag, Space, Button } from "antd";
import Link from "next/link";

import React, { useState } from "react";

export const ListaPredios = ({ predios }) => {
  const dataPredios = predios.predios;

  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form create predio: ", values);
    
    setVisible(false);  
  };

  const deleteUser = (id) => {
    console.log("id del predio a", id)
  }

  const columns = [
    {
      title: "Id Predio",
      dataIndex: "idpredio",
      key: "idpredio",
    },
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Municipio",
      dataIndex: "municipio",
      key: "municipio",
    },
    {
      title: "Departamento",
      dataIndex: "departamento",
      key: "departamento",
    },
    {
      title: "Acciones",
      key: "acciones",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary">
             <Link href={`predios/${record.idpredio}`} predios={predios}>Actualizar</Link>
          </Button>
          
          <Button type="danger" onClick={() => deleteUser(record.idpredio)}>
            Eliminar
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Button type="primary">
        <Link href="/predios/create">Nuevo predio</Link>
      </Button>

      <Table columns={columns} dataSource={dataPredios} />
    </>
  );
};

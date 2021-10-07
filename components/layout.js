import "antd/dist/antd.css";
import Link from 'next/link'

import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

function MiLayout ({ children })  {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
        <Menu.Item key="0"><Link href="/"><a>Home</a></Link></Menu.Item>
          <Menu.Item key="1"><Link href="/Predios"><a>Predios</a></Link></Menu.Item>
          <Menu.Item key="2"><Link href="/Propietarios"><a>Propietarios</a></Link></Menu.Item>
          <Menu.Item key="3"><Link href="/Terrenos"><a>Terrenos</a></Link></Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item> 
          <Link href="/Predios">
            <a>← Back to home</a>
          </Link></Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default MiLayout;

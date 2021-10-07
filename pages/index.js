import antd from 'antd/dist/antd.css';
import { Row, Col, Divider} from 'antd';
import { Tabs } from 'antd';
import Link from 'next/link'

import { Layout, Breadcrumb } from 'antd';
import { PageHeader, Button, Descriptions } from 'antd';

const {  Menu  } = antd;
const { TabPane } = Tabs;
const { Header, Content, Footer, Sider } = Layout;

export default function Home() {

  const current= 'mail';

  const handleClick = () => {
    this.setState({ current: e.key });
  }

  return (
    <div id="container" className="App">
      <br />
      <Divider>CEBI</Divider>
      <br />
      <br />
      <Row>
        <Col flex={24}>
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab={<Link href="/Predios"><a>PREDIOS</a></Link>} key="1"></TabPane>
            <TabPane tab={<Link href="/Propietarios"><a>PROPIETARIOS</a></Link>} key="2"></TabPane>
            <TabPane tab={<Link href="/terrenos/terrenos"><a>TERRENOS</a></Link>} key="3"></TabPane>
            <TabPane tab={<Link href="/construcciones/construcciones"><a>CONSTRUCCIONES</a></Link>} key="4"></TabPane>
          </Tabs>
        </Col>
      </Row>

      <Row align="center">
        <h1>Centro de Estadistica De Bienes Imbuebles.</h1>
      </Row>

      <Footer className="site-page-header-ghost-wrapper">
        <PageHeader
          title="App Realizada por:"
          subTitle="Olmeiro Orozco."
          extra={[
            // <Button key="3">Operation</Button>,
            // <Button key="2">Operation</Button>,
            // <Button key="1" type="primary">
            //   Primary
            // </Button>,
          ]}
        >
          <Descriptions size="small" column={3}>
            <Descriptions.Item label="Created">Olmeiro Orozco Ortiz</Descriptions.Item>
            <Descriptions.Item label="Phone">
              <a>313 525 7802</a>
            </Descriptions.Item>
            <Descriptions.Item label="Creation Time">2021-10-06</Descriptions.Item>
            <Descriptions.Item label="Email">olme.orozco@gmail.com</Descriptions.Item>
            <Descriptions.Item label="Remarks">
              App para el centro de estadisticas de bienes inmuebles con Next.js-Postgres-GraphQL.
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </Footer>,
    </div>
  );
}
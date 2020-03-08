import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Popover, Button, Card, Col, Row, Avatar} from 'antd';
// import { Header, Content, Footer} from "antd/dist/antd";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';
import {
  MessageOutlined,
  SettingOutlined,
  BarChartOutlined,
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  HeartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { StackArea } from '@antv/g2plot';
import QRCode from 'qrcode.react';
import healthSocreLabel from "../src/health.svg"


moment.locale('zh-cn');
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;

fetch('touchCount.json')
  .then((res) => res.json())
  .then((data) => {
    const areaPlot = new StackArea(document.getElementById('container'), {
      title: {
        visible: true,
        text: '接触人群记录',
      },
      data,
      xField: 'date',
      yField: 'value',
      stackField: 'healthStatus',
      xAxis: {
        type: 'dateTime',
        tickCount: 5,
      },
      legend: {
        visible: true,
        position: 'right-top',
      },
      // color: {
      //   "接触健康人群": 0x00000,
      // },
      responsive: true,
    });
    areaPlot.render();
  });

  const content = (
    <div>
      <QRCode value="xhnbasjdkjalsdjlajsl" fgColor="#00E633" size="128"/>
    </div>
  );

class App extends React.Component {
  state = {
    collapsed: false,
    healthSocre: 90,
    healthTouch: 30,
    potentialTouch: 5,
    dangerTouch: 1
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { date } = this.state;
    const { Header, Content, Footer } = Layout;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <BarChartOutlined />
              <span>Status</span>
            </Menu.Item>
            <Menu.Item key="2">
                <Popover content={content} title="健康码" trigger="click" placement="rightTop" >
                    <Button block="true" ghost="true" type="link" style={{ textAlign: 'left'}} >
                      <UserOutlined style={{marginLeft:-17}}/>
                      <span style={{marginLeft:0}}>User</span>
                    </Button>
                </Popover>
                
            </Menu.Item>
            <Menu.Item key="3">
              <MessageOutlined />
              <span>Message</span>
            </Menu.Item>
            <Menu.Item key="4">
                <SettingOutlined />
                <span>Setting</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div className="site-card-wrapper" style={{ minHeight: 60, marginBottom: 24, marginTop: 24 }}>
              
                <Row gutter={8}>
                  <Col span={6}>
                    <Card   bordered={false}>
                      <Meta
                        avatar={<Avatar src={healthSocreLabel} />}
                        title="健康指数"
                        description={this.state.healthSocre}
                      />
                    </Card>
                  </Col>
                  <Col span={6}>
                    <Card  bordered={false}>
                      <Meta
                          avatar={<Avatar src="healthTouch.svg" />}
                          title="接触健康人群"
                          description={this.state.healthTouch}
                        />
                    </Card>
                  </Col>
                  <Col span={6}>
                    <Card bordered={false}>
                    <Meta
                        avatar={<Avatar src="warning.svg" />}
                        title="接触潜在人群"
                        description={this.state.potentialTouch}
                      />
                    </Card>
                  </Col>
                  <Col span={6}>
                    <Card  bordered={false}>
                    <Meta
                        avatar={<Avatar src="danger.svg" />}
                        title="接触症状人群"
                        description={this.state.dangerTouch}
                      />
                    </Card>
                  </Col>
                </Row>
              
            </div>
            <div className="site-layout-background" id="container" style={{ padding: 24, minHeight: 360 }}>
              {/* <QRCode value="http://facebook.github.io/react/" /> */}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', width:100 }}>
            
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
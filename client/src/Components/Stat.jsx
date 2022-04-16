import React from 'react'
import 'antd/dist/antd.css';
import "../Assets/Stat.css"
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

function Stat() {
  return (
    <div style={{marginLeft:"900px",marginTop:"-500px",marginRight:"30px"}} className="site-statistic-demo-card">
    <Row gutter={16}>
      <Col span={12}>
        <Card >
          <Statistic
            title="Positive"
            
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' ,fontSize:"30px"}}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="Negative"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322',fontSize:"30px" }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
  </div>
  )
}

export default Stat
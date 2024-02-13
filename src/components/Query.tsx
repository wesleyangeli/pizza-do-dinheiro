import { Card, Col, Form, Row, Slider, Typography } from "antd";
const { Title, Paragraph, Text, Link } = Typography;

const sliderProps = {
  min: 0,
  max: 10,
  styles: {
    track: {
      background: "rgb(22, 119, 255)",
    },
    rail: {
      background: "rgba(188, 188, 188, 0.8)",
    },
  },
};

export const Query = ({ title, query, name, onChange }: any) => {
  return (
    <Col
      xs={24}
      sm={24}
      md={10}
      lg={24}
      xl={24}
      style={{
        height: "100%",
        padding: "24px 24px",
        border: "1px solid rgba(91,91,91, 0.2)",
        borderRadius: "8px",
      }}
    >
      <Typography>
        <Title level={4} style={{ padding: 0 }}>
          {title}
        </Title>
        <Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
          {query}
        </Paragraph>
      </Typography>
      <Row>
        <Col span={22}>
          <Form.Item name={name} style={{ padding: 0, margin: 0 }}>
            <Slider
              onChange={onChange}
              {...sliderProps}
              style={{ margin: 0 }}
            />
          </Form.Item>
        </Col>
      </Row>
    </Col>
  );
};

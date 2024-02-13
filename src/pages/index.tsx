import React, { useState } from "react";
import { PolarAreaChart as Chart } from "@/components/Chart";
import { Query } from "@/components/Query";
import { useQueries } from "@/hooks/useQueries";
import { Affix, Button, Card, Col, Form, Row, Typography } from "antd";

const { Title, Paragraph, Text, Link } = Typography;
interface FormData {
  comportamento: number;
  planejamento: number;
  conhecimento: number;
  investimentos: number;
  poupanca: number;
  consumo: number;
  mentalidade: number;
  patrimonio: number;
  aposentadoria: number;
  estadoAtual: number;
}

export default function Home() {
  const [top, setTop] = React.useState<number>(100);
  const [dataSource, setDataSource] = useState({} as FormData);

  const queries = useQueries();

  const inititalState = {
    comportamento: 0,
    planejamento: 0,
    conhecimento: 0,
    investimentos: 0,
    poupanca: 0,
    consumo: 0,
    mentalidade: 0,
    patrimonio: 0,
    aposentadoria: 0,
    estadoAtual: 0,
  };
  return (
    <Row gutter={[24, 8]} style={{ minHeight: "90vh", padding: "24px" }}>
      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
        <Form<FormData>
          labelCol={{ span: 8 }}
          initialValues={inititalState}
          onValuesChange={(_, allValues) => {
            setDataSource(allValues);
          }}
        >
          <Row justify={"center"} gutter={[0, 8]}>
            <Col
              style={{
                height: "100%",
                padding: "24px 24px",
                border: "1px solid rgba(91,91,91, 0.2)",
                borderRadius: "8px",
              }}
            >
              <Typography>
                <Title level={3} style={{ padding: 0 }}>
                  PIZZA DO DINHEIRO
                </Title>
                <Paragraph style={{ fontSize: "16px", textAlign: "justify" }}>
                  A pizza do dinheiro deve ser preenchida para que você possa
                  começar este módulo. É algo básico e simples, que muitas
                  pessoas ignoram e não conseguem traçar metas para melhorar
                  nesses requisitos em questão. Você deverá colocar uma nota de
                  0 a 10 de acordo com o seu nível de satisfação com relação a
                  esse pilar. Os níveis são:
                </Paragraph>
              </Typography>
            </Col>
            {queries.map(({ name, title, query }) => (
              <Query
                name={name}
                title={title}
                query={query}
                key={`${name}-${title}`}
              />
            ))}
          </Row>
        </Form>
      </Col>
      <Col xs={24} sm={24} md={24} lg={10} xl={10}>
        <Affix offsetTop={top}>
          <Chart dataSource={dataSource} />
        </Affix>
      </Col>
    </Row>
  );
}

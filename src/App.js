import React from "react";

import { Layout } from "antd";

import Planet from "./Planet";

// import Globe from "./Globe";

import "./App.css";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Content>
        <Planet />
      </Content>
    </Layout>
  );
}

export default App;

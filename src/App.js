import React from "react";

import { Layout } from "antd";

import Planet from "./Planet";

import "./App.css";

const { Content } = Layout;

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

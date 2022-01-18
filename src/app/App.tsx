import React from "react";
import { Login, Layout } from "./components";

const App: React.FC = () => {
  const [isLogin, setIsLogin] = React.useState(false);

  return <>{!isLogin ? <Login setIsLogin={setIsLogin} /> : <Layout />}</>;
};

export default App;

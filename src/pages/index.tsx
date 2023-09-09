import React, { FC } from 'react';
import Login from './login';
import DashboardLayout from '../layouts/dashboard';

type Props={
  component:React.ReactNode
}
const App: FC<Props> = ({component}) => {
  const isLoggenIn = true;
  return (
    <div className="App">
      {component}
    </div>
  );
};

export default App;

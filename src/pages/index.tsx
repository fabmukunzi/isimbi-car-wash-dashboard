import React, { FC } from 'react';

type Props = {
  component: React.ReactNode;
};
const App: FC<Props> = ({ component }) => {
  return <div className="App">{component}</div>;
};

export default App;

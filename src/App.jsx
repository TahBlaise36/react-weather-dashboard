// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Aside from "./ui/Aside";
import Header from "./ui/Header";
import Weather from "./ui/Weather";

function App() {
  return (
    <div className="app" data-theme="dark">
      <Header />
      <Weather />
      <Aside />
    </div>
  );
}

export default App;

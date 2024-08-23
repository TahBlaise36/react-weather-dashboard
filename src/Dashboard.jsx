import { CityProvider } from "./context/CityContext";
import { FavoriteCitiesProvider } from "./context/FavoriteCitiesContext";

import Aside from "./ui/Aside";
import Header from "./ui/Header";
import Weather from "./ui/Weather";

function Dashboard() {
  return (
    <CityProvider>
      <FavoriteCitiesProvider>
        <DashboardContainer>
          <Header />
          <Weather />
          <Aside />
        </DashboardContainer>
      </FavoriteCitiesProvider>
    </CityProvider>
  );
}

function DashboardContainer({ children }) {
  return (
    <div className="app" data-theme="dark">
      {children}
    </div>
  );
}

export default Dashboard;

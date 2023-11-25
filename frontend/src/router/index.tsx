import { Routes, Route } from "react-router-dom";
import Demo from "../pages/demo";
import Home from "../pages/Home";
import WalletApp from "../pages/WalletApp";
import ProtectedRoute from "./ProtectedRoute";
import Addnetwork from "../pages/AddNetwork";
import ImportTokens from "../pages/importTokens";
import LandingPage from "../pages/LandingPage";

function AppRouter() {
  return (
    <div className="">
      <Routes>

        <Route path="/home" element=
        {
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
          
        } />
        
        <Route path="/" Component={LandingPage} />
        <Route path="/demo" Component={Demo} />
        <Route path="/app" Component={WalletApp} />
        <Route path="/add-network" Component={Addnetwork} />
        <Route path="/import-tokens" Component={ImportTokens} />

        {/* <Route path="/sign-up" Component={SignUp} />
        <Route path="/inbox" Component={Inbox} />
        <Route path="/home" Component={Home} />
        <Route path="/wallet" Component={Wallet} />
        <Route path="/create" Component={Create} /> */}
      </Routes>
    </div>
  );
}

export default AppRouter;

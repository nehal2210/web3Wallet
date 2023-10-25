import { Routes, Route } from "react-router-dom";
import Demo from "../pages/demo";
import Home from "../pages/Home";

function AppRouter() {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/demo" Component={Demo} />
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

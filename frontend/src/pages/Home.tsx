import { useSelector } from "react-redux";
import MainComponenet from "../components/main";
import { RootState } from "../redux/store";
import SignUp from "../components/sign-up";
import Recovery from "../components/recovery";
import Congrate from "../components/congrate";
import WalletApp from "./WalletApp";

function Home() {
  const step = useSelector((state: RootState) => state.user.step);

  const showComponent = () => {
    switch (step) {
      case 0:
        return <MainComponenet />;
      case 1:
        return <SignUp />;
      case 2:
        return <Recovery />;
      case 3:
        return <Congrate />;
      case 4:
          return <WalletApp />;
      default:
        return <MainComponenet />;
        // break;
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-[90vh]">
        {showComponent()}
      </div>
    </>
  );
}
// Test new branch

export default Home;

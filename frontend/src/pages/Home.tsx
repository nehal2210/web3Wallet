import { useSelector } from "react-redux";
import MainComponenet from "../components/main";
import { RootState } from "../redux/store";
import SignUp from "../components/sign-up";
import Recovery from "../components/recovery";

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
      default:
        break;
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        {showComponent()}
      </div>
    </>
  );
}
// Test new branch

export default Home;

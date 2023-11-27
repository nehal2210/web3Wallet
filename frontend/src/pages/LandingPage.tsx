import EnhancedDualEncription from "../components/landingPageComponents/EnhanceDualEncription";
import LandingFooter from "../components/landingPageComponents/LandingFooter";
import MultichainWallet from "../components/landingPageComponents/MultichainWallet";
import NonCostodialWallet from "../components/landingPageComponents/NonCostodialWallet";
import TheOnlyWallet from "../components/landingPageComponents/TheOnlyWallet";
import Transaction from "../components/landingPageComponents/Transaction";

const LandingPage = () => {
  return (
    <>
      <div className="h-[100vh] overflow-y-auto bg-primary absolute ">
        <div className="pt-2 px-8">
          <NonCostodialWallet />
          <MultichainWallet />
          <EnhancedDualEncription />
          <Transaction />
          <TheOnlyWallet />
        </div>
        <LandingFooter />
      </div>
    </>
  );
};
export default LandingPage;

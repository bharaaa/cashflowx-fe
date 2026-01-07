import BalanceCard from "../../components/layout/BalanceCard";
import Header from "../../components/layout/Header";
import MobileContainer from "../../components/layout/MobileContainer";
import TransactionList from "../../components/layout/TransactionList";

const Dashboard = () => {
  return (
    <div className="">
      <MobileContainer>
        <Header />
        <BalanceCard balance={0} />
        <TransactionList transactions={[]} />
      </MobileContainer>
    </div>
  );
};

export default Dashboard;

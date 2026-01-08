import { useMemo, useState } from "react";
import BalanceCard from "../../components/layout/BalanceCard";
import Header from "../../components/layout/Header";
import MobileContainer from "../../components/layout/MobileContainer";
import TransactionList from "../../components/layout/TransactionList";
import type { CreateTransactionInput, Transaction } from "../../types/transaction";
import AddTransactionModal from "../../components/layout/AddTransactionModal";

const Dashboard = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [open, setOpen] = useState(false);
  const balance = useMemo(() => {
    return transactions.reduce((total, tx) => {
      return tx.type === "income"
        ? total + tx.amount
        : total - tx.amount;
    }, 0);
  }, [transactions]);

  const handleAdd = (data: CreateTransactionInput) => {
    const newTransaction: Transaction = {
      id: crypto.randomUUID(),
      ...data,
      date: new Date().toISOString(),
    };
  
    setTransactions((prev) => [...prev, newTransaction]);
  };

  return (
    <>
      <MobileContainer>
        <Header />
        <BalanceCard balance={balance} />
        <TransactionList
          transactions={transactions}
          onAdd={() => {
            console.log("clicked");
            setOpen(true);
          }}
        />
      </MobileContainer>

      <AddTransactionModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleAdd}
      />
    </>
  );
};

export default Dashboard;

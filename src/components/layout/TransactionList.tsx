import type { Transaction } from "../../types/transaction";
import Button from "../ui/Button";
import TransactionItem from "./TransactionItem";

type Props = {
  transactions: Transaction[];
};

const TransactionList = ({ transactions }: Props) => {
  if (transactions.length === 0) {
    return (
      <>
        <div className="flex flex-col gap-2">
          <div className="p-6 bg-red-100 text-center text-sm text-gray-400">
            No transactions yet
          </div>
          <div>
            <Button className="btn-soft btn-primary">Add Transaction</Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="mt-6 space-y-3">
      {transactions.map((tx) => (
        <TransactionItem key={tx.id} transaction={tx} />
      ))}
    </div>
  );
};

export default TransactionList;

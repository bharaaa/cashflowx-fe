import type { Transaction } from "../../types/transaction";
import Button from "../ui/Button";
import TransactionItem from "./TransactionItem";

type Props = {
  transactions: Transaction[];
  onAdd: () => void;
};

const TransactionList = ({ transactions, onAdd }: Props) => {
  const isEmpty = transactions.length === 0;
  return (
    <div className="flex flex-col gap-4">
      {isEmpty ? (
        <div className="p-6 text-center text-sm text-gray-400">
          No transactions yet
        </div>
      ) : (
        <div className="mt-2 space-y-3">
          {transactions.map((tx) => (
            <TransactionItem key={tx.id} transaction={tx} />
          ))}
        </div>
      )}

      {/* Single source of truth */}
      <Button className="btn-soft btn-primary w-full" onClick={onAdd}>
        Add Transaction
      </Button>
    </div>
  );
};

export default TransactionList;

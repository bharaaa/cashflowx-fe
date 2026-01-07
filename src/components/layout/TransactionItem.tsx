import type { Transaction } from "../../types/transaction";
import { formatCurrency } from "../../utils/currency";

type Props = {
  transaction: Transaction;
};

const TransactionItem = ({ transaction }: Props) => {
  const isIncome = transaction.type === "income";

  return (
    <div
      className="
        flex items-center justify-between
        rounded-xl bg-white p-3
        shadow-sm
      "
    >
      <div>
        <p className="text-sm font-medium">{transaction.category}</p>
        <p className="text-xs text-gray-400">
          {transaction.note || transaction.date}
        </p>
      </div>

      <p
        className={`text-sm font-semibold ${
          isIncome ? "text-green-600" : "text-red-500"
        }`}
      >
        {isIncome ? "+" : "-"} {formatCurrency(transaction.amount)}
      </p>
    </div>
  );
};

export default TransactionItem;

import { formatCurrency } from "../../utils/currency";

type Props = {
  balance: number;
};

const BalanceCard = ({ balance }: Props) => {
  return (
    <div
      className="
        rounded-2xl
        bg-linear-to-br from-indigo-500 to-purple-600
        p-4 text-white
        sm:p-6
      "
    >
      <p className="text-xs opacity-80">
        Total Balance
      </p>

      <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
        {formatCurrency(balance)}
      </h2>
    </div>
  );
};

export default BalanceCard;

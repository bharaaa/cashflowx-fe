type Props = {
  income: number;
  expense: number;
};

const IncomeExpenseCards = ({ income, expense }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Income */}
      <div className="card bg-green-50 border border-green-200">
        <div className="card-body p-3">
          <p className="text-xs text-green-700">Income</p>
          <h3 className="text-lg font-semibold text-green-800">
            Rp {income.toLocaleString("id-ID")}
          </h3>
        </div>
      </div>

      {/* Expense */}
      <div className="card bg-red-50 border border-red-200">
        <div className="card-body p-3">
          <p className="text-xs text-red-700">Expense</p>
          <h3 className="text-lg font-semibold text-red-800">
            Rp {expense.toLocaleString("id-ID")}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenseCards;

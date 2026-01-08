import { useEffect, useState } from "react";
import Button from "../ui/Button";
import type { CreateTransactionInput } from "../../types/transaction";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: CreateTransactionInput) => void;
};

const AddTransactionModal = ({ open, onClose, onSubmit }: Props) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"income" | "expense">("expense");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  const handleSubmit = () => {
    if (!category || !amount) return;

    onSubmit({
      category,
      amount: Number(amount),
      type,
      note: note.trim() || undefined,
    });

    onClose();
    setCategory("");
    setAmount("");
    setType("expense");
    setNote("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 px-4">
      <div className="mockup-window border border-base-content/20 bg-white rounded-xl">
        <div className="modal-box w-full max-w-sm p-4">
          <h3 className="mb-4 text-lg font-semibold">Add Transaction</h3>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Category"
              className="input input-bordered w-full"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />

            <input
              type="number"
              placeholder="Amount"
              className="input input-bordered w-full"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <select
              className="select select-bordered w-full"
              value={type}
              onChange={(e) => setType(e.target.value as "income" | "expense")}
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>

            <textarea
              placeholder="Note (optional)"
              className="textarea textarea-bordered w-full"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>

          <div className="mt-6 flex gap-2">
            <Button className="btn-soft flex-1" onClick={onClose}>
              Cancel
            </Button>
            <Button
              className="btn-soft btn-primary flex-1"
              onClick={handleSubmit}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTransactionModal;

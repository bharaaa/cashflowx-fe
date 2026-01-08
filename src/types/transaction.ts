export type TransactionType = "income" | "expense";

export type Transaction = {
  id: string;
  type: TransactionType;
  category: string;
  amount: number;
  note?: string;
  date: string; //ISO string or formatted date
};

export type CreateTransactionInput = {
  amount: number;
  type: TransactionType;
  category: string;
  note?: string;
};
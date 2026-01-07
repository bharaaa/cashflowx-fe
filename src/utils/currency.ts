const IDR_FORMATTER = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

export const formatCurrency = (value: number): string => {
  return IDR_FORMATTER.format(value);
};

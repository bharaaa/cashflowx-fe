export const FloatingButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="
        fixed bottom-5 right-5 
        flex h-14 w-14 items-center justify-center
        rounded-full bg-indigo-600 text-white shadow-lg
        active:scale-95
      "
  >
    +
  </button>
);

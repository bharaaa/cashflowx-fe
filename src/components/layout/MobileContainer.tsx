const MobileContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col mx-auto min-h-screen px-4 gap-2 pt-4">
      {children}
    </div>
  );
};

export default MobileContainer;

const MobileContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto min-h-screen px-4 pt-4">
      {children}
    </div>
  );
};

export default MobileContainer;

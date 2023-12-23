const Subtask = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full border border-cp-cyan bg-cp-cyan/20 p-2 text-base font-extrabold text-cp-cyan ring-offset-cp-cyan">
      {children}
    </div>
  );
};

export default Subtask;

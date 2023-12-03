const UserLevel = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center px-4">
      <div className="flex w-full items-end justify-between text-cp-red">
        <p className="text-2xl">
          Level: <span className="text-4xl font-bold">1</span>
        </p>
        <p className="text-xl">
          XP: <span className="font-bold">50/100</span>
        </p>
      </div>
      <div className="h-[20px] w-full -skew-x-12 bg-cp-red/30">
        <div
          className={`h-full w-[50%] bg-cp-red transition-all duration-300`}
        />
      </div>
    </div>
  );
};

export default UserLevel;
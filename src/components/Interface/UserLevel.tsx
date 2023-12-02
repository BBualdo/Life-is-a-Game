const UserLevel = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4">
      <div className="w-1/2">
        <div className="flex w-full items-center justify-between text-cp-red">
          <p>Level: 1</p>
          <p>XP: 50/100</p>
        </div>
        <div className="h-[20px] w-full -skew-x-12 bg-cp-red/30">
          <div
            className={`h-full w-[50%] bg-cp-red transition-all duration-300`}
          />
        </div>
      </div>
    </div>
  );
};

export default UserLevel;

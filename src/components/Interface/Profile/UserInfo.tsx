const UserInfo = () => {
  return (
    <>
      <div className="mt-4 flex border border-white">
        <div className="w-1/5 border-r border-white p-2">
          <h2 className="uppercase text-white">Username:</h2>
          <h3 className="text-3xl font-bold text-cp-red">BBualdo</h3>
        </div>
        <div className="flex-1 p-2">
          <h2 className="uppercase text-white">Current Goal:</h2>
          <h3 className="text-center text-3xl text-light-silver">
            MISSING DATA
          </h3>
        </div>
      </div>
      <div className="mt-4 flex max-h-[200px] flex-col border border-white p-2">
        <h2 className="uppercase text-white">Bio:</h2>
        <h3 className="text-center text-3xl text-light-silver">MISSING DATA</h3>
      </div>
    </>
  );
};

export default UserInfo;

const UserStats = () => {
  return (
    <>
      <div className="flex">
        <div className="flex-1 border border-white p-2">
          <h2 className="uppercase text-white">Missions Completed:</h2>
          <h3 className="text-3xl font-bold text-cp-red">0</h3>
        </div>
        <div className="flex-1 border border-white p-2">
          <h2 className="uppercase text-white">Missions Active:</h2>
          <h3 className="text-3xl font-bold text-cp-red">0</h3>
        </div>
        <div className="flex-1 border border-white p-2">
          <h2 className="uppercase text-white">Gained XP:</h2>
          <h3 className="text-3xl font-bold text-cp-red">0</h3>
        </div>
      </div>
    </>
  );
};

export default UserStats;

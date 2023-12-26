const MissionButtons = () => {
  return (
    <div className="flex items-center gap-20">
      <button className="btn btn-red hover:bg-cp-red/50">Give up</button>
      <button disabled className="btn btn-green enabled:hover:bg-cp-green/50">
        Complete Mission
      </button>
    </div>
  );
};

export default MissionButtons;

const Mission = ({ name }: { name: string }) => {
  return (
    <button className="mission-container text-xl uppercase transition-all duration-200 hover:bg-cp-red/50">
      {name}
    </button>
  );
};

export default Mission;

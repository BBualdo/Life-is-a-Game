const Mission = ({ title }: { title: string }) => {
  return (
    <button className="mission-container text-xl uppercase transition-all duration-200 hover:bg-cp-red/50">
      {title}
    </button>
  );
};

export default Mission;

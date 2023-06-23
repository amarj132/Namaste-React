const Shimmer = () => {
  return (
    <div className="flex  flex-wrap">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="w-48 h-48 bg-pink-50 p-2 m-2 shadow-lg"></div>
        ))}
    </div>
  );
};

export default Shimmer;

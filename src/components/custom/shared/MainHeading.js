const MainHeading = (props) => {
  return (
    <h2 className={`font-bold text-xl md:text-4xl mb-8 ${props.className}`}>{props.title || "title"}</h2>
  );
};

export default MainHeading;

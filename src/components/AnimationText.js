import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h2 className="side">
      {`I'm`}
      <MovingComponent
        type="typewriter"
        dataText={[
          "Akinloose Emmanuel Temidayo",
          "a skilled QA Engineer",
          "experienced in functional testing",
          "proficient in performance testing",
          "a dedicated professional",
        ]}
      />
    </h2>
  );
};
export default AnimationText;

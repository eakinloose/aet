import MovingComponent from "react-moving-text";
const AnimationText = () => {
   return (
      <h2 className="side">
         {`I'm`}
         <MovingComponent
            type="typewriter"
            dataText={[
               "Akinloose Emmanuel Temidayo",
               "a full-stack react, react native & nodejs developer",
               "a graphic designer",
               "a freelancer",
            ]}
         />
      </h2>
   );
};
export default AnimationText;

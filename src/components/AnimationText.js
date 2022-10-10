import MovingComponent from "react-moving-text";
const AnimationText = () => {
   return (
      <h1 className="side">
         {`I'm`}
         <MovingComponent
            type="typewriter"
            dataText={[
               "Akinloose Emmanuel Temidayo",
               "a javascript/react developer",
               "a graphic designer",
               "a freelancer",
            ]}
         />
      </h1>
   );
};
export default AnimationText;

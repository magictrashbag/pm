import ReactLogo from "../images/ball.svg";

const Pokeball = () => {
  return (
    <div className="pokeball-image">
      <img
        className="pokeball"
        alt=""
        src={require("../images/pokeball.png")}
      />
      <img className="ball-ring" alt="" src={require("../images/ring.gif")} />
      <img className="ring" alt="" src={ReactLogo} />
      <img className="shadow" alt="" src={require("../images/shadow.png")} />
    </div>
  );
};
export default Pokeball;

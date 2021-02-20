const Header = () => {
  return (
    <div
      className="Header"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <p
        style={{
          display: "flex",
          flexDirection: "row"
        }}
      >
        <h3 className="red">POKE</h3>
        <h3 className="white">MINT</h3>
      </p>
      <h1>COMING SOON</h1>
      <h2>
        <i>
          "Collect pokemon cards and trade them with other users Worldwide."
        </i>
      </h2>
    </div>
  );
};
export default Header;

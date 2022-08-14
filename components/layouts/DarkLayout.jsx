const DarkLayout = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(137, 129, 129, 1)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Dark Layout</h3>
      <div>{children}</div>
    </div>
  );
};

export default DarkLayout;

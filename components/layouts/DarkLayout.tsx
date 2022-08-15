import { FC } from "react";

interface DarkLayoutProps {
  children: React.ReactNode;
}

const DarkLayout: FC<DarkLayoutProps> = ({ children }) => {
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

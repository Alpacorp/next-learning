import Link from "next/link";
import React from "react";
import MainLayout from "../components/layouts/MainLayout";

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <h2 className={"title"}>
        Ir a <Link href="/about">About</Link>
      </h2>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/about.jsx</code>
      </p>
    </>
  );
};

export default HomePage;

HomePage.getLayout = (
  page:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
) => {
  return <MainLayout>{page}</MainLayout>;
};

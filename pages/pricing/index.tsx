import Link from "next/link";
import MainLayout from "../../components/layouts/MainLayout";
import React from "react";

const Pricing = () => {
  return (
    <>
      <h1>Pricing Page</h1>
      <h2 className={"title"}>
        Ir a{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </h2>

      <p className={"description"}>
        Get started by editing{" "}
        <code className={"code"}>pages/pricing/index.js</code>
      </p>
    </>
  );
};

export default Pricing;

Pricing.getLayout = (
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

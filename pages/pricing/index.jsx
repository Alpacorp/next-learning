import Link from "next/link";
import MainLayout from "../../components/layouts/MainLayout";

const Pricing = () => {
  return (
    <>
      <h1>Pricing</h1>
      <h1 className={"title"}>
        Ir a{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </h1>

      <p className={"description"}>
        Get started by editing{" "}
        <code className={"code"}>pages/pricing/index.js</code>
      </p>
    </>
  );
};

export default Pricing;

Pricing.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

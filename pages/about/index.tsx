import Link from "next/link";
import {
  ReactFragment,
  ReactPortal,
  ReactElement,
  JSXElementConstructor,
} from "react";
import DarkLayout from "../../components/layouts/DarkLayout";
import MainLayout from "../../components/layouts/MainLayout";

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h2 className={"title"}>
        Ir a{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </h2>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/home.js</code>
      </p>
    </>
  );
}

AboutPage.getLayout = (
  page:
    | string
    | number
    | boolean
    | ReactFragment
    | ReactPortal
    | ReactElement<any, string | JSXElementConstructor<any>>
    | null
    | undefined
) => {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

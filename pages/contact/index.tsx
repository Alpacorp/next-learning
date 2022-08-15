import Link from "next/link";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import MainLayout from "../../components/layouts/MainLayout";

export default function ContactPage() {
  return (
    <>
      <h1>Contact Page</h1>
      <h2 className={"title"}>
        Ir a{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </h2>
      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/contact.js</code>
      </p>
    </>
  );
}

ContactPage.getLayout = (
  page:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined
) => {
  return <MainLayout>{page}</MainLayout>;
};

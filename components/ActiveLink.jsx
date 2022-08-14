import { useRouter } from "next/router";
import Link from "next/link";

const styleNav = {
  color: "#0070f3",
  textDecoration: "underline",
};

const ActiveLink = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? styleNav : null}>{text}</a>
    </Link>
  );
};

export default ActiveLink;

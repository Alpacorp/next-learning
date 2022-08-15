import { CSSProperties, FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const styleNav: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface ActiveLinkProps {
  text: string;
  href: string;
}

const ActiveLink: FC<ActiveLinkProps> = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? styleNav : undefined}>{text}</a>
    </Link>
  );
};

export default ActiveLink;

import Link from "next/link";

export type NavLinkProps = { linkText: string; linkAddress: string };

function NavLink({ linkText, linkAddress }: NavLinkProps) {
  return <Link href={linkAddress}>{linkText}</Link>;
}

export default NavLink;

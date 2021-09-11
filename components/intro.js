import Link from "next/link";
import { CMS_NAME, CMS_URL } from "../lib/constants";

export default function Intro(props) {
  return (
    <section className="flex items-center md:flex-start mt-16 mb-16 md:mb-12">
      <h1 className="text-xl md:text-2xl font-bold tracking-tighter leading-tight">
        <Link href="/">
        <a>{props.websiteTitle}</a>
        </Link>
      </h1>
    </section>
  );
}

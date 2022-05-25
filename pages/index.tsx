import type { NextPage } from "next";
import Link from "next/link";
import { SEO } from "../components/common/SEO";
import { Search } from "../components/search/Search";

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Search />
      <h2>wth is a domainhack??</h2>
      <p>
        A domain hack is a unique domain name that uses the TLD to create a word or sentence. For
        example, "bir.ds", "examp.le" or "hello.world". Domain hacks offer the ability to produce
        shorter domain names. This makes them potentially valuable as redirectors, pastebins, base
        domains from which to delegate subdomains and URL shortening services.
      </p>
      <h2>i can has json?</h2>
      <p>
        <code>
          curl https://domainhack.ejer.gq/api/domains?input=
          {`\<yourquery\>`}
        </code>
        <br />
        <Link href="/api/domains?input=ilikepizza">
          <a target="_blank">Example API response</a>
        </Link>
      </p>
    </>
  );
};

export default Home;

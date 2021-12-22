import Head from "next/head";

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  bigImage?: boolean;
};

export const SEO = ({ title, description, image, bigImage }: SEOProps) => {
  const fullTitle = title ? `${title} / DomainHack` : "Search for domain hacks";

  const fullDescription = description || "Get your next quirky domain name here!";

  const fullImage = image || "/logo.png";

  return (
    <Head>
      <title>{fullTitle}</title>
      <link rel="icon" href="/favicon.png" />

      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://domainhack.ejer.gq/" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullImage} />

      {bigImage ? <meta property="twitter:card" content="summary_large_image" /> : ""}
      <meta property="twitter:url" content="https://domainhack.ejer.gq/" />
      <meta property="twitter:domain" content="domainhack.ejer.gq" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      <meta property="twitter:image" content={fullImage} />

      <meta property="og:site_name" content="DomainHack" />
      <meta name="theme-color" content="#ffffff" />

      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </Head>
  );
};

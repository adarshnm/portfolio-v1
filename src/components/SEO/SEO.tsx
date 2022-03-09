import METADATA from '@/constants/metadata.constants';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
      }
    }
  }
`;

export default function SEO() {
  const { site } = useStaticQuery(query);
  const { defaultTitle, defaultDescription } = site.siteMetadata;

  const seo: ISEO = {
    title: defaultTitle ?? METADATA.TITLE,
    description: defaultDescription ?? METADATA.DESCRIPTION,
  };
  return (
    <Helmet title={seo.title}>
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      <link rel="icon" type="image/png" href="./favicon.png" />
    </Helmet>
  );
}

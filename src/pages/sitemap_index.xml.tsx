import { promises as fs } from 'fs';
import path from 'path';
import { XMLBuilder, XMLParser } from 'fast-xml-parser';
import { GetServerSideProps, NextPage } from 'next';

const XMLSiteMapPage: NextPage = () => null;

type SiteMapIndex = {
  sitemapindex: {
    sitemap: Array<{
      loc: string;
      lastmod?: string;
    }>;
  };
};

const getRemoteSiteMapIndex = async (): Promise<SiteMapIndex> => {
  try {
    // fetch the data
    const response = await fetch('https://blog.qcpetstudies.com/sitemap_index.xml');
    if (!response.ok) {
      throw Error('Could not fetch remote sitemap index');
    }
    const data = await response.text();
    const parser = new XMLParser();
    return parser.parse(data.replace(/<\?xml.*\?>/u, ''));
  } catch (err) {
    return {
      sitemapindex: {
        sitemap: [],
      },
    };
  }
};

const getLocalSiteMapLastModTime = async (): Promise<Date | void> => {
  try {
    const data = await fs.stat(path.join(__dirname, '../../../public/sitemap.xml'));
    return data.mtime;
  } catch (err) { /* empty */ }
};

export const getServerSideProps: GetServerSideProps = async context => {
  const siteMapIndexObj = await getRemoteSiteMapIndex();

  const lastMod = await getLocalSiteMapLastModTime();

  siteMapIndexObj.sitemapindex.sitemap.push({
    loc: 'https://www.qcpetstudies.com/sitemap.xml',
    lastmod: lastMod?.toISOString(),
  });

  const builder = new XMLBuilder({});
  const xmlContent = builder.build(siteMapIndexObj);

  context.res.setHeader('Content-Type', 'text/xml');
  context.res.write(`<?xml version="1.0" encoding="UTF-8"?>${xmlContent}`);
  context.res.end();

  return { props: {} };
};

export default XMLSiteMapPage;

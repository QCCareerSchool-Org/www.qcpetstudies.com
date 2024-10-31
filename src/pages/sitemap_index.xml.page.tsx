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
    const response = await fetch('https://blog.qcpetstudies.com/blog/sitemap_index.xml');
    if (!response.ok) {
      throw Error('Could not fetch remote sitemap index');
    }
    const data = await response.text();
    console.log(data);
    const parser = new XMLParser({ ignoreAttributes: false });
    return parser.parse(data.replace(/<\?xml.*\?>/u, '')) as SiteMapIndex;
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
    const sitemap = path.resolve('./public/sitemap.xml');
    const data = await fs.stat(path.join(sitemap));
    return data.mtime;
  } catch (err) { console.log(err); /* empty */ }
};

export const getServerSideProps: GetServerSideProps<Record<string, never>> = async context => {
  const siteMapIndexObj = await getRemoteSiteMapIndex();

  const lastMod = await getLocalSiteMapLastModTime();

  siteMapIndexObj.sitemapindex.sitemap.push({
    loc: 'https://www.qcpetstudies.com/sitemap.xml',
    lastmod: lastMod?.toISOString(),
  });

  const builder = new XMLBuilder({ ignoreAttributes: false });
  const xmlContent = builder.build(siteMapIndexObj) as string;

  context.res.setHeader('Cache-Control', 'public, max-age=86400, must-revalidate');
  context.res.setHeader('Content-Type', 'text/xml');
  context.res.write(`<?xml version="1.0" encoding="UTF-8"?>${xmlContent}`);
  context.res.end();

  return { props: {} };
};

export default XMLSiteMapPage;

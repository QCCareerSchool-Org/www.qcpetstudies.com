import { promises as fs } from 'fs';
import type { MetadataRoute } from 'next';
import path from 'path';
import { siteVideos } from './videos';

const prefix = 'https://www.qcpetstudies.com';

const getAppDirectoryPages = async (filePath = 'src/app'): Promise<MetadataRoute.Sitemap> => {
  const result: MetadataRoute.Sitemap = [];
  const files = await fs.readdir(filePath);
  for (const f of files) {
    const fullname = path.join(filePath, f);
    const url = getUrl(filePath);
    if (url.endsWith('/videos/[slug]')) {
      result.push(...getVideoPages());
      continue;
    }
    const stat = await fs.stat(fullname);
    if (stat.isDirectory() && !stat.isSymbolicLink()) {
      result.push(...(await getAppDirectoryPages(fullname)));
    }
    if (stat.isFile() && (f.endsWith('page.tsx') || f.endsWith('page.jsx'))) {
      result.push({
        url,
        lastModified: stat.mtime,
        priority: getPriority(url),
        videos: siteVideos.filter(v => v.pages.includes(url)),
      });
    }
  }
  return result;
};

const getUrl = (filePath: string): string => {
  const urlPath = filePath
    .replaceAll('\\', '/')
    .substring(7)
    .replace(/\/\(.*\)/u, '');
  return `${prefix}${urlPath}`;
};

const getPriority = (url: string): number => {
  if (url === prefix) {
    return 1;
  }
  if (url === `${prefix}/get-a-course-preview`) {
    return 1;
  }
  if (url.startsWith(`${prefix}/certification-courses`)) {
    return 0.9;
  }
  if (url === `${prefix}/about/about-qc-pet-studies`) {
    return 0.8;
  }
  if (url === `${prefix}/contact-us`) {
    return 0.8;
  }
  return 0.5;
};

const getVideoPages = (): MetadataRoute.Sitemap => {
  return siteVideos.map(v => ({
    url: v.player_loc,
    lastModified: v.publication_date,
    priority: 0.5,
  }));
};

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  return getAppDirectoryPages();
};

export default sitemap;

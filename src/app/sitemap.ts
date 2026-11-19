import { promises as fs } from 'fs';
import type { MetadataRoute } from 'next';
import path from 'path';

import { siteVideos } from '../videos';
import { siteUrl } from '@/lib/siteUrl';
import { escapeXmlObject } from '@/lib/xml';

// Folders that never map 1:1 to a URL segment
const isNonRouteSegment = (name: string): boolean => /^(\[|_|@)/u.test(name);

const isNoIndex = async (file: string): Promise<boolean> => {
  const source = await fs.readFile(/* turbopackIgnore: true */ file, 'utf8');
  return /robots:\s*\{[^}]*\bindex:\s*false/u.test(source);
};

const getAppDirectoryPages = async (filePath = 'src/app'): Promise<MetadataRoute.Sitemap> => {
  const result: MetadataRoute.Sitemap = [];
  // sitemap is prerendered at build time, so don't let Turbopack trace src/app into the server bundle
  const files = await fs.readdir(/* turbopackIgnore: true */ filePath);
  for (const f of files) {
    const fullname = path.join(/* turbopackIgnore: true */ filePath, f);
    const stat = await fs.stat(/* turbopackIgnore: true */ fullname);
    if (stat.isDirectory() && !stat.isSymbolicLink()) {
      if (getUrl(fullname).endsWith('/videos/[slug]')) {
        result.push(...getVideoPages());
      } else if (!isNonRouteSegment(f)) {
        result.push(...await getAppDirectoryPages(fullname));
      }
    } else if (stat.isFile() && /^page\.(tsx|jsx)$/u.test(f)) {
      if (await isNoIndex(fullname)) {
        continue;
      }
      const url = getUrl(filePath);
      result.push({
        url,
        lastModified: stat.ctime,
        priority: getPriority(url),
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
  return `${siteUrl}${urlPath}`;
};

const getPriority = (url: string): number => {
  if (url === siteUrl) {
    return 1;
  }
  if (url === `${siteUrl}/get-a-course-preview`) {
    return 1;
  }
  if (url.startsWith(`${siteUrl}/certification-courses`)) {
    return 0.9;
  }
  if (url === `${siteUrl}/about/about-qc-pet-studies`) {
    return 0.8;
  }
  if (url === `${siteUrl}/contact-us`) {
    return 0.8;
  }
  return 0.5;
};

const getVideoPages = (): MetadataRoute.Sitemap => {
  return siteVideos.map(v => ({
    url: v.watch_loc,
    lastModified: v.publication_date,
    priority: 0.5,
    images: [ v.thumbnail_loc ],
    videos: [ escapeXmlObject(v) ],
  }));
};

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  return getAppDirectoryPages();
};

export default sitemap;

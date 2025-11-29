export default function sitemap() {
  return [
    {
      url: 'https://www.codeleaf.co.in',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}

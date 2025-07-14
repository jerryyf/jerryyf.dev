export const baseUrl = 'https://jerryyf.dev'

export default async function sitemap() {

  let routes = ['', '/about'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes]
}

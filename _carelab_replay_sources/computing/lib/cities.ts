export type City = {
  id: string;
  name: string;
  zh: string;
  lat: number;
  lon: number;
  country: string;
  population: number;
  capital: boolean;
  aliases: string[];
};
export const fallbackCities: City[] = [
  ['1816670', 'Beijing', '北京', 40, 116, 'CN'],
  ['1790630', 'Xi’an', '西安', 34.27, 108.93, 'CN'],
  ['1796556', 'Sanya', '三亚', 18, 109.5, 'CN'],
  ['carelab-miyun', 'Miyun', '密云', 40.38, 116.84, 'CN'],
  ['1280849', 'Kashgar', '喀什', 39.5, 76, 'CN'],
  ['1880252', 'Singapore', '新加坡', 1.35, 103.82, 'SG'],
  ['1850147', 'Tokyo', '东京', 35.68, 139.69, 'JP'],
  ['2147714', 'Sydney', '悉尼', -33.87, 151.21, 'AU'],
].map(([id, name, zh, lat, lon, country]) => ({
  id: String(id),
  name: String(name),
  zh: String(zh),
  lat: +lat,
  lon: +lon,
  country: String(country),
  population: 0,
  capital: false,
  aliases: [],
}));
export const cityName = (city: City, language: 'zh' | 'en') =>
  language === 'zh' && city.zh ? city.zh : city.name;
export const cityLabel = (city: City, language: 'zh' | 'en') =>
  `${cityName(city, language)} · ${city.country}`;
export const normalizeCity = (text: string) =>
  text
    .normalize('NFKD')
    .replace(/[\u0300-\u036f’'\s.-]/g, '')
    .toLowerCase();
export function citySearchIndex(cities: City[]) {
  return cities.map((city) => ({
    city,
    terms: [city.name, city.zh, ...city.aliases]
      .filter(Boolean)
      .map(normalizeCity),
  }));
}
export function searchCities(
  index: ReturnType<typeof citySearchIndex>,
  query: string,
  limit = 40,
): City[] {
  const q = normalizeCity(query);
  if (!q) return index.slice(0, limit).map((x) => x.city);
  const exact: City[] = [],
    prefix: City[] = [],
    partial: City[] = [];
  for (const x of index) {
    if (x.terms.some((t) => t === q)) exact.push(x.city);
    else if (x.terms.some((t) => t.startsWith(q))) prefix.push(x.city);
    else if (x.terms.some((t) => t.includes(q))) partial.push(x.city);
  }
  return [...exact, ...prefix, ...partial].slice(0, limit);
}
export function globeCities(cities: City[]) {
  return cities.filter(
    (c) =>
      c.capital ||
      c.population >= 1000000 ||
      fallbackCities.some((f) => f.id === c.id),
  );
}

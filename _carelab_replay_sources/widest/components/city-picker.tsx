'use client';
import { useMemo, useState } from 'react';
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from './ui/combobox';
import { City, cityLabel, citySearchIndex, searchCities } from '../lib/cities';
import type { Language } from '../lib/i18n';
export default function CityPicker({
  cities,
  cityId,
  language,
  label,
  onSelect,
}: {
  cities: City[];
  cityId?: string;
  language: Language;
  label: string;
  onSelect: (city: City) => void;
}) {
  const [query, setQuery] = useState('');
  const index = useMemo(() => citySearchIndex(cities), [cities]);
  const results = useMemo(() => searchCities(index, query), [index, query]);
  const value = cities.find((c) => c.id === cityId) ?? null;
  return (
    <Combobox
      items={results}
      value={value}
      filter={null}
      itemToStringLabel={(city: City) => cityLabel(city, language)}
      isItemEqualToValue={(a: City, b: City) => a.id === b.id}
      onInputValueChange={(text, details) => {
        if (details.reason === 'input-change') setQuery(text);
      }}
      onOpenChange={(open, details) => {
        if (open && details.reason !== 'input-change') setQuery('');
      }}
      onValueChange={(city: City | null) => {
        if (city) onSelect(city);
      }}
    >
      <ComboboxInput
        className="city-input"
        aria-label={label}
        placeholder={language === 'zh' ? '输入城市名称…' : 'Search city name…'}
        onFocus={(e) => e.currentTarget.select()}
      />
      <ComboboxContent className="city-popup">
        <div className="city-search-caption">
          {language === 'zh'
            ? '选择搜索结果以应用位置'
            : 'Select a result to apply its location'}
        </div>
        <ComboboxEmpty>
          {language === 'zh'
            ? '未找到城市，可输入经纬度或在地球上选点。'
            : 'No city found. Enter coordinates or pick on the globe.'}
        </ComboboxEmpty>
        <ComboboxList>
          {(city: City) => (
            <ComboboxItem value={city} key={city.id} className="city-option">
              <span>
                {cityLabel(city, language)}
                <small>
                  {city.name} · {city.lat.toFixed(2)}°, {city.lon.toFixed(2)}°
                </small>
              </span>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}

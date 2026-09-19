import type { APIRoute } from 'astro';

// Igorot Stone Kingdom, Pinsao Proper, Baguio (16.4315628, 120.5750853)
const LAT = 16.4316;
const LON = 120.5751;
const CACHE_TTL_SECONDS = 1800; // 30 minutes

function apiUrl(): string {
  const params = new URLSearchParams({
    latitude: String(LAT),
    longitude: String(LON),
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_gusts_10m,wind_direction_10m,uv_index,is_day',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset',
    timezone: 'Asia/Manila',
    forecast_days: '7',
    wind_speed_unit: 'ms'
  });
  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
}

export const prerender = false;

export const GET: APIRoute = async () => {
  const cache = (globalThis as { caches?: CacheStorage }).caches?.default;
  const cacheKey = new Request('https://igorotstonepark.com/api/weather');

  try {
    if (cache) {
      const hit = await cache.match(cacheKey);
      if (hit) {
        return new Response(hit.body, { headers: hit.headers, status: hit.status });
      }
    }

    const upstream = await fetch(apiUrl());

    if (!upstream.ok) {
      return new Response(JSON.stringify({ error: 'weather_unavailable' }), {
        status: 502,
        headers: { 'content-type': 'application/json' }
      });
    }

    const data = await upstream.json();
    const payload = JSON.stringify({
      current: data.current,
      daily: data.daily,
      timezone: data.timezone,
      fetchedAt: Date.now()
    });

    const headers = new Headers({
      'content-type': 'application/json; charset=utf-8',
      'cache-control': `public, max-age=${CACHE_TTL_SECONDS}, s-maxage=${CACHE_TTL_SECONDS}`,
      'access-control-allow-origin': '*'
    });

    if (cache) {
      await cache.put(cacheKey, new Response(payload, { headers }));
    }

    return new Response(payload, { headers });
  } catch {
    return new Response(JSON.stringify({ error: 'weather_unavailable' }), {
      status: 502,
      headers: { 'content-type': 'application/json' }
    });
  }
};

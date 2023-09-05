export const MOCK_openmeteo = {
    latitude: -22.875,
    longitude: -43.375,
    utc_offset_seconds: 0,
    timezone: "GMT",
    timezone_abbreviation: "GMT",
    elevation: 26,
    current_weather: {
        temperature: 29,
        windspeed: 2.5,
        winddirection: 315,
        weathercode: 1,
        is_day: 1,
        time: "2023-09-05T11:00"
    }
}

export const MOCK_geocode = {
    place_id: 117944598,
    licence: "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    powered_by: "Map Maker: https://maps.co",
    osm_type: "way",
    osm_id: 61999539,
    boundingbox: [
        "-22.8621142",
        "-22.8611515",
        "-43.4350026",
        "-43.4339673"
    ],
    lat: "-22.861635200000002",
    lon: "-43.434366032386365",
    display_name: "Avenida Brasil (Bairro Batam), Realengo, Zona Oeste do Rio de Janeiro, Rio de Janeiro, Região Geográfica Imediata do Rio de Janeiro, Região Metropolitana do Rio de Janeiro, Região Geográfica Intermediária do Rio de Janeiro, Rio de Janeiro, Southeast Region, Brazil",
    class: "landuse",
    type: "residential",
    importance: 0.39999999999999997
}

export const MOCK_geocodingController = {
    latitude: -22.875,
    longitude: -43.375,
    utc_offset_seconds: 0,
    timezone: "GMT",
    timezone_abbreviation: "GMT",
    elevation: 37,
    current_weather: {
        temperature: 29,
        windspeed: 2.5,
        winddirection: 315,
        weathercode: 1,
        is_day: 1,
        time: "2023-09-05T11:00"
    },
    city: " Realengo",
    country: " Brazil"
}
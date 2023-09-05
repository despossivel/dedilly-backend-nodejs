import {
    geocodeAddress,
    fetchWeatherForecast
} from "../services/index.js"

export const geocodingController = async (req, res) => {
    const address = req.params?.address,
        responseGeocode = await geocodeAddress(address)

    if (!responseGeocode?.length) return res.status(400).send('Endereço não encontrado!')

    const [{ lat, lon, display_name }] = responseGeocode,
        geodataResponse = await fetchWeatherForecast({ latitude: parseFloat(lat), longitude: parseFloat(lon) }),
        addressArray = display_name?.split(',')

    res.send({
        ...geodataResponse,
        city: addressArray[1],
        country: addressArray[addressArray?.length - 1]
    });
}
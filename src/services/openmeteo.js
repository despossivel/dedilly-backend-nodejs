import axios from "axios"

export async function fetchWeatherForecast({ latitude, longitude }) {
    try {
        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
        const response = await axios.get(apiUrl);
        if (response.status === 200) {
            const {
                generationtime_ms,
                ...restResponse
            } =  response?.data;

            return restResponse;
        } else {
            throw new Error(`Solicitação falhou com código de status: ${response.status}`);
        }
    } catch (error) {
        console.error('Erro durante a solicitação:', error.message);
        throw error;
    }
}
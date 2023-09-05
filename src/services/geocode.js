import axios from "axios"

export async function geocodeAddress(address) {
    try {
        const response = await axios.get(`https://geocode.maps.co/search?q=${address}`);
        if (response.status === 200) { 
            return response.data;
        } else { 
            throw new Error(`Solicitação falhou com código de status: ${response.status}`);
        }
    } catch (error) { 
        console.error('Erro durante a solicitação:', error.message);
        throw error;
    }
}
const API_KEY = '91d9c9243173440a884297c0b651265c';
const BASE_URL = 'https://api.rawg.io/api';

export const searchGames = async (query) => {
    const res = await fetch(
        `${BASE_URL}/games?key=${API_KEY}&search=${query}`
    );

    if (!res.ok) {
        throw new Error("Errore nella chiamata API");
    }

    const data = await res.json();
    return data.results;
};

export const getTrendingGames = async () => {
    const res = await fetch(
        `${BASE_URL}/games?key=${API_KEY}&ordering=rating&page_size=20`
    );
    const data = await res.json();
    return data.results;
}


export const getGameDetails = async (id) => {
    const res = await fetch(
        `${BASE_URL}/games/${id}?key=${API_KEY}`
    );

    const data = await res.json();
    return data;
};
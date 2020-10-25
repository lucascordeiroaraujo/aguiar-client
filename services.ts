export const API_URL = 'http://viagensaguiar-com-br.umbler.net/?rest_route=';

const getData = async (url: string) => {
  try {
    const response = await fetch(url);

    const data = await response.json();

    return data;
  } catch (e) {
    console.error('API ERROR', e)

    return null;
  }

};

const youTubeVideos = async () => {
  const channelId = 'UCJy-lSzu5UzVvLn9nXvWovg';

  const apiKey = 'AIzaSyDTz6ZMOPZ9xMn88UjSiiW61yrdvalD-pE';

  const data = await getData(
    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=8`
  );

  return data.items;
};

const getPage = async (pageId: string) => {
  const data = getData(`${API_URL}/acf/v3/pages/${pageId}`);

  return data;
};

const getItineraries = async (perPage: string, city: any, month: any) => {
  let url = ''

  if (city && month) {
    url = `aguiar/itineraries/${perPage}/${city}/${month}`
  } else {
    url = `wp/v2/itineraries&per_page=${perPage}&_fields=title,slug,acf`
  }

  const data = getData(`${API_URL}/${url}`);

  return data;
};

export default {
  youTubeVideos,
  getPage,
  getItineraries
};

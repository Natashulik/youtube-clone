
export const fetchVideos = async (text, quantity, sortType, pageToken) => {
  let url = `${process.env.REACT_APP_URL_YOUTUBE_SEARCH}?part=snippet&q=${text}&key=${process.env.REACT_APP_API_KEY}&maxResults=${quantity}&order=${sortType}&type=video`;
  if (pageToken) {
    url = url + `&pageToken=${pageToken}`;
  }
  const result = await fetch(url);
  const data = await result.json();
  return data;
}






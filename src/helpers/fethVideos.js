
  export const fetchVideos = async (text, quantity, sortType, pageToken) => {
    const token = localStorage.getItem('token');
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${text}&key=${process.env.REACT_APP_API_KEY}&maxResults=${quantity}&order=${sortType}&type=video`;
    if (pageToken) {
      url= url +`&pageToken=${pageToken}`;
    }
    const result = await fetch(url);
    const data = await result.json();
    return data;
  }






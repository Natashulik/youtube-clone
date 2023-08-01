
export const fetchVideos = async (text) => {
    const token = localStorage.getItem('token');
    const result = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${text}&key=${process.env.REACT_APP_API_KEY}&maxResults=12&type=video`)
    const data = await result.json();
    console.log(data.items)
    return data.items;
  }



export const fetchViewsCount= async(videoId) => {
    const videoResult = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${process.env.REACT_APP_API_KEY}`);
    const res = await videoResult.json();
    const views = res.items[0].statistics.viewCount;
    return views;
}
import ky from "ky-universal";
import { useQuery } from "react-query";

// Fetch posts from WordPress REST API
const fetchPosts = async (limit = 10) => {
  const parsed: any[] = await ky("https://cms.instinct.is/wp-json/wp/v2/posts").json();
  // WordPress API provides 'per_page' parameter for limiting results
  const result = parsed.slice(0, limit); // Assuming parsed array is already sorted by date
  return result;
};

const usePosts = (limit: number) => {
  return useQuery(["posts", limit], () => fetchPosts(limit));
};

export { usePosts, fetchPosts };

import { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import nextId from "react-id-generator";

const URL =
	"https://api.thenewsapi.com/v1/news/top?api_token=ZPu927rAikF9eNSWOvKk9VjBv4tH0exMCrxVp0bI&locale=id&language=id";

export default function NewsList() {
	const [news, setNews] = useState([]);
	const [err, setError] = useState("");

	useEffect(() => {
		const CancelToken = axios.CancelToken;
		const source = CancelToken.source();
		const handleFetch = async () => {
			let result;
			try {
				result = await axios.get(URL, { cancelToken: source.token });
				setNews(result.data.data);
			} catch (error) {
				setError(error);
			}
		};
		handleFetch();
		return () => {
			source.cancel();
		};
	}, []);

	return (
		<div className="container w-50 py-5">
			{err === ""
				? <h1>{err}</h1>
				: news.length === 0 && <h3>Please wait ...</h3>
			}
			{news.length === 0 && <h1>Pls Wait ...</h1>}
			{news.map((item) => (
				<NewsItem key={nextId()} title={item.title} content={item.snippet} />
			))}
		</div>
	);
}

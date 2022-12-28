import useSwr from "swr";
export default function DashboardSWR() {
  const fetcher = async () => {
    const resp = await fetch("http://localhost:4000/dashboard");
    const data = await resp.json();
    return data;
  };

  const { data, error } = useSwr("dashboard", fetcher);

  if (error) return <h2>An error has occured</h2>;
  if (!data) return <h2>Loading...</h2>;
  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following - {data.following}</h2>
    </div>
  );
}

async function getStats() {
  const stats = await fetch(
    "https://nekoweb.org/api/site/info/losswaffle"
  ).then((x) => x.json());

  return {
    updated: new Date(stats.updated_at).toISOString().split("T")[0],
    created: new Date(stats.created_at).toISOString().split("T")[0],
    views: stats.views,
  };
}

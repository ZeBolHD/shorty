const getShortedURL = async (url: string) => {
  const body = JSON.stringify({
    url: url,
  });

  const shorted = await fetch("/api/link", {
    body,
    method: "POST",
  }).then((res) => res.json());

  return shorted;
};

export default getShortedURL;

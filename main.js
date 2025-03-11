async function get(url) {
  const res = await fetch(url);
  const data = await res.json();
  return {
    headers: res.headers,
    statusText: res.statusText,
    status: res.status,
    data,
  };
}

async function post(url, data) {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });
  const resData = await res.json();
  return resData;
}
get("https://jsonplaceholder.typicode.com/posts").then((data) => {
  console.log(data);
});
post("https://jsonplaceholder.typicode.com/posts", {
  postId: 1,
  name: "mahdi piriyan",
  email: "mahdipiriyan1@gmail.com",
  body: "this is a test",
}).then((data) => {
  console.log(data);
});

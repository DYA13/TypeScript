const apiService = (url: string, method: "GET" | "POST") =>
  fetch(url, { method })
const method = "POST"

apiService("https://site.com", "POST")

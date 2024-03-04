const URL = import.meta.env.VITE_BIN_URL;
const BIN_ID = import.meta.env.VITE_BIN_ID;

const completeURL = `${URL}/b/${BIN_ID}?meta=false`;

export const tasks = {
  postUser(data: string) {
    return buildRequest("POST", completeURL, data);
  },
  getUser() {
    return buildRequest("GET", completeURL);
  },
};

type Method = "GET" | "POST" | "PUT" | "PATCH";

function formRequestBody(method: Method, data: unknown): RequestInit {
  const request: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key":
        "$2a$10$ful1bM3en98uMHsBaySWtOyT2YIXYqWmWADYEbCjFzYWDtjo7Yz5K",
    },
  };
  if (method === "GET") return request;
  return {
    ...request,
    body: JSON.stringify(data),
  };
}

export function buildRequest(method: Method, url: string, data?: string) {
  return fetch(url, formRequestBody(method, data)).then((res) => {
    if (!res.ok) throw new Error("An error occurred: " + res.status);
    return res.json();
  });
}

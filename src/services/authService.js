export async function login(authDetail) {
  const requestOptions = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };
  const response = await fetch(
    `${process.env.REACT_APP_HOSTLINK}/login`,
    requestOptions
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; // eslint-disable-line
  }
  if (!response.ok) {
    const error = new Error(response.statusText);
    error.status = response.status;
    throw error;
  }
  const data = await response.json();
  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }

  return data;
}

export async function register(authDetail) {
  const requestOptions = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };

  const response = await fetch(
    `${process.env.REACT_APP_HOSTLINK}/register`,
    requestOptions
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; // eslint-disable-line
  }
  const data = await response.json();
  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }
}

export async function logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("cbid");
}

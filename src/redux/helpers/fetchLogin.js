
export const fetchLogin = async (email, password) => {
  const result = await fetch(process.env.REACT_APP_URL_LOGIN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })

  const data = await result.json();
  return data;
}
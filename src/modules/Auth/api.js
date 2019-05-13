export const auth = (username, password) =>
  fetch(
    `https://loft-taxi.glitch.me/auth?username=${username}&password=${password}`
  ).then(response => {
    const { success, error } = response;
    
    if(!success) {
      throw error;
    }

    return response.json();
  });
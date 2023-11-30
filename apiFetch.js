
export async function persona() {
  const url = 'https://randomuser.me/api/';
  const options = {
    method: 'GET'
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
   return result;
  } catch (error) {
    console.error(error);
  }
}


export async function tiempo(ciudad) {
  const url = `https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?city=${ciudad}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1b057bcb6emsh7fe99f8ba9aaef7p153839jsn6a9930867c43',
      'X-RapidAPI-Host': 'world-time-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//console.log(await tiempo("Malaga"));
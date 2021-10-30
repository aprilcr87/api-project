export function fetchCat() {
   return fetch('https://thatcopy.pw/catapi/rest/', {
       method: 'GET'
   }).then(response => response.json());
  }

export function fetchYe() {
    return fetch('https://api.kanye.rest', {
       method: 'GET'
   }).then(response => response.json());
  }


  
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

//   export function fetchNasa() {
//       return fetch('https://api.nasa.gov/planetary/apod?api_key=fLyqTkOiS1CYt44RynV69I0bhbx43Kcicjp43jhf', {
//           method: 'GET'
//       }).then(response => response.json());
//   }


  
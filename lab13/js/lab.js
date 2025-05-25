// Lab 13 Assignment
// Charles Haiwen & Austin Allen
// 24 May 2025

fetch("./objects.json")
.then(response => {
       if (!response.ok) {
           throw new Error("HTTP error " + response.status);
       }
       return response.json();
   })
.then(res => res.json())
.then((json) => console.log(json));
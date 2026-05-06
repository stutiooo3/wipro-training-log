//1
async function getTodos() {
  try {
    let r = await fetch("https://jsonplaceholder.typicode.com/todos");
    let a = await r.json();

    let result = a
      .filter(t => t.id <= 10)
      .map(t => t.title);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

getTodos();

//2
async function getPosts() {
  try {
    let r = await fetch("https://jsonplaceholder.typicode.com/posts");
    let a = await r.json();

    let result = a
      .filter(p => p.userId === 1)
      .map(p => p.title);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

getPosts();

//3

async function getComments() {
  try {
    let r = await fetch("https://jsonplaceholder.typicode.com/comments");
    let a = await r.json();

    let result = a
      .filter(c => c.id <= 10)
      .map(c => c.email);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

getComments();

//4
async function getUsers() {
  try {
    let r = await fetch("https://jsonplaceholder.typicode.com/users");
    let a = await r.json();

    let result = a
      .filter(u => u.id <= 5)
      .map(u => u.name);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

getUsers();

//5
async function getAlbums() {
  try {
    let r = await fetch("https://jsonplaceholder.typicode.com/albums");
    let a = await r.json();

    let result = a
      .filter(al => al.id <= 10)
      .map(al => al.title);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

getAlbums();

//6
async function getPhotos() {
  try {
    let r = await fetch("https://jsonplaceholder.typicode.com/photos");
    let a = await r.json();

    let result = a
      .filter(p => p.id <= 5)
      .map(p => p.url);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

getPhotos();

//7
async function getCatFacts() {
  try {
    let r = await fetch("https://catfact.ninja/facts");
    let obj = await r.json();

    let result = obj.data
      .filter(f => f.length < 100)
      .map(f => f.fact);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

getCatFacts();

//8
async function getDogFacts() {
  try {
    let r = await fetch("https://dogapi.dog/api/v2/facts");
    let obj = await r.json();

    let result = obj.data
      .map(d => d.attributes.body);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

getDogFacts();

//9

async function getRandomUsers() {
  try {
    let r = await fetch("https://randomuser.me/api/?results=10");
    let obj = await r.json();

    let result = obj.results
      .filter(u => u.gender === "female")
      .map(u => u.name.first);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

getRandomUsers();

//10
async function getPokemon() {
  try {
    let r = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    let obj = await r.json();

    let result = obj.results
      .filter(p => p.name.startsWith("b"))
      .map(p => p.name);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

getPokemon();
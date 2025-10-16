

//Dog API
const dogImg = document.getElementById('dog-img');
const newDogBtn = document.getElementById('new-dog');

async function loadDog(){
    try{

        const dogapi = `https://dog.ceo/api/breeds/image/random`;

        const res = await fetch(dogapi);
        const data = await res.json();
        console.log(data);
        dogImg.src = data.message;

    }
    catch(err){
        console.error("error loading",err);
        dogImg.alt = "Failed to load image";

    }
}

newDogBtn.addEventListener("click",loadDog);
loadDog();

//Joke API
const setup = document.getElementById('setup');
const punchline = document.getElementById('punchline');
const newJokeBtn = document.getElementById('new-joke');


async function loadJoke(){
    try{

        const jokeapi = `https://official-joke-api.appspot.com/random_joke`;

        const res = await fetch(jokeapi);
        const data = await res.json();
        console.log(data);
        setup.innerText = data.setup;
        punchline.innerText = data.punchline;


    }catch(err){
        console.error("Error loading joke", err);
        setup.innerText = "Failed to load Joke";
        punchline.innerText = " ";
    }
}

newJokeBtn.addEventListener("click",loadJoke);
loadJoke();
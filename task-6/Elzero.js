let myNumbers = [1, 2, 3, 4, 5];

const [a,b,c,d,e] = myNumbers;

console.log(a * e); // 5


let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

const [aa, bb, cc, [dd, ee, [ff, gg]]] = mySkills;

console.log(`My Skills: ${aa}, ${bb}, ${cc}, ${dd}, ${ee}, ${ff}, ${gg}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel


let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
const [ccc] = arr1;
const [,aaa,bbb] = arr3;

console.log(`My Best Friends: ${aaa}, ${bbb}, ${ccc}`);

// My Best Friends: Shady, Mahmoud, Ahmed


const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
};

let [h1,h2,h3] = member.hobbies;
let {age,working :w,country} = member;

console.log(`My Age Is ${age} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${country}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming


const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
        "Oath In Felghana": ["USA", "Japan"],
        "Ark Of Napishtim": {
            US: "20 USD",
            JAP: "10 USD",
        },
        Origin: "30 USD",
    },
};

const {title:t,developer:de} = game;
const {o = "Oath In Felghana", ar = "Ark Of Napishtim", Origin:or} = game.releases;
const [u,j] = game.releases["Oath In Felghana"];
const {US : u_price,JAP : j_price} = game.releases["Ark Of Napishtim"];

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${de} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${ar}`);
// Although I Love Ark Of Napishtim

console.log(`${ar} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${ar} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD



let chosen = 1;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

const [{title : t1,age : a1,available :ava1, skills :[sk11,sk12]},{title : t2,age : a2,available :ava2, skills :[sk21,sk22]},{title : t3,age : a3,available :ava3, skills :[sk31,sk32]}] = myFriends;

// If chosen === 1

"Osama"
39
"Available"
"CSS"

// If chosen === 2

"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3

"Sayed"
33
"Available"
"Laravel"

if (chosen === 1) {
    console.log(`${t1} 
${a1}
${ava1 ? "" : "Not "}Available
${sk12}`);
} else if (chosen === 2){
    console.log(`${t2} 
${a2}
${ava2 ? "" : "Not "}Available
${sk22}`);
} else if (chosen === 3){
    console.log(`${t3} 
${a3}
${ava3 ? "" : "Not "}Available
${sk32}`);
}
import daScore from "./rankings/daScore";
import kukiScore from "./rankings/kukiScore";
import uniScore from "./rankings/uniScore";

let songs = [
  {
    artist: "Al Dexter",
    name: "Pistol Packin’ Mama",
    year: 1943,
    link: "",
},
{
    artist: "Aretha Franklin",
    name: "Respect",
    year: 1967,
    link: "",
},
{
    artist: "Astrud Gilberto, João Gilberto and Stan Getz",
    name: "The Girl from Ipanema",
    year: 1964,
    link: "",
},
{
    artist: "Ben E. King",
    name: "Stand By Me",
    year: 1961,
    link: "",
},
{
    artist: "Bill Haley & His Comets",
    name: "Rock Around The Clock",
    year: 1955,
    link: "",
},
{
    artist: "Billy Murray",
    name: "The Yankee Doodle Boy",
    year: 1909,
    link: "",
},
{
    artist: "Bing Crosby",
    name: "Silent Night",
    year: 1935,
    link: "",
},
{
    artist: "Bobby Hebb",
    name: "Sunny",
    year: 1966,
    link: "",
},
{
    artist: "Bobby Vinton",
    name: "Mr. Lonely",
    year: 1964,
    link: "",
},
{
    artist: "Boots Randolph",
    name: "Yakety Sax",
    year: 1963,
    link: "",
},
{
    artist: "Brian Hyland",
    name: "Itsy Bitsy Teenie Weenie Yellow Polka Dot Bikini",
    year: 1960,
    link: "",
},
{
    artist: "Buffalo Springfield",
    name: "For What It's Worth",
    year: 1966,
    link: "",
},
{
    artist: "Cher",
    name: "Bang Bang",
    year: 1966,
    link: "",
},
{
    artist: "Christophe",
    name: "Aline",
    year: 1965,
    link: "",
},
{
    artist: "Chubby Checker",
    name: "Let's Twist Again",
    year: 1961,
    link: "",
},
{
    artist: "Chuck Berry",
    name: "Johnny B. Goode",
    year: 1958,
    link: "",
},
{
    artist: "Cliff Richard & The Shadows",
    name: "Lucky Lips",
    year: 1966,
    link: "",
},
{
    artist: "David Bowie",
    name: "Space Oddity",
    year: 1969,
    link: "",
},
{
    artist: "Dean Martin",
    name: "That's Amore",
    year: 1953,
    link: "",
},
{
    artist: "Dion",
    name: "The Wanderer",
    year: 1961,
    link: "",
},
{
    artist: "Domenico Modugno",
    name: "Nel blu, dipinto di blu",
    year: 1958,
    link: "",
},
{
    artist: "Doris Day",
    name: "Que Sera Sera",
    year: 1956,
    link: "",
},
{
    artist: "Edith Piaf",
    name: "Non, Je Ne Regrette Rien",
    year: 1960,
    link: "",
},
{
    artist: "Edward Meeker",
    name: "Take Me Out To The Ball Game",
    year: 1908,
    link: "",
},
{
    artist: "Elvis Presley",
    name: "Hound Dog",
    year: 1956,
    link: "",
},
{
    artist: "Ennio Morricone",
    name: "L'estasi dell'oro",
    year: 1966,
    link: "",
},
{
    artist: "Everly Brothers",
    name: "All I Have To Do Is Dream",
    year: 1958,
    link: "",
},
{
    artist: "France Gall",
    name: "Poupée De Cire, Poupée De Son",
    year: 1965,
    link: "",
},
{
    artist: "Frank & Nancy Sinatra",
    name: "Something Stupid",
    year: 1967,
    link: "",
},
{
    artist: "Frank Sinatra",
    name: "Fly Me To The Moon",
    year: 1954,
    link: "",
},
{
    artist: "Gerardo Matos Rodríguez",
    name: "La Cumparsita",
    year: 1917,
    link: "",
},
{
    artist: "Haydn Quartet",
    name: "Put On Your Old Grey Bonnet",
    year: 1909,
    link: "",
},
{
    artist: "Herb Alpert",
    name: "Spanish Flea",
    year: 1965,
    link: "",
},
{
    artist: "Isley Brothers",
    name: "Twist and Shout",
    year: 1962,
    link: "",
},
{
    artist: "James Brown",
    name: "I Got You",
    year: 1964,
    link: "",
},
{
    artist: "Jefferson Airplane",
    name: "Somebody To Love",
    year: 1967,
    link: "",
},
{
    artist: "Jerry Lee Lewis",
    name: "Great Balls of Fire",
    year: 1957,
    link: "",
},
{
    artist: "Jimmie Rodgers",
    name: "Blue Yodel No 1 (T for Texas)",
    year: 1928,
    link: "",
},
{
    artist: "Jimmy Dean",
    name: "Big Bad John",
    year: 1961,
    link: "",
},
{
    artist: "Joe Dassin",
    name: "Les Champs-Élysées",
    year: 1969,
    link: "",
},
{
    artist: "Johnny Cash",
    name: "Ring of Fire",
    year: 1963,
    link: "",
},
{
    artist: "Johnny Otis",
    name: "Willie and the Hand Jive",
    year: 1958,
    link: "",
},
{
    artist: "Kai Kyser and His Orchestra",
    name: "Praise the Lord and Pass the Ammunition",
    year: 1957,
    link: "",
},
{
    artist: "Kyu Sakamoto",
    name: "Sukiyaki",
    year: 1960,
    link: "",
},
{
    artist: "Led Zeppelin",
    name: "Whole Lotta Love",
    year: 1969,
    link: "",
},
{
    artist: "Lesley Gore",
    name: "It's My Party",
    year: 1963,
    link: "",
},
{
    artist: "Little Eva",
    name: "Loco-Motion",
    year: 1962,
    link: "",
},
{
    artist: "Little Richard",
    name: "Tutti Frutti",
    year: 1955,
    link: "",
},
{
    artist: "Lone Star",
    name: "Mi Calle",
    year: 1968,
    link: "",
},
{
    artist: "Louis Armstrong",
    name: "What A Wonderful World",
    year: 1967,
    link: "",
},
{
    artist: "Manfred Mann",
    name: "Doo Wah Diddy",
    year: 1964,
    link: "",
},
{
    artist: "Marmalade",
    name: "Ob-La-Di Ob-La-Da",
    year: 1969,
    link: "",
},
{
    artist: "Miriam Makeba",
    name: "Pata Pata",
    year: 1967,
    link: "",
},
{
    artist: "Nancy Sinatra",
    name: "These Boots Are Made for Walkin'",
    year: 1966,
    link: "",
},
{
    artist: "Omega",
    name: "Gyöngyhajú Lány",
    year: 1969,
    link: "",
},
{
    artist: "Palito Ortega En Nashville",
    name: "Amanecer Sin Tí",
    year: 1966,
    link: "",
},
{
    artist: "Paul Anka",
    name: "Put Your Head On My Shoulder",
    year: 1959,
    link: "",
},
{
    artist: "Paul Mauriat",
    name: "L'amour est bleu",
    year: 1968,
    link: "",
},
{
    artist: "Peggy Lee",
    name: "Manana",
    year: 1947,
    link: "",
},
{
    artist: "Percy Sledge",
    name: "When a Man Loves a Woman",
    year: 1966,
    link: "",
},
{
    artist: "Petula Clark",
    name: "Downtown",
    year: 1964,
    link: "",
},
{
    artist: "Procol Harum",
    name: "A Whiter Shade of Pale",
    year: 1967,
    link: "",
},
{
    artist: "Quincy Jones",
    name: "Soul Bossa Nova",
    year: 1962,
    link: "",
},
{
    artist: "Ray Charles",
    name: "Hit the road Jack!",
    year: 1960,
    link: "",
},
{
    artist: "Righteous Brothers",
    name: "Unchained Melody",
    year: 1965,
    link: "",
},
{
    artist: "Rocco Granata",
    name: "Marina",
    year: 1959,
    link: "",
},
{
    artist: "Roy Orbison",
    name: "Oh, Pretty Woman",
    year: 1964,
    link: "",
},
{
    artist: "Scott Mckenzie",
    name: "San Francisco",
    year: 1967,
    link: "",
},
{
    artist: "Sergio Mendes & Brasil",
    name: "Mas Que Nada",
    year: 1966,
    link: "",
},
{
    artist: "Sha Na Na",
    name: "Remember Then",
    year: 1962,
    link: "",
},
{
    artist: "Simon & Garfunkel",
    name: "Sound Of Silence",
    year: 1964,
    link: "",
},
{
    artist: "Sly & The Family Stone",
    name: "Dance To The Music",
    year: 1967,
    link: "",
},
{
    artist: "Steppenwolf",
    name: "Born To Be Wild",
    year: 1968,
    link: "",
},
{
    artist: "The 5th Dimension",
    name: "The Age of Aquarius",
    year: 1969,
    link: "",
},
{
    artist: "The Andrews Sisters",
    name: "Bei Mir Bist Du Schön",
    year: 1937,
    link: "",
},
{
    artist: "The Animals",
    name: "House Of The Rising Sun",
    year: 1964,
    link: "",
},
{
    artist: "The Archies",
    name: "Sugar, Sugar",
    year: 1969,
    link: "",
},
{
    artist: "The Beach Boys",
    name: "Good Vibrations",
    year: 1967,
    link: "",
},
{
    artist: "The Beatles",
    name: "Help!",
    year: 1965,
    link: "",
},
{
    artist: "The Chordettes",
    name: "Mr. Sandman",
    year: 1954,
    link: "",
},
{
    artist: "The Coasters",
    name: "Charlie Brown",
    year: 1956,
    link: "",
},
{
    artist: "The Doors",
    name: "Light My Fire",
    year: 1967,
    link: "",
},
{
    artist: "The Dovells",
    name: "Bristol Stomp",
    year: 1961,
    link: "",
},
{
    artist: "The Ink Spots",
    name: "I Don't Want to Set the World on Fire",
    year: 1941,
    link: "",
},
{
    artist: "The Jimi Hendrix Experience",
    name: "Purple Haze",
    year: 1967,
    link: "",
},
{
    artist: "The Kingsmen",
    name: "Louie Louie",
    year: 1963,
    link: "",
},
{
    artist: "The Mamas & The Papas",
    name: "California Dreamin'",
    year: 1965,
    link: "",
},
{
    artist: "The Marcels",
    name: "Blue Moon",
    year: 1961,
    link: "",
},
{
    artist: "The Monkees",
    name: "I'm a Believer",
    year: 1966,
    link: "",
},
{
    artist: "The Moody Blues",
    name: "Nights in White Satin",
    year: 1967,
    link: "",
},
{
    artist: "The Penguins",
    name: "Earth Angel",
    year: 1954,
    link: "",
},
{
    artist: "The Platters",
    name: "Great Pretender",
    year: 1955,
    link: "",
},
{
    artist: "The Rolling Stones",
    name: "(I Can't Get No) Satisfaction",
    year: 1965,
    link: "",
},
{
    artist: "The Supremes",
    name: "Where Did Our Love Go",
    year: 1964,
    link: "",
},
{
    artist: "The Surfaris",
    name: "Wipe Out",
    year: 1963,
    link: "",
},
{
    artist: "The Turtles",
    name: "Happy Together",
    year: 1967,
    link: "",
},
{
    artist: "Vaughn Monroe",
    name: "Let It Snow",
    year: 1946,
    link: "",
},
{
    artist: "Violeta Rivas",
    name: "¡Qué suerte!",
    year: 1964,
    link: "",
},
{
    artist: "Yao Lee",
    name: "玫瑰玫瑰我爱你",
    year: 1940,
    link: "",
},
{
    artist: "Кола Бельды",
    name: "Ханина Ранина",
    year: 1968,
    link: "",
},
];

songs.forEach((c) => {
  c.daScore = daScore[c.name];
  c.kukiScore = kukiScore[c.name];
  c.uniScore = uniScore[c.name];
  c.avgScore = Number(((c.daScore + c.kukiScore + c.uniScore) / 3).toFixed(2));
  c.bestScore = Math.min(c.daScore, c.uniScore, c.kukiScore);
});

console.log(songs);

songs.sort((a, b) => {
  if (a.avgScore !== b.avgScore) {
    return b.avgScore - a.avgScore;
  } else {
    if (a.bestScore !== b.bestScore) {
      return b.bestScore - a.bestScore;
    }
  }
  return a.artist.localeCompare(b.artist);
});

console.log(songs);

export default songs;

import daScore from "./rankings/daScore";
import kukiScore from "./rankings/kukiScore";
import uniScore from "./rankings/uniScore";

let songs = [
{
    artist: "Al Dexter",
    name: "Pistol Packin’ Mama",
    year: 1943,
    link: "https://www.youtube.com/watch?v=EwsJDFgBO9k&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=1",
},
{
    artist: "Aretha Franklin",
    name: "Respect",
    year: 1967,
    link: "https://www.youtube.com/watch?v=A134hShx_gw&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=2",
},
{
    artist: "Astrud Gilberto, João Gilberto and Stan Getz",
    name: "The Girl from Ipanema",
    year: 1964,
    link: "https://www.youtube.com/watch?v=c5QfXjsoNe4&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=3",
},
{
    artist: "Ben E. King",
    name: "Stand By Me",
    year: 1961,
    link: "https://www.youtube.com/watch?v=hwZNL7QVJjE&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=4",
},
{
    artist: "Bill Haley & His Comets",
    name: "Rock Around The Clock",
    year: 1955,
    link: "https://www.youtube.com/watch?v=ZgdufzXvjqw&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=5",
},
{
    artist: "Billy Murray",
    name: "The Yankee Doodle Boy",
    year: 1909,
    link: "https://www.youtube.com/watch?v=vyCxOKP_q7o&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=6",
},
{
    artist: "Bing Crosby",
    name: "Silent Night",
    year: 1935,
    link: "https://www.youtube.com/watch?v=a1R-lwsGBh4&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=7",
},
{
    artist: "Bobby Hebb",
    name: "Sunny",
    year: 1966,
    link: "https://www.youtube.com/watch?v=ubvYQxTXO3U&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=8",
},
{
    artist: "Bobby Vinton",
    name: "Mr. Lonely",
    year: 1964,
    link: "https://www.youtube.com/watch?v=_zSecRAFM14&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=9",
},
{
    artist: "Boots Randolph",
    name: "Yakety Sax",
    year: 1963,
    link: "https://www.youtube.com/watch?v=ZnHmskwqCCQ&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=10",
},
{
    artist: "Brian Hyland",
    name: "Itsy Bitsy Teenie Weenie Yellow Polka Dot Bikini",
    year: 1960,
    link: "https://www.youtube.com/watch?v=ICkWjdQuK7Q&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=11",
},
{
    artist: "Buffalo Springfield",
    name: "For What It's Worth",
    year: 1966,
    link: "https://www.youtube.com/watch?v=80_39eAx3z8&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=12",
},
{
    artist: "Cher",
    name: "Bang Bang",
    year: 1966,
    link: "https://www.youtube.com/watch?v=qDJo6FnwI_8&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=13",
},
{
    artist: "Christophe",
    name: "Aline",
    year: 1965,
    link: "https://www.youtube.com/watch?v=-E_Hyn53acA&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=14",
},
{
    artist: "Chubby Checker",
    name: "Let's Twist Again",
    year: 1961,
    link: "https://www.youtube.com/watch?v=KxQZQ86jJHg&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=15",
},
{
    artist: "Chuck Berry",
    name: "Johnny B. Goode",
    year: 1958,
    link: "https://www.youtube.com/watch?v=aKCt8ssC7cs&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=16",
},
{
    artist: "Cliff Richard & The Shadows",
    name: "Lucky Lips",
    year: 1966,
    link: "https://www.youtube.com/watch?v=RuxaCwZkWbM&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=17",
},
{
    artist: "David Bowie",
    name: "Space Oddity",
    year: 1969,
    link: "https://www.youtube.com/watch?v=iYYRH4apXDo&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=18",
},
{
    artist: "Dean Martin",
    name: "That's Amore",
    year: 1953,
    link: "https://www.youtube.com/watch?v=OnFlx2Lnr9Q&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=19",
},
{
    artist: "Dion",
    name: "The Wanderer",
    year: 1961,
    link: "https://www.youtube.com/watch?v=SbYa7NBYyRc&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=20",
},
{
    artist: "Domenico Modugno",
    name: "Nel blu, dipinto di blu",
    year: 1958,
    link: "https://www.youtube.com/watch?v=6jWsIpAbo-8&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=21",
},
{
    artist: "Doris Day",
    name: "Que Sera Sera",
    year: 1956,
    link: "https://www.youtube.com/watch?v=xZbKHDPPrrc&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=22",
},
{
    artist: "Edith Piaf",
    name: "Non, Je Ne Regrette Rien",
    year: 1960,
    link: "https://www.youtube.com/watch?v=Q3Kvu6Kgp88&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=23",
},
{
    artist: "Edward Meeker",
    name: "Take Me Out To The Ball Game",
    year: 1908,
    link: "https://www.youtube.com/watch?v=m8UiYj_Qexw&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=24",
},
{
    artist: "Elvis Presley",
    name: "Hound Dog",
    year: 1956,
    link: "https://www.youtube.com/watch?v=-eHJ12Vhpyc&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=25",
},
{
    artist: "Ennio Morricone",
    name: "L'estasi dell'oro",
    year: 1966,
    link: "https://www.youtube.com/watch?v=PYI09PMNazw&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=26",
},
{
    artist: "Everly Brothers",
    name: "All I Have To Do Is Dream",
    year: 1958,
    link: "https://www.youtube.com/watch?v=tbU3zdAgiX8&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=27",
},
{
    artist: "France Gall",
    name: "Poupée De Cire, Poupée De Son",
    year: 1965,
    link: "https://www.youtube.com/watch?v=rRva0YOVtcI&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=28",
},
{
    artist: "Frank & Nancy Sinatra",
    name: "Something Stupid",
    year: 1967,
    link: "https://www.youtube.com/watch?v=0f48fpoSEPU&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=29",
},
{
    artist: "Frank Sinatra",
    name: "Fly Me To The Moon",
    year: 1954,
    link: "https://www.youtube.com/watch?v=ZEcqHA7dbwM&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=30",
},
{
    artist: "Gerardo Matos Rodríguez",
    name: "La Cumparsita",
    year: 1917,
    link: "https://www.youtube.com/watch?v=RVwClL5YGWk&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=31",
},
{
    artist: "Haydn Quartet",
    name: "Put On Your Old Grey Bonnet",
    year: 1909,
    link: "https://www.youtube.com/watch?v=uq99oift0Hc&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=32",
},
{
    artist: "Herb Alpert",
    name: "Spanish Flea",
    year: 1965,
    link: "https://www.youtube.com/watch?v=aBE9EQ7gXKI&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=33",
},
{
    artist: "Isley Brothers",
    name: "Twist and Shout",
    year: 1962,
    link: "https://www.youtube.com/watch?v=cTaqn8_gMR0&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=34",
},
{
    artist: "James Brown",
    name: "I Got You",
    year: 1964,
    link: "https://www.youtube.com/watch?v=pTdihu-mp90&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=35",
},
{
    artist: "Jefferson Airplane",
    name: "Somebody To Love",
    year: 1967,
    link: "https://www.youtube.com/watch?v=SrGSt5eDt9o&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=36",
},
{
    artist: "Jerry Lee Lewis",
    name: "Great Balls of Fire",
    year: 1957,
    link: "https://www.youtube.com/watch?v=CPvvEHj_jpU&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=37",
},
{
    artist: "Jimmie Rodgers",
    name: "Blue Yodel No 1 (T for Texas)",
    year: 1928,
    link: "https://www.youtube.com/watch?v=LQ9qBnlYnp8&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=38",
},
{
    artist: "Jimmy Dean",
    name: "Big Bad John",
    year: 1961,
    link: "https://www.youtube.com/watch?v=KnnHprUGKF0&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=39",
},
{
    artist: "Joe Dassin",
    name: "Les Champs-Élysées",
    year: 1969,
    link: "https://www.youtube.com/watch?v=tDWeLlvYyYU&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=40",
},
{
    artist: "Johnny Cash",
    name: "Ring of Fire",
    year: 1963,
    link: "https://www.youtube.com/watch?v=1WaV2x8GXj0&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=41",
},
{
    artist: "Johnny Otis",
    name: "Willie and the Hand Jive",
    year: 1958,
    link: "https://www.youtube.com/watch?v=3ElBMHYWHlc&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=42",
},
{
    artist: "Kai Kyser and His Orchestra",
    name: "Praise the Lord and Pass the Ammunition",
    year: 1957,
    link: "https://www.youtube.com/watch?v=uV9s1a6AZT0&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=43",
},
{
    artist: "Kyu Sakamoto",
    name: "Sukiyaki",
    year: 1960,
    link: "https://www.youtube.com/watch?v=C35DrtPlUbc&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=45",
},
{
    artist: "Led Zeppelin",
    name: "Whole Lotta Love",
    year: 1969,
    link: "https://www.youtube.com/watch?v=HQmmM_qwG4k&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=46",
},
{
    artist: "Lesley Gore",
    name: "It's My Party",
    year: 1963,
    link: "https://www.youtube.com/watch?v=mIsnIt1p978&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=47",
},
{
    artist: "Little Eva",
    name: "Loco-Motion",
    year: 1962,
    link: "https://www.youtube.com/watch?v=eKpVQm41f8Y&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=48",
},
{
    artist: "Little Richard",
    name: "Tutti Frutti",
    year: 1955,
    link: "https://www.youtube.com/watch?v=F13JNjpNW6c&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=49",
},
{
    artist: "Lone Star",
    name: "Mi Calle",
    year: 1968,
    link: "https://www.youtube.com/watch?v=tSGfUzrsWLw&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=50",
},
{
    artist: "Louis Armstrong",
    name: "What A Wonderful World",
    year: 1967,
    link: "https://www.youtube.com/watch?v=rBrd_3VMC3c&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=51",
},
{
    artist: "Manfred Mann",
    name: "Doo Wah Diddy",
    year: 1964,
    link: "https://www.youtube.com/watch?v=Uc0x7xOap4I&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=52",
},
{
    artist: "Marmalade",
    name: "Ob-La-Di Ob-La-Da",
    year: 1969,
    link: "https://www.youtube.com/watch?v=_Ws2g7WOY7o&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=53",
},
{
    artist: "Miriam Makeba",
    name: "Pata Pata",
    year: 1967,
    link: "https://www.youtube.com/watch?v=JBJVVhn7iuo&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=54",
},
{
    artist: "Nancy Sinatra",
    name: "These Boots Are Made for Walkin'",
    year: 1966,
    link: "https://www.youtube.com/watch?v=GM1kzbAgo_E&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=55",
},
{
    artist: "Omega",
    name: "Gyöngyhajú Lány",
    year: 1969,
    link: "https://www.youtube.com/watch?v=kwhGj80nkys&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=56",
},
{
    artist: "Palito Ortega En Nashville",
    name: "Amanecer Sin Tí",
    year: 1966,
    link: "https://www.youtube.com/watch?v=br_dTkKK_D4&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=57",
},
{
    artist: "Paul Anka",
    name: "Put Your Head On My Shoulder",
    year: 1959,
    link: "https://www.youtube.com/watch?v=kvazBqAlx58&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=59",
},
{
    artist: "Paul Mauriat",
    name: "L'amour est bleu",
    year: 1968,
    link: "https://www.youtube.com/watch?v=Y_tPE3o5NWk&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=58",
},
{
    artist: "Peggy Lee",
    name: "Manana",
    year: 1947,
    link: "https://www.youtube.com/watch?v=rXVTH7VPEvQ&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=60",
},
{
    artist: "Percy Sledge",
    name: "When a Man Loves a Woman",
    year: 1966,
    link: "https://www.youtube.com/watch?v=KwPxhWU1koE&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=61",
},
{
    artist: "Petula Clark",
    name: "Downtown",
    year: 1964,
    link: "https://www.youtube.com/watch?v=z_m4Qb0iW-o&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=62",
},
{
    artist: "Procol Harum",
    name: "A Whiter Shade of Pale",
    year: 1967,
    link: "https://www.youtube.com/watch?v=Mb3iPP-tHdA&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=63",
},
{
    artist: "Quincy Jones",
    name: "Soul Bossa Nova",
    year: 1962,
    link: "https://www.youtube.com/watch?v=T5ALPzS0QfQ&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=64",
},
{
    artist: "Ray Charles",
    name: "Hit the road Jack!",
    year: 1960,
    link: "https://www.youtube.com/watch?v=uSiHqxgE2d0&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=65",
},
{
    artist: "Righteous Brothers",
    name: "Unchained Melody",
    year: 1965,
    link: "https://www.youtube.com/watch?v=qiiyq2xrSI0&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=66",
},
{
    artist: "Rocco Granata",
    name: "Marina",
    year: 1959,
    link: "https://www.youtube.com/watch?v=iFiXwTFZWFw&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=67",
},
{
    artist: "Roy Orbison",
    name: "Oh, Pretty Woman",
    year: 1964,
    link: "https://www.youtube.com/watch?v=3KFvoDDs0XM&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=68",
},
{
    artist: "Scott Mckenzie",
    name: "San Francisco",
    year: 1967,
    link: "https://www.youtube.com/watch?v=j-447NaiBJs&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=69",
},
{
    artist: "Sergio Mendes & Brasil",
    name: "Mas Que Nada",
    year: 1966,
    link: "https://www.youtube.com/watch?v=05w5ch9l6zI&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=70",
},
{
    artist: "Sha Na Na",
    name: "Remember Then",
    year: 1962,
    link: "https://www.youtube.com/watch?v=bfZfH33baMs&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=71",
},
{
    artist: "Simon & Garfunkel",
    name: "Sound Of Silence",
    year: 1964,
    link: "https://www.youtube.com/watch?v=nkUOACGtGfA&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=72",
},
{
    artist: "Sly & The Family Stone",
    name: "Dance To The Music",
    year: 1967,
    link: "https://www.youtube.com/watch?v=Jn2PNlhvy8E&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=73",
},
{
    artist: "Steppenwolf",
    name: "Born To Be Wild",
    year: 1968,
    link: "https://www.youtube.com/watch?v=egMWlD3fLJ8&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=74",
},
{
    artist: "The 5th Dimension",
    name: "The Age of Aquarius",
    year: 1969,
    link: "https://www.youtube.com/watch?v=kjxSCAalsBE&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=75",
},
{
    artist: "The Andrews Sisters",
    name: "Bei Mir Bist Du Schön",
    year: 1937,
    link: "https://www.youtube.com/watch?v=UvxkomTYkfM&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=76",
},
{
    artist: "The Animals",
    name: "House Of The Rising Sun",
    year: 1964,
    link: "https://www.youtube.com/watch?v=N4bFqW_eu2I&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=77",
},
{
    artist: "The Archies",
    name: "Sugar, Sugar",
    year: 1969,
    link: "https://www.youtube.com/watch?v=5rmwDnOozWU&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=78",
},
{
    artist: "The Beach Boys",
    name: "Good Vibrations",
    year: 1967,
    link: "https://www.youtube.com/watch?v=apBWI6xrbLY&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=79",
},
{
    artist: "The Beatles",
    name: "Help!",
    year: 1965,
    link: "https://www.youtube.com/watch?v=2Q_ZzBGPdqE&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=80",
},
{
    artist: "The Chordettes",
    name: "Mr. Sandman",
    year: 1954,
    link: "https://www.youtube.com/watch?v=CX45pYvxDiA&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=81",
},
{
    artist: "The Coasters",
    name: "Charlie Brown",
    year: 1956,
    link: "https://www.youtube.com/watch?v=-D0SUGdO4ok&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=82",
},
{
    artist: "The Doors",
    name: "Light My Fire",
    year: 1967,
    link: "https://www.youtube.com/watch?v=cq8k-ZbsXDI&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=83",
},
{
    artist: "The Dovells",
    name: "Bristol Stomp",
    year: 1961,
    link: "https://www.youtube.com/watch?v=XCOB5-E4P6Y&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=84",
},
{
    artist: "The Ink Spots",
    name: "I Don't Want to Set the World on Fire",
    year: 1941,
    link: "https://www.youtube.com/watch?v=6l6vqPUM_FE&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=85",
},
{
    artist: "The Jimi Hendrix Experience",
    name: "Purple Haze",
    year: 1967,
    link: "https://www.youtube.com/watch?v=WGoDaYjdfSg&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=86",
},
{
    artist: "The Kingsmen",
    name: "Louie Louie",
    year: 1963,
    link: "https://www.youtube.com/watch?v=CfRZNNyQoF0&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=87",
},
{
    artist: "The Mamas & The Papas",
    name: "California Dreamin'",
    year: 1965,
    link: "https://www.youtube.com/watch?v=N-aK6JnyFmk&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=88",
},
{
    artist: "The Marcels",
    name: "Blue Moon",
    year: 1961,
    link: "https://www.youtube.com/watch?v=OJ-z52N_gu8&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=89",
},
{
    artist: "The Monkees",
    name: "I'm a Believer",
    year: 1966,
    link: "https://www.youtube.com/watch?v=5tpxXDILZHs&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=90",
},
{
    artist: "The Moody Blues",
    name: "Nights in White Satin",
    year: 1967,
    link: "https://www.youtube.com/watch?v=066HZlam91Y&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=91",
},
{
    artist: "The Penguins",
    name: "Earth Angel",
    year: 1954,
    link: "https://www.youtube.com/watch?v=VJcGi4-n_Yw&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=92",
},
{
    artist: "The Platters",
    name: "Great Pretender",
    year: 1955,
    link: "https://www.youtube.com/watch?v=rwfmbXJEBtY&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=93",
},
{
    artist: "The Rolling Stones",
    name: "(I Can't Get No) Satisfaction",
    year: 1965,
    link: "https://www.youtube.com/watch?v=nrIPxlFzDi0&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=94",
},
{
    artist: "The Supremes",
    name: "Where Did Our Love Go",
    year: 1964,
    link: "https://www.youtube.com/watch?v=kCxL82k6cSI&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=95",
},
{
    artist: "The Surfaris",
    name: "Wipe Out",
    year: 1963,
    link: "https://www.youtube.com/watch?v=dBURLdhmmZ8&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=96",
},
{
    artist: "The Turtles",
    name: "Happy Together",
    year: 1967,
    link: "https://www.youtube.com/watch?v=9ZEURntrQOg&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=97",
},
{
    artist: "Vaughn Monroe",
    name: "Let It Snow",
    year: 1946,
    link: "https://www.youtube.com/watch?v=RWTQqpYBHQ8&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=98",
},
{
    artist: "Violeta Rivas",
    name: "¡Qué suerte!",
    year: 1964,
    link: "https://www.youtube.com/watch?v=LztZVARboVw&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=99",
},
{
    artist: "Yao Lee",
    name: "玫瑰玫瑰我爱你",
    year: 1940,
    link: "https://www.youtube.com/watch?v=2F4FiTm-YDk&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=100",
},
{
    artist: "Кола Бельды",
    name: "Ханина Ранина",
    year: 1968,
    link: "https://www.youtube.com/watch?v=Sj_ugIdT0A0&list=PLqvxS3F727iMmrIw7ME-AQgLmYBz7-k8F&index=44",
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

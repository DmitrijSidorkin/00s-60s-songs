import daScore from "./rankings/daScore";
import kukiScore from "./rankings/kukiScore";
import uniScore from "./rankings/uniScore";

let songs = [
  {
      artist: "10cc",
      name: "I'm Not In Love",
      year: 1975,
      link: "https://www.youtube.com/watch?v=STugQ0X1NoI"
    },
    {
      artist: "A Taste Of Honey",
      name: "Boogie Oogie Oogie",
      year: 1978,
      link: "https://www.youtube.com/watch?v=y9IYWwWnpuA"
    },
    {
      artist: "ABBA",
      name: "Dancing Queen",
      year: 1975,
      link: "https://www.youtube.com/watch?v=xFrGuyw1V8s"
    },
    {
      artist: "AC/DC",
      name: "Highway To Hell",
      year: 1979,
      link: "https://www.youtube.com/watch?v=l482T0yNkeo"
    },
    {
      artist: "Aerosmith",
      name: "Dream On",
      year: 1973,
      link: "https://www.youtube.com/watch?v=iJDtukGW79Y"
    },
    {
      artist: "Al Green",
      name: "Let's Stay Together",
      year: 1972,
      link: "https://www.youtube.com/watch?v=uSu6tcbMOu0"
    },
    {
      artist: "Albert Hammond",
      name: "It Never Rains In Southern California ",
      year: 1973,
      link: "https://www.youtube.com/watch?v=Gmq4WIjQxp0"
    },
    {
      artist: "America",
      name: "A Horse With No Name",
      year: 1972,
      link: "https://www.youtube.com/watch?v=na47wMFfQCo "
    },
    {
      artist: "Andy Gibb",
      name: "I Just Want To Be Your Everything",
      year: 1977,
      link: "https://www.youtube.com/watch?v=VkNeoTcGwrc"
    },
    {
      artist: "Anita Ward",
      name: "Ring My Bell",
      year: 1979,
      link: "https://www.youtube.com/watch?v=Dp11DjaUc5A"
    },
    {
      artist: "Baccara",
      name: "Yes Sir, I Can Boogie",
      year: 1977,
      link: "https://www.youtube.com/watch?v=32wDFCM7iSI"
    },
    {
      artist: "Bachman-Turner Overdrive",
      name: "You Ain't Seen Nothing Yet",
      year: 1974,
      link: "https://www.youtube.com/watch?v=4cia_v4vxfE"
    },
    {
      artist: "Barry Manilow",
      name: "Mandy",
      year: 1974,
      link: "https://www.youtube.com/watch?v=AvGpvQbkccE"
    },
    {
      artist: "Barry White",
      name: "You're The First, The Last, My Everything",
      year: 1974,
      link: "https://www.youtube.com/watch?v=tB54XUhA9_w"
    },
    {
      artist: "Bee Gees",
      name: "Stayin' Alive",
      year: 1977,
      link: "https://www.youtube.com/watch?v=fNFzfwLM72c"
    },
    {
      artist: "Bill Conti",
      name: "Gonna Fly Now (Rocky Theme)",
      year: 1976,
      link: "https://www.youtube.com/watch?v=ioE_O7Lm0I4"
    },
    {
      artist: "Bill Withers ",
      name: "Ain't No Sunshine",
      year: 1971,
      link: "https://www.youtube.com/watch?v=YuKfiH0Scao"
    },
    {
      artist: "Billy Joel",
      name: "Piano Man",
      year: 1973,
      link: "https://www.youtube.com/watch?v=gxEPV4kolz0"
    },
    {
      artist: "Black Sabbath",
      name: "Paranoid",
      year: 1970,
      link: "https://www.youtube.com/watch?v=0qanF-91aJo"
    },
    {
      artist: "Blondie",
      name: "Heart Of Glass",
      year: 1978,
      link: "https://www.youtube.com/watch?v=WGU_4-5RaxU"
    },
    {
      artist: "Bob Dylan",
      name: "Knockin' On Heaven's Door",
      year: 1973,
      link: "https://www.youtube.com/watch?v=rm9coqlk8fY"
    },
    {
      artist: "Bob Marley",
      name: "No Woman, No Cry",
      year: 1974,
      link: "https://www.youtube.com/watch?v=IT8XvzIfi4U"
    },
    {
      artist: "Boney M.",
      name: "Daddy Cool",
      year: 1976,
      link: "https://www.youtube.com/watch?v=FYGTT7YhywA"
    },
    {
      artist: "Bonnie Tyler",
      name: "It's A Heartache",
      year: 1977,
      link: "https://www.youtube.com/watch?v=bEOl38y8Nj8"
    },
    {
      artist: "Boston",
      name: "More Than A Feeling",
      year: 1976,
      link: "https://www.youtube.com/watch?v=t4QK8RxCAwo"
    },
    {
      artist: "Bruce Springsteen",
      name: "Born To Run",
      year: 1975,
      link: "https://www.youtube.com/watch?v=IxuThNgl3YA"
    },
    {
      artist: "Carl Douglas",
      name: "Kung Fu Fighting",
      year: 1974,
      link: "https://www.youtube.com/watch?v=bmfudW7rbG0"
    },
    {
      artist: "Carly Simon",
      name: "You're So Vain",
      year: 1972,
      link: "https://www.youtube.com/watch?v=j13oJajXx0M"
    },
    {
      artist: "Chic",
      name: "Le Freak",
      year: 1978,
      link: "https://www.youtube.com/watch?v=aXgSHL7efKg"
    },
    {
      artist: "Chicago",
      name: "If You Leave Me Now",
      year: 1976,
      link: "https://www.youtube.com/watch?v=5bG6zpJ9GNY"
    },
    {
      artist: "Commodores",
      name: "Easy",
      year: 1977,
      link: "https://www.youtube.com/watch?v=saaLW0jiiUE"
    },
    {
      artist: "Creedence Clearwater Revival",
      name: "Have You Ever Seen The Rain",
      year: 1971,
      link: "https://www.youtube.com/watch?v=u1V8YRJnr4Q"
    },
    {
      artist: "David Soul",
      name: "Don't Give Up On Us",
      year: 1976,
      link: "https://www.youtube.com/watch?v=YY8APrYU2Gs"
    },
    {
      artist: "Debby Boone",
      name: "You Light Up My Life",
      year: 1977,
      link: "https://www.youtube.com/watch?v=AOShEUn0aA4"
    },
    {
      artist: "Deep Purple",
      name: "Smoke On The Water",
      year: 1972,
      link: "https://www.youtube.com/watch?v=Q2FzZSBD5LE"
    },
    {
      artist: "Derek & The Dominos",
      name: "Layla",
      year: 1970,
      link: "https://www.youtube.com/watch?v=TngViNw2pOo"
    },
    {
      artist: "Diana Ross",
      name: "Ain't No Mountain High Enough",
      year: 1970,
      link: "https://www.youtube.com/watch?v=yNdBxSIfr0g"
    },
    {
      artist: "Dire Straits",
      name: "Sultan of Swings",
      year: 1978,
      link: "https://www.youtube.com/watch?v=h0ffIJ7ZO4U"
    },
    {
      artist: "Dobie Gray",
      name: "Drift Away",
      year: 1973,
      link: "https://www.youtube.com/watch?v=NIuyDWzctgY"
    },
    {
      artist: "Dolly Parton",
      name: "Jolene",
      year: 1973,
      link: "https://www.youtube.com/watch?v=Ixrje2rXLMA"
    },
    {
      artist: "Don Mclean",
      name: "American Pie",
      year: 1971,
      link: "https://www.youtube.com/watch?v=PRpiBpDy7MQ"
    },
    {
      artist: "Donna Summer",
      name: "Hot Stuff",
      year: 1979,
      link: "https://www.youtube.com/watch?v=KhcaPNuaJNU"
    },
    {
      artist: "Dschinghis Khan",
      name: "Dschinghis Khan",
      year: 1979,
      link: "https://www.youtube.com/watch?v=1AXlVZRpweI"
    },
    {
      artist: "Eagles",
      name: "Hotel California",
      year: 1977,
      link: "https://www.youtube.com/watch?v=dLl4PZtxia8"
    },
    {
      artist: "Earth, Wind and Fire",
      name: "September",
      year: 1978,
      link: "https://www.youtube.com/watch?v=Gs069dndIYk"
    },
    {
      artist: "Edison Lighthouse",
      name: "Love Grows (Where My Rosemary Goes)",
      year: 1970,
      link: "https://www.youtube.com/watch?v=TfY8hR5frEQ"
    },
    {
      artist: "Edwin Starr",
      name: "War",
      year: 1970,
      link: "https://www.youtube.com/watch?v=hZJRJpbGkG4"
    },
    {
      artist: "Electric Light Orchestra ",
      name: "Mr. Blue Sky",
      year: 1977,
      link: "https://www.youtube.com/watch?v=aQUlA8Hcv4s"
    },
    {
      artist: "Elton John",
      name: "Rocket Man",
      year: 1972,
      link: "https://www.youtube.com/watch?v=DtVBCG6ThDk"
    },
    {
      artist: "Elvis Presley",
      name: "Burning Love",
      year: 1972,
      link: "https://www.youtube.com/watch?v=zf2VYAtqRe0"
    },
    {
      artist: "Eric Carmen",
      name: "All By Myself",
      year: 1975,
      link: "https://www.youtube.com/watch?v=EzoazPPC7b8"
    },
    {
      artist: "Eric Clapton",
      name: "Cocaine",
      year: 1977,
      link: "https://www.youtube.com/watch?v=zVOuRQPPdoo"
    },
    {
      artist: "Fleetwood Mac",
      name: "Go Your Own Way",
      year: 1971,
      link: "https://www.youtube.com/watch?v=ozl3L9fhKtE"
    },
    {
      artist: "Focus",
      name: "Hocus Pocus",
      year: 1970,
      link: "https://www.youtube.com/watch?v=g4ouPGGLI6Q"
    },
    {
      artist: "Foreigner",
      name: "Cold As Ice",
      year: 1977,
      link: "https://www.youtube.com/watch?v=ySb1f9zWJkQ"
    },
    {
      artist: "Free",
      name: "All Right Now",
      year: 1970,
      link: "https://www.youtube.com/watch?v=vqdCZ0yHNa4"
    },
    {
      artist: "George Harrison",
      name: "My Sweet Lord",
      year: 1970,
      link: "https://www.youtube.com/watch?v=04v-SdKeEpE"
    },
    {
      artist: "Gerry Rafferty",
      name: "Baker Street",
      year: 1978,
      link: "https://www.youtube.com/watch?v=Fo6aKnRnBxM"
    },
    {
      artist: "Gilbert O'Sullivan",
      name: "Alone Again (Naturally)",
      year: 1972,
      link: "https://www.youtube.com/watch?v=gU3ubk8u7dA"
    },
    {
      artist: "Gloria Gaynor",
      name: "I Will Survive",
      year: 1978,
      link: "https://www.youtube.com/watch?v=6dYWe1c3OyU"
    },
    {
      artist: "Golden Earing",
      name: "Radar Love",
      year: 1973,
      link: "https://www.youtube.com/watch?v=aRlSHG5hRY4"
    },
    {
      artist: "Hall & Oates",
      name: "Rich Girl",
      year: 1976,
      link: "https://www.youtube.com/watch?v=AmHE65RAkSY"
    },
    {
      artist: "Harry Chapin",
      name: "Cat's in The Cradle",
      year: 1974,
      link: "https://www.youtube.com/watch?v=5u-KWa3tL-0"
    },
    {
      artist: "Harry Nilsson",
      name: "Without You",
      year: 1971,
      link: "https://www.youtube.com/watch?v=8dnUv3DUP4E"
    },
    {
      artist: "Heart",
      name: "Barracuda",
      year: 1977,
      link: "https://www.youtube.com/watch?v=VdOkQ6THDVw"
    },
    {
      artist: "Herb Alpert",
      name: "Rise",
      year: 1979,
      link: "https://www.youtube.com/watch?v=q7O3eYJptTc"
    },
    {
      artist: "Hot Butter",
      name: "Popcorn",
      year: 1972,
      link: "https://www.youtube.com/watch?v=YK3ZP6frAMc"
    },
    {
      artist: "Hot Chocolate",
      name: "You Sexy Thing",
      year: 1975,
      link: "https://www.youtube.com/watch?v=JIN36NweL6I"
    },
    {
      artist: "Isaac Hayes",
      name: "Theme from Shaft",
      year: 1971,
      link: "https://www.youtube.com/watch?v=Q429AOpL_ds"
    },
    {
      artist: "James Brown",
      name: "Sex Machine",
      year: 1970,
      link: "https://www.youtube.com/watch?v=ZNaXb3uuekk"
    },
    {
      artist: "Jethro Tull",
      name: "Aqualung",
      year: 1971,
      link: "https://www.youtube.com/watch?v=N4zPu3ISCGs"
    },
    {
      artist: "John Carpenter",
      name: "Halloween Theme",
      year: 1978,
      link: "https://www.youtube.com/watch?v=gqVyois9mp4"
    },
    {
      artist: "John Denver",
      name: "Take Me Home, Country Roads",
      year: 1971,
      link: "https://www.youtube.com/watch?v=1vrEljMfXYo"
    },
    {
      artist: "John Lennon",
      name: "Imagine",
      year: 1971,
      link: "https://www.youtube.com/watch?v=bNnFFKv_NyI"
    },
    {
      artist: "John Travolta & Olivia Newton-John",
      name: "You're The One That I Want",
      year: 1978,
      link: "https://www.youtube.com/watch?v=itRFjzQICJU"
    },
    {
      artist: "Johnny Nash",
      name: "I Can See Clearly Now",
      year: 1972,
      link: "https://www.youtube.com/watch?v=b0cAWgTPiwM"
    },
    {
      artist: "Joni Mitchell",
      name: "Big Yellow Taxi",
      year: 1970,
      link: "https://www.youtube.com/watch?v=2595abcvh2M"
    },
    {
      artist: "Jose Feliciano",
      name: "Feliz Navidad",
      year: 1970,
      link: "https://www.youtube.com/watch?v=N8NcQzMQN_U"
    },
    {
      artist: "Julio Iglesias",
      name: "Me Olvide De Vivir",
      year: 1978,
      link: "https://www.youtube.com/watch?v=3i88gbcGaKg"
    },
    {
      artist: "Kansas",
      name: "Carry On Wayward Son",
      year: 1976,
      link: "https://www.youtube.com/watch?v=P5ZJui3aPoQ"
    },
    {
      artist: "KC & The Sunshine Band",
      name: "That's The Way (I Like It)",
      year: 1975,
      link: "https://www.youtube.com/watch?v=O0_H3F84Yjk"
    },
    {
      artist: "King Harvest",
      name: "Dancing in the Moonlight",
      year: 1972,
      link: "https://www.youtube.com/watch?v=g5JqPxmYhlo"
    },
    {
      artist: "Kiss",
      name: "I Was Made For Lovin' You",
      year: 1979,
      link: "https://www.youtube.com/watch?v=ZhIsAZO5gl0"
    },
    {
      artist: "Led Zeppelin",
      name: "Stairway To Heaven",
      year: 1971,
      link: "https://www.youtube.com/watch?v=QkF3oxziUI4"
    },
    {
      artist: "Lynn Anderson",
      name: "Rose Garden",
      year: 1970,
      link: "https://www.youtube.com/watch?v=OLo4j7QXxp4"
    },
    {
      artist: "Lynyrd Skynyrd",
      name: "Freebird",
      year: 1973,
      link: "https://www.youtube.com/watch?v=0LwcvjNJTuM"
    },
    {
      artist: "M",
      name: "Pop Muzik",
      year: 1979,
      link: "https://www.youtube.com/watch?v=gPoiv0sZ4s4"
    },
    {
      artist: "Marvin Gaye",
      name: "Let's Get It On",
      year: 1973,
      link: "https://www.youtube.com/watch?v=AqPBfbLoF_M"
    },
    {
      artist: "Michael Jackson",
      name: "Don't Stop 'Til You Get Enough",
      year: 1979,
      link: "https://www.youtube.com/watch?v=yURRmWtbTbo"
    },
    {
      artist: "Minnie Riperton",
      name: "Lovin' You",
      year: 1974,
      link: "https://www.youtube.com/watch?v=9I3UTG1dSTc"
    },
    {
      artist: "Mireille Mathieu",
      name: "Acropolis Adieu",
      year: 1972,
      link: "https://www.youtube.com/watch?v=JPrXVrkOvi4"
    },
    {
      artist: "Mungo Jerry",
      name: "In The Summertime",
      year: 1970,
      link: "https://www.youtube.com/watch?v=wvUQcnfwUUM"
    },
    {
      artist: "Nazareth",
      name: "Love Hurts",
      year: 1976,
      link: "https://www.youtube.com/watch?v=soDZBW-1P04"
    },
    {
      artist: "Neil Young",
      name: "Heart of Gold",
      year: 1972,
      link: "https://www.youtube.com/watch?v=c7eB7Wns1-M"
    },
    {
      artist: "Norman Greenbaum",
      name: "Spirit In The Sky",
      year: 1970,
      link: "https://www.youtube.com/watch?v=vRFo72wuU6w"
    },
    {
      artist: "Pink Floyd",
      name: "Another Brick In The Wall Pt. 2",
      year: 1979,
      link: "https://www.youtube.com/watch?v=HrxX9TBj2zY"
    },
    {
      artist: "Player",
      name: "Baby Come Back",
      year: 1977,
      link: "https://www.youtube.com/watch?v=NmEyGiaqm7k"
    },
    {
      artist: "Prince",
      name: "I Wanna Be Your Lover",
      year: 1979,
      link: "https://www.youtube.com/watch?v=Rp8WL621uGM"
    },
    {
      artist: "Queen",
      name: "Bohemian Rhapsody",
      year: 1975,
      link: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ"
    },
    {
      artist: "Ramones",
      name: "Blitzkrieg Bop",
      year: 1976,
      link: "https://www.youtube.com/watch?v=268C3N2dDYk"
    },
    {
      artist: "Roberta Flack",
      name: "Killin' Me Softly With His Song",
      year: 1973,
      link: "https://www.youtube.com/watch?v=DEbi_YjpA-Y"
    },
    {
      artist: "Rod Stewart",
      name: "Maggie May",
      year: 1971,
      link: "https://www.youtube.com/watch?v=KbI_awR4CKE"
    },
    {
      artist: "Rose Royce",
      name: "Car Wash",
      year: 1976,
      link: "https://www.youtube.com/watch?v=IGGiT0-flRE"
    },
    {
      artist: "Rupert Holmes",
      name: "Escape (The Piña Colada Song)",
      year: 1979,
      link: "https://www.youtube.com/watch?v=zROIlspgOjM"
    },
    {
      artist: "Sailor",
      name: "Girls, Girls, Girls",
      year: 1976,
      link: "https://www.youtube.com/watch?v=f1YpKgx5e48"
    },
    {
      artist: "Santa Esmeralda",
      name: "Don't Let Me Be Misunderstood",
      year: 1977,
      link: "https://www.youtube.com/watch?v=uvXeeus94GY"
    },
    {
      artist: "Santana",
      name: "Oye Como Va",
      year: 1970,
      link: "https://www.youtube.com/watch?v=J7ATTjg7tpE"
    },
    {
      artist: "Silver Convention",
      name: "Fly Robin Fly",
      year: 1975,
      link: "https://www.youtube.com/watch?v=wC_kCnm3GYQ"
    },
    {
      artist: "Simon & Garfunkel",
      name: "Bridge Over Troubled Water",
      year: 1970,
      link: "https://www.youtube.com/watch?v=4G-YQA_bsOU"
    },
    {
      artist: "Smokie",
      name: "Living Next Door to Alice",
      year: 1977,
      link: "https://www.youtube.com/watch?v=Z6qnRS36EgE"
    },
    {
      artist: "Steve Miller Band",
      name: "The Joker",
      year: 1973,
      link: "https://www.youtube.com/watch?v=dV3AziKTBUo"
    },
    {
      artist: "Stevie Wonder",
      name: "Superstition",
      year: 1972,
      link: "https://www.youtube.com/watch?v=0CFuCYNx-1g"
    },
    {
      artist: "Supertramp",
      name: "Logical Song",
      year: 1979,
      link: "https://www.youtube.com/watch?v=low6Coqrw9Y"
    },
    {
      artist: "Suzi Quatro",
      name: "48 Crash",
      year: 1973,
      link: "https://www.youtube.com/watch?v=eJxDDxcMKRY"
    },
    {
      artist: "Sweet",
      name: "Blockbuster",
      year: 1973,
      link: "https://www.youtube.com/watch?v=Y64211sjSko"
    },
    {
      artist: "T.Rex",
      name: "Get It On",
      year: 1971,
      link: "https://www.youtube.com/watch?v=wZkTh_T75QY"
    },
    {
      artist: "Talking Heads",
      name: "Psycho Killer",
      year: 1977,
      link: "https://www.youtube.com/watch?v=CKti7QixnJI"
    },
    {
      artist: "Terry Jacks",
      name: "Seasons in the Sun",
      year: 1974,
      link: "https://www.youtube.com/watch?v=-tPcc1ftj8E"
    },
    {
      artist: "The Beatles",
      name: "Let It Be",
      year: 1970,
      link: "https://www.youtube.com/watch?v=CGj85pVzRJs"
    },
    {
      artist: "The Buggles",
      name: "Video Killed The Radio Star",
      year: 1979,
      link: "https://www.youtube.com/watch?v=W8r-tXRLazs"
    },
    {
      artist: "The Carpenters",
      name: "(They Long To Be) Close To You",
      year: 1970,
      link: "https://www.youtube.com/watch?v=M268Csnue9I"
    },
    {
      artist: "The Clash",
      name: "London Calling",
      year: 1979,
      link: "https://www.youtube.com/watch?v=EfK-WX2pa8c"
    },
    {
      artist: "The Doors",
      name: "Riders on the Storm",
      year: 1971,
      link: "https://www.youtube.com/watch?v=7G2-FPlvY58"
    },
    {
      artist: "The Edgar Winter Group",
      name: "Frankenstein",
      year: 1972,
      link: "https://www.youtube.com/watch?v=P8f-Qb-bwlU"
    },
    {
      artist: "the Four Seasons",
      name: "December, 1963 (Oh, What a Night)",
      year: 1975,
      link: "https://www.youtube.com/watch?v=mTUhnIY3oRM"
    },
    {
      artist: "The Guess Who",
      name: "American Woman",
      year: 1970,
      link: "https://www.youtube.com/watch?v=gkqfpkTTy2w"
    },
    {
      artist: "The Hollies",
      name: "Long Cool Woman (In A Black Dress)",
      year: 1972,
      link: "https://www.youtube.com/watch?v=DH11CPDXzr4"
    },
    {
      artist: "The Jackson 5",
      name: "ABC",
      year: 1970,
      link: "https://www.youtube.com/watch?v=ho7796-au8U"
    },
    {
      artist: "The O'Jays",
      name: "Love Train",
      year: 1972,
      link: "https://www.youtube.com/watch?v=_BlkTSKqE_8"
    },
    {
      artist: "The Police",
      name: "Roxanne",
      year: 1978,
      link: "https://www.youtube.com/watch?v=3T1c7GkzRQQ"
    },
    {
      artist: "The Real Thing",
      name: "You To Me Are Everything",
      year: 1976,
      link: "https://www.youtube.com/watch?v=yT1iDKkZNYU"
    },
    {
      artist: "The Rolling Stones",
      name: "Brown Sugar",
      year: 1972,
      link: "https://www.youtube.com/watch?v=Bar7SzNLnY0"
    },
    {
      artist: "The Sugarhill Gang",
      name: "Rapper's Delight",
      year: 1979,
      link: "https://www.youtube.com/watch?v=mcCK99wHrk0"
    },
    {
      artist: "The Sylvers",
      name: "Boogie Fever",
      year: 1975,
      link: "https://www.youtube.com/watch?v=YHKCHvpYq_8"
    },
    {
      artist: "The Temptations",
      name: "Papa Was A Rolling Stone",
      year: 1972,
      link: "https://www.youtube.com/watch?v=S5xAtsXb8Vs"
    },
    {
      artist: "The Who",
      name: "Baba O'Riley",
      year: 1971,
      link: "https://www.youtube.com/watch?v=QRTNm6GLJYI"
    },
    {
      artist: "Thin Lizzy",
      name: "The Boys Are Back In Town",
      year: 1976,
      link: "https://www.youtube.com/watch?v=5_xqb416S7o"
    },
    {
      artist: "Tom Jones",
      name: "She's A Lady",
      year: 1971,
      link: "https://www.youtube.com/watch?v=3wXiVPxFJVE"
    },
    {
      artist: "Tony Orlando and Dawn",
      name: "Knock Three Times",
      year: 1970,
      link: "https://www.youtube.com/watch?v=uw2eitx9Ly0"
    },
    {
      artist: "Toto",
      name: "Hold The Line",
      year: 1978,
      link: "https://www.youtube.com/watch?v=htgr3pvBr-I"
    },
    {
      artist: "Van McCoy & The Souls City Symphony",
      name: "The Hustle",
      year: 1975,
      link: "https://www.youtube.com/watch?v=SFzMs2SN--s"
    },
    {
      artist: "Van Morrison",
      name: "Moondance",
      year: 1970,
      link: "https://www.youtube.com/watch?v=6lFxGBB4UGU"
    },
    {
      artist: "Vehicle",
      name: "The Ides of March",
      year: 1970,
      link: "https://www.youtube.com/watch?v=fiLaNEFyCiM"
    },
    {
      artist: "Village People",
      name: "Y.M.C.A.",
      year: 1978,
      link: "https://www.youtube.com/watch?v=CS9OO0S5w2k"
    },
    {
      artist: "War",
      name: "Low Rider",
      year: 1975,
      link: "https://www.youtube.com/watch?v=BsrqKE1iqqo"
    },
    {
      artist: "Wayne Jennings ",
      name: "I'm A Rambling Man",
      year: 1974,
      link: "https://www.youtube.com/watch?v=--XdhfJKjEk"
    },
    {
      artist: "Wild Cherry",
      name: "Play That Funky Music",
      year: 1976,
      link: "https://www.youtube.com/watch?v=BHcYFxU4fMo"
    },
    {
      artist: "Wings",
      name: "Live And Let Die",
      year: 1973,
      link: "https://www.youtube.com/watch?v=NR0UmZcf89E"
    },
    {
      artist: "Yes",
      name: "Roundabout",
      year: 1971,
      link: "https://www.youtube.com/watch?v=LuGAWR2eRyQ"
    },
    {
      artist: "ZZ Top ",
      name: "La Grange",
      year: 1973,
      link: "https://www.youtube.com/watch?v=Vppbdf-qtGU"
    }
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

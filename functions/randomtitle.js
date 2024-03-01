export function randomTitle() {

  let randomTitles = [
    "the islands awaken for her alone",
    "I lost the game.",
    "What's that? Something new from me? Never!",
    "Meh.",
    "Oh cool!",
    ":D",
    "Ayo!",
    "New song! Oh look, there's another! And another!",
    ":|",
    ">:D",
    "O.o",
    ">.<'",
    "Random title dance! *raves*",
    "Some random girl that thinks she's cool.",
    "Eden",
    "That musician girl.",
    "Bringing you music since 2006.",
    "Wow!",
    "Releasing an Able-TON of music.",
    "Awesomeness!",
    "You gave up on me.",
    "I will not once give in.",
    "And in the end of night...",
    "Tonight we're on fire.",
    "1,000 Years",
    "RE:BOOT INITIATED"
  ];

  let randomNumber = Math.floor(Math.random() * (randomTitles.length - 1));

  return randomTitles[randomNumber];
}

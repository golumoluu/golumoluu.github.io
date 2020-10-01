const wishes = {
  "Palak Dutta": "Happy birthday honey bunny 🐰 you are one of my best friend 👯‍♀️ I really really miss you. Your innocence and your craziness makes you more adorable 💕 I really wish lots n lots of success and happiness for you 👩🏻‍🎓👸🏻I love you. We will meet soon and party together.🎂🍷🍫🎁🎈😘❤️",
  "Saksham Aggarwal": "Happy birthday to the cutest girl I know . The one who mentored me in my school time. Had been a long time since I met you. May god bless you with all the happiness in the world. I know that you are gonna fullfil your dreams, so not gonna give you any of that shit😂 . I know you enjoy your life a lot and due to covid everything's fucked up. But everything will be fine eventually I guess. So, happy birthday to you once again. Rock it, party hard and have loads of fun. And please trynna meet me soon🥺",
  "Gagneet singh": "Happy Birthday meri jaan. 🥂🙌🏼",
  "Aastika": `Happiest birthday sinister.❤
Thankyou for being you and putting up with me.
You are the ben to my klaus and the tommy to my Arthur.
You are better than me in most of the activities that do not include the speaking accents.☘
I love you and everyone loves you so stay the same.
Start appreciating the captions I give for your posts.❣
And be positive about everything.💖
You are better than most💜
Happy birthday again.`,
  "ANSHI": `HAPPIEST BIRTHDAY TO THE MOST SKILLED, INTELLIGENT AND CHARMING AASTHA DIDI ,
 Or i should say ""BRO""❤
 I love you soo soo much💜 I can't thankyou enough for being there for me and being my bestest bro🥺😜 
I'm very blessed and greatful to have you in my life🌠
Anyone will be lucky to have you in their life💋
I wish nothing but the best for you💟
And yes gauri and me will work hard and make you proud💟

Or ha didi party krege😅😂
`,
  "Kriti Devgan": `Happy birthday aastha di🎈🥳. May god bless you (chotey se bhi aashirvaad chlta hai kbhi kbhi😛).... corona yug mein jitni party(possibly) kar sakte ho krna!!🍕🥂. Ummeed hai aapse jald mulakat ho💫`,
  "Tushar Mahajan": `Happppy birthdayyy paaaastaa! 🌹 god bless you, khush raho. We haven’t talked from a long time, stay happy and meet soon. Baaki, all the best for future. 🎈`,
  "Kuvam": `Ae motti Happy Birthday 🎂, 2020 toh waise hi ujaad gaya hai but i wish tereko ek sahela aur thodi akal mil jaaye 🤗 guess who wrote this`,
  "Sara": `Forget about the past ,
you can't change it.
Forget about the future , 
you can't predict it.
Forget about the present🎁 , 
I didn't get you one.
 
HAPPY BIRTHDAY🎊🎂`,
  "Nitya": `HAPPY BIRTHDAY BROOOOOOOOOO! I love u more than I love Brooklyn Nine Nine and I can't wait to get scolded with u again for staying up too late!(Surprisingly that's one of the best memories we both have which is a signal that we REALLY need to make more!)`,
  'Aakash': `Hum bhi agar bache hote 
naam humara hota bablu gablu
khaane ko milte laddu aur duniya kehti 
HAPPY BAAARDAAAY TO YOU ❤❤

Happy to you kudiyeeee
Jiyonde vasde raho 
hasde hasande  raho 
fulde fulaande rahoo

Iss pawan dihade ki aapko bahut bahut badhai ho + duniya jahaan ki saari generic wishes
Happy to You 🎂. Love you 💞.See you soon 💨`,
  "Gaurav Thapar":`Happiest birthday Aastha❤️🎉  God bless you with all the pizzas and RB in life 🍕🍻. I hope next year we can go to so many trips to mountains and beaches 👻. ""Country roads , take me home 😎"". 
Kabhi socha tha march mein ki ye Birthday quarantined birthday hoga ? 😂. God bless us all 💞🤞.`,
  "Ayush":"Happiest Birthday Mottooo, pampered jhalliyeee 🤪💖. Hope you have a kick vala hattke-jhattke vala mastttt day. Take care & See yaa soonnnn 🍾♥️ ",
  "Anuj": `Hey Aastha !! Happy Birthday to the most adorable chota sa bacha .....Stay Blessed & Enjoy this new phase your life (Post-Teen)....hshxhcndjjdbxncjfjd nkdldhdhdhdb  <3`,
  "Sujay Bansal": `Soo a day has come when someone amazing is born. A great day to be happy and to be celebrated. Hope this finds you in best of your health.
A Very happy birthday to you Aastha. Hope to see you growing every single year with joy. One to whom I shared my important life years. Enjoyed every moment being with you. Listing to amazing music playlist by you one i miss the most. Missing all those big and little parties we all enjoyed with you. 
Hope too get those days back. And enjoy many more trips like Manali. Most caring and supporting person i have ever met. God bless you with lot of happiness and success. lots of love from me.`,
  "Kanvi":`Happy happy birthday OG cuteness !❤️✨`,
  "Divansh": `Happy Birthday Aastha`,
  "Piyush": `Happy birthday to the best I have ❤🧡 May god always bless you with the best 🌹🧡 May all your wishes be fulfilled 🌹🎉🎂Take care of yourself god bless you and your family stay happy happy always ..loads of love good luck🧡🧡🎉🎉🎂🎂🎂`
};
const popSound = document.getElementById("popSound");

const balloonTemplate = `
<div class="balloon"></div>
  <div class="letter">💌</div>
`;
const colors = ["#ffc6ff", "#bdb2ff", "#a0c4ff", "#caffbf", "#ffadad",];

document.body.onload = () => {
const start = document.getElementById("modal2");
start.addEventListener("click", ()=>{
  const bgSound = document.getElementById("bg");
  bgSound.play();
  start.style.display = 'none';
});
}

const balloonElementRefs = Object.keys(wishes).map((e, i) => {
  const elem = document.createElement("DIV");
  elem.className = "container";
  elem.innerHTML = balloonTemplate;
  elem.dataset.person = e;
  elem.childNodes[1].style.backgroundColor = colors[i % colors.length];
  return elem;
});

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(balloonElementRefs);

balloonElementRefs.forEach((e) => {
  document.body.appendChild(e);
  e.addEventListener("click", showMsg);
});

function genOption(val) {
  return `<option value="${val}">${val}</option>`;
}

document.body.onclick = ()=>{

}

function showMsg(event) {
  const content = document.getElementById("content");
  const people = document.getElementById("people");
  const randomValues = Object.keys(wishes).map((e) => genOption(e));
  // Used like so
  shuffle(randomValues);
  people.innerHTML = ["<option value=''>Choose</option>",...randomValues].join("");
  const result = document.getElementById("result");
  result.innerHTML = "";
  content.textContent = wishes[event.currentTarget.dataset.person];
  new Custombox.modal({
    content: {
      effect: "blur",
      target: "#modal"
    }
  }).open();
  popSound.play();
}

function checkPerson() {
  const people = document.getElementById("people");
  if (!people.value) return;

  const content = document.getElementById("content");
  const result = document.getElementById("result");
  if (wishes[people.value] === content.textContent) {
    result.innerHTML = "Good job.🎈🥳";
  } else {
    result.innerHTML = "Wrong. Shame Shame. 😝";
  }
}

const guess = document.getElementById("people");
guess.addEventListener("change", checkPerson);

const list = "";
const cardList = [{
    id: 1,
    "bg-color": "#6F98A8"
  },
  {
    id: 2,
    "bg-color": "#2B8EAD"
  },
  {
    id: 3,
    "bg-color": "#2F454E"
  },
  {
    id: 4,
    "bg-color": "#2B8EAD"
  },
  {
    id: 5,
    "bg-color": "#2F454E"
  },
  {
    id: 6,
    "bg-color": "#BFBFBF"
  },
  {
    id: 7,
    "bg-color": "#BFBFBF"
  },
  {
    id: 8,
    "bg-color": "#6F98A8"
  },
  {
    id: 9,
    "bg-color": "#2F454E"
  },
]
for (let i = 1; i <= cardList.length; i++) {
  let divElem = document.createElement("div");
  divElem.classList.add("list-item");
  divElem.style.background = cardList[i - 1]["bg-color"];
  divElem.style.borderLeftColor = cardList[i - 1]["bg-color"];
  divElem.style.borderLeftWidth = "0px";
  divElem.style.borderLeftStyle = "solid";
  divElem.setAttribute("id", i);
  divElem.style.order = i;
  divElem.innerHTML = i;
  document.getElementById("gridId").append(divElem);
};

sortFunction = () => {
  cardList.sort((a, b) => a.id - b.id);
  for (let x = 0; x < cardList.length; x++) {
    document.getElementById(cardList[x]["id"]).style.order = x;
  }
}

shuffleFunction = () => {
  for (let i = cardList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i));
    const temp = cardList[i];
    cardList[i] = cardList[j];
    cardList[j] = temp;
  }
  for (let x = 0; x < cardList.length; x++) {
    document.getElementById(cardList[x]["id"]).style.order = x;
  }
}
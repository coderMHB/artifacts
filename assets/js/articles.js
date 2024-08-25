let articlesData = [
  {
    title: "چیست؟ Js1",
    txt: "این یک توضیح برای مقاله نوشته شده می باشد و چند خط از کل مقاله است",
    text: "این کل متن مقاله است",
    img: "./assets/img/بارگیری.jpg",
    time: "1399/10/06",
  },
  {
    title: "چیست؟ Js2",
    txt: "این یک توضیح برای مقاله نوشته شده می باشد و چند خط از کل مقاله است",
    text: "این کل متن مقاله است",
    img: "./assets/img/بارگیری.jpg",
    time: "1399/10/06",
  },
  {
    title: "چیست؟ Js3",
    txt: "این یک توضیح برای مقاله نوشته شده می باشد و چند خط از کل مقاله است",
    text: "این کل متن مقاله است",
    img: "./assets/img/بارگیری.jpg",
    time: "1399/10/06",
  },
  {
    title: "چیست؟ Js4",
    txt: "این یک توضیح برای مقاله نوشته شده می باشد و چند خط از کل مقاله است",
    text: "این کل متن مقاله است",
    img: "./assets/img/بارگیری.jpg",
    time: "1399/10/06",
  },
  {
    title: "چیست؟ Js5",
    txt: "این یک توضیح برای مقاله نوشته شده می باشد و چند خط از کل مقاله است",
    text: "این کل متن مقاله است",
    img: "./assets/img/بارگیری.jpg",
    time: "1399/10/06",
  },
  {
    title: "چیست؟ Js6",
    txt: "این یک توضیح برای مقاله نوشته شده می باشد و چند خط از کل مقاله است",
    text: "این کل متن مقاله است",
    img: "./assets/img/بارگیری.jpg",
    time: "1399/10/06",
  },
  {
    title: "چیست؟ Js7",
    txt: "این یک توضیح برای مقاله نوشته شده می باشد و چند خط از کل مقاله است",
    text: "این کل متن مقاله است",
    img: "./assets/img/بارگیری.jpg",
    time: "1399/10/06",
  },
  {
    title: "چیست؟ Js8",
    txt: "این یک توضیح برای مقاله نوشته شده می باشد و چند خط از کل مقاله است",
    text: "این کل متن مقاله است",
    img: "./assets/img/بارگیری.jpg",
    time: "1399/10/06",
  },
  {
    title: "چیست؟ Js9",
    txt: "این یک توضیح برای مقاله نوشته شده می باشد و چند خط از کل مقاله است",
    text: "این کل متن مقاله است",
    img: "./assets/img/بارگیری.jpg",
    time: "1399/10/06",
  },
  {
    title: "چیست؟ Js10",
    txt: "این یک توضیح برای مقاله نوشته شده می باشد و چند خط از کل مقاله است",
    text: "این کل متن مقاله است",
    img: "./assets/img/بارگیری.jpg",
    time: "1399/10/06",
  },
  {
    title: "چیست؟ Js11",
    txt: "این یک توضیح برای مقاله نوشته شده می باشد و چند خط از کل مقاله است",
    text: "این کل متن مقاله است",
    img: "./assets/img/بارگیری.jpg",
    time: "1399/10/06",
  },
  {
    title: "چیست؟ Js12",
    txt: "این یک توضیح برای مقاله نوشته شده می باشد و چند خط از کل مقاله است",
    text: "این کل متن مقاله است",
    img: "./assets/img/بارگیری.jpg",
    time: "1399/10/06",
  },
  {
    title: "چیست؟ Js13",
    txt: "این یک توضیح برای مقاله نوشته شده می باشد و چند خط از کل مقاله است",
    text: "این کل متن مقاله است",
    img: "./assets/img/بارگیری.jpg",
    time: "1399/10/06",
  },
  {
    title: "چیست؟ Js14",
    txt: "این یک توضیح برای مقاله نوشته شده می باشد و چند خط از کل مقاله است",
    text: "این کل متن مقاله است",
    img: "./assets/img/بارگیری.jpg",
    time: "1399/10/06",
  },
  {
    title: "چیست؟ Js15",
    txt: "این یک توضیح برای مقاله نوشته شده می باشد و چند خط از کل مقاله است",
    text: "این کل متن مقاله است",
    img: "./assets/img/بارگیری.jpg",
    time: "1399/10/06",
  },
];

const articlesContainer = document.getElementById("articles-container");

function showArticlesToUser(item, index) {
  let containerItem = document.createElement("div");
  containerItem.className = "col-12 col-md-6 col-lg-4 col-xl-3";

  let articleDiv = document.createElement("div");
  articleDiv.className = "article";

  let imgItem = document.createElement("img");
  imgItem.src = item.img;
  imgItem.className = "w-100 border-r-img-blog";
  imgItem.alt = "SEO";

  let titleItem = document.createElement("p");
  titleItem.className = "brand-name text-center";
  titleItem.innerHTML = item.title;

  let txtItem = document.createElement("p");
  txtItem.className = "text-white-50 text-center m-1";
  txtItem.innerHTML = item.txt;

  let newHrElem = document.createElement("hr");
  newHrElem.className = "m-auto mb-2";
  newHrElem.style.cssText = "color: #949494; width: 90%;";

  let timeAndBtnDiv = document.createElement("div");
  timeAndBtnDiv.className =
    "d-flex justify-content-around align-items-center mb-3";

  let timeElem = document.createElement("span");
  timeElem.className = "text-white";
  timeElem.innerHTML = item.time;

  let btnElem = document.createElement("button");
  btnElem.className = "btn btn-dark text-white";
  btnElem.type = "button";
  btnElem.innerHTML = "ادامه مطلب";
  // تغییر لینک دکمه به صفحه مقاله با پارامتر
  btnElem.addEventListener("click", () => {
    window.location.href = `./pages/article.html?articleIndex=${index}`;
  });

  articleDiv.append(imgItem, titleItem, txtItem, newHrElem, timeAndBtnDiv);

  timeAndBtnDiv.append(timeElem, btnElem);

  containerItem.append(articleDiv);

  articlesContainer.append(containerItem);

  console.log(articlesContainer);
}

articlesData.forEach((article, index) => showArticlesToUser(article, index));

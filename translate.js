const selecttag = document.querySelectorAll("select");
// const fromtext = document.getSelector("from-text");
const translateBtn = document.querySelector("button");
const fromtext = document.querySelector(".from-text");
const totext = document.querySelector(".to-text");
const exchangeIcon = document.querySelector(".exchange");

selecttag.forEach((tag, id) => {
  for (const country_code in countries) {
    // console.log(countries[country_code]);

    let selected;
    if (id == 0 && country_code == "en-GB") {
      selected = "selected";
    } else if (id === 1 && country_code == "hi-IN") {
      selected = "selected";
    }

    let option = ` <option value="${country_code}">${countries[country_code]}</option>`;

    // aa element add karse vache thee

    tag.insertAdjacentHTML("beforeend", option);
  }
});

exchangeIcon.addEventListener("click", () => {
  // excahnging value and place
  let tempText = fromtext.value,
    tempLang = selecttag[0].value;
  fromtext.value = totext.value;
  selecttag[0].value = selecttag[1].value;
  totext.value = tempText;
  selecttag[1].value = tempLang;
});

translateBtn.addEventListener("click", () => {
  let text = fromtext.value;
  translateFrom = selecttag[0].value;
  translateTo = selecttag[1].value;

  console.log(text, translateFrom, translateTo);

  let apiurl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;

  // fetching api responce and returing it with parsing into JS obj
  // method receive that obj

  fetch(apiurl)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      totext.value = data.responseData.translatetext;
    });
});

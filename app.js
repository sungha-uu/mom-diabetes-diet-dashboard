const recipes = [
  {
    title: "두부 채소 스테이크",
    status: "safe",
    image: "assets/recipes/tofu-steak.png",
    why: "두부와 채소가 중심이라 부담이 적고 든든합니다.",
    source: "ADA Diabetes Food Hub의 tofu stir-fry, General Tso's tofu 레시피를 참고해 한식 양념으로 줄였습니다.",
    ingredients: ["두부 1/2모(150g)", "버섯 70g", "애호박 1/3개", "파프리카 1/4개", "식용유 1작은술(5ml)", "진간장 1큰술(15ml)", "식초 1작은술(5ml)", "다진 파 1큰술"],
    steps: ["두부 물기를 빼고 크게 자릅니다.", "팬에 기름 1작은술만 두르고 두부를 굽습니다.", "버섯, 애호박, 파프리카를 같이 굽습니다.", "간장, 식초, 파를 섞어 조금만 찍어 드세요."],
    tags: ["두부", "채소", "저녁", "안심"]
  },
  {
    title: "두부면 채소 칼국수",
    status: "caution",
    image: "assets/recipes/tofu-noodle-soup.png",
    why: "칼국수가 먹고 싶을 때 밀가루 면을 줄이고 두부면이나 곤약면으로 바꿉니다.",
    source: "CDC plate method와 ADA zucchini noodle 레시피를 참고해 면 양을 줄였습니다.",
    ingredients: ["두부면 1팩 또는 곤약면 1팩(150g)", "닭고기 또는 바지락 80g", "애호박 1/3개", "버섯 70g", "배추 한 줌(60g)", "물 600ml", "국간장 1작은술(5ml)"],
    steps: ["두부면이나 곤약면은 물에 헹굽니다.", "물 600ml에 닭고기나 바지락을 넣고 끓입니다.", "채소와 버섯을 먼저 많이 넣습니다.", "면을 넣고 짧게 끓인 뒤 국물은 적게 드세요."],
    tags: ["칼국수", "면", "두부면", "곤약면", "주의"]
  },
  {
    title: "작고 얇은 부추전",
    status: "caution",
    image: "assets/recipes/buchu-jeon.png",
    why: "전은 밀가루와 기름이 들어가서 양을 작게 정해야 합니다.",
    source: "당뇨 식사요법의 탄수화물 조절 원칙을 적용해 부침가루를 2큰술로 제한했습니다.",
    ingredients: ["부추 두 줌(100g)", "오징어 또는 새우 60g", "계란 1개", "부침가루 2큰술(20g)", "물 2큰술(30ml)", "식용유 1작은술(5ml)", "간장 1작은술(5ml)", "식초 1작은술(5ml)"],
    steps: ["부추를 4cm 길이로 자릅니다.", "계란, 부침가루, 물을 섞고 부추와 해물을 넣습니다.", "기름 1작은술만 쓰고 작고 얇게 굽습니다.", "밥이나 면과 같이 먹지 말고 1-2장만 드세요."],
    tags: ["부추전", "찌짐", "전", "주의"]
  },
  {
    title: "채소 버섯 두부 접시",
    status: "safe",
    image: "assets/recipes/vegetable-tofu-plate.png",
    why: "식사 시작 전에 먹기 좋습니다. 면이나 밥 양을 자연스럽게 줄여줍니다.",
    source: "CDC와 ADA의 접시법: 접시 절반을 비전분 채소로 채우는 원칙을 반영했습니다.",
    ingredients: ["오이 1/2개", "상추 5장", "버섯 한 줌(70g)", "브로콜리 1컵(80g)", "두부 1/3모(100g)", "참기름 1/2작은술(2.5ml)", "간장 1작은술(5ml)"],
    steps: ["오이와 상추를 씻어 접시에 담습니다.", "버섯과 브로콜리는 데치거나 기름 없이 굽습니다.", "두부를 곁들입니다.", "간장과 참기름은 아주 조금만 사용합니다."],
    tags: ["채소", "버섯", "두부", "안심"]
  }
];

const eatingOut = [
  { name: "생선구이 정식", status: "safe", note: "밥은 반 공기, 생선과 나물 먼저. 짠 국물은 적게." },
  { name: "순두부찌개", status: "caution", note: "밥 반 공기. 국물은 적게. 계란/두부 위주로." },
  { name: "샤브샤브", status: "safe", note: "채소와 고기 위주. 칼국수 사리는 빼거나 아주 조금." },
  { name: "비빔밥", status: "caution", note: "밥은 반만, 고추장은 1작은술부터. 나물과 계란 먼저." },
  { name: "칼국수", status: "caution", note: "면 절반만. 밥, 전, 만두를 같이 먹지 않기." },
  { name: "라면", status: "danger", note: "위험. 면과 국물 나트륨 부담이 큽니다. 자주 먹지 않기." },
  { name: "분식 세트", status: "danger", note: "위험. 떡볶이, 튀김, 김밥 조합은 탄수화물이 겹칩니다." },
  { name: "달달한 카페 음료", status: "danger", note: "위험. 시럽, 설탕, 주스는 피하고 무가당 차 선택." }
];

const ingredients = [
  { name: "두부", status: "safe", note: "안심. 단백질 반찬으로 좋습니다. 전분 없이 굽기." },
  { name: "계란", status: "safe", note: "안심. 삶거나 기름 적게 부치기." },
  { name: "생선", status: "safe", note: "안심. 튀김보다 구이/찜 선택." },
  { name: "닭고기", status: "safe", note: "안심. 껍질과 달달한 양념은 줄이기." },
  { name: "브로콜리", status: "safe", note: "안심. 비전분 채소. 데쳐서 자주 사용." },
  { name: "오이", status: "safe", note: "안심. 간식이나 식전 채소로 좋습니다." },
  { name: "버섯", status: "safe", note: "안심. 면 요리에 많이 넣으면 면 양을 줄이기 쉽습니다." },
  { name: "방울토마토", status: "safe", note: "안심에 가깝지만 한 번에 5-7개 정도로." },
  { name: "딸기", status: "caution", note: "주의. 과일은 당이 있으니 작은 것 5-7개 정도, 주스는 금지." },
  { name: "땅콩", status: "caution", note: "주의. 무가당으로 한 줌보다 적게. 많이 먹으면 열량이 큽니다." },
  { name: "잡곡밥", status: "caution", note: "주의. 잡곡도 탄수화물입니다. 반 공기부터." },
  { name: "고구마", status: "caution", note: "주의. 건강식처럼 보여도 탄수화물이 많습니다. 작은 것 1/2개." },
  { name: "감자", status: "caution", note: "주의. 수제비나 밥과 같이 먹으면 탄수화물이 겹칩니다." },
  { name: "메밀면", status: "caution", note: "주의. 밀가루면보다 나아도 면입니다. 1/2인분만." },
  { name: "두부면", status: "safe", note: "안심. 칼국수나 비빔면 대체로 좋습니다. 제품 성분표 확인." },
  { name: "곤약면", status: "safe", note: "안심에 가깝습니다. 잘 헹구고, 소화가 불편하면 줄이기." },
  { name: "설탕", status: "danger", note: "위험. 위험. 넣지 마세요." },
  { name: "믹스커피", status: "danger", note: "위험. 설탕이 들어갑니다. 무가당 커피나 차로." },
  { name: "과일주스", status: "danger", note: "위험. 액상 당이라 혈당이 빠르게 오릅니다." },
  { name: "떡", status: "danger", note: "위험. 쌀이 압축된 음식이라 혈당 부담이 큽니다." }
];

const noodleTips = [
  { name: "두부면", status: "safe", note: "마트 냉장 코너. 헹군 뒤 칼국수 국물에 마지막에 넣기." },
  { name: "곤약면", status: "safe", note: "물에 여러 번 헹구고 1분 데치기. 씹기 편한지 확인." },
  { name: "애호박 채소면", status: "safe", note: "애호박을 길게 썰어 면처럼 사용. 칼국수에 섞기 좋음." },
  { name: "메밀면", status: "caution", note: "면이므로 1/2인분만. 달달한 양념장 금지." },
  { name: "일반 칼국수면", status: "caution", note: "먹는다면 1/2인분. 밥과 전을 같이 먹지 않기." }
];

const viewTitles = {
  recipes: "사진 레시피",
  eatingOut: "밖에서 먹을 때",
  ingredients: "재료 검색",
  noodles: "면 대신 고르기",
  danger: "위험 음식"
};

let currentView = "recipes";
let query = "";

const content = document.querySelector("#content");
const search = document.querySelector("#search");
const buttons = document.querySelectorAll("[data-view]");
const searchBox = document.querySelector("#searchBox");

function statusLabel(status) {
  return status === "safe" ? "안심" : status === "danger" ? "위험" : "주의";
}

function cardStatus(item) {
  return `<span class="badge ${item.status}">${statusLabel(item.status)}</span>`;
}

function includesQuery(item) {
  const text = JSON.stringify(item).toLowerCase();
  return !query || text.includes(query.toLowerCase());
}

function recipeCard(recipe) {
  return `
    <article class="recipe-card ${recipe.status}">
      <img src="${recipe.image}" alt="${recipe.title} 사진" loading="lazy">
      <div class="card-body">
        ${cardStatus(recipe)}
        <h2>${recipe.title}</h2>
        <p class="why">${recipe.why}</p>
        <details open>
          <summary>계량 레시피 보기</summary>
          <h3>재료</h3>
          <ul>${recipe.ingredients.map(x => `<li>${x}</li>`).join("")}</ul>
          <h3>만드는 법</h3>
          <ol>${recipe.steps.map(x => `<li>${x}</li>`).join("")}</ol>
        </details>
        <p class="source">${recipe.source}</p>
      </div>
    </article>
  `;
}

function simpleCard(item) {
  return `
    <article class="simple-card ${item.status}">
      ${cardStatus(item)}
      <h2>${item.name}</h2>
      <p>${item.note}</p>
    </article>
  `;
}

function render() {
  searchBox.hidden = currentView === "recipes" || currentView === "danger" || currentView === "noodles";
  let html = `<div class="section-title"><h2>${viewTitles[currentView]}</h2></div>`;

  if (currentView === "recipes") {
    html += `<div class="recipe-list">${recipes.map(recipeCard).join("")}</div>`;
  }

  if (currentView === "eatingOut") {
    const items = eatingOut.filter(includesQuery);
    html += `<div class="simple-list">${items.map(simpleCard).join("")}</div>`;
  }

  if (currentView === "ingredients") {
    const items = ingredients.filter(includesQuery);
    html += `
      <div class="quick-picks" aria-label="빠른 재료 검색">
        <button type="button" data-query="땅콩">땅콩</button>
        <button type="button" data-query="방울토마토">방울토마토</button>
        <button type="button" data-query="딸기">딸기</button>
        <button type="button" data-query="두부">두부</button>
        <button type="button" data-query="">전체 재료</button>
      </div>
    `;
    html += `<div class="simple-list">${items.map(simpleCard).join("") || emptyText()}</div>`;
  }

  if (currentView === "noodles") {
    html += `<p class="guide">칼국수가 먹고 싶을 때는 밀가루 면을 줄이고 아래 순서로 고르세요.</p>`;
    html += `<div class="simple-list">${noodleTips.map(simpleCard).join("")}</div>`;
  }

  if (currentView === "danger") {
    const dangerItems = [...eatingOut, ...ingredients].filter(item => item.status === "danger");
    html += `<div class="simple-list">${dangerItems.map(simpleCard).join("")}</div>`;
  }

  content.innerHTML = html;
}

function emptyText() {
  return `<article class="simple-card caution"><span class="badge caution">주의</span><h2>검색 결과 없음</h2><p>다른 이름으로 검색해 보세요. 예: 토마토, 땅콩, 딸기, 면</p></article>`;
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    currentView = button.dataset.view;
    query = "";
    search.value = "";
    buttons.forEach(x => x.setAttribute("aria-pressed", String(x === button)));
    render();
  });
});

search.addEventListener("input", event => {
  query = event.target.value;
  render();
});

content.addEventListener("click", event => {
  const button = event.target.closest("[data-query]");
  if (!button) return;
  query = button.dataset.query;
  search.value = query;
  render();
});

render();

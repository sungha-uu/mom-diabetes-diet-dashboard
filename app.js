const foods = [
  {
    name: "두부부침",
    status: "safe",
    label: "안심",
    tags: ["favorite", "protein", "tofu"],
    photo: "🟢",
    short: "두부는 좋은 단백질 반찬입니다. 단, 기름과 단 양념은 줄입니다.",
    eat: "전분 없이 굽고, 설탕 없는 양념장으로 드세요.",
    recipeTitle: "담백한 두부부침",
    ingredients: [
      "두부 1/2모(약 150g)",
      "식용유 1작은술(5ml)",
      "진간장 1큰술(15ml)",
      "식초 1작은술(5ml)",
      "다진 파 1큰술",
      "고춧가루 1/2작은술"
    ],
    steps: [
      "두부를 키친타월로 눌러 물기를 뺍니다.",
      "팬에 식용유 1작은술만 두르고 앞뒤로 굽습니다.",
      "간장, 식초, 파, 고춧가루를 섞어 조금만 찍어 드세요."
    ],
    alternatives: ["쌈채소와 같이 먹기", "버섯볶음 곁들이기", "양념장에 설탕 넣지 않기"]
  },
  {
    name: "칼국수",
    status: "caution",
    label: "주의",
    tags: ["favorite", "noodle", "flour"],
    photo: "🟡",
    short: "밀가루 면은 혈당을 빨리 올릴 수 있습니다. 면을 줄이고 채소와 단백질을 늘려야 합니다.",
    eat: "한 그릇을 다 먹지 말고, 면은 1/2만 넣으세요. 밥과 전은 같이 먹지 않습니다.",
    recipeTitle: "채소 듬뿍 반그릇 칼국수",
    ingredients: [
      "칼국수면 1/2인분(약 80g)",
      "닭고기 또는 바지락 80g",
      "애호박 1/3개",
      "버섯 한 줌(50g)",
      "배추 또는 양배추 한 줌(60g)",
      "물 600ml",
      "국간장 1작은술(5ml)"
    ],
    steps: [
      "물 600ml에 닭고기나 바지락을 넣고 끓입니다.",
      "채소와 버섯을 먼저 많이 넣습니다.",
      "면은 1/2인분만 넣고 싱겁게 끓입니다.",
      "국물은 많이 마시지 말고 건더기 위주로 드세요."
    ],
    alternatives: [
      "두부면: 마트 냉장 코너에서 두부면을 사서 면 대신 넣기",
      "곤약면: 물에 여러 번 헹군 뒤 데쳐서 넣기. 씹기 편한지 확인",
      "채소면: 애호박을 길게 썰어 면처럼 넣기",
      "메밀면: 메밀도 탄수화물이므로 1/2인분만 먹기"
    ]
  },
  {
    name: "수제비",
    status: "caution",
    label: "주의",
    tags: ["favorite", "flour"],
    photo: "🟡",
    short: "수제비 반죽은 밀가루입니다. 반죽을 절반으로 줄이고 두부와 채소를 늘리세요.",
    eat: "반죽은 작고 얇게, 국물은 적게, 밥과 전은 같이 먹지 않습니다.",
    recipeTitle: "두부채소 수제비",
    ingredients: [
      "수제비 반죽 1/2인분(약 70g)",
      "두부 1/3모(약 100g)",
      "계란 1개",
      "애호박 1/3개",
      "버섯 한 줌(50g)",
      "배추 한 줌(60g)",
      "물 650ml",
      "국간장 1작은술(5ml)"
    ],
    steps: [
      "반죽은 아주 얇고 작게 뜯습니다.",
      "채소와 버섯을 먼저 끓여 양을 늘립니다.",
      "두부와 계란을 넣어 든든하게 만듭니다.",
      "수제비 먹는 날에는 밥, 전, 떡을 빼세요."
    ],
    alternatives: ["반죽 절반을 애호박으로 바꾸기", "감자는 넣지 않거나 2-3조각만", "들깨가루는 1큰술 이하"]
  },
  {
    name: "김치전",
    status: "caution",
    label: "주의",
    tags: ["favorite", "pancake", "flour"],
    photo: "🟡",
    short: "김치전은 밀가루와 기름이 들어갑니다. 작게, 얇게, 적게 드셔야 합니다.",
    eat: "작은 것 1-2장만 드세요. 밥이나 면과 같이 먹으면 안 좋습니다.",
    recipeTitle: "작고 얇은 김치전",
    ingredients: [
      "잘게 썬 김치 1/2컵(80g)",
      "부추 또는 양파 1/2컵(50g)",
      "버섯 1/2컵(40g)",
      "부침가루 2큰술(20g)",
      "계란 1개",
      "물 2큰술(30ml)",
      "식용유 1작은술(5ml)"
    ],
    steps: [
      "김치가 짜면 물에 살짝 헹궈 꼭 짭니다.",
      "채소를 많이 넣고 부침가루는 2큰술만 넣습니다.",
      "팬에 기름 1작은술을 펴 바르고 작게 굽습니다.",
      "한 번에 작은 전 1-2장만 드세요."
    ],
    alternatives: ["부침가루 대신 계란 비율 늘리기", "채소를 더 넣어 반죽을 줄이기", "남은 전은 1회분씩 나누어 보관"]
  },
  {
    name: "부추전",
    status: "caution",
    label: "주의",
    tags: ["favorite", "pancake", "flour"],
    photo: "🟡",
    short: "부추는 좋지만 전으로 만들면 밀가루와 기름이 들어갑니다.",
    eat: "작고 얇게 구워 1-2장만 드세요. 초간장은 조금만 찍습니다.",
    recipeTitle: "해물 부추전",
    ingredients: [
      "부추 두 줌(100g)",
      "오징어 또는 새우 60g",
      "계란 1개",
      "부침가루 2큰술(20g)",
      "물 2큰술(30ml)",
      "식용유 1작은술(5ml)",
      "간장 1작은술(5ml), 식초 1작은술(5ml)"
    ],
    steps: [
      "부추를 4cm 길이로 자릅니다.",
      "계란, 부침가루, 물을 섞고 부추와 해물을 넣습니다.",
      "기름 1작은술만 쓰고 얇게 굽습니다.",
      "간장과 식초만 섞어 조금 찍어 드세요."
    ],
    alternatives: ["부추를 더 많이, 반죽은 더 적게", "계란을 넣어 단백질 보강", "밥 없이 전만 소량"]
  },
  {
    name: "설탕 음료",
    status: "danger",
    label: "위험",
    tags: ["drink", "sugar"],
    photo: "🔴",
    short: "위험. 위험. 설탕 음료는 혈당을 빠르게 올립니다. 드시면 큰일 날 수 있습니다.",
    eat: "콜라, 사이다, 주스, 달달한 커피, 믹스커피는 드시면 안 됩니다.",
    recipeTitle: "대신 마실 것",
    ingredients: [
      "물 1컵(200ml)",
      "보리차 1컵(200ml)",
      "무가당 탄산수 1컵(200ml)",
      "레몬 조각 1개 선택"
    ],
    steps: [
      "목마를 때는 물이나 보리차를 드세요.",
      "탄산이 당기면 무가당 탄산수를 고르세요.",
      "달달한 커피 대신 무가당 차를 드세요."
    ],
    alternatives: ["무가당 차", "물", "무가당 탄산수"]
  },
  {
    name: "떡, 과자, 케이크",
    status: "danger",
    label: "위험",
    tags: ["sugar", "snack"],
    photo: "🔴",
    short: "위험. 위험. 떡, 과자, 케이크는 당과 탄수화물이 많습니다. 드시면 큰일 날 수 있습니다.",
    eat: "평소 간식으로 두지 마세요. 집에 쌓아두지 않는 것이 좋습니다.",
    recipeTitle: "간식이 필요할 때",
    ingredients: [
      "삶은 계란 1개",
      "오이 1/2개",
      "방울토마토 5개",
      "무가당 두유 1/2컵(100ml)"
    ],
    steps: [
      "단 간식 대신 단백질이나 채소를 먼저 고릅니다.",
      "과일은 주스가 아니라 통과일로 아주 조금만 드세요.",
      "간식 시간과 양은 병원 식단 지침이 있으면 그 기준을 따릅니다."
    ],
    alternatives: ["삶은 계란", "오이", "방울토마토", "무가당 두유 소량"]
  },
  {
    name: "채소와 버섯",
    status: "safe",
    label: "안심",
    tags: ["vegetable", "safe"],
    photo: "🟢",
    short: "채소와 버섯은 식사량을 든든하게 늘리는 데 좋습니다.",
    eat: "면이나 밥을 먹기 전에 채소를 먼저 드세요.",
    recipeTitle: "채소 먼저 접시",
    ingredients: [
      "오이 1/2개",
      "상추 5장",
      "버섯 한 줌(70g)",
      "브로콜리 1컵(80g)",
      "참기름 1/2작은술(2.5ml)",
      "간장 1작은술(5ml)"
    ],
    steps: [
      "오이와 상추를 먼저 준비합니다.",
      "버섯과 브로콜리는 데치거나 기름 없이 굽습니다.",
      "간은 아주 조금만 해서 식사 시작 전에 드세요."
    ],
    alternatives: ["애호박", "양배추", "가지", "미역", "파프리카"]
  }
];

const state = { query: "", filter: "all" };
const list = document.querySelector("#food-list");
const search = document.querySelector("#search");
const buttons = document.querySelectorAll("[data-filter]");
const count = document.querySelector("#result-count");

const statusText = {
  safe: "안심",
  caution: "주의",
  danger: "위험"
};

function matchFood(food) {
  const q = state.query.trim().toLowerCase();
  const text = [
    food.name,
    food.short,
    food.eat,
    food.recipeTitle,
    ...food.tags,
    ...food.ingredients,
    ...food.steps,
    ...food.alternatives
  ].join(" ").toLowerCase();
  const filterOk = state.filter === "all" || food.status === state.filter || food.tags.includes(state.filter);
  return filterOk && (!q || text.includes(q));
}

function renderFood(food) {
  return `
    <article class="food-card ${food.status}">
      <div class="food-top">
        <div class="food-icon" aria-hidden="true">${food.photo}</div>
        <div>
          <p class="status ${food.status}">${statusText[food.status]}</p>
          <h3>${food.name}</h3>
        </div>
      </div>
      <p class="short">${food.short}</p>
      <div class="eat-box">
        <strong>이렇게 드세요</strong>
        <p>${food.eat}</p>
      </div>
      <details open>
        <summary>${food.recipeTitle} 계량 레시피</summary>
        <div class="recipe-grid">
          <div>
            <h4>재료</h4>
            <ul>${food.ingredients.map(item => `<li>${item}</li>`).join("")}</ul>
          </div>
          <div>
            <h4>조리법</h4>
            <ol>${food.steps.map(step => `<li>${step}</li>`).join("")}</ol>
          </div>
        </div>
      </details>
      <div class="alt-box">
        <strong>대체 방법</strong>
        <ul>${food.alternatives.map(item => `<li>${item}</li>`).join("")}</ul>
      </div>
    </article>
  `;
}

function render() {
  const results = foods.filter(matchFood);
  count.textContent = `${results.length}개 음식`;
  list.innerHTML = results.length
    ? results.map(renderFood).join("")
    : `<article class="food-card caution"><p class="status caution">주의</p><h3>찾는 음식이 없습니다</h3><p class="short">다른 이름으로 검색해 보세요. 예: 전, 찌짐, 면, 두부, 설탕</p></article>`;
}

search.addEventListener("input", event => {
  state.query = event.target.value;
  render();
});

buttons.forEach(button => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    state.query = "";
    search.value = "";
    buttons.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    render();
  });
});

render();

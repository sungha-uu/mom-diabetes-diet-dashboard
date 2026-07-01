const foods = [
  {
    name: "칼국수",
    aliases: ["바지락칼국수", "닭칼국수", "면"],
    category: "면/밀가루 주식",
    level: "limit",
    badge: "조절해서 가끔",
    reason: "면이 주된 탄수화물이라 혈당 부담이 큽니다. 밥이나 전을 같이 먹으면 탄수화물이 겹칩니다.",
    portion: "면은 평소의 1/2-2/3, 국물은 적게",
    tips: ["채소, 버섯, 바지락, 닭고기, 계란을 충분히 넣기", "밥/전/떡과 같이 먹지 않기", "채소와 단백질을 먼저 먹고 면은 천천히 먹기"],
    recipe: "채소 듬뿍 닭칼국수: 닭고기와 버섯, 애호박, 배추를 많이 넣고 면은 줄입니다. 간은 싱겁게 하고 국물은 남기는 쪽으로 잡습니다."
  },
  {
    name: "수제비",
    aliases: ["들깨수제비", "감자수제비", "밀가루"],
    category: "밀가루 주식",
    level: "limit",
    badge: "조절해서 가끔",
    reason: "밀가루 반죽이 많고 감자까지 들어가면 탄수화물이 더 늘어납니다.",
    portion: "반죽은 평소 절반, 작고 얇게",
    tips: ["두부, 계란, 버섯, 애호박을 늘리기", "감자는 적게", "수제비 먹는 날은 밥과 전을 빼기"],
    recipe: "두부채소 수제비: 반죽은 작게 뜨고 두부, 계란, 배추, 버섯을 많이 넣습니다. 들깨가루는 소량만 사용합니다."
  },
  {
    name: "김치전",
    aliases: ["김치부침개", "찌짐", "전"],
    category: "전/부침",
    level: "limit",
    badge: "작게 조절",
    reason: "밀가루 반죽과 기름이 같이 들어갑니다. 밥이나 면과 함께 먹으면 부담이 커집니다.",
    portion: "손바닥보다 작은 크기 1-2장",
    tips: ["김치와 채소 비율을 높이고 반죽은 접착용으로만 사용", "팬에 기름을 얇게 바르기", "짜면 김치를 살짝 헹구기"],
    recipe: "채소 많은 김치전: 김치, 양파, 버섯, 부추를 많이 넣고 밀가루는 최소화합니다. 작게 부쳐서 1회분을 정해 둡니다."
  },
  {
    name: "부추전",
    aliases: ["정구지전", "찌짐", "전"],
    category: "전/부침",
    level: "limit",
    badge: "작게 조절",
    reason: "부추 자체는 좋지만 반죽과 기름이 많아지면 혈당과 열량 부담이 커집니다.",
    portion: "작은 크기 1-2장",
    tips: ["부추와 채소는 많이, 반죽은 얇게", "해물이나 계란으로 단백질 보강", "초간장은 조금만"],
    recipe: "해물 부추전: 부추를 듬뿍 넣고 계란과 오징어를 조금 넣습니다. 반죽은 묽게 펴서 얇게 굽습니다."
  },
  {
    name: "두부부침",
    aliases: ["부친 두부", "두부구이"],
    category: "단백질 반찬",
    level: "good",
    badge: "좋은 선택",
    reason: "두부는 단백질 반찬으로 활용하기 좋습니다. 다만 기름, 전분가루, 단 양념은 줄여야 합니다.",
    portion: "전분 없이 구운 두부 1/3-1/2모 정도",
    tips: ["물기를 빼고 전분 없이 굽기", "양념장에 설탕/올리고당 넣지 않기", "쌈채소와 같이 먹기"],
    recipe: "담백한 두부부침: 두부 물기를 빼고 기름을 최소화해 굽습니다. 간장, 식초, 파, 고춧가루로 양념장을 만듭니다."
  },
  {
    name: "설탕 음료",
    aliases: ["콜라", "사이다", "과일주스", "달달한 커피", "믹스커피"],
    category: "음료",
    level: "avoid",
    badge: "가급적 피함",
    reason: "액상 당류는 혈당을 빠르게 올립니다. 평소 음료로 마시기에는 부적합합니다.",
    portion: "평소 음료로는 선택하지 않기",
    tips: ["물, 무가당 차, 탄산수 선택", "저혈당 대응용 당질은 의료진 지침과 별도로 관리", "주스보다 통과일 소량이 낫습니다"],
    recipe: "대체 음료: 보리차, 녹차, 무가당 탄산수에 레몬 조각을 넣어 마십니다."
  },
  {
    name: "잡곡밥",
    aliases: ["현미밥", "보리밥", "밥"],
    category: "주식",
    level: "limit",
    badge: "분량 조절",
    reason: "잡곡도 탄수화물입니다. 흰밥보다 낫더라도 양을 정해야 합니다.",
    portion: "1/3-2/3공기 범위에서 개인 반응 확인",
    tips: ["채소와 단백질을 먼저 먹기", "면/전/떡과 한 끼에 겹치지 않기", "천천히 먹기"],
    recipe: "작은 잡곡밥 한 끼: 잡곡밥은 작은 공기로 담고 생선, 두부, 채소 반찬을 함께 구성합니다."
  },
  {
    name: "비전분 채소",
    aliases: ["상추", "오이", "버섯", "애호박", "양배추", "브로콜리"],
    category: "채소",
    level: "good",
    badge: "자주 가능",
    reason: "식사 부피를 늘리고 포만감을 주며 탄수화물 부담이 낮습니다.",
    portion: "매 끼니 접시의 절반을 목표",
    tips: ["기름진 드레싱 줄이기", "국물보다 데침/무침/구이 활용", "면 요리에 많이 추가하기"],
    recipe: "채소 먼저 접시: 오이, 상추, 버섯구이, 데친 브로콜리를 먼저 먹고 주식을 뒤에 먹습니다."
  }
];

const state = {
  query: "",
  filter: "all"
};

const list = document.querySelector("#food-list");
const search = document.querySelector("#search");
const chips = document.querySelectorAll("[data-filter]");

function badgeClass(level) {
  if (level === "good") return "good";
  if (level === "avoid") return "avoid";
  return "limit";
}

function matches(food) {
  const q = state.query.trim().toLowerCase();
  const text = [food.name, food.category, food.reason, food.portion, food.recipe, ...food.aliases, ...food.tips].join(" ").toLowerCase();
  const filterOk = state.filter === "all" || food.level === state.filter;
  return filterOk && (!q || text.includes(q));
}

function render() {
  const results = foods.filter(matches);
  list.innerHTML = results.length
    ? results.map(food => `
      <article class="card">
        <div class="card-head">
          <div>
            <h3>${food.name}</h3>
            <ul class="meta">
              <li>${food.category}</li>
              <li>${food.portion}</li>
            </ul>
          </div>
          <span class="badge ${badgeClass(food.level)}">${food.badge}</span>
        </div>
        <p>${food.reason}</p>
        <div class="recipe">
          <strong>먹는 법</strong>
          <ul>${food.tips.map(tip => `<li>${tip}</li>`).join("")}</ul>
        </div>
        <p><strong>레시피:</strong> ${food.recipe}</p>
      </article>
    `).join("")
    : `<article class="card"><h3>검색 결과가 없습니다</h3><p>음식명을 다르게 입력하거나 전체 보기로 바꿔보세요.</p></article>`;
}

search.addEventListener("input", event => {
  state.query = event.target.value;
  render();
});

chips.forEach(button => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    chips.forEach(chip => chip.setAttribute("aria-pressed", String(chip === button)));
    render();
  });
});

render();

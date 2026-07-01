const recipes = [
  {
    title: "두부 채소 스테이크",
    category: "주메뉴",
    status: "safe",
    image: "assets/recipes/tofu-steak.jpg",
    why: "두부와 채소가 중심이라 부담이 적고 든든합니다.",
    source: "ADA Diabetes Food Hub의 두부/채소 볶음 레시피와 CDC 접시법을 참고했습니다.",
    ingredients: ["두부 1/2모(150g)", "버섯 70g", "애호박 1/3개", "파프리카 1/4개", "식용유 1작은술(5ml)", "진간장 1큰술(15ml)", "식초 1작은술(5ml)", "다진 파 1큰술"],
    steps: ["두부 물기를 빼고 크게 자릅니다.", "팬에 기름 1작은술만 두르고 두부를 굽습니다.", "버섯, 애호박, 파프리카를 같이 굽습니다.", "간장, 식초, 파를 섞어 조금만 찍어 드세요."],
    tags: ["두부", "채소", "저녁", "안심"]
  },
  {
    title: "두부면 채소 칼국수",
    category: "주메뉴",
    status: "caution",
    image: "assets/recipes/tofu-noodle-soup.jpg",
    why: "칼국수가 먹고 싶을 때 밀가루 면을 줄이고 두부면이나 곤약면으로 바꿉니다.",
    source: "CDC plate method와 ADA 채소면 레시피 원칙을 참고해 면 양을 줄였습니다.",
    ingredients: ["두부면 1팩 또는 곤약면 1팩(150g)", "닭고기 또는 바지락 80g", "애호박 1/3개", "버섯 70g", "배추 한 줌(60g)", "물 600ml", "국간장 1작은술(5ml)"],
    steps: ["두부면이나 곤약면은 물에 헹굽니다.", "물 600ml에 닭고기나 바지락을 넣고 끓입니다.", "채소와 버섯을 먼저 많이 넣습니다.", "면을 넣고 짧게 끓인 뒤 국물은 적게 드세요."],
    tags: ["칼국수", "면", "두부면", "곤약면", "주의"]
  },
  {
    title: "작고 얇은 부추전",
    category: "반찬",
    status: "caution",
    image: "assets/recipes/buchu-jeon.jpg",
    why: "전은 밀가루와 기름이 들어가서 양을 작게 정해야 합니다.",
    source: "당뇨 식사요법의 탄수화물 조절 원칙을 적용해 부침가루를 2큰술로 제한했습니다.",
    ingredients: ["부추 두 줌(100g)", "오징어 또는 새우 60g", "계란 1개", "부침가루 2큰술(20g)", "물 2큰술(30ml)", "식용유 1작은술(5ml)", "간장 1작은술(5ml)", "식초 1작은술(5ml)"],
    steps: ["부추를 4cm 길이로 자릅니다.", "계란, 부침가루, 물을 섞고 부추와 해물을 넣습니다.", "기름 1작은술만 쓰고 작고 얇게 굽습니다.", "밥이나 면과 같이 먹지 말고 1-2장만 드세요."],
    tags: ["부추전", "찌짐", "전", "주의"]
  },
  {
    title: "채소 버섯 두부 접시",
    category: "간식/반찬",
    status: "safe",
    image: "assets/recipes/vegetable-tofu-plate.jpg",
    why: "식사 시작 전에 먹기 좋습니다. 면이나 밥 양을 자연스럽게 줄여줍니다.",
    source: "CDC와 ADA의 접시법: 접시 절반을 비전분 채소로 채우는 원칙을 반영했습니다.",
    ingredients: ["오이 1/2개", "상추 5장", "버섯 한 줌(70g)", "브로콜리 1컵(80g)", "두부 1/3모(100g)", "참기름 1/2작은술(2.5ml)", "간장 1작은술(5ml)"],
    steps: ["오이와 상추를 씻어 접시에 담습니다.", "버섯과 브로콜리는 데치거나 기름 없이 굽습니다.", "두부를 곁들입니다.", "간장과 참기름은 아주 조금만 사용합니다."],
    tags: ["채소", "버섯", "두부", "안심"]
  },
  {
    title: "고등어구이 채소 한 접시",
    category: "주메뉴",
    status: "safe",
    image: "assets/recipes/grilled-mackerel-meal.jpg",
    why: "생선구이는 외식과 집밥 모두 좋은 단백질 선택입니다. 밥은 작게, 채소는 많이 둡니다.",
    source: "ADA/CDC 접시법의 단백질 1/4, 비전분 채소 1/2 원칙을 반영했습니다.",
    ingredients: ["고등어 1토막(100g)", "오이 1/2개", "상추 5장", "버섯 70g", "잡곡밥 1/3공기 선택", "레몬즙 1작은술(5ml)", "식용유 1/2작은술(2.5ml)"],
    steps: ["고등어는 짜지 않은 것을 고릅니다.", "팬에 기름 1/2작은술만 두르고 굽습니다.", "오이, 상추, 버섯을 먼저 먹습니다.", "밥은 먹는다면 1/3공기만 곁들입니다."],
    tags: ["고등어", "생선", "주메뉴", "안심"]
  },
  {
    title: "닭가슴살 깻잎쌈",
    category: "주메뉴",
    status: "safe",
    image: "assets/recipes/chicken-perilla-wrap.jpg",
    why: "닭가슴살은 담백한 단백질입니다. 깻잎과 상추로 싸면 밥 없이도 든든합니다.",
    source: "ADA의 lean protein 권장과 CDC 접시법을 참고했습니다.",
    ingredients: ["닭가슴살 120g", "깻잎 8장", "상추 5장", "오이 1/2개", "버섯 50g", "간장 1작은술(5ml)", "식초 1작은술(5ml)", "다진 마늘 1/3작은술"],
    steps: ["닭가슴살을 삶거나 기름 없이 굽습니다.", "깻잎, 상추, 오이를 씻어 준비합니다.", "간장과 식초를 섞어 아주 조금만 찍습니다.", "밥 대신 쌈채소로 싸서 드세요."],
    tags: ["닭가슴살", "깻잎", "상추", "주메뉴", "안심"]
  },
  {
    title: "계란 채소찜",
    category: "반찬/간식",
    status: "safe",
    image: "assets/recipes/vegetable-steamed-egg.jpg",
    why: "부드럽고 먹기 쉬운 단백질 반찬입니다. 간식처럼 먹기에도 부담이 적습니다.",
    source: "당뇨 식사요법의 어육류군 단백질 반찬 원칙을 반영했습니다.",
    ingredients: ["계란 2개", "물 150ml", "애호박 2큰술(20g)", "버섯 2큰술(20g)", "다진 파 1큰술", "소금 한 꼬집 또는 간장 1/2작은술(2.5ml)"],
    steps: ["계란 2개와 물 150ml를 잘 섞습니다.", "잘게 썬 애호박, 버섯, 파를 넣습니다.", "약한 불에서 8-10분 찌거나 전자레인지로 익힙니다.", "간은 아주 약하게 합니다."],
    tags: ["계란", "채소", "간식", "반찬", "안심"]
  },
  {
    title: "구운 만두 조절 접시",
    category: "간식/주의",
    status: "caution",
    image: "assets/recipes/grilled-dumpling-plate.jpg",
    why: "만두피가 밀가루라 탄수화물입니다. 먹는다면 2-3개만, 채소와 두부를 같이 둡니다.",
    source: "탄수화물 중복을 피하는 당뇨 식사 원칙을 적용했습니다.",
    ingredients: ["작은 만두 2-3개", "상추 5장", "오이 1/2개", "두부 1/4모(75g)", "버섯 50g", "식용유 1/2작은술(2.5ml)", "간장 1작은술(5ml)", "식초 1작은술(5ml)"],
    steps: ["만두는 기름을 거의 쓰지 않고 굽습니다.", "한 번에 2-3개만 접시에 담습니다.", "상추, 오이, 두부, 버섯을 많이 곁들입니다.", "밥, 라면, 떡볶이와 같이 먹지 않습니다."],
    tags: ["만두", "간식", "주의", "채소"]
  }
];

const eatingOut = [
  { category: "생선류", name: "고등어구이", status: "safe", note: "안심. 등푸른 생선이라 좋습니다. 밥은 반 공기, 짠 국물은 적게." },
  { category: "생선류", name: "가자미구이", status: "safe", note: "안심. 담백한 흰살생선입니다. 튀김보다 구이로 드세요." },
  { category: "생선류", name: "갈치구이", status: "safe", note: "안심에 가깝습니다. 간이 짜면 살 위주로, 밥은 반 공기." },
  { category: "생선류", name: "삼치구이", status: "safe", note: "안심. 구이 정식으로 좋습니다. 양념구이보다 소금 적은 구이." },
  { category: "생선류", name: "조기구이", status: "safe", note: "안심. 나물과 함께 드세요. 젓갈/짠 반찬은 줄이기." },
  { category: "생선류", name: "생선조림", status: "caution", note: "주의. 양념에 설탕과 나트륨이 들어갈 수 있습니다. 국물과 양념은 적게." },
  { category: "생선류", name: "회", status: "safe", note: "안심. 초장 많이 찍지 말고 간장도 조금. 매운탕 국물은 적게." },
  { category: "생선류", name: "생선까스", status: "danger", note: "위험. 튀김옷과 소스가 부담입니다. 구이로 바꾸세요." },

  { category: "고기류", name: "닭가슴살 구이", status: "safe", note: "안심. 닭 부위 중 가장 담백합니다. 단, 달달한 소스는 빼세요." },
  { category: "고기류", name: "닭다리살 구이", status: "caution", note: "주의. 가슴살보다 기름이 많습니다. 껍질 제거, 양념 적게." },
  { category: "고기류", name: "백숙", status: "safe", note: "안심. 살코기와 국물 조금. 죽은 탄수화물이므로 적게." },
  { category: "고기류", name: "소고기 양지 수육", status: "safe", note: "안심에 가깝습니다. 기름은 걷어내고 쌈채소와 드세요." },
  { category: "고기류", name: "샤브샤브", status: "safe", note: "안심. 채소와 고기 위주. 칼국수 사리와 죽은 빼거나 아주 조금." },
  { category: "고기류", name: "돼지수육", status: "caution", note: "주의. 살코기 위주, 비계는 떼고 쌈채소 많이. 막국수는 빼기." },
  { category: "고기류", name: "삼겹살", status: "caution", note: "주의. 탄수화물은 적지만 지방이 많습니다. 밥/냉면 없이 쌈채소 위주." },
  { category: "고기류", name: "양념갈비", status: "danger", note: "위험. 달달한 양념이 많습니다. 소금구이나 수육을 고르세요." },
  { category: "고기류", name: "치킨", status: "danger", note: "위험. 튀김옷과 양념소스가 부담입니다. 구운 닭으로 바꾸세요." },

  { category: "야채류", name: "나물 비빔밥", status: "caution", note: "주의. 나물은 좋지만 밥과 고추장이 문제입니다. 밥 반, 고추장 1작은술." },
  { category: "야채류", name: "쌈밥", status: "safe", note: "안심. 쌈채소 많이, 밥은 작게, 쌈장은 조금." },
  { category: "야채류", name: "월남쌈", status: "caution", note: "주의. 채소는 좋지만 라이스페이퍼와 소스가 탄수화물/당입니다. 소스 적게." },
  { category: "야채류", name: "샐러드", status: "safe", note: "안심. 닭고기/계란/두부를 추가하고 달달한 드레싱은 빼세요." },
  { category: "야채류", name: "버섯전골", status: "safe", note: "안심. 버섯과 채소 위주. 칼국수/죽 사리는 빼기." },
  { category: "야채류", name: "두부김치", status: "caution", note: "주의. 두부는 좋지만 볶은 김치가 짜거나 달 수 있습니다. 밥 없이 조금." },

  { category: "국/찌개류", name: "순두부찌개", status: "caution", note: "주의. 두부/계란은 좋지만 국물이 짤 수 있습니다. 밥 반 공기." },
  { category: "국/찌개류", name: "된장찌개", status: "caution", note: "주의. 채소/두부 위주로 먹고 국물은 적게." },
  { category: "국/찌개류", name: "맑은 소고기국", status: "safe", note: "안심에 가깝습니다. 밥은 반 공기, 국물은 적당히." },
  { category: "국/찌개류", name: "부대찌개", status: "danger", note: "위험. 가공육, 라면사리, 짠 국물이 겹칩니다." },

  { category: "면/분식류", name: "양지 쌀국수", status: "caution", note: "주의. 양지는 괜찮지만 쌀국수 면은 탄수화물입니다. 면 반, 숙주 많이, 소스 따로." },
  { category: "면/분식류", name: "칼국수", status: "caution", note: "주의. 면 절반만. 밥, 전, 만두를 같이 먹지 않기." },
  { category: "면/분식류", name: "메밀국수", status: "caution", note: "주의. 메밀도 면입니다. 1/2인분, 달달한 장국/소스 적게." },
  { category: "면/분식류", name: "당면 국물요리", status: "caution", note: "주의. 당면은 전분 면입니다. 육수에 삶아도 탄수화물은 그대로라 1/3-1/2인분만." },
  { category: "면/분식류", name: "군만두", status: "caution", note: "주의. 만두피가 탄수화물이고 구우면 기름도 늘어납니다. 2-3개만, 채소와 함께." },
  { category: "면/분식류", name: "라면", status: "danger", note: "위험. 면과 국물 나트륨 부담이 큽니다." },
  { category: "면/분식류", name: "떡볶이", status: "danger", note: "위험. 떡과 설탕 양념이 혈당 부담이 큽니다." },
  { category: "면/분식류", name: "분식 세트", status: "danger", note: "위험. 떡볶이, 튀김, 김밥 조합은 탄수화물이 겹칩니다." }
];

const ingredients = [
  { category: "생선/해산물", name: "고등어", status: "safe", note: "안심. 구이나 찜으로 좋습니다. 간은 싱겁게." },
  { category: "생선/해산물", name: "가자미", status: "safe", note: "안심. 담백한 흰살생선입니다." },
  { category: "생선/해산물", name: "갈치", status: "safe", note: "안심에 가깝습니다. 조림 양념은 줄이고 구이 권장." },
  { category: "생선/해산물", name: "삼치", status: "safe", note: "안심. 구이로 좋습니다." },
  { category: "생선/해산물", name: "연어", status: "safe", note: "안심. 구이/찜으로 먹고 달달한 소스는 빼기." },
  { category: "생선/해산물", name: "참치", status: "safe", note: "안심. 기름 많은 마요 참치보다 생선 자체가 좋습니다." },
  { category: "생선/해산물", name: "오징어", status: "caution", note: "주의. 단백질 식품이지만 초장/튀김은 피하세요." },
  { category: "생선/해산물", name: "새우", status: "safe", note: "안심. 튀김보다 데침/구이." },
  { category: "생선/해산물", name: "바지락", status: "safe", note: "안심. 국물 요리에 좋지만 국물은 짜지 않게." },

  { category: "고기/단백질", name: "닭가슴살", status: "safe", note: "안심. 닭고기 중 가장 담백합니다. 항상 좋은 편이지만 퍽퍽하면 채소/국물과 함께." },
  { category: "고기/단백질", name: "닭안심", status: "safe", note: "안심. 가슴살처럼 담백합니다." },
  { category: "고기/단백질", name: "닭다리살", status: "caution", note: "주의. 맛은 좋지만 지방이 더 많습니다. 껍질 제거." },
  { category: "고기/단백질", name: "닭껍질", status: "danger", note: "위험. 지방이 많아 빼는 것이 좋습니다." },
  { category: "고기/단백질", name: "소고기 양지", status: "safe", note: "안심에 가깝습니다. 국물 기름을 걷고 면/밥 양을 줄이세요." },
  { category: "고기/단백질", name: "소고기 우둔/홍두깨", status: "safe", note: "안심. 비교적 살코기 부위입니다." },
  { category: "고기/단백질", name: "소갈비", status: "caution", note: "주의. 지방과 양념이 많을 수 있습니다." },
  { category: "고기/단백질", name: "돼지 안심", status: "safe", note: "안심. 돼지고기 중 담백한 편입니다." },
  { category: "고기/단백질", name: "돼지 등심", status: "safe", note: "안심에 가깝습니다. 튀김 돈까스는 제외." },
  { category: "고기/단백질", name: "삼겹살", status: "caution", note: "주의. 지방이 많습니다. 양을 줄이고 쌈채소를 많이." },
  { category: "고기/단백질", name: "베이컨/햄/소시지", status: "danger", note: "위험. 가공육과 나트륨이 많습니다." },
  { category: "고기/단백질", name: "두부", status: "safe", note: "안심. 단백질 반찬으로 좋습니다. 전분 없이 굽기." },
  { category: "고기/단백질", name: "계란", status: "safe", note: "안심. 삶거나 기름 적게 부치기." },

  { category: "채소류", name: "브로콜리", status: "safe", note: "안심. 비전분 채소. 데쳐서 자주 사용." },
  { category: "채소류", name: "오이", status: "safe", note: "안심. 간식이나 식전 채소로 좋습니다." },
  { category: "채소류", name: "상추/깻잎", status: "safe", note: "안심. 고기 먹을 때 밥 대신 쌈으로." },
  { category: "채소류", name: "양배추", status: "safe", note: "안심. 쪄서 쌈처럼 먹기 좋습니다." },
  { category: "채소류", name: "애호박", status: "safe", note: "안심. 길게 썰어 채소면으로도 사용." },
  { category: "채소류", name: "버섯", status: "safe", note: "안심. 면 요리에 많이 넣으면 면 양을 줄이기 쉽습니다." },
  { category: "채소류", name: "가지", status: "safe", note: "안심. 기름을 많이 빨아들이므로 굽거나 찌기." },
  { category: "채소류", name: "파프리카", status: "safe", note: "안심. 생채소로 먹기 좋습니다." },
  { category: "채소류", name: "방울토마토", status: "safe", note: "안심에 가깝지만 한 번에 5-7개 정도로." },

  { category: "과일/견과", name: "딸기", status: "caution", note: "주의. 과일은 당이 있으니 작은 것 5-7개 정도, 주스는 금지." },
  { category: "과일/견과", name: "사과", status: "caution", note: "주의. 1/2개 이하. 주스는 금지." },
  { category: "과일/견과", name: "바나나", status: "caution", note: "주의. 당이 빨리 오를 수 있어 1/2개 정도." },
  { category: "과일/견과", name: "포도", status: "caution", note: "주의. 한 번에 많이 먹기 쉽습니다. 소량만." },
  { category: "과일/견과", name: "땅콩", status: "caution", note: "주의. 무가당으로 한 줌보다 적게. 많이 먹으면 열량이 큽니다." },
  { category: "과일/견과", name: "볶은 땅콩", status: "caution", note: "주의. 무가당/무염이면 조금 가능. 한 줌보다 적게, 소금 땅콩은 피하기." },
  { category: "과일/견과", name: "삶은 땅콩", status: "caution", note: "주의. 볶은 것보다 부드럽지만 양은 작게. 소금물에 삶은 것은 나트륨 주의." },
  { category: "과일/견과", name: "아몬드", status: "caution", note: "주의. 무가당 10알 정도. 많이 먹으면 열량이 큽니다." },
  { category: "과일/견과", name: "호두", status: "caution", note: "주의. 2-3알 정도. 달달한 견과 믹스는 피하기." },

  { category: "밥/면/전분", name: "잡곡밥", status: "caution", note: "주의. 잡곡도 탄수화물입니다. 반 공기부터." },
  { category: "밥/면/전분", name: "흰쌀밥", status: "caution", note: "주의. 반 공기 이하로 줄이고 채소/단백질 먼저." },
  { category: "밥/면/전분", name: "고구마", status: "caution", note: "주의. 건강식처럼 보여도 탄수화물이 많습니다. 작은 것 1/2개." },
  { category: "밥/면/전분", name: "감자", status: "caution", note: "주의. 수제비나 밥과 같이 먹으면 탄수화물이 겹칩니다." },
  { category: "밥/면/전분", name: "메밀면", status: "caution", note: "주의. 밀가루면보다 나아도 면입니다. 1/2인분만." },
  { category: "밥/면/전분", name: "쌀국수면", status: "caution", note: "주의. 쌀로 만든 면이라 탄수화물입니다. 반만." },
  { category: "밥/면/전분", name: "당면", status: "caution", note: "주의. 고구마/감자 전분으로 만든 면입니다. 칼국수 육수에 넣어도 탄수화물은 줄지 않습니다. 1/3-1/2인분만." },
  { category: "밥/면/전분", name: "두부면", status: "safe", note: "안심. 칼국수나 비빔면 대체로 좋습니다. 제품 성분표 확인." },
  { category: "밥/면/전분", name: "곤약면", status: "safe", note: "안심에 가깝습니다. 잘 헹구고, 소화가 불편하면 줄이기." },
  { category: "밥/면/전분", name: "저당 시리얼", status: "caution", note: "주의. 저당이어도 곡물 탄수화물이 있습니다. 1회 제공량과 총탄수화물을 보고, 우유도 무가당으로." },

  { category: "음료", name: "물", status: "safe", note: "안심. 가장 좋은 음료입니다." },
  { category: "음료", name: "탄산수", status: "safe", note: "안심. 무가당/무향 또는 당 없는 제품이면 좋습니다." },
  { category: "음료", name: "옥수수수염차", status: "safe", note: "안심에 가깝습니다. 무가당 제품만. 단맛 나는 병음료는 성분표 확인." },
  { category: "음료", name: "제로 콜라", status: "caution", note: "주의. 설탕은 없지만 단맛 습관과 카페인 때문에 물 대신 자주 마시지는 마세요." },
  { category: "음료", name: "무가당 차", status: "safe", note: "안심. 보리차, 녹차, 둥굴레차 등 설탕 없는 차." },

  { category: "장아찌/양념", name: "깻잎", status: "safe", note: "안심. 생깻잎은 쌈으로 좋습니다." },
  { category: "장아찌/양념", name: "깻잎 장아찌", status: "caution", note: "주의. 깻잎은 좋지만 장아찌는 짜고 단 양념이 있을 수 있습니다. 1-2장만." },
  { category: "장아찌/양념", name: "마늘 장아찌", status: "caution", note: "주의. 간장/설탕/식초 절임이라 짜고 달 수 있습니다. 1-2쪽만." },
  { category: "장아찌/양념", name: "마늘쫑 장아찌", status: "caution", note: "주의. 나트륨과 당 양념 주의. 조금만 반찬으로." },
  { category: "장아찌/양념", name: "고추 장아찌", status: "caution", note: "주의. 짠 장아찌라 조금만. 매운맛 때문에 밥을 더 먹게 되면 더 주의." },
  { category: "장아찌/양념", name: "간장", status: "caution", note: "주의. 찍어 먹어도 되지만 1작은술(5ml) 정도만. 나트륨이 많습니다." },
  { category: "장아찌/양념", name: "초간장", status: "caution", note: "주의. 간장 1작은술+식초 1작은술처럼 묽게. 설탕은 넣지 않기." },

  { category: "간식/가공식품", name: "구운 만두", status: "caution", note: "주의. 만두피가 탄수화물이고 기름도 들어갑니다. 2-3개만, 채소와 같이." },
  { category: "간식/가공식품", name: "찐만두", status: "caution", note: "주의. 군만두보다 낫지만 만두피는 탄수화물입니다. 2-3개만." },
  { category: "간식/가공식품", name: "물만두", status: "caution", note: "주의. 국물에 들어가도 만두피 탄수화물은 그대로입니다. 양 조절." },

  { category: "위험 식품", name: "설탕", status: "danger", note: "위험. 위험. 넣지 마세요." },
  { category: "위험 식품", name: "믹스커피", status: "danger", note: "위험. 설탕이 들어갑니다. 무가당 커피나 차로." },
  { category: "위험 식품", name: "과일주스", status: "danger", note: "위험. 액상 당이라 혈당이 빠르게 오릅니다." },
  { category: "위험 식품", name: "떡", status: "danger", note: "위험. 쌀이 압축된 음식이라 혈당 부담이 큽니다." },
  { category: "위험 식품", name: "과자/케이크", status: "danger", note: "위험. 설탕과 밀가루가 많습니다." }
];

const noodleTips = [
  { category: "안심 대체", name: "두부면", status: "safe", note: "마트 냉장 코너. 헹군 뒤 칼국수 국물에 마지막에 넣기." },
  { category: "안심 대체", name: "곤약면", status: "safe", note: "물에 여러 번 헹구고 1분 데치기. 씹기 편한지 확인." },
  { category: "안심 대체", name: "애호박 채소면", status: "safe", note: "애호박을 길게 썰어 면처럼 사용. 칼국수에 섞기 좋음." },
  { category: "주의 대체", name: "메밀면", status: "caution", note: "면이므로 1/2인분만. 달달한 양념장 금지." },
  { category: "주의 대체", name: "쌀국수면", status: "caution", note: "쌀 면도 탄수화물입니다. 양지 쌀국수는 면 반, 숙주 많이." },
  { category: "주의 대체", name: "당면", status: "caution", note: "전분 면입니다. 육수에 삶아도 혈당 부담은 줄지 않아 1/3-1/2인분만." },
  { category: "주의 대체", name: "일반 칼국수면", status: "caution", note: "먹는다면 1/2인분. 밥과 전을 같이 먹지 않기." }
];

const viewTitles = {
  recipes: "집밥",
  eatingOut: "외식",
  ingredients: "재료",
  hypo: "저혈당"
};

let currentView = "recipes";
const scrollPositions = {
  recipes: 0,
  eatingOut: 0,
  ingredients: 0,
  hypo: 0
};
let isRestoringScroll = false;

const content = document.querySelector("#content");
const buttons = document.querySelectorAll("[data-view]");

window.addEventListener("scroll", () => {
  if (isRestoringScroll) return;
  scrollPositions[currentView] = window.scrollY;
}, { passive: true });

function statusLabel(status) {
  return status === "safe" ? "안심" : status === "danger" ? "위험" : "주의";
}

function cardStatus(item) {
  return `<span class="badge ${item.status}">${statusLabel(item.status)}</span>`;
}

function cleanNote(note) {
  return note.replace(/^(안심에 가깝습니다\.|안심\.|주의\.|위험\. 위험\.|위험\.)\s*/, "");
}

function groupByCategory(items) {
  return items.reduce((groups, item) => {
    const category = item.category || "기타";
    if (!groups[category]) groups[category] = [];
    groups[category].push(item);
    return groups;
  }, {});
}

function renderGrouped(items, renderer) {
  const groups = groupByCategory(items);
  return Object.entries(groups).map(([category, groupItems]) => `
    <section class="category-block">
      <h3 class="category-title">${category}</h3>
      <div class="${renderer === recipeCard ? "recipe-list" : "simple-list"}">
        ${groupItems.map(renderer).join("")}
      </div>
    </section>
  `).join("");
}

function recipeCard(recipe) {
  return `
    <article class="recipe-card ${recipe.status}">
      <img src="${recipe.image}" alt="${recipe.title} 사진" loading="lazy">
      <div class="card-body">
        <div class="card-tags">${cardStatus(recipe)}<span class="category-pill">${recipe.category}</span></div>
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
      <div class="card-tags">${cardStatus(item)}<span class="category-pill">${item.category}</span></div>
      <h2>${item.name}</h2>
      <p>${cleanNote(item.note)}</p>
    </article>
  `;
}

const hypoItems = [
  {
    category: "먼저 확인",
    name: "혈당 70mg/dL 미만 또는 저혈당 증상",
    status: "danger",
    note: "즉시 빠른 당질 15g을 먹고 15분 뒤 다시 확인합니다. 인슐린 사용자는 지체하지 않는 것이 중요합니다."
  },
  {
    category: "가벼운 증상",
    name: "식은땀, 손떨림, 배고픔, 가벼운 어지러움",
    status: "caution",
    note: "포도당정 3-4개, 사탕 3-4개, 주스 120ml, 일반 콜라 120ml 중 하나. 초콜릿은 지방 때문에 느릴 수 있어 우선순위가 낮습니다."
  },
  {
    category: "중간 증상",
    name: "심한 어지러움, 두근거림, 말이 어눌함",
    status: "danger",
    note: "혼자 버티지 말고 가족에게 알립니다. 빠른 당질 15g을 먹고 15분 뒤에도 낮거나 증상이 남으면 15g을 한 번 더 먹습니다."
  },
  {
    category: "심각한 증상",
    name: "의식 혼미, 경련, 삼키기 어려움",
    status: "danger",
    note: "먹이거나 마시게 하지 마세요. choking 위험이 있습니다. 즉시 119에 연락하고, 처방받은 글루카곤이 있으면 보호자가 사용합니다."
  },
  {
    category: "빠른 당질 15g 예시",
    name: "가방에 준비할 것",
    status: "safe",
    note: "포도당정, 사탕, 작은 주스팩 120ml, 일반 탄산음료 120ml, 꿀 1큰술. 평소 간식이 아니라 저혈당 응급용으로 따로 둡니다."
  },
  {
    category: "회복 후",
    name: "다음 식사가 1시간 이상 남았을 때",
    status: "caution",
    note: "혈당이 회복되면 크래커 몇 조각, 우유/두유 소량, 작은 과일 같은 간단한 간식을 병원 지침에 맞춰 먹어 다시 떨어지는 것을 막습니다."
  },
  {
    category: "주의",
    name: "과하게 먹지 않기",
    status: "caution",
    note: "불안해서 과자나 빵을 많이 먹으면 혈당이 크게 튈 수 있습니다. 15g 먹고 15분 기다리는 원칙을 기본으로 합니다."
  }
];

function render() {
  let html = `<div class="section-title"><h2>${viewTitles[currentView]}</h2></div>`;

  if (currentView === "recipes") {
    html += renderGrouped(recipes, recipeCard);
  }

  if (currentView === "eatingOut") {
    html += renderGrouped(eatingOut, simpleCard);
  }

  if (currentView === "ingredients") {
    html += renderGrouped(ingredients, simpleCard);
  }

  if (currentView === "hypo") {
    html += `
      <section class="hypo-summary danger">
        <h2>저혈당은 바로 대처</h2>
        <p>혈당이 70mg/dL 미만이거나 증상이 있으면 빠른 당질 15g을 먹고 15분 뒤 다시 확인합니다.</p>
      </section>
    `;
    html += renderGrouped(hypoItems, simpleCard);
    html += `<p class="source">근거: ADA Low Blood Glucose, CDC/NIDDK 저혈당 15-15 원칙.</p>`;
  }

  content.innerHTML = html;
}

function restoreCurrentScroll() {
  const y = scrollPositions[currentView] || 0;
  isRestoringScroll = true;
  requestAnimationFrame(() => window.scrollTo(0, y));
  setTimeout(() => window.scrollTo(0, y), 150);
  setTimeout(() => window.scrollTo(0, y), 500);
  setTimeout(() => {
    window.scrollTo(0, y);
    isRestoringScroll = false;
  }, 900);
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    currentView = button.dataset.view;
    buttons.forEach(x => x.setAttribute("aria-pressed", String(x === button)));
    render();
    restoreCurrentScroll();
  });
});

render();

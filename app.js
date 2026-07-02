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
  },
  {
    title: "전자레인지 두부 계란찜",
    category: "간식/반찬",
    status: "safe",
    image: "assets/recipes/microwave-tofu-egg-custard.png",
    why: "불 앞에 오래 서지 않아도 되고, 두부와 계란이 들어가 출출할 때 든든합니다.",
    source: "CDC 접시법의 단백질과 비전분 채소 원칙을 반영했습니다.",
    ingredients: ["계란 1개", "순두부 또는 부드러운 두부 100g", "물 80ml", "다진 파 1큰술", "버섯 2큰술(20g)", "국간장 1/2작은술(2.5ml)", "참기름 1/4작은술 선택"],
    steps: ["전자레인지용 그릇에 계란, 물, 간장을 섞습니다.", "두부를 숟가락으로 떠 넣고 버섯과 파를 올립니다.", "랩을 살짝 덮고 구멍을 2-3개 냅니다.", "전자레인지에서 2분 돌리고 저은 뒤 1분 더 익힙니다."],
    tags: ["두부", "계란", "전자레인지", "간식", "안심"]
  },
  {
    title: "닭가슴살 양배추 맑은국",
    category: "주메뉴",
    status: "safe",
    image: "assets/recipes/chicken-cabbage-clear-soup.png",
    why: "닭가슴살을 국물에 넣으면 덜 퍽퍽하고, 양배추가 들어가 포만감이 좋습니다.",
    source: "ADA의 담백한 단백질 선택과 CDC 접시법을 참고했습니다.",
    ingredients: ["닭가슴살 100g", "양배추 2컵(120g)", "버섯 50g", "물 600ml", "다진 마늘 1/3작은술", "국간장 1작은술(5ml)", "후추 조금"],
    steps: ["닭가슴살은 얇게 썰어 물 600ml에 넣고 끓입니다.", "거품을 걷고 양배추와 버섯을 넣습니다.", "국간장 1작은술과 마늘을 넣고 7-8분 더 끓입니다.", "밥은 먹는다면 1/3공기만 곁들입니다."],
    tags: ["닭가슴살", "양배추", "국", "주메뉴", "안심"]
  },
  {
    title: "참치 오이 두부무침",
    category: "반찬/간식",
    status: "safe",
    image: "assets/recipes/tuna-cucumber-tofu-salad.png",
    why: "불을 거의 쓰지 않고 만들 수 있고, 밥 없이 먹어도 단백질이 있어 든든합니다.",
    source: "단백질과 비전분 채소를 함께 먹는 식사 원칙을 적용했습니다.",
    ingredients: ["두부 1/3모(100g)", "물에 담긴 참치 1/2캔(50g)", "오이 1/2개", "깻잎 4장", "간장 1작은술(5ml)", "식초 1작은술(5ml)", "깨 1/2작은술"],
    steps: ["두부는 키친타월로 물기를 빼고 한입 크기로 자릅니다.", "참치는 기름이나 물기를 빼서 준비합니다.", "오이와 깻잎을 썰어 모두 섞습니다.", "간장, 식초, 깨를 넣고 가볍게 무칩니다."],
    tags: ["참치", "오이", "두부", "깻잎", "간식", "안심"]
  },
  {
    title: "버섯 계란 볶음접시",
    category: "주메뉴",
    status: "safe",
    image: "assets/recipes/mushroom-egg-stirfry.png",
    why: "밥 대신 계란과 버섯을 넉넉히 먹는 접시입니다. 씹는 맛이 있어 포만감이 좋습니다.",
    source: "CDC 접시법의 단백질 1/4, 채소 1/2 원칙을 반영했습니다.",
    ingredients: ["계란 2개", "버섯 1컵(100g)", "애호박 1/3개", "양파 1/4개 선택", "식용유 1작은술(5ml)", "간장 1/2작은술(2.5ml)", "후추 조금"],
    steps: ["버섯과 애호박을 먹기 좋게 썹니다.", "팬에 기름 1작은술을 두르고 채소를 먼저 볶습니다.", "계란 2개를 풀어 넣고 부드럽게 익힙니다.", "간장은 아주 조금만 넣고, 부족하면 후추로 맛을 냅니다."],
    tags: ["계란", "버섯", "애호박", "주메뉴", "안심"]
  },
  {
    title: "양배추 두부쌈",
    category: "간식/반찬",
    status: "safe",
    image: "assets/recipes/cabbage-tofu-wraps.png",
    why: "양배추를 쌈처럼 쓰면 밥 없이도 먹기 좋고, 두부가 들어가 속이 든든합니다.",
    source: "비전분 채소를 많이 먹고 탄수화물 양을 줄이는 원칙을 반영했습니다.",
    ingredients: ["양배추 잎 5장", "두부 1/3모(100g)", "버섯 50g", "간장 1작은술(5ml)", "식초 1작은술(5ml)", "다진 파 1큰술", "참기름 1/4작은술 선택"],
    steps: ["양배추 잎은 전자레인지에 2분 돌리거나 살짝 찝니다.", "두부와 버섯은 팬에 기름 없이 데우거나 굽습니다.", "간장, 식초, 파를 섞어 묽은 소스를 만듭니다.", "양배추에 두부와 버섯을 올려 싸서 드세요."],
    tags: ["양배추", "두부", "쌈", "간식", "안심"]
  },
  {
    title: "새우 애호박 볶음",
    category: "반찬",
    status: "safe",
    image: "assets/recipes/shrimp-zucchini-stirfry.png",
    why: "새우와 애호박은 빨리 익어서 혼자 먹을 반찬으로 만들기 쉽습니다.",
    source: "담백한 단백질과 비전분 채소를 함께 먹는 원칙을 적용했습니다.",
    ingredients: ["냉동 새우 8마리(80g)", "애호박 1/2개", "버섯 50g", "식용유 1작은술(5ml)", "다진 마늘 1/3작은술", "간장 1작은술(5ml)", "후추 조금"],
    steps: ["냉동 새우는 물에 헹궈 해동합니다.", "애호박과 버섯을 먹기 좋게 썹니다.", "팬에 기름 1작은술, 마늘, 새우를 넣고 볶습니다.", "채소를 넣고 익힌 뒤 간장 1작은술로만 간합니다."],
    tags: ["새우", "애호박", "버섯", "반찬", "안심"]
  },
  {
    title: "그릭요거트 딸기 견과컵",
    category: "간식/주의",
    status: "caution",
    image: "assets/recipes/greek-yogurt-strawberry-almond.png",
    why: "단맛 간식이 생각날 때 빵이나 과자 대신 먹기 좋습니다. 과일과 견과는 양을 정해야 합니다.",
    source: "과일과 견과류는 소량으로 정해 먹는 당뇨 식사 원칙을 적용했습니다.",
    ingredients: ["무가당 그릭요거트 100g", "딸기 작은 것 4-5개", "아몬드 5알", "시나몬가루 조금 선택", "설탕/꿀은 넣지 않기"],
    steps: ["그릭요거트 100g을 작은 그릇에 담습니다.", "딸기는 반으로 잘라 올립니다.", "아몬드 5알을 잘게 부숴 올립니다.", "단맛이 부족해도 설탕이나 꿀은 넣지 않습니다."],
    tags: ["요거트", "딸기", "아몬드", "간식", "주의"]
  },
  {
    title: "삶은 계란 오이 간식접시",
    category: "간식",
    status: "safe",
    image: "assets/recipes/boiled-egg-cucumber-snack.png",
    why: "출출할 때 빨리 차릴 수 있고, 빵이나 떡보다 혈당 부담이 적습니다.",
    source: "단백질 간식과 비전분 채소를 함께 먹는 원칙을 반영했습니다.",
    ingredients: ["삶은 계란 1개", "오이 1/2개", "방울토마토 3개 선택", "무가당 두유 100ml 선택", "소금은 아주 조금 또는 생략"],
    steps: ["계란은 미리 삶아 냉장해 둡니다.", "오이를 길게 썰고 방울토마토는 3개만 담습니다.", "계란과 채소를 먼저 먹습니다.", "더 출출하면 무가당 두유 100ml를 곁들입니다."],
    tags: ["삶은계란", "오이", "방울토마토", "두유", "간식", "안심"]
  },
  {
    title: "곤약면 오이 비빔국수",
    category: "주메뉴/주의",
    status: "caution",
    image: "assets/recipes/konjac-cucumber-bibim-noodles.png",
    why: "면이 먹고 싶을 때 일반 면 대신 곤약면을 쓰되, 양념은 달지 않게 조절합니다.",
    source: "면류 탄수화물 부담을 줄이고 채소를 늘리는 원칙을 적용했습니다.",
    ingredients: ["곤약면 1팩(150g)", "오이 1/2개", "삶은 계란 1개", "식초 1큰술(15ml)", "간장 1작은술(5ml)", "고춧가루 1/2작은술", "참기름 1/4작은술", "설탕/매실청은 넣지 않기"],
    steps: ["곤약면은 여러 번 헹구고 끓는 물에 1분 데칩니다.", "오이는 채 썰고 계란은 반으로 자릅니다.", "식초, 간장, 고춧가루, 참기름을 섞습니다.", "면과 오이를 버무리고 계란을 올립니다."],
    tags: ["곤약면", "비빔국수", "오이", "계란", "주의"]
  },
  {
    title: "미역 두부 맑은국",
    category: "주메뉴",
    status: "safe",
    image: "assets/recipes/seaweed-tofu-clear-soup.png",
    why: "부드럽고 따뜻해서 혼자 먹기 쉽습니다. 두부를 넣으면 국만 먹어도 덜 허전합니다.",
    source: "단백질을 곁들인 가벼운 국물 식사 원칙을 적용했습니다.",
    ingredients: ["불린 미역 1/2컵(40g)", "두부 1/3모(100g)", "물 600ml", "다진 마늘 1/3작은술", "국간장 1작은술(5ml)", "참기름 1/4작은술 선택"],
    steps: ["미역은 물에 불린 뒤 잘게 자릅니다.", "냄비에 미역과 물 600ml를 넣고 끓입니다.", "두부를 넣고 5분 더 끓입니다.", "국간장 1작은술로만 간하고 국물은 너무 짜지 않게 합니다."],
    tags: ["미역", "두부", "국", "주메뉴", "안심"]
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
  { category: "생선/해산물", name: "고등어", status: "safe", note: "안심. 구이나 찜으로 좋습니다. 맛있게: 레몬즙 1작은술이나 식초간장 조금을 곁들이면 비린맛이 줄고 간장을 많이 찍지 않아도 됩니다." },
  { category: "생선/해산물", name: "가자미", status: "safe", note: "안심. 담백한 흰살생선입니다. 맛있게: 팬에 기름을 거의 쓰지 않고 구운 뒤 파, 식초, 간장 1작은술을 섞어 조금만 찍으세요." },
  { category: "생선/해산물", name: "갈치", status: "safe", note: "안심에 가깝습니다. 조림 양념은 줄이고 구이 권장. 맛있게: 양념조림보다 구워서 무생채나 오이와 함께 먹으면 짠맛이 덜합니다." },
  { category: "생선/해산물", name: "삼치", status: "safe", note: "안심. 구이로 좋습니다." },
  { category: "생선/해산물", name: "연어", status: "safe", note: "안심. 구이/찜으로 먹고 달달한 소스는 빼기." },
  { category: "생선/해산물", name: "참치", status: "safe", note: "안심. 기름 많은 마요 참치보다 생선 자체가 좋습니다." },
  { category: "생선/해산물", name: "오징어", status: "caution", note: "주의. 단백질 식품이지만 초장/튀김은 피하세요." },
  { category: "생선/해산물", name: "새우", status: "safe", note: "안심. 튀김보다 데침/구이. 맛있게: 냉동 새우는 물에 헹군 뒤 마늘 조금, 애호박, 버섯과 볶으면 간단한 반찬이 됩니다." },
  { category: "생선/해산물", name: "바지락", status: "safe", note: "안심. 국물 요리에 좋지만 국물은 짜지 않게." },

  { category: "고기/단백질", name: "닭가슴살", status: "safe", note: "안심. 닭고기 중 가장 담백합니다. 맛있게: 얇게 썰어 양배추국이나 버섯국에 넣으면 덜 퍽퍽하고, 식초간장 1작은술을 살짝 찍으면 먹기 쉽습니다." },
  { category: "고기/단백질", name: "닭안심", status: "safe", note: "안심. 가슴살처럼 담백합니다. 맛있게: 전자레인지보다 물 400ml에 5-6분 살짝 삶아 찢으면 촉촉하고 쌈채소에 싸 먹기 좋습니다." },
  { category: "고기/단백질", name: "닭다리살", status: "caution", note: "주의. 맛은 좋지만 지방이 더 많습니다. 껍질 제거. 맛있게: 양념구이보다 소금 아주 조금, 후추, 상추쌈으로 먹으면 달달한 소스를 줄일 수 있습니다." },
  { category: "고기/단백질", name: "닭껍질", status: "danger", note: "위험. 지방이 많아 빼는 것이 좋습니다." },
  { category: "고기/단백질", name: "소고기 양지", status: "safe", note: "안심에 가깝습니다. 국물 기름을 걷고 면/밥 양을 줄이세요. 맛있게: 숙주와 양파를 많이 넣고 쌀국수 면은 반만 넣으면 국물 맛은 살리고 부담은 줄입니다." },
  { category: "고기/단백질", name: "소고기 우둔/홍두깨", status: "safe", note: "안심. 비교적 살코기 부위입니다." },
  { category: "고기/단백질", name: "소갈비", status: "caution", note: "주의. 지방과 양념이 많을 수 있습니다." },
  { category: "고기/단백질", name: "돼지 안심", status: "safe", note: "안심. 돼지고기 중 담백한 편입니다." },
  { category: "고기/단백질", name: "돼지 등심", status: "safe", note: "안심에 가깝습니다. 튀김 돈까스는 제외." },
  { category: "고기/단백질", name: "삼겹살", status: "caution", note: "주의. 지방이 많습니다. 양을 줄이고 쌈채소를 많이." },
  { category: "고기/단백질", name: "베이컨/햄/소시지", status: "danger", note: "위험. 가공육과 나트륨이 많습니다." },
  { category: "고기/단백질", name: "두부", status: "safe", note: "안심. 단백질 반찬으로 좋습니다. 맛있게: 물기를 빼고 노릇하게 구운 뒤 간장 1작은술+식초 1작은술 소스를 조금만 찍으면 심심하지 않습니다." },
  { category: "고기/단백질", name: "계란", status: "safe", note: "안심. 삶거나 기름 적게 부치기. 맛있게: 물 80-150ml를 섞어 계란찜으로 만들면 부드럽고 포만감이 좋습니다." },

  { category: "채소류", name: "브로콜리", status: "safe", note: "안심. 비전분 채소. 맛있게: 데친 뒤 물기를 빼고 참기름 1/4작은술, 깨 조금만 넣으면 고소합니다." },
  { category: "채소류", name: "오이", status: "safe", note: "안심. 간식이나 식전 채소로 좋습니다. 맛있게: 길게 썰어 두부, 삶은 계란과 한 접시에 담으면 씹는 맛이 있어 출출할 때 좋습니다." },
  { category: "채소류", name: "상추/깻잎", status: "safe", note: "안심. 고기 먹을 때 밥 대신 쌈으로. 맛있게: 닭가슴살이나 두부를 싸고 초간장을 아주 조금 찍으면 밥 없이도 먹기 쉽습니다." },
  { category: "채소류", name: "양배추", status: "safe", note: "안심. 쪄서 쌈처럼 먹기 좋습니다. 맛있게: 전자레인지에 2분 돌려 부드럽게 만든 뒤 두부나 참치를 싸 먹으세요." },
  { category: "채소류", name: "애호박", status: "safe", note: "안심. 길게 썰어 채소면으로도 사용. 맛있게: 새우나 계란과 볶으면 단맛이 나서 간을 많이 하지 않아도 됩니다." },
  { category: "채소류", name: "버섯", status: "safe", note: "안심. 면 요리에 많이 넣으면 면 양을 줄이기 쉽습니다. 맛있게: 기름 없이 먼저 구워 수분을 날리면 고기 같은 식감이 납니다." },
  { category: "채소류", name: "가지", status: "safe", note: "안심. 기름을 많이 빨아들이므로 굽거나 찌기." },
  { category: "채소류", name: "파프리카", status: "safe", note: "안심. 생채소로 먹기 좋습니다." },
  { category: "채소류", name: "방울토마토", status: "safe", note: "안심에 가깝지만 한 번에 5-7개 정도로. 맛있게: 삶은 계란이나 오이와 같이 먹으면 단맛 간식 욕구를 줄이는 데 도움이 됩니다." },

  { category: "과일/견과", name: "딸기", status: "caution", note: "주의. 과일은 당이 있으니 작은 것 5-7개 정도, 주스는 금지. 맛있게: 무가당 그릭요거트 100g에 4-5개만 넣으면 과자 대신 먹기 좋습니다." },
  { category: "과일/견과", name: "사과", status: "caution", note: "주의. 1/2개 이하. 주스는 금지." },
  { category: "과일/견과", name: "바나나", status: "caution", note: "주의. 당이 빨리 오를 수 있어 1/2개 정도." },
  { category: "과일/견과", name: "포도", status: "caution", note: "주의. 한 번에 많이 먹기 쉽습니다. 소량만." },
  { category: "과일/견과", name: "땅콩", status: "caution", note: "주의. 무가당으로 한 줌보다 적게. 많이 먹으면 열량이 큽니다. 맛있게: 접시에 10-15알만 덜어 두고 오이나 차와 같이 먹으면 과식이 줄어듭니다." },
  { category: "과일/견과", name: "볶은 땅콩", status: "caution", note: "주의. 무가당/무염이면 조금 가능. 한 줌보다 적게, 소금 땅콩은 피하기." },
  { category: "과일/견과", name: "삶은 땅콩", status: "caution", note: "주의. 볶은 것보다 부드럽지만 양은 작게. 소금물에 삶은 것은 나트륨 주의." },
  { category: "과일/견과", name: "아몬드", status: "caution", note: "주의. 무가당 10알 정도. 많이 먹으면 열량이 큽니다. 맛있게: 5알만 잘게 부숴 무가당 요거트에 올리면 씹는 맛이 납니다." },
  { category: "과일/견과", name: "호두", status: "caution", note: "주의. 2-3알 정도. 달달한 견과 믹스는 피하기." },

  { category: "밥/면/전분", name: "잡곡밥", status: "caution", note: "주의. 잡곡도 탄수화물입니다. 반 공기부터." },
  { category: "밥/면/전분", name: "흰쌀밥", status: "caution", note: "주의. 반 공기 이하로 줄이고 채소/단백질 먼저." },
  { category: "밥/면/전분", name: "고구마", status: "caution", note: "주의. 건강식처럼 보여도 탄수화물이 많습니다. 작은 것 1/2개." },
  { category: "밥/면/전분", name: "감자", status: "caution", note: "주의. 수제비나 밥과 같이 먹으면 탄수화물이 겹칩니다." },
  { category: "밥/면/전분", name: "메밀면", status: "caution", note: "주의. 밀가루면보다 나아도 면입니다. 1/2인분만." },
  { category: "밥/면/전분", name: "쌀국수면", status: "caution", note: "주의. 쌀로 만든 면이라 탄수화물입니다. 반만." },
  { category: "밥/면/전분", name: "당면", status: "caution", note: "주의. 고구마/감자 전분으로 만든 면입니다. 칼국수 육수에 넣어도 탄수화물은 줄지 않습니다. 1/3-1/2인분만." },
  { category: "밥/면/전분", name: "두부면", status: "safe", note: "안심. 칼국수나 비빔면 대체로 좋습니다. 제품 성분표 확인. 맛있게: 국물에 오래 끓이지 말고 마지막에 넣어야 부서지지 않습니다." },
  { category: "밥/면/전분", name: "곤약면", status: "safe", note: "안심에 가깝습니다. 잘 헹구고, 소화가 불편하면 줄이기. 맛있게: 끓는 물에 1분 데친 뒤 식초간장이나 채소와 섞으면 냄새가 줄어듭니다." },
  { category: "밥/면/전분", name: "저당 시리얼", status: "caution", note: "주의. 저당이어도 곡물 탄수화물이 있습니다. 1회 제공량과 총탄수화물을 보고, 우유도 무가당으로." },

  { category: "음료", name: "물", status: "safe", note: "안심. 가장 좋은 음료입니다." },
  { category: "음료", name: "탄산수", status: "safe", note: "안심. 무가당/무향 또는 당 없는 제품이면 좋습니다." },
  { category: "음료", name: "옥수수수염차", status: "safe", note: "안심에 가깝습니다. 무가당 제품만. 단맛 나는 병음료는 성분표 확인." },
  { category: "음료", name: "제로 콜라", status: "caution", note: "주의. 설탕은 없지만 단맛 습관과 카페인 때문에 물 대신 자주 마시지는 마세요." },
  { category: "음료", name: "무가당 차", status: "safe", note: "안심. 보리차, 녹차, 둥굴레차 등 설탕 없는 차. 맛있게: 따뜻하게 마시면 출출함이 잠깐 줄어 간식 양을 조절하기 쉽습니다." },

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

const expandedIngredients = ingredients.concat([
  { category: "채소/버섯/해조류", name: "시금치", status: "safe", note: "비전분 채소입니다. 데쳐서 나물로 먹되 간장과 참기름은 아주 조금만 사용하세요." },
  { category: "채소/버섯/해조류", name: "청경채", status: "safe", note: "국, 볶음, 샤브샤브에 넣기 좋습니다. 기름보다 물볶음으로 익히면 가볍습니다." },
  { category: "채소/버섯/해조류", name: "숙주", status: "safe", note: "쌀국수나 샤브샤브에 많이 넣으면 면 양을 줄이기 쉽습니다. 소스는 따로 조금만." },
  { category: "채소/버섯/해조류", name: "콩나물", status: "safe", note: "국이나 무침으로 좋습니다. 콩나물밥은 밥 양이 늘 수 있어 주의하세요." },
  { category: "채소/버섯/해조류", name: "무", status: "safe", note: "국, 생채, 쌈무로 좋습니다. 단맛 나는 절임이나 설탕 넣은 무생채는 주의하세요." },
  { category: "채소/버섯/해조류", name: "당근", status: "caution", note: "채소지만 단맛이 있어 많이 갈아 마시는 것은 피하세요. 반찬으로 조금은 괜찮습니다." },
  { category: "채소/버섯/해조류", name: "양파", status: "caution", note: "조금 넣어 단맛을 내는 정도는 괜찮습니다. 양파즙처럼 농축해서 마시는 것은 주의하세요." },
  { category: "채소/버섯/해조류", name: "대파/쪽파", status: "safe", note: "국, 계란찜, 두부 요리에 향을 더해 간장을 덜 쓰게 도와줍니다." },
  { category: "채소/버섯/해조류", name: "마늘", status: "safe", note: "소량 양념으로 좋습니다. 마늘장아찌나 마늘청은 나트륨/당이 들어갈 수 있어 주의하세요." },
  { category: "채소/버섯/해조류", name: "김", status: "safe", note: "조미김보다 구운 김을 권장합니다. 밥을 많이 싸 먹게 되면 밥 양을 먼저 정하세요." },
  { category: "채소/버섯/해조류", name: "미역", status: "safe", note: "미역국에 두부나 생선을 넣으면 든든합니다. 국물은 짜지 않게 조절하세요." },
  { category: "채소/버섯/해조류", name: "다시마", status: "safe", note: "육수로 쓰기 좋습니다. 다시마쌈은 초장 대신 식초간장 조금만 찍으세요." },
  { category: "채소/버섯/해조류", name: "우엉", status: "caution", note: "식이섬유가 있지만 조림은 설탕/물엿이 많이 들어갑니다. 볶음이나 데침으로 조금만." },
  { category: "채소/버섯/해조류", name: "연근", status: "caution", note: "전분이 있는 뿌리채소입니다. 연근조림은 달 수 있어 양념을 줄이고 소량만 드세요." },
  { category: "채소/버섯/해조류", name: "단호박", status: "caution", note: "채소처럼 보여도 탄수화물이 많습니다. 밥 대신 작은 조각만 먹고 밥과 같이 많이 먹지 마세요." },
  { category: "채소/버섯/해조류", name: "옥수수", status: "caution", note: "간식처럼 먹어도 탄수화물입니다. 1/2개 이하로 정하고 밥/면과 같은 끼니에 겹치지 않게 하세요." },

  { category: "고기/생선/단백질", name: "닭고기 전체", status: "safe", note: "껍질과 튀김옷을 빼면 좋은 단백질입니다. 가슴살/안심은 안심, 다리살은 껍질 제거 후 주의입니다." },
  { category: "고기/생선/단백질", name: "오리고기", status: "caution", note: "단백질이지만 지방이 많습니다. 껍질과 기름을 빼고 쌈채소와 조금만 드세요." },
  { category: "고기/생선/단백질", name: "돼지 앞다리살", status: "safe", note: "비계가 적은 부위는 수육이나 구이로 괜찮습니다. 쌈장과 밥은 줄이세요." },
  { category: "고기/생선/단백질", name: "돼지 목살", status: "caution", note: "삼겹살보다 나을 수 있지만 지방이 있습니다. 밥/냉면 없이 쌈채소를 많이 드세요." },
  { category: "고기/생선/단백질", name: "소고기 사태", status: "safe", note: "국이나 수육으로 좋습니다. 기름을 걷어내고 면/밥을 같이 많이 먹지 마세요." },
  { category: "고기/생선/단백질", name: "소고기 등심", status: "caution", note: "맛은 좋지만 지방이 있을 수 있습니다. 양을 작게 하고 달달한 소스는 피하세요." },
  { category: "고기/생선/단백질", name: "흰살생선", status: "safe", note: "대구, 명태, 가자미처럼 담백한 생선은 구이/찜/맑은탕으로 좋습니다." },
  { category: "고기/생선/단백질", name: "조개/홍합", status: "safe", note: "국물 맛을 내기 좋습니다. 국물은 짜지 않게 하고 칼국수 사리는 줄이세요." },
  { category: "고기/생선/단백질", name: "굴", status: "safe", note: "단백질 식품입니다. 생식보다 익혀 먹는 것이 안전하고, 초장은 아주 조금만 사용하세요." },
  { category: "고기/생선/단백질", name: "검은콩/서리태", status: "caution", note: "단백질과 탄수화물이 함께 있습니다. 콩자반은 달 수 있으니 무가당으로 조금만." },
  { category: "고기/생선/단백질", name: "낫토", status: "caution", note: "단백질 식품이지만 소스가 달 수 있습니다. 소스는 절반만 넣고 밥 양을 줄이세요." },
  { category: "고기/생선/단백질", name: "무가당 두유", status: "safe", note: "출출할 때 100-190ml 정도는 괜찮습니다. 꼭 무가당인지 확인하세요." },
  { category: "고기/생선/단백질", name: "저지방 우유", status: "caution", note: "우유에도 유당이 있어 탄수화물이 있습니다. 한 컵 이하로 정하고 달달한 우유는 피하세요." },
  { category: "고기/생선/단백질", name: "무가당 그릭요거트", status: "safe", note: "간식으로 좋습니다. 딸기 4-5개나 아몬드 5알 정도만 올리고 꿀/시럽은 넣지 마세요." },
  { category: "고기/생선/단백질", name: "치즈", status: "caution", note: "탄수화물은 적지만 나트륨과 지방이 많을 수 있습니다. 한 장 또는 작은 조각으로 제한하세요." },

  { category: "밥/곡물/전분", name: "현미밥", status: "caution", note: "흰밥보다 나아도 탄수화물입니다. 반 공기부터, 채소와 단백질을 먼저 드세요." },
  { category: "밥/곡물/전분", name: "보리밥", status: "caution", note: "식이섬유가 있지만 밥입니다. 반 공기 이하로 정하고 국물에 말아 먹지 마세요." },
  { category: "밥/곡물/전분", name: "귀리/오트밀", status: "caution", note: "무가당 소량은 가능하지만 탄수화물입니다. 우유/과일/꿀을 많이 넣으면 부담이 커집니다." },
  { category: "밥/곡물/전분", name: "콩밥", status: "caution", note: "콩은 좋지만 밥 양은 그대로 탄수화물입니다. 반 공기 기준으로 드세요." },
  { category: "밥/곡물/전분", name: "누룽지", status: "caution", note: "가볍게 보여도 쌀입니다. 물에 끓여도 탄수화물은 줄지 않습니다." },
  { category: "밥/곡물/전분", name: "수제비", status: "caution", note: "밀가루 반죽이라 칼국수와 비슷합니다. 먹는다면 반 그릇, 채소와 단백질을 많이 넣으세요." },
  { category: "밥/곡물/전분", name: "라이스페이퍼", status: "caution", note: "얇아 보여도 쌀 전분입니다. 월남쌈은 2-3장 정도로 정하고 소스는 적게." },
  { category: "밥/곡물/전분", name: "식빵", status: "caution", note: "밀가루 탄수화물입니다. 먹는다면 1장, 잼/꿀/달달한 크림은 피하세요." },
  { category: "밥/곡물/전분", name: "통밀빵", status: "caution", note: "흰빵보다 나을 수 있어도 빵입니다. 1장 정도, 계란/채소와 같이 드세요." },
  { category: "밥/곡물/전분", name: "미숫가루/선식", status: "danger", note: "위험. 건강식처럼 보여도 곡물가루라 빨리 마시면 혈당이 오를 수 있습니다. 설탕/꿀을 넣으면 더 위험합니다." },

  { category: "과일", name: "블루베리", status: "caution", note: "과일은 당이 있습니다. 작은 한 줌 정도만, 요거트와 함께 먹고 주스는 피하세요." },
  { category: "과일", name: "귤", status: "caution", note: "작은 것 1개 정도로 정하세요. 여러 개를 계속 먹기 쉬워 주의가 필요합니다." },
  { category: "과일", name: "배", status: "caution", note: "수분이 많지만 당이 있습니다. 1/4개 정도로 작게 드세요." },
  { category: "과일", name: "복숭아", status: "caution", note: "작은 것 1/2개 정도로 제한하세요. 통조림 복숭아는 시럽 때문에 피하세요." },
  { category: "과일", name: "수박", status: "caution", note: "시원해서 많이 먹기 쉽습니다. 작은 조각 몇 개로 제한하고 한 번에 많이 먹지 마세요." },
  { category: "과일", name: "참외", status: "caution", note: "달고 많이 먹기 쉽습니다. 1/2개 이하로 정하세요." },
  { category: "과일", name: "감", status: "caution", note: "당이 높은 편입니다. 작은 것 1/2개 이하로, 말린 감은 피하세요." },
  { category: "과일", name: "말린 과일", status: "danger", note: "위험. 작게 보여도 당이 농축되어 있습니다. 건포도, 말린망고, 곶감은 피하는 편이 좋습니다." },
  { category: "과일", name: "과일청", status: "danger", note: "위험. 과일보다 설탕물이 핵심입니다. 차로 타 마셔도 당 섭취가 큽니다." },

  { category: "음료/가공식품", name: "아메리카노", status: "safe", note: "설탕/시럽 없이 마시면 괜찮습니다. 카페인에 예민하면 오후에는 줄이세요." },
  { category: "음료/가공식품", name: "라떼", status: "caution", note: "우유가 들어가 탄수화물이 있습니다. 시럽은 빼고 작은 사이즈로 드세요." },
  { category: "음료/가공식품", name: "요구르트 음료", status: "danger", note: "위험. 작은 병이라도 당이 많을 수 있습니다. 무가당 요거트와 다릅니다." },
  { category: "음료/가공식품", name: "이온음료", status: "danger", note: "위험. 일반 제품은 당이 들어갑니다. 저혈당 응급상황이 아니면 물을 드세요." },
  { category: "음료/가공식품", name: "막걸리", status: "danger", note: "위험. 탄수화물과 알코올이 함께 있습니다. 혈당 변동과 저혈당 위험이 모두 생길 수 있습니다." },
  { category: "음료/가공식품", name: "맥주", status: "caution", note: "알코올과 탄수화물이 있습니다. 약/인슐린 사용자는 저혈당 위험 때문에 병원 지침을 우선하세요." },
  { category: "음료/가공식품", name: "소주/위스키", status: "caution", note: "탄수화물은 적어도 알코올은 저혈당 위험을 높일 수 있습니다. 공복 음주는 피해야 합니다." },
  { category: "음료/가공식품", name: "무설탕 사탕", status: "caution", note: "평소 간식으로 과식하면 설사나 단맛 습관 문제가 생길 수 있습니다. 저혈당 응급용으로는 일반 사탕이 필요합니다." },
  { category: "음료/가공식품", name: "단백질바", status: "caution", note: "제품마다 당과 탄수화물이 크게 다릅니다. 총탄수화물과 당류를 보고 반 개부터 드세요." },
  { category: "음료/가공식품", name: "제로 음료", status: "caution", note: "당은 없지만 물 대체로 계속 마시지는 마세요. 카페인과 단맛 습관을 주의합니다." },
  { category: "외식/배달", name: "구운 치킨", status: "caution", note: "튀긴 치킨보다 낫습니다. 껍질 제거, 살코기 100-150g 정도, 소스 없이 먹고 쌈채소/오이와 같이 드세요." },
  { category: "외식/배달", name: "숯불 소금구이 치킨", status: "caution", note: "양념 없는 소금구이와 껍질 제거 조건이면 가끔 가능합니다. 밥, 라면, 맥주, 콜라, 감자튀김은 같이 먹지 마세요." },
  { category: "외식/배달", name: "양념 구운 치킨", status: "danger", note: "위험. 오븐구이나 숯불이어도 갈비맛, 데리야끼, 허니, 바비큐 소스는 당과 나트륨이 많을 수 있습니다." },

  { category: "민간요법/건강식품", name: "돼지감자", status: "caution", note: "식이섬유 이눌린이 있어 식품으로 소량 먹을 수는 있지만 당뇨 치료제는 아닙니다. 돼지감자즙/분말을 약처럼 먹는 것은 병원에 확인하세요." },
  { category: "민간요법/건강식품", name: "돼지감자차", status: "caution", note: "무가당으로 연하게 마시는 정도는 가능할 수 있지만 혈당을 낮추는 치료 효과로 믿으면 안 됩니다." },
  { category: "민간요법/건강식품", name: "여주", status: "caution", note: "혈당 관련 연구가 있지만 근거가 충분하지 않고 제품마다 농도가 다릅니다. 인슐린 사용자는 저혈당 위험 때문에 병원에 확인하세요." },
  { category: "민간요법/건강식품", name: "여주즙/여주환", status: "danger", note: "위험. 농축 제품은 효과와 부작용을 예측하기 어렵습니다. 인슐린/당뇨약과 같이 임의로 먹지 마세요." },
  { category: "민간요법/건강식품", name: "양파즙", status: "danger", note: "위험. 건강식처럼 보여도 즙은 빠르게 마시는 농축 식품입니다. 식품으로 양파를 조금 먹는 것과 다릅니다." },
  { category: "민간요법/건강식품", name: "배즙/사과즙", status: "danger", note: "위험. 과일즙은 액상 당입니다. 과일 자체를 정량으로 먹는 것보다 혈당이 빨리 오를 수 있습니다." },
  { category: "민간요법/건강식품", name: "ABC주스/해독주스", status: "danger", note: "위험. 갈아 마시면 과일과 뿌리채소 당을 빠르게 먹게 됩니다. 식사 대체나 당뇨 개선 목적으로 권하지 않습니다." },
  { category: "민간요법/건강식품", name: "홍삼", status: "caution", note: "제품마다 당류와 성분이 다릅니다. 당뇨약/혈압약을 먹는 경우 병원에 확인하고, 달달한 농축액은 피하세요." },
  { category: "민간요법/건강식품", name: "계피", status: "caution", note: "혈당에 좋다는 말이 많지만 치료제로 볼 근거는 부족합니다. 보충제 고용량은 간/약물 문제를 주의하세요." },
  { category: "민간요법/건강식품", name: "알로에/노니", status: "danger", note: "위험. 혈당, 간, 신장, 약물 상호작용 문제가 보고될 수 있습니다. 당뇨 개선 목적으로 임의 복용하지 마세요." },
  { category: "민간요법/건강식품", name: "환/분말/농축액", status: "danger", note: "위험. 음식보다 농도가 높고 성분을 예측하기 어렵습니다. 약처럼 매일 먹는 것은 병원 확인 전에는 피하세요." },
  { category: "민간요법/건강식품", name: "진한 차/달인 물", status: "caution", note: "무가당이어도 특정 재료를 진하게 달여 매일 마시는 것은 보충제처럼 작용할 수 있습니다. 물처럼 마시지 마세요." },
  { category: "설탕 대체", name: "알룰로스", status: "caution", note: "설탕보다 열량과 혈당 영향이 적은 감미료입니다. 하지만 많이 먹어도 되는 자유식품은 아닙니다. 많이 먹으면 배가 불편하거나 단맛 습관이 강해질 수 있습니다." },
  { category: "설탕 대체", name: "알룰로스 매실청", status: "caution", note: "설탕 매실청보다는 낫지만 안심 식품은 아닙니다. 매실 성분과 액상 형태가 남아 있고, 단맛 때문에 자주 마시기 쉽습니다. 먹는다면 물에 타서 1-2작은술(5-10ml) 정도로 제한하세요." },
  { category: "설탕 대체", name: "매실", status: "caution", note: "매실 자체가 당뇨에 특별히 좋은 치료 식품은 아닙니다. 생으로 많이 먹기보다 향을 내는 정도로 쓰고, 청이나 즙으로 자주 마시는 것은 주의하세요." },
  { category: "설탕 대체", name: "스테비아", status: "caution", note: "설탕 대체 감미료로 쓸 수 있습니다. 제품에 설탕, 덱스트린, 물엿이 섞였는지 성분표를 확인하세요." },
  { category: "설탕 대체", name: "에리스리톨", status: "caution", note: "당알코올 계열 감미료입니다. 혈당 영향은 적은 편이지만 많이 먹으면 복부팽만, 가스, 설사가 생길 수 있습니다." },
  { category: "설탕 대체", name: "나한과/몽크프룻", status: "caution", note: "단맛을 내는 대체감미료입니다. 순수 감미료인지, 설탕이나 다른 당이 섞인 제품인지 성분표를 확인하세요." },
  { category: "설탕 대체", name: "올리고당", status: "danger", note: "위험. 건강한 당처럼 보이지만 당류/탄수화물입니다. 조림이나 청에 많이 넣으면 설탕과 비슷하게 혈당 부담이 생길 수 있습니다." },
  { category: "민간요법/건강식품", name: "꿀", status: "danger", note: "위험. 천연이어도 당입니다. 저혈당 응급용 1큰술 외에는 당뇨 관리용으로 쓰지 마세요." },
  { category: "민간요법/건강식품", name: "매실청", status: "danger", note: "위험. 청은 설탕에 절인 액입니다. 물에 타도 당 섭취가 큽니다." }
]);

const infoItems = [
  { category: "가장 중요", name: "특정 음식은 치료제가 아닙니다", status: "danger", note: "돼지감자, 여주, 계피, 홍삼 같은 식품이 당뇨를 치료하거나 인슐린을 대신한다는 충분한 근거는 없습니다. 약이나 인슐린 조정은 병원에서만 해야 합니다." },
  { category: "가장 중요", name: "당화혈색소 11%대는 음식 정보만으로는 부족", status: "danger", note: "식단은 중요하지만 이 정도 수치는 치료 조정, 저혈당 대처, 복약/인슐린 확인이 같이 필요합니다. 이 앱은 음식 선택 보조용입니다." },
  { category: "피해야 할 형태", name: "즙, 농축액, 환, 분말", status: "danger", note: "음식보다 성분이 농축되어 있고 제품마다 함량이 다릅니다. 혈당을 낮춘다는 광고만 보고 매일 먹는 것은 위험합니다." },
  { category: "피해야 할 형태", name: "과일즙, 양파즙, 배즙, ABC주스", status: "danger", note: "액체로 마시면 빠르게 흡수됩니다. 건강주스처럼 보여도 당 섭취가 커질 수 있습니다." },
  { category: "피해야 할 형태", name: "청, 꿀, 조청, 매실청", status: "danger", note: "천연이라는 말과 무관하게 당입니다. 차에 조금 넣는 것도 반복되면 혈당 부담이 큽니다." },
  { category: "주의할 형태", name: "진하게 달인 물", status: "caution", note: "무가당 차와 달리 특정 재료를 진하게 달여 매일 마시면 보충제처럼 작용할 수 있습니다. 약과 겹칠 수 있어 확인이 필요합니다." },
  { category: "설탕 대체", name: "알룰로스는 설탕보다 낫지만 무제한은 아닙니다", status: "caution", note: "알룰로스는 일반 설탕보다 열량과 혈당 영향이 훨씬 적은 감미료입니다. 그래도 단맛 습관을 유지시키고, 많이 먹으면 속 불편감이 생길 수 있어 적게 쓰는 용도로 봅니다." },
  { category: "설탕 대체", name: "알룰로스 매실청은 괜찮나요?", status: "caution", note: "설탕으로 담근 매실청보다 혈당 부담은 줄 수 있지만, 매실청을 마음껏 마셔도 된다는 뜻은 아닙니다. 액상으로 자주 마시면 습관이 되고, 제품/레시피에 따라 당이 섞였을 수 있습니다. 먹는다면 1-2작은술(5-10ml)을 물에 희석해 가끔만 드세요." },
  { category: "설탕 대체", name: "매실 자체는 당뇨에 좋은가요?", status: "caution", note: "매실은 치료 식품이 아닙니다. 매실의 신맛과 향을 이용하는 정도는 가능하지만, 청·즙·농축액 형태로 자주 마시는 것은 권하지 않습니다." },
  { category: "설탕 대체", name: "대체감미료를 쓸 때 볼 것", status: "safe", note: "성분표에서 총탄수화물, 당류, 1회 제공량을 확인하세요. 무설탕 제품도 밀가루, 전분, 과일농축액, 올리고당이 들어가면 혈당 부담이 생길 수 있습니다." },
  { category: "설탕 대체", name: "좋은 사용법", status: "safe", note: "설탕을 알룰로스, 스테비아 같은 감미료로 바꾸는 것은 도움이 될 수 있습니다. 목표는 단맛 음식을 계속 많이 먹는 것이 아니라, 전체 단맛 사용량을 줄이는 것입니다." },
  { category: "설탕 대체", name: "주의할 대체당", status: "danger", note: "올리고당, 꿀, 조청, 과일청, 매실청은 이름이 건강해 보여도 당입니다. 설탕 대신 듬뿍 쓰면 혈당 부담이 커질 수 있습니다." },
  { category: "민간요법", name: "돼지감자", status: "caution", note: "식이섬유가 있는 식품으로 볼 수는 있지만, 당 수치를 치료 수준으로 낮춘다고 믿으면 안 됩니다. 분말/즙 형태는 특히 주의하세요." },
  { category: "민간요법", name: "여주", status: "caution", note: "혈당 관련 연구는 있으나 표준 치료로 권할 만큼 충분하지 않습니다. 인슐린 사용자에게는 저혈당 위험이 문제가 될 수 있습니다." },
  { category: "민간요법", name: "계피, 홍삼, 크롬 보충제", status: "caution", note: "일부 연구가 있어도 효과가 일관되지 않거나 안전성 문제가 있습니다. 보충제는 주치의에게 확인한 뒤 결정하세요." },
  { category: "식사 원칙", name: "채소 먼저, 단백질 함께, 탄수화물은 정량", status: "safe", note: "비전분 채소와 단백질을 먼저 먹고 밥/면/떡/빵은 양을 정하는 방식이 가장 실용적입니다." },
  { category: "식사 원칙", name: "갈아 마시지 않기", status: "danger", note: "과일이나 채소를 갈면 빨리 마시게 되고 양이 늘어납니다. 가능하면 씹어 먹고 양을 눈으로 확인하세요." },
  { category: "식사 원칙", name: "성분표에서 볼 것", status: "safe", note: "총탄수화물, 당류, 1회 제공량을 먼저 봅니다. 저당, 무가당, 제로라는 문구만 보고 결정하지 마세요." },
  { category: "인슐린 사용자", name: "저혈당 대비는 따로 준비", status: "danger", note: "평소에는 당을 줄이지만 저혈당 때는 빠른 당질이 필요합니다. 포도당정, 일반 사탕, 주스 120ml 등을 따로 준비하세요." },
  { category: "외식/배달", name: "구운 치킨은 조건부 가능", status: "caution", note: "튀김옷 없는 오븐구이/숯불구이는 튀긴 치킨보다 낫습니다. 껍질을 빼고 살코기 100-150g 정도만, 소스 없이 드세요. 쌈채소, 오이, 양배추와 같이 먹으면 좋습니다." },
  { category: "외식/배달", name: "구운 치킨도 피해야 하는 조합", status: "danger", note: "구운 치킨이라도 밥, 라면, 맥주, 콜라, 감자튀김, 치킨무 많이, 달달한 양념소스와 같이 먹으면 혈당과 열량 부담이 커집니다." },
  { category: "외식/배달", name: "치킨 메뉴 고르는 법", status: "safe", note: "소금구이, 오븐구이, 숯불 소금구이처럼 단맛 소스가 없는 메뉴를 고르세요. 갈비맛, 데리야끼, 허니, 바비큐, 매운 양념은 당류와 나트륨을 확인해야 합니다." },
  { category: "병원에 물어볼 것", name: "새 건강식품을 시작할 때", status: "caution", note: "당뇨약, 인슐린, 혈압약, 신장 기능 문제가 있으면 건강식품도 영향을 줄 수 있습니다. 시작 전 병원에 확인하세요." }
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
  hypo: "저혈당",
  info: "정보"
};

let currentView = "recipes";
const searchableViews = ["recipes", "eatingOut", "ingredients"];
const searchState = {
  recipes: { query: "", matchIndex: -1 },
  eatingOut: { query: "", matchIndex: -1 },
  ingredients: { query: "", matchIndex: -1 }
};
const scrollPositions = {
  recipes: 0,
  eatingOut: 0,
  ingredients: 0,
  hypo: 0,
  info: 0
};
let isRestoringScroll = false;

const content = document.querySelector("#content");
const buttons = document.querySelectorAll("[data-view]");
const topbar = document.querySelector(".topbar");

function updateStickyOffset() {
  document.documentElement.style.setProperty("--topbar-height", `${topbar.offsetHeight}px`);
  const searchPanel = document.querySelector(".search-panel");
  document.documentElement.style.setProperty("--search-panel-height", `${searchPanel?.offsetHeight || 0}px`);
}

window.addEventListener("scroll", () => {
  if (isRestoringScroll) return;
  scrollPositions[currentView] = window.scrollY;
}, { passive: true });

window.addEventListener("resize", updateStickyOffset);

function statusLabel(status) {
  return status === "safe" ? "안심" : status === "danger" ? "위험" : "주의";
}

function cardStatus(item) {
  return `<span class="badge ${item.status}">${statusLabel(item.status)}</span>`;
}

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function cleanNote(note) {
  return note.replace(/^(안심에 가깝습니다\.|안심\.|주의\.|위험\. 위험\.|위험\.)\s*/, "");
}

function normalizeSearchText(value) {
  return String(value || "").toLowerCase().replace(/\s+/g, " ").trim();
}

function recipeSearchText(recipe) {
  return [
    recipe.title,
    recipe.category,
    recipe.why,
    recipe.source,
    ...recipe.ingredients,
    ...recipe.steps,
    ...recipe.tags
  ].join(" ");
}

function simpleSearchText(item) {
  return [item.category, item.name, item.note, statusLabel(item.status)].join(" ");
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

const koreanInitials = [
  { key: "ㄱ", test: code => code >= 0 && code <= 1 },
  { key: "ㄴ", test: code => code === 2 },
  { key: "ㄷ", test: code => code >= 3 && code <= 4 },
  { key: "ㄹ", test: code => code === 5 },
  { key: "ㅁ", test: code => code === 6 },
  { key: "ㅂ", test: code => code >= 7 && code <= 8 },
  { key: "ㅅ", test: code => code >= 9 && code <= 10 },
  { key: "ㅇ", test: code => code === 11 },
  { key: "ㅈ", test: code => code >= 12 && code <= 14 },
  { key: "ㅊ", test: code => code === 15 },
  { key: "ㅋ", test: code => code === 16 },
  { key: "ㅌ", test: code => code === 17 },
  { key: "ㅍ", test: code => code === 18 },
  { key: "ㅎ", test: code => code === 19 }
];

function getInitialKey(name) {
  const first = String(name || "").trim().charAt(0);
  if (!first) return "기타";
  const code = first.charCodeAt(0) - 0xac00;
  if (code < 0 || code > 11171) return "기타";
  const initialCode = Math.floor(code / 588);
  return koreanInitials.find(initial => initial.test(initialCode))?.key || "기타";
}

function sortByKoreanName(items) {
  return [...items].sort((a, b) => a.name.localeCompare(b.name, "ko-KR", { numeric: true }));
}

function renderIngredientsList(items) {
  const sorted = sortByKoreanName(items).map(item => ({ ...item, initial: getInitialKey(item.name) }));
  const initials = [...new Set(sorted.map(item => item.initial))];
  const order = koreanInitials.map(initial => initial.key).concat("기타");
  const visibleInitials = order.filter(initial => initials.includes(initial));

  return `
    <div class="ingredient-layout">
      <div class="simple-list ingredient-list">
        ${sorted.map((item, index, allItems) => {
          const showMarker = index === 0 || item.initial !== allItems[index - 1].initial;
          const marker = showMarker ? `<span class="initial-marker" data-initial-marker="${item.initial}">${item.initial}</span>` : "";
          return simpleCard(item, { initial: item.initial, marker });
        }).join("")}
      </div>
      <nav class="initial-nav" aria-label="재료 초성 바로가기">
        ${visibleInitials.map(initial => `<button type="button" data-initial-target="${initial}">${initial}</button>`).join("")}
      </nav>
    </div>
  `;
}

function recipeCard(recipe) {
  return `
    <article class="recipe-card ${recipe.status}" data-search="${escapeAttr(normalizeSearchText(recipeSearchText(recipe)))}" tabindex="-1">
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

function simpleCard(item, options = {}) {
  return `
    <article class="simple-card ${item.status}" data-search="${escapeAttr(normalizeSearchText(simpleSearchText(item)))}" data-initial="${options.initial || ""}" tabindex="-1">
      ${options.marker || ""}
      <div class="card-tags">${cardStatus(item)}<span class="category-pill">${item.category}</span></div>
      <h2>${item.name}</h2>
      <p>${cleanNote(item.note)}</p>
    </article>
  `;
}

const hypoFoods = [
  {
    category: "가장 먼저",
    name: "포도당정 3-4개",
    status: "safe",
    note: "용량을 맞추기 쉬워서 가장 준비해두기 좋습니다. 제품 포장에 적힌 탄수화물 양을 확인하세요."
  },
  {
    category: "마실 것",
    name: "과일주스 120ml",
    status: "safe",
    note: "작은 컵 반 컵 정도입니다. 저당 주스가 아니라 일반 주스여야 합니다. 신장질환이 있으면 오렌지주스는 병원에 확인하세요."
  },
  {
    category: "마실 것",
    name: "일반 콜라 또는 사이다 120ml",
    status: "safe",
    note: "제로 콜라가 아니라 설탕이 든 일반 탄산음료입니다. 저혈당 응급 때만 소량 사용합니다."
  },
  {
    category: "집에 있을 때",
    name: "꿀 또는 설탕 1큰술",
    status: "safe",
    note: "대략 15ml 한 큰술입니다. 삼킬 수 있을 때만 사용하고, 평소 간식처럼 먹지 않습니다."
  },
  {
    category: "가방에 넣기",
    name: "일반 사탕 3-4개",
    status: "caution",
    note: "무설탕 사탕은 효과가 없습니다. 제품마다 당 함량이 달라 포장지의 탄수화물 양을 확인하세요."
  },
  {
    category: "피하기",
    name: "초콜릿, 견과류, 빵 많이 먹기",
    status: "danger",
    note: "지방과 단백질이 많으면 흡수가 늦거나, 너무 많이 먹어 혈당이 크게 튈 수 있습니다. 응급 처치는 빠른 당질 15g이 우선입니다."
  }
];

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

function renderSearchBar() {
  if (!searchableViews.includes(currentView)) return "";
  const state = searchState[currentView];
  const inputId = `search-${currentView}`;
  return `
    <section class="search-panel" aria-label="${viewTitles[currentView]} 검색">
      <input id="${inputId}" class="search-input" type="search" value="${escapeAttr(state.query)}" placeholder="검색" aria-label="검색">
      <output class="search-count" aria-live="polite">0개</output>
      <button class="search-next" type="button" disabled>다음</button>
    </section>
  `;
}

function render() {
  updateStickyOffset();
  let html = renderSearchBar();

  if (currentView === "recipes") {
    html += renderGrouped(recipes, recipeCard);
  }

  if (currentView === "eatingOut") {
    html += renderGrouped(eatingOut, simpleCard);
  }

  if (currentView === "ingredients") {
    html += renderIngredientsList(expandedIngredients);
  }

  if (currentView === "hypo") {
    html += `
      <section class="hypo-summary danger">
        <h2>저혈당은 바로 대처</h2>
        <p>혈당이 70mg/dL 미만이거나 증상이 있으면 빠른 당질 15g을 먹고 15분 뒤 다시 확인합니다.</p>
      </section>
    `;
    html += `
      <section class="hypo-summary safe">
        <h2>바로 먹을 것</h2>
        <p>삼킬 수 있을 때만 아래 중 하나를 골라 15g 정도 먹습니다. 15분 뒤 다시 확인합니다.</p>
      </section>
    `;
    html += renderGrouped(hypoFoods, simpleCard);
    html += renderGrouped(hypoItems, simpleCard);
    html += `<p class="source">근거: ADA Low Blood Glucose, CDC/NIDDK 저혈당 15-15 원칙.</p>`;
  }

  if (currentView === "info") {
    html += `
      <section class="hypo-summary caution">
        <h2>음식 정보는 치료제가 아닙니다</h2>
        <p>당뇨에 좋다는 식품도 약이나 인슐린을 대신할 수 없습니다. 즙, 농축액, 환, 분말은 특히 주의합니다.</p>
      </section>
    `;
    html += renderGrouped(infoItems, simpleCard);
    html += `<p class="source">근거: ADA 보충제 안내, NCCIH 당뇨와 보충제, NIDDK 당뇨 관리 원칙, 식품영양성분 DB의 영양성분 체계.</p>`;
  }

  content.innerHTML = html;
  attachSearchHandlers();
  attachInitialNavHandlers();
  updateStickyOffset();
}

function currentSearchMatches() {
  const state = searchState[currentView];
  const query = normalizeSearchText(state?.query);
  const cards = Array.from(content.querySelectorAll("[data-search]"));
  if (!query) return [];
  return cards.filter(card => card.dataset.search.includes(query));
}

function updateSearchMatches(advance = false) {
  if (!searchableViews.includes(currentView)) return;

  const state = searchState[currentView];
  const query = normalizeSearchText(state.query);
  const cards = Array.from(content.querySelectorAll("[data-search]"));
  const count = content.querySelector(".search-count");
  const next = content.querySelector(".search-next");

  cards.forEach(card => card.classList.remove("search-hit", "search-active"));

  if (!query) {
    state.matchIndex = -1;
    count.textContent = "0개";
    next.disabled = true;
    return;
  }

  const matches = currentSearchMatches();
  count.textContent = `${matches.length}개`;
  next.disabled = matches.length === 0;

  matches.forEach(card => card.classList.add("search-hit"));

  if (matches.length === 0) {
    state.matchIndex = -1;
    return;
  }

  if (advance) {
    state.matchIndex = (state.matchIndex + 1) % matches.length;
    const target = matches[state.matchIndex];
    target.classList.add("search-active");
    target.focus({ preventScroll: true });
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  if (state.matchIndex >= matches.length) state.matchIndex = -1;
  if (state.matchIndex >= 0) matches[state.matchIndex].classList.add("search-active");
}

function attachSearchHandlers() {
  if (!searchableViews.includes(currentView)) return;

  const state = searchState[currentView];
  const input = content.querySelector(".search-input");
  const next = content.querySelector(".search-next");

  input.addEventListener("input", () => {
    state.query = input.value;
    state.matchIndex = -1;
    updateSearchMatches(false);
  });

  input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      updateSearchMatches(true);
    }
  });

  next.addEventListener("click", () => updateSearchMatches(true));
  updateSearchMatches(false);
}

function attachInitialNavHandlers() {
  if (currentView !== "ingredients") return;

  content.querySelectorAll("[data-initial-target]").forEach(button => {
    button.addEventListener("click", () => {
      const initial = button.dataset.initialTarget;
      const target = content.querySelector(`[data-initial="${initial}"]`);
      if (!target) return;

      content.querySelectorAll(".initial-active").forEach(card => card.classList.remove("initial-active"));
      target.classList.add("initial-active");
      target.focus({ preventScroll: true });
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
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
updateStickyOffset();

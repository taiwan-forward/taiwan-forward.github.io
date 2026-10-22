/**
 * Taiwan Forward — "From Evidence to Action" view content (bilingual EN / zh-TW).
 *
 * Connects the verified findings of published chapters to constructive,
 * nonpartisan possibilities at four levels of participation. Actions are
 * described honestly — what, why, evidence, who, and limitations — without
 * overstating impact, and without donations, registrations, personal data,
 * or organizational endorsements.
 */

import type { LText } from "@/lib/i18n";

export interface ActionItem {
  title: LText;
  what: LText;
  why: LText;
  evidence: LText;
  who: LText;
  limitations: LText;
}

export interface ActionLevel {
  id: "individual" | "community" | "professional" | "institutional";
  title: LText;
  desc: LText;
  actions: ActionItem[];
}

export interface ActionContent {
  intro: LText;
  closing: LText;
  levels: ActionLevel[];
}

export const actionContent: ActionContent = {
  intro: {
    en: "Understanding is the first purpose of Taiwan Forward. It is not the last.\n\nEvery completed research chapter ends with a look at constructive possibilities, and this page gathers them in one place. What you will find here are actions connected to verified evidence — mainly the findings of Chapter 01 (Population and Family) at this stage, expanding as later chapters publish. What you will not find are partisan calls to action, or requests for donations, registrations, personal information, or endorsements of any organization. Readers remain entirely free to act on none of this.\n\nOne caveat belongs at the beginning, not the end: demographic change is structural. It cannot be resolved through individual responsibility alone, and no action listed below claims to reverse it. What individuals, communities, professionals, and institutions can realistically do is adapt thoughtfully, support one another, and raise the quality of public and private decisions — which is worthwhile in itself.",
    zh: "理解，是台灣向前的第一個目的，但不是最後一個。\n\n每一章完成的研究，都會以建設性的可能方向作結，而本頁將這些方向集於一處。你在這裡看到的，是與核驗證據相連的行動——目前主要來自第一章（人口與家庭）的研究發現，並將隨後續章節出版而擴充。你在這裡不會看到黨派性的行動號召，也不會有捐款、註冊、提供個人資料或為任何組織背書的要求。讀者完全有自由選擇一項都不做。\n\n有一項提醒必須放在開頭而非結尾：人口變遷是結構性現象，無法僅靠個人責任化解，下列行動也沒有一項宣稱能扭轉它。個人、社區、專業工作者與制度機構切實能做的，是深思熟慮地調適、彼此支持，並提高公共與私人決策的品質——這本身就有其價值。",
  },
  closing: {
    en: "Every action above states what it involves, why it may be useful, the evidence behind it, who it suits, and — deliberately — its limitations. That honesty matters more than enthusiasm. None of these actions will reverse Taiwan's demographic trajectory; several simply make life better in a society that is changing, which is reason enough to consider them.\n\nIf this project contributes anything, we hope it is this: a shared, checkable understanding of where Taiwan stands, as the ground on which better choices — individual, communal, professional, institutional — can responsibly be made. Understand today. Improve tomorrow.",
    zh: "上述每一項行動都說明了它的內容、可能的作用、背後的證據、適合誰，以及——刻意的——它的限制。這份誠實，比熱情更重要。這些行動沒有一項能扭轉台灣的人口軌跡；其中幾項，只是在變動中的社會裡讓生活更好一些，而這已經是足夠的理由。\n\n若本計畫能留下什麼，我們希望是：一份共享、可檢驗的台灣現況理解，作為更良善的個人、社區、專業與制度抉擇得以穩健立足的基礎。理解今天，改善明天。",
  },
  levels: [
    {
      id: "individual",
      title: { en: "Individual actions", zh: "個人層面的行動" },
      desc: {
        en: "Practical steps within your own life — small, self-directed, freely chosen, and costing little beyond attention.",
        zh: "在自己生活中可行的步驟——微小、自主、自由選擇，除了用心之外幾乎不需要其他成本。",
      },
      actions: [
        {
          title: { en: "Learn the demographic facts from primary sources", zh: "從一手來源認識人口事實" },
          what: {
            en: "Reading the population chapter is a start; going one step further means consulting the primary sources behind it — the Ministry of the Interior's household registration statistics, published openly — and checking a figure or two yourself.",
            zh: "閱讀人口這一章是起點；再進一步，是查閱其背後的一手來源——內政部戶政司公開出版的戶籍人口統計——並親自核對一兩個數字。",
          },
          why: {
            en: "Accurate understanding precedes good decisions, in one's own life as much as in public debate. First-hand familiarity with the data also builds resistance to exaggerated or misleading claims about Taiwan's population.",
            zh: "正確的理解先於良好的決策——無論是關於自己的生活，還是公共討論。親自接觸資料，也能提高對各種誇大或誤導說法的辨識力。",
          },
          evidence: {
            en: "Chapter 01's core findings trace to MOI vital statistics covering 1958–2025: the 65+ share reached 20.06% in 2025 (a super-aged society), the total fertility rate fell to 0.695, and 2025 saw 107,812 births against 200,268 deaths. The MOI publishes these series openly, and this site's source registry links to them.",
            zh: "第一章的核心發現均可追溯至內政部出生死亡統計（涵蓋 1958–2025）：65 歲以上占比於 2025 年達 20.06%（進入超高齡社會）、總生育率降至 0.695、2025 年出生 107,812 人而死亡 200,268 人。內政部公開發布這些統計序列，本站的來源登記冊附有連結。",
          },
          who: {
            en: "Anyone with internet access; no statistical background is needed to read the summary tables.",
            zh: "任何能上網的人；閱讀統計摘要表不需要統計背景。",
          },
          limitations: {
            en: "Reading changes nothing by itself, and interpreting statistics correctly takes care — definitions, reference years, coverage. The goal is a better-grounded understanding, not instant expertise.",
            zh: "光是閱讀本身不會改變任何事，而正確解讀統計也需要留意定義、參考年份與涵蓋範圍。目標是根基更穩的理解，而不是立刻成為專家。",
          },
        },
        {
          title: { en: "Invest in intergenerational connection", zh: "經營跨世代的連結" },
          what: {
            en: "Regular, deliberate contact across generations within your own family and neighborhood — shared meals, exchanged skills, help with childcare or errands, a standing weekly call, teaching and being taught.",
            zh: "在自己的家庭與鄰里之間，有意識地維繫跨世代往來——一起吃飯、交流技能、協助托育或跑腿、每週固定通話、教學相長。",
          },
          why: {
            en: "Longer lives and smaller families make intergenerational contact less automatic than it once was. Connection that earlier generations may have received by default now often takes intention.",
            zh: "壽命延長、家庭規模縮小，使跨世代接觸不再像過去那樣自然而然。上一個世代或許理所當然擁有的連結，現在往往需要刻意經營。",
          },
          evidence: {
            en: "In 2025, 20.06% of Taiwan's registered population was aged 65 or older, while only 11.51% was under 15 — a ratio that shapes everyday family life. A substantial body of international research associates social connection in later life with better health outcomes; we state this association qualitatively rather than citing specific effect sizes.",
            zh: "2025 年，台灣戶籍登記人口中 65 歲以上占 20.06%，15 歲以下僅占 11.51%——這樣的結構正形塑著日常家庭生活。國際上有相當多研究將高齡階段的社會連結與較佳的健康結果聯繫起來；此處僅作定性陳述，不引用特定效應值。",
          },
          who: {
            en: "Anyone with family members or neighbors of other generations — which is nearly everyone.",
            zh: "任何有家人或鄰居屬於其他世代的人——這幾乎是每一個人。",
          },
          limitations: {
            en: "Individual contact complements but cannot replace long-term care systems and public services. Family circumstances differ widely: not everyone has relatives nearby, and some relationships are strained. This is a contribution to a life, not a demographic policy.",
            zh: "個人層面的接觸可以補充、但無法取代長期照顧制度與公共服務。每個家庭的處境差異極大：並非人人都有親人在近旁，有些關係也並不融洽。這是對生活的一種投注，而不是人口政策。",
          },
        },
        {
          title: { en: "Talk openly about family-formation aspirations", zh: "坦誠討論家庭組成的想望" },
          what: {
            en: "For people considering marriage or children: honest conversations with partners and family about what you want, when, and under what conditions — housing, work, finances, childcare, and the support you would or would not have.",
            zh: "對正在考慮婚姻或生育的人：與伴侶和家人坦誠討論自己想要什麼、何時要、在什麼條件下要——住房、工作、財務、托育，以及你可能獲得或無法獲得的支持。",
          },
          why: {
            en: "These are among the most consequential decisions people make, and they are often made under silence, pressure, or avoidance. Naming conditions clearly is a precondition for workable choices — in either direction.",
            zh: "這是人們一生中最重大的決定之一，卻常在沉默、壓力或迴避之下做成。把條件說清楚，是做出可行抉擇的前提——無論抉擇的方向為何。",
          },
          evidence: {
            en: "Taiwan's total fertility rate of 0.695 (2025) is among the lowest ever recorded, reflecting in part delayed and forgone family formation. International demographic research associates fertility decisions with perceived economic security, housing costs, and the feasibility of combining work and family; these associations are described qualitatively here.",
            zh: "台灣 2025 年總生育率 0.695，為有紀錄以來全球最低之列，部分反映了家庭組成的延後與放棄。國際人口研究通常將生育決策與經濟安全感、居住成本，以及兼顧工作與家庭的可行性聯繫起來；此處僅作定性描述。",
          },
          who: {
            en: "Adults considering partnership, marriage, or parenthood — and the people close to them.",
            zh: "正在考慮伴侶關係、婚姻或生育的成年人，以及他們身邊親近的人。",
          },
          limitations: {
            en: "This is deeply personal territory: there is no right individual choice, and no individual owes society a particular outcome. Aggregate fertility is shaped by structural conditions that no single person controls, and an honest conversation may end in a decision not to have children — which is a legitimate result, not a failure of the action.",
            zh: "這是極為私人的領域：不存在「正確」的個人選擇，個人也無須向社會交代特定結果。整體生育水準由結構性條件形塑，非個人所能左右；而一場誠實的對話，也可能得出不生育的結論——這是正當的結果，不是這項行動的失敗。",
          },
        },
        {
          title: { en: "Keep learning across a longer working life", zh: "為更長的工作生涯持續學習" },
          what: {
            en: "Treat skills as something to maintain and renew — courses, certifications, side projects, mentorships — rather than something finished with formal education.",
            zh: "把技能視為需要持續維護與更新的東西——課程、證照、個人專案、師徒交流——而不是隨正規教育結束的東西。",
          },
          why: {
            en: "Longer lives make longer working lives likely for most people. And as the working-age share of the population shrinks, individual adaptability matters more, not less.",
            zh: "壽命延長，意味著多數人的工作生涯也會更長。而當工作年齡人口占比縮減，個人的適應力只會更重要，不會更不重要。",
          },
          evidence: {
            en: "Life expectancy in Taiwan reached 80.77 years in 2024 (MOI), and the 15–64 share of the registered population — 68.43% in 2025 — is declining as the population ages. Both figures are documented in Chapter 01.",
            zh: "台灣 2024 年平均壽命達 80.77 歲（內政部），且 15–64 歲戶籍人口占比（2025 年為 68.43%）隨人口高齡化持續下降。兩項數字均記錄於第一章。",
          },
          who: {
            en: "Working adults of any age; starting earlier is easier, but starting later is far from useless.",
            zh: "任何年齡的在職者；越早開始越容易，但起步晚也絕非無用。",
          },
          limitations: {
            en: "Learning takes time and often money, and it does not guarantee employment outcomes. It widens options and resilience rather than ensuring them — a real but modest benefit.",
            zh: "學習需要時間，也常需要金錢，而且無法保證就業結果。它擴大的是選項與韌性，而非保障——效益真實，但幅度有限。",
          },
        },
      ],
    },
    {
      id: "community",
      title: { en: "Community actions", zh: "社區層面的行動" },
      desc: {
        en: "Voluntary local initiatives: mutual assistance, public education, and community improvements organized where you live.",
        zh: "自願性的在地行動：互助、公共教育，以及在你生活所在之處發起的社區改善。",
      },
      actions: [
        {
          title: { en: "Start or join intergenerational programs", zh: "發起或參與跨世代活動" },
          what: {
            en: "Local programs that deliberately mix ages: skill exchanges in which older residents teach repair, cooking, or a local language while younger participants teach digital tools; shared gardening; reading or homework groups.",
            zh: "刻意混合不同年齡層的在地活動：由長者教修繕、烹飪或在地語言、年輕人教數位工具的技能交換；共同耕作的園圃；讀書會或課輔班。",
          },
          why: {
            en: "Daily life in Taiwan, as in much of East Asia, is increasingly age-segregated — schools for the young, activities for the old. Programs that mix generations rebuild contact where it no longer happens spontaneously.",
            zh: "與東亞多數社會一樣，台灣的日常生活日漸按年齡分隔——年輕人屬於學校，長者屬於長青活動。跨世代活動的價值，在於重建那些不再自然發生的接觸。",
          },
          evidence: {
            en: "Chapter 01 documents the age structure behind this: 20.06% of the population is 65 or older and 11.51% under 15 (2025). Evaluations of intergenerational programs exist internationally, with generally positive but context-dependent findings; we describe them qualitatively.",
            zh: "第一章記錄了背後的年齡結構：65 歲以上占 20.06%、15 歲以下占 11.51%（2025 年）。國際上已有對跨世代方案的評估研究，結果大致正面但高度依賴情境；此處僅作定性描述。",
          },
          who: {
            en: "Community development associations, schools, libraries, volunteer groups, and neighbors willing to organize small things well.",
            zh: "社區發展協會、學校、圖書館、志工團體，以及願意把小事辦好的鄰居們。",
          },
          limitations: {
            en: "Programs need sustained volunteers and venues, and their effects are usually modest and local. They complement public services rather than substitute for them.",
            zh: "活動需要持續的志工與場地，效果通常溫和而有限於在地。它們補充公共服務，而非取而代之。",
          },
        },
        {
          title: { en: "Make community spaces serve mixed ages", zh: "讓社區空間服務不同年齡層" },
          what: {
            en: "Assess and advocate for parks, libraries, and activity centers that serve children, working-age adults, and older residents together: benches and shade, accessible restrooms, safe walking routes, and programming that overlaps generations.",
            zh: "檢視並倡議讓公園、圖書館與活動中心同時服務兒童、勞動人口與長者：座椅與遮蔭、無障礙廁所、安全的步行動線，以及能讓不同世代同時參與的活動安排。",
          },
          why: {
            en: "Physical space shapes contact. Spaces designed for one age group quietly exclude the others; mixed-use spaces make intergenerational contact ordinary again.",
            zh: "空間形塑接觸。只為單一年齡層設計的空間，會悄然排除其他人；混齡使用的空間，能讓跨世代接觸重新變得日常。",
          },
          evidence: {
            en: "Taiwan's 2025 age structure — 11.51% under 15, 68.43% aged 15–64, 20.06% aged 65+ — means communities must serve very different needs simultaneously, which is the practical case for spaces designed for all of them at once.",
            zh: "台灣 2025 年的年齡結構——15 歲以下 11.51%、15–64 歲 68.43%、65 歲以上 20.06%——意味著社區必須同時滿足差異極大的需求，這正是「一次為所有年齡層設計」的空間最有力的實務理由。",
          },
          who: {
            en: "Neighborhood associations, local volunteers, and residents who use — or would use — public spaces.",
            zh: "鄰里組織、在地志工，以及正在使用（或希望使用）公共空間的居民。",
          },
          limitations: {
            en: "Space changes usually require local-government cooperation and budget, processes can be slow, and the benefits are genuinely hard to measure. This is a long, quiet kind of improvement.",
            zh: "空間改造通常需要地方政府配合與預算，流程可能曠日廢時，效益也確實難以衡量。這是一種緩慢而安靜的改善。",
          },
        },
        {
          title: { en: "Look in on older neighbors", zh: "關照獨居與高齡鄰居" },
          what: {
            en: "Organized or informal volunteering that reduces isolation among older residents: regular visits or calls to those living alone, help with shopping or medical appointments, shared meals, a simple neighborhood contact list.",
            zh: "以有組織或非正式的志願行動，減少長者的孤立感：定期探視或致電獨居者、協助採買或就醫接送、共餐，以及一份簡單的鄰里聯絡名單。",
          },
          why: {
            en: "As families become smaller and more dispersed, more older residents live alone, and isolation in later life is a growing concern in communities across Taiwan.",
            zh: "家庭規模縮小、成員日趨分散，獨居長者隨之增加；高齡階段的孤立，已是台灣許多社區正在面對的課題。",
          },
          evidence: {
            en: "One in five registered residents (20.06% in 2025) is 65 or older — the denominator of everyday community life. International public-health research associates prolonged isolation in later life with worse health outcomes; this association is stated qualitatively.",
            zh: "每五戶籍登記人口中即有一人（2025 年為 20.06%）年滿 65 歲——這是日常生活分母的一部分。國際公共衛生研究通常將高齡階段的長期孤立與較差的健康結果聯繫起來；此處僅作定性陳述。",
          },
          who: {
            en: "Residents, volunteer groups, and neighborhood organizations already embedded in the community.",
            zh: "居民、志工團體，以及原本就深耕在地的鄰里組織。",
          },
          limitations: {
            en: "Volunteer care complements but cannot replace professional long-term care; some situations call for trained help, and volunteer availability varies greatly from neighborhood to neighborhood.",
            zh: "志願性的關懷可以補充、但無法取代專業長期照顧；有些情況需要受過訓練的協助，而且各鄰里的志工量能差異極大。",
          },
        },
        {
          title: { en: "Read and discuss the data together", zh: "一起閱讀與討論數據" },
          what: {
            en: "A reading group or community-college session working through one chapter of this site — or one MOI statistical release — and discussing what it means for the place where participants live.",
            zh: "組一個讀書會或社區大學課程，共讀本網站的一章——或一份內政部統計發布——並討論它對參與者所在的地方意味著什麼。",
          },
          why: {
            en: "Shared, accurate understanding is a community asset. Discussion also surfaces local knowledge that statistics alone cannot see.",
            zh: "共享而正確的理解，本身就是社區的資產。討論也能帶出統計數字看不見的在地知識。",
          },
          evidence: {
            en: "This site's chapters, datasets, and CSV downloads are openly licensed (CC BY 4.0) and designed for reuse in classrooms and community settings; the underlying MOI statistics are publicly published.",
            zh: "本網站的章節、資料集與 CSV 下載採開放授權（CC BY 4.0），可於課堂與社區場景重複使用；其底層的內政部統計亦公開發布。",
          },
          who: {
            en: "Libraries, community colleges, schools, book clubs, and anyone who convenes people.",
            zh: "圖書館、社區大學、學校、讀書會，以及任何願意把人聚起來的人。",
          },
          limitations: {
            en: "Reach is limited to those who attend, facilitation quality matters, and conversation does not by itself change outcomes. But informed conversation is where most community decisions start.",
            zh: "影響範圍僅及於參與者，主持品質很重要，而且對話本身不會直接改變結果。但多數社區決策，都是從有根據的對話開始的。",
          },
        },
      ],
    },
    {
      id: "professional",
      title: { en: "Professional contributions", zh: "專業層面的貢獻" },
      desc: {
        en: "Evidence-based contributions through research, engineering, education, healthcare, design, and other professional skills.",
        zh: "透過研究、工程、教育、醫療、設計等專業技能，做出以證據為本的貢獻。",
      },
      actions: [
        {
          title: { en: "Contribute open demographic analysis", zh: "投入開放的人口分析研究" },
          what: {
            en: "Researchers and analysts publishing reproducible, openly licensed analyses of Taiwanese demographic data — with methods, code, and data documented well enough for others to check and reuse.",
            zh: "研究者和分析者發表可重製、採開放授權的台灣人口資料分析——方法、程式碼與資料都記錄到足以讓他人檢驗與再利用的程度。",
          },
          why: {
            en: "Independent, reproducible analysis strengthens public understanding and provides a check on both official narratives and media interpretations.",
            zh: "獨立而可重製的分析，能強化公眾理解，也為官方論述與媒體解讀提供制衡。",
          },
          evidence: {
            en: "The approach this site takes — every figure traced to a registered source, every access dated, every transformation documented — is one working template. MOI demographic series (1958–2025) are openly published.",
            zh: "本網站採行的做法——每個數字追溯到已登錄的來源、每次查閱都有日期、每個轉換都有紀錄——是一個可用的範本。內政部人口統計序列（1958–2025）均公開發布。",
          },
          who: {
            en: "Demographers, statisticians, economists, sociologists, and students with relevant training.",
            zh: "人口學家、統計學家、經濟學家、社會學家，以及受過相關訓練的學生。",
          },
          limitations: {
            en: "Rigorous work is slow, peer review takes time, and open publication usually brings no direct funding. Impact on public debate is real but not guaranteed.",
            zh: "嚴謹的研究很慢，同儕審查需要時間，開放發表通常也沒有直接經費。對公共討論的影響真實存在，但無法保證。",
          },
        },
        {
          title: { en: "Plan for age-structure change", zh: "將年齡結構變遷納入規劃與設計" },
          what: {
            en: "Urban planners, service designers, and architects factoring verified age-structure change into long-lived decisions: school planning, housing types, transport, healthcare capacity, and public space.",
            zh: "都市規劃者、服務設計者與建築師，將經核驗的年齡結構變遷納入存續期長的決策：學校規劃、住宅型態、運輸、醫療量能與公共空間。",
          },
          why: {
            en: "Infrastructure and services built today will serve the population of the 2040s and beyond, by which time today's verified trends will have compounded for decades.",
            zh: "今天興建的基礎設施與服務，將服務 2040 年代乃至更遠的人口；屆時，今日經核驗的趨勢已累積作用數十年。",
          },
          evidence: {
            en: "Chapter 01's verified figures imply shifting demand: with 65+ at 20.06% and under-15s at 11.51% (2025), demand for school places is structurally declining while demand for elder care and accessible transport is structurally rising.",
            zh: "第一章的核驗數字隱含需求移轉：65 歲以上占 20.06%、15 歲以下占 11.51%（2025 年），學校床位與班級的需求在結構上下降，長照與無障礙運輸的需求在結構上上升。",
          },
          who: {
            en: "Planners, designers, engineers, and analysts in public and private sectors whose decisions outlive news cycles.",
            zh: "公私部門中，決策影響力超越新聞週期的規劃者、設計者、工程師與分析者。",
          },
          limitations: {
            en: "The future is uncertain: population projections are scenario calculations that must be verified against primary publications before use (see Research Status), local conditions vary greatly, and demography is only one of many planning considerations.",
            zh: "未來並不確定：人口推估是情境計算，使用前必須對照原始出版品核驗（見「研究進度」頁），各地條件差異極大，而人口只是規劃的眾多考量之一。",
          },
        },
        {
          title: { en: "Teach data literacy with real data", zh: "以真實資料教授數據素養" },
          what: {
            en: "Educators teaching how to read statistics — definitions, reference years, comparability, source quality — using Taiwan's real, openly published data rather than invented classroom examples.",
            zh: "教育者以台灣真實、公開發布的資料（而非虛構的課堂例題）教授如何閱讀統計——定義、參考年份、可比性、來源品質。",
          },
          why: {
            en: "The ability to evaluate evidence is a foundational civic skill, and real local data makes it concrete: students learn that their own society is knowable, and how to know it.",
            zh: "評估證據的能力是公民的基礎素養，而真實的在地資料讓抽象變具體：學生會知道，自己所處的社會是可以被認識的，並學會如何認識它。",
          },
          evidence: {
            en: "This site's content and datasets are openly licensed (CC BY 4.0) for teaching reuse, and its methodology page documents the full checklist — definitions, units, coverage, limitations — behind every published figure.",
            zh: "本網站的內容與資料集採開放授權（CC BY 4.0），可供教學重複使用；「研究方法」頁完整記錄了每個發布數字背後的檢查清單——定義、單位、涵蓋範圍、限制。",
          },
          who: {
            en: "Teachers at secondary and tertiary levels, and trainers in any field that works with data.",
            zh: "中學與大專教師，以及任何與資料為伍的領域的培訓者。",
          },
          limitations: {
            en: "Curriculum time is constrained, teachers need confidence with the material, and data literacy builds slowly across a course of study rather than in a single lesson.",
            zh: "課程時間有限，教師需要熟悉教材，而數據素養是在整個學程中緩慢建立的，不是一節課就能完成。",
          },
        },
        {
          title: { en: "Report demographics with context, not alarm", zh: "以脈絡而非恐慌報導人口議題" },
          what: {
            en: "Journalists and editors reporting demographic statistics with their reference years, definitions, and international context — and resisting frames of doom or collapse that the data does not support.",
            zh: "記者與編輯在報導人口統計時，交代參考年份、定義與國際脈絡——並抗拒資料並不支持的崩壞或末日敘事框架。",
          },
          why: {
            en: "Public understanding of demographic change is shaped largely by how it is reported. Context transforms numbers from provocation into information.",
            zh: "公眾對人口變遷的理解，很大程度取決於報導方式。脈絡能將數字從刺激物轉化為資訊。",
          },
          evidence: {
            en: "The same verified facts — TFR 0.695 in 2025, 65+ share 20.06%, births 107,812 against deaths 200,268 — can be told as catastrophe or as documented reality requiring adaptation. The difference is framing, not evidence. This site's sources and comparisons are freely available for reference.",
            zh: "同樣幾個核驗過的事實——2025 年 TFR 0.695、65 歲以上占比 20.06%、出生 107,812 人對死亡 200,268 人——可以說成災難，也可以說成需要調適的既有現實。差別在框架，不在證據。本網站的來源與比較皆可自由引用。",
          },
          who: {
            en: "Reporters, editors, and writers covering society, economics, and policy.",
            zh: "跑社會、經濟與政策路線的記者、編輯與寫作者。",
          },
          limitations: {
            en: "Deadlines constrain verification, headlines compress nuance, and individual journalists work within editorial constraints they do not fully control.",
            zh: "截稿壓力限制查證、標題壓縮細緻度，而個別記者也只能在無法全盤掌控的編輯框架內工作。",
          },
        },
      ],
    },
    {
      id: "institutional",
      title: { en: "Institutional and public participation", zh: "制度與公共參與" },
      desc: {
        en: "Legitimate, nonpartisan channels through which residents can help improve institutions, public services, and shared outcomes.",
        zh: "透過正當、無黨派的管道，讓居民協助改善制度、公共服務與共同成果。",
      },
      actions: [
        {
          title: { en: "Take part in public consultations and civic meetings", zh: "參與公共政策諮詢與公民會議" },
          what: {
            en: "Responding to legitimate public consultations and civic meetings on services shaped by demographic change — long-term care, schools, transport, housing — through official, nonpartisan channels.",
            zh: "透過官方、無黨派的管道，參與受人口變遷影響的公共服務諮詢與公民會議——長期照顧、學校、運輸、居住。",
          },
          why: {
            en: "Services work better when designed with evidence from the people who use them. Consultation mechanisms exist at national and local levels and are open to residents.",
            zh: "服務若能納入使用者提供的證據，運作會更好。全國與地方層級都設有諮詢機制，且開放居民參與。",
          },
          evidence: {
            en: "Demographic change — documented in Chapter 01 — will reshape demand for public services for decades. Consultation processes are a standing, nonpartisan channel through which that knowledge can be conveyed.",
            zh: "人口變遷（見第一章）將在數十年間重塑公共服務的需求。諮詢程序是常設、無黨派的管道，讓這些知識得以傳遞。",
          },
          who: {
            en: "Any resident willing to spend the time; no special qualification is required, though relevant experience makes input more useful.",
            zh: "任何願意投入時間的居民；不需要特殊資格，但相關經驗會讓意見更有用。",
          },
          limitations: {
            en: "Consultations are usually advisory; their influence varies with process design and political attention, and participation takes time with no guaranteed outcome. This is influence, not control — and still worth doing.",
            zh: "諮詢通常僅具建議性質；影響力隨程序設計與政治關注度而異，參與需要時間，也無法保證結果。這是發揮影響力，不是掌握控制權——但依然值得做。",
          },
        },
        {
          title: { en: "Submit evidence-based comments on service design", zh: "對服務設計提出以證據為本的意見" },
          what: {
            en: "When commenting on proposed policies, service designs, or regulations — formally or in public discussion — attaching sources, reference years, and verifiable figures rather than impressions.",
            zh: "在對政策提案、服務設計或法規表示意見時——無論是正式程序或公共討論——附上來源、參考年份與可查證的數字，而非僅憑印象發言。",
          },
          why: {
            en: "Specific, evidenced comments are more usable by officials and more persuasive in public debate than general opinion, and they raise the quality of the surrounding conversation.",
            zh: "具體而有依據的意見，對機關更可用、在公共討論中也比泛泛之論更有說服力，而且能拉高整體對話的品質。",
          },
          evidence: {
            en: "Official statistics — such as the MOI population series covering 1958–2025 — are openly available and citable. This site's source registry models the practice of documenting provenance for every figure.",
            zh: "官方統計——如涵蓋 1958–2025 的內政部人口序列——均公開可查、可以引用。本網站的來源登記冊，即示範了為每個數字記錄出處的做法。",
          },
          who: {
            en: "Professionals and residents with relevant knowledge or lived experience of the service in question.",
            zh: "具備相關知識，或實際使用過該項服務的專業人士與居民。",
          },
          limitations: {
            en: "Not all processes weigh comments equally, and a well-evidenced comment can still be outweighed by other considerations. A comment is a contribution, not a veto.",
            zh: "並非所有程序都同等重視意見，一份證據充分的意見仍可能被其他考量壓過。意見是貢獻，不是否決權。",
          },
        },
        {
          title: { en: "Support and use open public data", zh: "支持並使用開放資料" },
          what: {
            en: "Using, correctly citing, and — where errors are found — reporting problems in official statistics and open-data publications, so the public data infrastructure stays accurate and maintained.",
            zh: "使用、正確引用官方統計與開放資料出版品，發現錯誤時提出通報，讓公共資料基礎建設保持準確並持續維運。",
          },
          why: {
            en: "Open, accurate official data is the foundation on which this project and countless quiet public decisions depend. Use and feedback are what sustain it.",
            zh: "公開而準確的官方資料，是本計畫以及無數日常公共決策賴以為生的地基。使用與回饋，正是維繫它的力量。",
          },
          evidence: {
            en: "Every figure in Chapter 01 depends on openly published MOI statistics. The difference between open and closed data is, quite literally, the difference between verifiable and unverifiable claims.",
            zh: "第一章的每一個數字，都依賴內政部公開發布的統計。開放與封閉資料的差別，說白了，就是可驗證與不可驗證的主張之間的差別。",
          },
          who: {
            en: "Anyone who works with public data — analysts, journalists, teachers, developers, students.",
            zh: "任何使用公共資料的人——分析師、記者、教師、開發者、學生。",
          },
          limitations: {
            en: "Feedback channels are uneven, corrections can be slow, and some data quality problems persist for years. Supporting open data is a long-game contribution with delayed and collective payoffs.",
            zh: "回饋管道良莠不齊，更正可能緩慢，有些資料品質問題會存在多年。支持開放資料是一場長期戰，回報是延遲的、集體的。",
          },
        },
      ],
    },
  ],
};

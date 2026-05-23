// 5-step curriculum — 3 layout variants (timeline / card / step)

const CURRICULUM = [
  {
    chip: "STEP 01",
    title: "피그마, 첫 만남",
    weeks: "1–2주차",
    weeksTotal: "2주",
    body: "낯선 도구의 두려움을 없애는 데서 시작합니다. 인터페이스, 단축키, 캔버스 감각까지 — 가장 기본이 평생 갑니다.",
    topics: ["인터페이스 투어", "프레임 vs 그룹", "단축키 30선", "오토 세이브와 버전 관리"],
  },
  {
    chip: "STEP 02",
    title: "도형과 타입으로 화면 그리기",
    weeks: "3–5주차",
    weeksTotal: "3주",
    body: "선 하나, 글자 하나를 쌓아 화면을 만듭니다. 정렬·간격·계층을 손에 익히는 가장 중요한 구간이에요.",
    topics: ["벡터 기본", "Pen / Boolean", "타입 시스템", "그리드 & 레이아웃"],
  },
  {
    chip: "STEP 03",
    title: "오토 레이아웃과 컴포넌트",
    weeks: "6–8주차",
    weeksTotal: "3주",
    body: "다시 그리지 않는 디자인. 한 번 만든 버튼이 100개의 화면을 책임지게 만드는 핵심 단계입니다.",
    topics: ["Auto Layout 패턴 10", "컴포넌트 & 베리언트", "프로퍼티 / 슬롯", "디자인 토큰 입문"],
  },
  {
    chip: "STEP 04",
    title: "프로토타이핑 & 인터랙션",
    weeks: "9–10주차",
    weeksTotal: "2주",
    body: "정지된 화면을 살아 움직이게. Smart Animate부터 조건 분기까지, 개발 전에 설득하는 화면을 만듭니다.",
    topics: ["Smart Animate", "변수 & 조건 인터랙션", "Flow & 사용자 시나리오", "테스트 핸드오프"],
  },
  {
    chip: "STEP 05",
    title: "디자인 시스템 & 핸드오프",
    weeks: "11–12주차",
    weeksTotal: "2주",
    body: "혼자가 아닌, 팀으로 일하는 디자이너의 마지막 한 걸음. 시스템·라이브러리·개발 협업까지 익히고 졸업합니다.",
    topics: ["라이브러리 운영", "토큰 → 스타일", "Dev Mode 핸드오프", "포트폴리오 정리"],
  },
];

// ---- Variant 1: vertical timeline ----
function CurriculumTimeline() {
  return (
    <div className="curr-timeline">
      {CURRICULUM.map((s, i) => (
        <div key={i} className="curr-step">
          <div className="curr-step__node">{String(i + 1).padStart(2, "0")}</div>
          <div>
            <span className="curr-step__chip">{s.chip}</span>
            <h3 className="curr-step__title">{s.title}</h3>
            <p className="curr-step__body">{s.body}</p>
            <div className="curr-step__topics">
              {s.topics.map((t, j) => (
                <span key={j} className="curr-step__topic">{t}</span>
              ))}
            </div>
          </div>
          <div className="curr-step__weeks">
            <strong>{s.weeksTotal}</strong>
            {s.weeks}
          </div>
        </div>
      ))}
    </div>
  );
}

// ---- Variant 2: card grid ----
function CurriculumCards() {
  return (
    <div className="curr-cards">
      {CURRICULUM.map((s, i) => (
        <div key={i} className="curr-card">
          <div className="curr-card__head">
            <span className="curr-card__num">{s.chip}</span>
            <span className="curr-card__week">{s.weeksTotal}<br />{s.weeks}</span>
          </div>
          <h3 className="curr-card__title">{s.title}</h3>
          <p className="curr-card__body">{s.body}</p>
          <div className="curr-card__topics">
            {s.topics.map((t, j) => (
              <span key={j} className="curr-card__topic">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ---- Variant 3: horizontal step with detail panel ----
function CurriculumSteps() {
  const [active, setActive] = React.useState(0);
  const s = CURRICULUM[active];
  return (
    <>
      <div className="curr-steps">
        {CURRICULUM.map((s, i) => (
          <button
            key={i}
            className={"curr-h" + (i === active ? " is-active" : "")}
            onClick={() => setActive(i)}
            style={{ background: "none", border: "none", cursor: "pointer", textAlign: "center" }}
          >
            <div className="curr-h__node">
              <span className="curr-h__num">STEP <strong>{String(i + 1).padStart(2, "0")}</strong></span>
            </div>
            <h4 className="curr-h__title">{s.title}</h4>
            <div className="curr-h__week">{s.weeks} · {s.weeksTotal}</div>
            <p className="curr-h__body">{s.body.split(".")[0]}.</p>
          </button>
        ))}
      </div>
      <div className="curr-steps-detail">
        <div>
          <span className="curr-steps-detail__chip">{s.chip} · {s.weeks}</span>
          <h3 className="curr-steps-detail__title">{s.title}</h3>
        </div>
        <div className="curr-steps-detail__topics">
          {s.topics.map((t, j) => (
            <div key={j} className="curr-steps-detail__topic">{t}</div>
          ))}
        </div>
      </div>
    </>
  );
}

function Curriculum({ layout }) {
  const Body = layout === "card" ? CurriculumCards
            : layout === "step" ? CurriculumSteps
            : CurriculumTimeline;
  return (
    <section className="curriculum" data-screen-label="04 Curriculum" id="curriculum">
      <div className="tov-grid">
        <div className="section-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56 }}>
          <div>
            <div className="section-head__eyebrow">CURRICULUM · 5 STEPS · 12 WEEKS</div>
            <h2 className="section-head__title">
              피그마, <em style={{ fontStyle: "normal", color: "var(--tov-action)" }}>다섯 걸음</em>이면 충분합니다
            </h2>
            <p className="section-head__sub">
              매주 한 가지에만 집중해요. 막연한 ‘피그마 잘하기’가 아니라, 다음 주에 쓸 수 있는 것만 단단하게.
            </p>
          </div>
          <div role="tablist" className="curriculum__layout-tabs">
            {[
              ["timeline", "타임라인"],
              ["card", "카드"],
              ["step", "스텝"],
            ].map(([id, lb]) => (
              <button
                key={id}
                role="tab"
                className={"curriculum__layout-tab" + (layout === id ? " is-active" : "")}
                onClick={() => window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { curriculumLayout: id } }, "*")
                          || window.__setCurriculumLayout?.(id)}
              >
                {lb}
              </button>
            ))}
          </div>
        </div>
        <Body />
      </div>
    </section>
  );
}

Object.assign(window, { Curriculum, CURRICULUM });

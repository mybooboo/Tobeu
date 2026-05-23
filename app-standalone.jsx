// App — composes all sections of the Figma course landing page

const COURSE_INFO = {
  name: "피그마 마스터 클래스 · 5단계 12주 과정",
  duration: "12주 (주 1회 / 화요일 19:30~22:00)",
  location: "TOV 디자인 스쿨 마포 캠퍼스",
  price: "1,386,000원",
  priceOriginal: "1,980,000원",
  discount: "30"
};

function HeroMeta() {
  return (
    <div className="course-hero__meta">
      <div className="course-hero__meta-item">
        <span className="course-hero__meta-ic"><CalendarIcon /></span>
        <div>
          <div className="course-hero__meta-lb">개강일</div>
          <div className="course-hero__meta-val">2026.06.01</div>
        </div>
      </div>
      <div className="course-hero__meta-item">
        <span className="course-hero__meta-ic"><ClockIcon /></span>
        <div>
          <div className="course-hero__meta-lb">수업 시간</div>
          <div className="course-hero__meta-val">화 · 19:30~22:00</div>
        </div>
      </div>
      <div className="course-hero__meta-item">
        <span className="course-hero__meta-ic"><MapPinIcon /></span>
        <div>
          <div className="course-hero__meta-lb">장소</div>
          <div className="course-hero__meta-val">마포 캠퍼스</div>
        </div>
      </div>
      <div className="course-hero__meta-item">
        <span className="course-hero__meta-ic"><UsersIcon /></span>
        <div>
          <div className="course-hero__meta-lb">정원</div>
          <div className="course-hero__meta-val">소수정예 16명</div>
        </div>
      </div>
    </div>);

}

function Hero({ onApply }) {
  return (
    <section className="course-hero" data-screen-label="02 Hero">
      <div className="course-hero__capsule" />
      <div className="tov-grid course-hero__grid">
        <div>
          <div className="course-hero__eyebrow">
            <span className="dot" />
            오프라인 강의 · 10기 모집중
          </div>
          <h1 className="course-hero__title">
            피그마, <em>처음 만나는 그날</em>부터<br />
            <strong>실무자처럼</strong> 다루는 그날까지
          </h1>
          <p className="course-hero__sub">
            기초부터 디자인 시스템까지, 일주일에 한 가지씩.<br />
            5단계 12주 동안 손에 익히는 오프라인 피그마 클래스.
          </p>
          <HeroMeta />
          <div className="course-hero__ctas">
            <button className="tov-btn tov-btn--large tov-btn--fill" onClick={onApply} style={{ fontWeight: "500" }}>
              지금 신청하기 <ArrowRightIcon className="tov-btn__icon" />
            </button>
            <a href="#curriculum" className="tov-btn tov-btn--large tov-btn--outline">
              커리큘럼 살펴보기
            </a>
          </div>
        </div>

        {/* Price / signup card */}
        <aside className="price-card">
          <div className="price-card__badge">얼리버드 D-7</div>
          <div className="price-card__eyebrow">10기 · 오프라인 정규반</div>
          <h3 className="price-card__name">피그마 마스터 클래스<br />5단계 · 12주 과정</h3>

          <div className="price-card__row">
            <span className="price-card__discount">30% OFF</span>
            <span className="price-card__original">{COURSE_INFO.priceOriginal}</span>
          </div>
          <div className="price-card__final">
            {COURSE_INFO.price}<small>(부가세 포함)</small>
          </div>
          <div className="price-card__deadline">2026.05.31까지 얼리버드 신청 한정</div>

          <button className="tov-btn tov-btn--large tov-btn--fill price-card__cta" onClick={onApply} style={{ fontWeight: "600" }}>
            신청하기
          </button>

          <div className="price-card__benefit">
            <div className="price-card__benefit-item"><CheckIcon style={{ width: 16, height: 16 }} /> 6개월 무이자 할부 가능</div>
            <div className="price-card__benefit-item"><CheckIcon style={{ width: 16, height: 16 }} /> 수강 종료 후 평생 다시보기 VOD</div>
            <div className="price-card__benefit-item"><CheckIcon style={{ width: 16, height: 16 }} /> 1:1 포트폴리오 리뷰 1회 포함</div>
          </div>
        </aside>
      </div>
    </section>);

}

function TargetSection() {
  const items = [
  { num: "01", img: "assets/shortcut-04.png", title: "디자인을 처음 시작하는 분", body: "‘피그마라는 게 있다더라’ 정도만 들어보신 분도 좋아요. 마우스 잡는 법부터 차근차근 시작합니다." },
  { num: "02", img: "assets/shortcut-02.png", title: "PPT·스케치에서 옮겨가는 분", body: "다른 도구에 익숙한 분일수록 빨라요. 손에 익은 작업 흐름을 피그마 문법으로 옮겨드릴게요." },
  { num: "03", img: "assets/work-01-frontend.png", title: "개발자·기획자인 분", body: "직접 시안을 만들고 PM·디자이너와 같은 언어로 이야기하고 싶은 분께. 협업이 두 배 빨라집니다." },
  { num: "04", img: "assets/shortcut-05.png", title: "이미 쓰고 있지만 막막한 분", body: "오토 레이아웃·컴포넌트·디자인 시스템 — 매번 미루던 그 단계, 함께 정리하고 졸업해요." }];

  return (
    <section className="target" data-screen-label="03 Target Audience">
      <div className="tov-grid">
        <div className="section-head">
          <div className="section-head__eyebrow">FOR WHOM</div>
          <h2 className="section-head__title">이런 분께 추천해요</h2>
          <p className="section-head__sub">
            완전 초보부터 실무 경험자까지 — 단계별로 함께 가는 클래스라 어느 위치에서 시작해도 괜찮아요.
          </p>
        </div>
        <div className="target__grid">
          {items.map((it) =>
          <div key={it.num} className="target-card">
              <div className="target-card__num">{it.num}</div>
              <img className="target-card__img" src={it.img} alt="" />
              <h3 className="target-card__title">{it.title}</h3>
              <p className="target-card__body">{it.body}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function FeaturesSection() {
  const items = [
  { num: "FEATURE 01", title: <>주 1회 <em>오프라인</em> 정규반</>, body: "마포 캠퍼스에서 강사와 같은 공간에서 디자인합니다. 화면 너머로는 전해지지 않는 손끝의 디테일까지.", tag: "주 1회 · 3시간" },
  { num: "FEATURE 02", title: <>소수정예 <em>16명</em></>, body: "한 기수 16명 한정. 강사가 모든 수강생의 화면을 매주 직접 보고 한 명씩 피드백 드립니다.", tag: "선착순 마감" },
  { num: "FEATURE 03", title: <><em>1:1 포트폴리오</em> 리뷰</>, body: "졸업 즈음 강사 루씨와 1:1로 만나 포트폴리오를 정리합니다. 다음 커리어의 첫 장을 함께 써요.", tag: "1회 60분 포함" },
  { num: "FEATURE 04", title: <>실무 <em>프로젝트</em> 기반</>, body: "가짜 더미가 아니라, 실제 서비스를 가정한 과제로 진행합니다. 그대로 포트폴리오에 담을 수 있도록.", tag: "총 5개 과제" },
  { num: "FEATURE 05", title: <>평생 <em>VOD</em> 다시보기</>, body: "수업이 끝나도 강의 영상은 사라지지 않아요. 새 기수가 열릴 때마다 업데이트되는 자료까지 함께.", tag: "기간 제한 없음" },
  { num: "FEATURE 06", title: <>현업 <em>네트워크</em></>, body: "졸업 후에도 이어지는 토브 동문 슬랙. 채용·외주·스터디까지, 강사와 선배 기수에게 계속 묻고 답해요.", tag: "동문 슬랙 초대" }];

  return (
    <section className="features" data-screen-label="04 Features">
      <div className="tov-grid">
        <div className="section-head">
          <div className="section-head__eyebrow">BENEFITS</div>
          <h2 className="section-head__title">왜 TOV의 피그마 클래스인가요?</h2>
          <p className="section-head__sub">
            12주 동안 무엇이 달라지는지, 무엇을 제공해 드리는지 솔직하게 적어두었어요.
          </p>
        </div>
        <div className="features__grid">
          {items.map((it, i) =>
          <div key={i} className="feature">
              <div className="feature__num">{it.num}</div>
              <h3 className="feature__title">{it.title}</h3>
              <p className="feature__body">{it.body}</p>
              <span className="feature__tag">{it.tag}</span>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function InstructorSection() {
  return (
    <section className="instructor" data-screen-label="06 Instructor">
      <div className="tov-grid instructor__grid">
        <div className="instructor__portrait">
          <span className="instructor__portrait-tag">LEAD INSTRUCTOR</span>
          <div className="instructor__mascot" aria-hidden="true" />
          <div className="instructor__portrait-handle">
            <h3 className="instructor__portrait-name">박루씨<br />Lucy Park</h3>
            <p className="instructor__portrait-role">前 카카오 · 토스 프로덕트 디자이너<br />現 TOV 디자인 스쿨 대표</p>
          </div>
        </div>

        <div className="instructor__body">
          <div className="instructor__hi">안녕하세요, 강사 루씨예요</div>
          <h2 className="instructor__name">
            처음 피그마를 켰을 때 막막함을<br /><strong>저는 아직도 기억해요.</strong>
          </h2>
          <p className="instructor__lede">
            그래서 이 수업은 ‘피그마를 잘 가르치는 사람’이 아니라, ‘피그마 앞에서 막막했던 사람’이 만든 수업이에요.
          </p>
          <blockquote className="instructor__story">
            10년 전, 저도 PPT로 화면을 그리던 기획자였어요. 처음 피그마를 켜고는 1시간 동안 사각형 하나만 만들다가 노트북을 덮었던 기억이 나요. 그런데 누가 옆에서 “이 도구는 이렇게 생각하면 돼” 한 마디만 해줬으면, 그날 저녁이 조금 덜 막막했을 텐데.
            <br /><br />
            카카오와 토스에서 8년을 디자이너로 일하고, 1,200명에게 피그마를 가르치면서 깨달았어요. 모두에게 필요한 건 ‘기능 100개’가 아니라, 다음 주에 쓸 수 있는 ‘이 한 가지’라는 걸. 12주 동안, 그 ‘이 한 가지’를 매주 함께 챙길게요.
          </blockquote>

          <div className="instructor__stats">
            <div className="instructor__stat">
              <div className="instructor__stat-val">10<small>년차</small></div>
              <div className="instructor__stat-lb">프로덕트 디자인 경력</div>
            </div>
            <div className="instructor__stat">
              <div className="instructor__stat-val">1,200<small>명+</small></div>
              <div className="instructor__stat-lb">누적 수강생</div>
            </div>
            <div className="instructor__stat">
              <div className="instructor__stat-val">4.94<small>/5</small></div>
              <div className="instructor__stat-lb">평균 강의 만족도</div>
            </div>
          </div>

          <div className="instructor__career-h">CAREER</div>
          <ul className="instructor__career">
            <li><span className="instructor__career-year">2024–</span>TOV 디자인 스쿨 대표 / 강사</li>
            <li><span className="instructor__career-year">2019–24</span>토스 (Toss) Senior Product Designer</li>
            <li><span className="instructor__career-year">2016–19</span>카카오 Kakao Product Designer</li>
            <li><span className="instructor__career-year">2024</span>저서 《처음부터 다시 보는 피그마》</li>
            <li><span className="instructor__career-year">2023</span>Figma Korea Community Speaker</li>
          </ul>
        </div>
      </div>
    </section>);

}

function ReviewsSection() {
  const items = [
  {
    stars: 5,
    quote: "‘이걸 왜 이제야 알았지’를 매주 했어요",
    body: "오토 레이아웃이 그렇게 답답한 기능인 줄 알았는데, 3주차 끝나고는 안 쓰면 더 답답해졌어요. 루씨 강사님이 매번 ‘왜 이렇게 쓰는가’를 짚어주시는 게 진짜 큰 차이였습니다.",
    name: "김OO", meta: "프로덕트 디자이너 · 8기 수료"
  },
  {
    stars: 5,
    quote: "개발자인데 디자이너랑 말이 통하기 시작했어요",
    body: "FE 개발자라 시안을 받아만 봤는데, 이제는 직접 그려서 미팅에 가져가요. 디자이너 동료가 ‘설명이 줄었다’고 좋아하더라고요. 협업이 정말 두 배 빨라졌어요.",
    name: "이OO", meta: "프론트엔드 개발자 · 9기 수료"
  },
  {
    stars: 5,
    quote: "포트폴리오 리뷰 한 번이 이직을 바꿨어요",
    body: "마지막 1:1 리뷰에서 받은 피드백대로 고쳐서 지원했더니, 두 군데서 연락이 왔어요. 강의 자체도 좋지만 졸업 이후를 정말 챙겨주신다는 느낌이 들었어요.",
    name: "박OO", meta: "주니어 디자이너 · 7기 수료"
  },
  {
    stars: 5,
    quote: "16명 소수정예, 진짜 다 봐주세요",
    body: "온라인에서 다른 강의도 들어봤지만, 매주 내 화면을 강사님이 직접 봐주는 건 결이 다른 경험이에요. 같이 듣는 동기들 작업도 보면서 자극도 많이 받았어요.",
    name: "최OO", meta: "기획자 · 9기 수료"
  },
  {
    stars: 5,
    quote: "디자인 시스템, 드디어 정리했어요",
    body: "회사에서 ‘시스템 좀 만들어 봐’ 소리만 듣고 미루던 일을 강의 마지막 주에 졸업 작품으로 끝냈어요. 그날 회식에서 팀장님이 술 사주셨습니다.",
    name: "정OO", meta: "인하우스 디자이너 · 8기 수료"
  },
  {
    stars: 5,
    quote: "‘이런 분께 추천’에 제가 정확히 있었어요",
    body: "비전공자 · 30대 · 첫 디자인 — 시작하기 전엔 정말 막막했는데, 첫 주차 끝나고 ‘아, 따라갈 수 있겠다’ 싶더라고요. 12주 후엔 진짜 포트폴리오 한 개가 생겼어요.",
    name: "윤OO", meta: "비전공 입문 · 9기 수료"
  }];

  return (
    <section className="reviews" data-screen-label="07 Reviews">
      <div className="tov-grid">
        <div className="reviews__head">
          <div>
            <div className="section-head__eyebrow">REVIEWS · 누적 1,200+ 수강생</div>
            <h2 className="section-head__title">먼저 시작한 분들의 후기</h2>
          </div>
          <div className="reviews__score">
            <div>
              <div className="reviews__score-stars">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <div className="reviews__score-meta">9기 기준 · 후기 142건</div>
            </div>
            <div className="reviews__score-val">4.94<small>/5</small></div>
          </div>
        </div>
        <div className="reviews__grid">
          {items.map((r, i) =>
          <article key={i} className="review">
              <div className="review__stars">
                {[...Array(r.stars)].map((_, j) => <StarIcon key={j} />)}
              </div>
              <h3 className="review__quote">“{r.quote}”</h3>
              <p className="review__body">{r.body}</p>
              <div className="review__author">
                <div className="review__avatar">{r.name[0]}</div>
                <div>
                  <div className="review__author-name">{r.name}</div>
                  <div className="review__author-meta">{r.meta}</div>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}

function CTAStrip({ onApply }) {
  return (
    <section className="cta-strip" data-screen-label="08 Final CTA">
      <div className="tov-grid cta-strip__grid">
        <div>
          <div className="cta-strip__eyebrow">10기 · 2026.06.01 개강 · 선착순 16명</div>
          <h2 className="cta-strip__title">
            <strong>5월 31일</strong>까지, <strong>30%</strong> 얼리버드 가격
          </h2>
          <p className="cta-strip__sub">상담은 24시간 안에 드릴게요. 결제는 상담 후 진행됩니다.</p>
        </div>
        <button className="cta-strip__cta" onClick={onApply}>
          신청하기 <ArrowRightIcon />
        </button>
      </div>
    </section>);

}

// -------- Tweaks panel --------
function TweaksApp({ tweaks, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="커리큘럼 레이아웃">
        <TweakRadio
          value={tweaks.curriculumLayout}
          onChange={(v) => setTweak("curriculumLayout", v)}
          options={[
          { value: "timeline", label: "타임라인" },
          { value: "card", label: "카드" },
          { value: "step", label: "스텝" }]
          } />
        
      </TweakSection>
    </TweaksPanel>);

}

// -------- Main App --------
function App() {
  const [tweaks, setTweaks] = useTweaks(window.TWEAK_DEFAULTS);
  const [modalOpen, setModalOpen] = React.useState(false);

  // expose setter for the in-section tab buttons in curriculum.jsx
  React.useEffect(() => {
    window.__setCurriculumLayout = (v) => setTweaks("curriculumLayout", v);
    return () => {window.__setCurriculumLayout = null;};
  }, [setTweaks]);

  const onApply = () => setModalOpen(true);

  return (
    <>
      <Header />
      <Hero onApply={onApply} />
      <TargetSection />
      <FeaturesSection />
      <Curriculum layout={tweaks.curriculumLayout} />
      <InstructorSection />
      <ReviewsSection />
      <CTAStrip onApply={onApply} />
      <Footer />

      <SignupModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        course={COURSE_INFO} />
      

      <TweaksApp tweaks={tweaks} setTweak={setTweaks} />
    </>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
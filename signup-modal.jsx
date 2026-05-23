// Signup modal — form + validation + success state
function SignupModal({ open, onClose, course }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "", phone: "", email: "",
    cohort: "10기 (2026.06.01 개강)",
    referrer: "",
    agree: false, marketing: false,
  });
  const [errors, setErrors] = React.useState({});

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const set = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: null }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "이름을 입력해 주세요";
    else if (form.name.trim().length < 2) e.name = "이름은 2자 이상으로 입력해 주세요";
    if (!form.phone.trim()) e.phone = "연락처를 입력해 주세요";
    else if (!/^01[0-9]-?\d{3,4}-?\d{4}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "올바른 휴대폰 번호를 입력해 주세요 (예: 010-1234-5678)";
    if (!form.email.trim()) e.email = "이메일을 입력해 주세요";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "이메일 형식을 확인해 주세요";
    if (!form.agree) e.agree = "약관에 동의해 주세요";
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSubmitted(true);
    }
  };

  const close = () => {
    onClose();
    // reset on next open
    setTimeout(() => {
      setSubmitted(false);
      setErrors({});
      setForm({
        name: "", phone: "", email: "",
        cohort: "10기 (2026.06.01 개강)",
        referrer: "",
        agree: false, marketing: false,
      });
    }, 300);
  };

  return (
    <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="signup-title">
        <button className="modal__close" onClick={close} aria-label="닫기"><CloseIcon /></button>

        {submitted ? (
          <div className="modal__success">
            <div className="modal__success-ic"><CheckIcon /></div>
            <h2 className="modal__success-title">신청이 접수되었어요</h2>
            <p className="modal__success-sub">
              {form.name}님, 입력해주신 연락처로<br />24시간 안에 상담 전화를 드릴게요.
            </p>
            <div className="modal__success-info">
              <div className="modal__success-info-row"><span>강의</span><strong>{course.name}</strong></div>
              <div className="modal__success-info-row"><span>기수</span><strong>{form.cohort}</strong></div>
              <div className="modal__success-info-row"><span>연락처</span><strong>{form.phone}</strong></div>
              <div className="modal__success-info-row"><span>이메일</span><strong>{form.email}</strong></div>
            </div>
            <button className="modal__submit" onClick={close}>확인</button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate>
            <div className="modal__eyebrow">강의 신청</div>
            <h2 id="signup-title" className="modal__title">함께 시작해요</h2>
            <p className="modal__sub">정보를 남겨주시면 빠르게 안내해 드릴게요. 결제는 상담 후 진행됩니다.</p>

            <div className="modal__summary">
              <div className="modal__summary-row"><span>강의명</span><strong>{course.name}</strong></div>
              <div className="modal__summary-row"><span>기간</span><strong>{course.duration}</strong></div>
              <div className="modal__summary-row"><span>장소</span><strong>{course.location}</strong></div>
              <div className="modal__summary-row modal__summary-row--total">
                <span>수강료 (얼리버드 30% 할인)</span>
                <strong>{course.price}</strong>
              </div>
            </div>

            <div className="field__row">
              <div className="field">
                <label className="field__label" htmlFor="f-name">이름<small>*</small></label>
                <input
                  id="f-name"
                  className={"field__input" + (errors.name ? " has-error" : "")}
                  type="text" autoComplete="name"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="홍길동"
                />
                {errors.name && <div className="field__error">{errors.name}</div>}
              </div>
              <div className="field">
                <label className="field__label" htmlFor="f-phone">연락처<small>*</small></label>
                <input
                  id="f-phone"
                  className={"field__input" + (errors.phone ? " has-error" : "")}
                  type="tel" autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder="010-1234-5678"
                />
                {errors.phone && <div className="field__error">{errors.phone}</div>}
              </div>
            </div>

            <div className="field">
              <label className="field__label" htmlFor="f-email">이메일<small>*</small></label>
              <input
                id="f-email"
                className={"field__input" + (errors.email ? " has-error" : "")}
                type="email" autoComplete="email"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                placeholder="figma@example.com"
              />
              {errors.email && <div className="field__error">{errors.email}</div>}
            </div>

            <div className="field__row">
              <div className="field">
                <label className="field__label" htmlFor="f-cohort">희망 기수</label>
                <select
                  id="f-cohort"
                  className="field__select"
                  value={form.cohort}
                  onChange={(e) => set("cohort", e.target.value)}
                >
                  <option>10기 (2026.06.01 개강)</option>
                  <option>11기 (2026.07.06 개강)</option>
                  <option>12기 (2026.08.10 개강)</option>
                  <option>아직 정하지 못했어요</option>
                </select>
              </div>
              <div className="field">
                <label className="field__label" htmlFor="f-ref">가입 경로</label>
                <select
                  id="f-ref"
                  className="field__select"
                  value={form.referrer}
                  onChange={(e) => set("referrer", e.target.value)}
                >
                  <option value="">선택해 주세요</option>
                  <option>검색 (구글/네이버)</option>
                  <option>인스타그램</option>
                  <option>유튜브</option>
                  <option>지인 추천</option>
                  <option>오프라인 행사</option>
                  <option>기타</option>
                </select>
              </div>
            </div>

            <div className={"field field--check" + (errors.agree ? " has-error" : "")}>
              <input
                id="f-agree" type="checkbox"
                checked={form.agree}
                onChange={(e) => set("agree", e.target.checked)}
              />
              <label htmlFor="f-agree">
                <strong>[필수]</strong> 개인정보 수집·이용에 동의합니다. <a href="#" onClick={(e) => e.preventDefault()}>자세히 보기</a>
                {errors.agree && <div className="field__error" style={{ marginTop: 6 }}>{errors.agree}</div>}
              </label>
            </div>
            <div className="field field--check" style={{ borderTop: "none", paddingTop: 0 }}>
              <input
                id="f-marketing" type="checkbox"
                checked={form.marketing}
                onChange={(e) => set("marketing", e.target.checked)}
              />
              <label htmlFor="f-marketing">
                <strong>[선택]</strong> 새 기수 오픈, 얼리버드 할인 등 마케팅 정보 수신에 동의합니다.
              </label>
            </div>

            <button type="submit" className="modal__submit">신청 접수하기</button>
          </form>
        )}
      </div>
    </div>
  );
}

window.SignupModal = SignupModal;

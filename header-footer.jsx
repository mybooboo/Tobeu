// Header & Footer — adapted from TOBEU UI kit for the course-detail page
function Header() {
  return (
    <header className="tov-header" data-screen-label="01 Course / Header">
      <div className="tov-header__util">
        <div className="tov-grid tov-header__util-grid">
          <span>로그인</span>
          <i className="tov-vsep" />
          <span>회원가입</span>
          <i className="tov-vsep" />
          <span>마이클래스</span>
          <i className="tov-vsep" />
          <span>고객센터</span>
        </div>
      </div>
      <div className="tov-grid tov-header__main">
        <a className="tov-logo" href="#" aria-label="TOBEU" style={{ fontWeight: "700" }}>TOBEU</a>
        <nav className="tov-gnb">
          <a data-label="회사소개">회사소개</a>
          <a data-label="인기강의">인기강의</a>
          <a data-label="최신 트랜드">최신 트랜드</a>
          <a className="active" data-label="수강신청">수강신청</a>
        </nav>
        <div className="tov-header__icons">
          <button className="tov-iconbtn" aria-label="search"><SearchIcon /></button>
          <button className="tov-iconbtn" aria-label="menu"><DrawerIcon /></button>
        </div>
      </div>
    </header>);

}

function Footer() {
  return (
    <footer className="tov-footer">
      <div className="tov-grid tov-footer__policy">
        <a>개인정보</a><a>약관정책</a><a>신고/안내</a><a>강의 제안</a><a>장학제도</a>
      </div>
      <div className="tov-grid tov-footer__main">
        <div className="tov-footer__contacts">
          <div className="tov-footer__line">
            <span className="tov-footer__label">콜센터</span>
            <PhoneCircleIcon className="tov-footer__phone" />
            <span className="tov-footer__num">15888‑1000</span>
            <span className="tov-footer__hours">(평일 09:00~18:00)</span>
            <i className="tov-vsep tov-vsep--dark" />
            <span className="tov-footer__label tov-footer__label--sm">강의문의</span>
            <span className="tov-footer__num tov-footer__num--sm">1588‑4321</span>
            <span className="tov-footer__hours">(평일 09:00~17:00)</span>
            <i className="tov-vsep tov-vsep--dark" />
            <span className="tov-footer__label tov-footer__label--sm">멤버십문의</span>
            <span className="tov-footer__num tov-footer__num--sm">82‑2‑2125‑1000</span>
          </div>
          <div className="tov-footer__addr">
            03159 서울특별시 마포구 성산로77 토브디자인그룹 &nbsp;&nbsp; 대표이사 박루씨 &nbsp;&nbsp; 사업자등록번호 204‑71‑78251
          </div>
          <div className="tov-footer__copy">© TOBEU EDUCATION CO.,LTD.</div>
        </div>
        <div className="tov-footer__family">
          <span>토브 디자인 그룹 패밀리 사이트</span>
          <span className="tov-footer__chev">›</span>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { Header, Footer });
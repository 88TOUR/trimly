// src/components/Hero.jsx
function Hero() {
  const handlePrimaryClick = () => {
    // TODO: 나중에 구글폼 / 사전신청 링크 연결
    // window.open('https://your-form-url', '_blank');
  };

  const handleSecondaryClick = () => {
    // TODO: 향후 아래로 스크롤 / 섹션 이동 등 연결 가능
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-tag">
        <span className="hero-tag-dot"></span>
        데이터 기반 다이어트 보조 앱
      </div>

      <h1 className="hero-title">
        당신의 <span>진짜 데이터</span>로만
        <br />
        설계되는 감량 경험
      </h1>

      <p className="hero-subtitle">
        trimly는 체지방이 실제로 감량되는 과정에서 쌓이는{' '}
        <br />
        <strong>식단 · 수면 · 운동 데이터</strong>를 분석해
       
        당신만의 감량 패턴을 찾아주는  <br />
        <strong>다이어트 보조</strong> 어플리케이션입니다.
      </p>

      <div className="hero-cta-group">
        <button className="btn btn-primary" onClick={handlePrimaryClick}>
          체중 감량 데이터 제공하기
        </button>
        <button className="btn btn-secondary" onClick={handleSecondaryClick}>
          trimly가 궁금해요
        </button>
      </div>

      <p className="hero-note">
        ※ 현재 데이터 수집 및 모델 학습을 진행 중입니다.
      </p>
    </section>
  );
}

export default Hero;
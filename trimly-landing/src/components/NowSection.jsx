// src/components/NowSection.jsx
function NowSection() {
  return (
    <section>
      <div className="section-label">Now</div>
      <h2 className="section-title">
        trimly는 지금,
        <br />
        <span>당신의 감량 과정</span>이 필요합니다.
      </h2>
      <p className="section-text">
        다양한 체형, 직업, 일정, 생활 패턴을 가진 사람들이 함께 모여야
        <br />
        더 정교한 개인 맞춤 모델이 완성됩니다.
      </p>

      <div className="highlight-box">
        체중 감량 과정을 공유해주신 분들께는
        <br />
        완성된 trimly 앱을
        <strong> 가장 먼저, 가장 깊이 있게</strong> 경험하실 수 있는
        <br />
        초기 테스트 기회를 제공합니다.
      </div>
    </section>
  );
}

export default NowSection;
// src/components/ProblemSection.jsx
function ProblemSection() {
  return (
    <section>
      <div className="section-label">Problem</div>
      <h2 className="section-title">
        기록은 열심히 했는데,
        <br />
        뭐가 나에게 맞는지 모르겠나요?
      </h2>
      <p className="section-text">
        칼로리만 세는 식단 앱은 <br />
        ‘내 몸의 패턴’을 설명해주지 못합니다.
        <br />
        <br />
        trimly는{' '}
        <strong>실제 체지방 감량에 성공한 사람들의 데이터</strong>를 기반으로,
        당신과 비슷한 패턴을 가진 사람들을 찾고,
        <br />
        그들의 식단 · 수면 · 운동 방식을 함께 보여줍니다.
      </p>
    </section>
  );
}

export default ProblemSection;
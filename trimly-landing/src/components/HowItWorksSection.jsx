// src/components/HowItWorksSection.jsx
function HowItWorksSection() {
  return (
    <section id="how-it-works">
      <div className="section-label">How trimly works</div>
      <h2 className="section-title">
        <span>데이터 수집 → 전처리 → 개인 맞춤</span>
        <br />
        감량 과정이 질문이 됩니다.
      </h2>

      <div className="data-flow">
        <div className="data-step">
          <div className="data-step-icon">1</div>
          <div>
            <div className="data-step-title">실제 감량 데이터 수집</div>
            <div className="data-step-text">
              체지방률, 체중 변화, 먹었던 음식, 수면 패턴, 운동 시간 등
              감량 과정 전체를 기록합니다.
            </div>
          </div>
        </div>

        <div className="data-step">
          <div className="data-step-icon">2</div>
          <div>
            <div className="data-step-title">데이터 전처리 & 패턴 분석</div>
            <div className="data-step-text">
              노이즈를 제거하고, 체형·생활 리듬·운동량에 따라 데이터를
              정리한 뒤, 공통 패턴을 찾아냅니다.
            </div>
          </div>
        </div>

        <div className="data-step">
          <div className="data-step-icon">3</div>
          <div>
            <div className="data-step-title">당신에게 맞춘 다이어트 보조</div>
            <div className="data-step-text">
              당신과 가장 비슷한 패턴 그룹을 기반으로, 권장 식단, 수면
              리듬, 운동 강도를 제안하는 보조 앱으로 이어집니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
import Layout from "../components/Layout";

function Privacy() {
  return (
    <Layout>
      <section className="fade-section visible">
        <div className="section-label">Data & Privacy</div>
        <h2 className="section-title">
          당신의 데이터는
          <br />
          <span>오직 연구와 개인화</span>에만 사용됩니다.
        </h2>
        <p className="section-text">
          trimly는 초기 단계에서 수집한 데이터를 다음의 목적에 한해서만
          사용합니다.
          <br />
          <br />
          1. 체지방 감량 패턴 분석 및 모델 학습
          <br />
          2. 개인 맞춤 추천 로직 고도화
          <br />
          3. 통계적 · 집계된 형태의 인사이트 도출
          <br />
          <br />
          이름, 이메일과 같은 식별 정보는
          <br />
          감량 데이터와 분리하여 관리하며,
          <br />
          동의 없이 외부에 공유하지 않습니다.
          <br />
          <br />
          추후 정식 서비스 오픈 시,
          <br />
          보다 상세한 개인정보 처리방침과 함께 다시 안내드리겠습니다.
        </p>
      </section>
    </Layout>
  );
}

export default Privacy;
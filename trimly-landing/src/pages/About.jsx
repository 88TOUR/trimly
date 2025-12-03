import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <section className="fade-section visible">
        <div className="section-label">About trimly</div>
        <h2 className="section-title">
          trimly는
          <br />
          <span>실제 감량 데이터</span>를 수집·연구합니다.
        </h2>
        <p className="section-text">
          우리는 단순히 칼로리 계산기를 만드는 것이 아니라,
          <br />
          사람들이 실제로 체지방을 감량해 나가는 전 과정을 기록하고,
          <br />
          거기에서 공통된 패턴을 찾고자 합니다.
          <br />
          <br />
          · 무엇을, 언제, 얼마나 먹었는지
          <br />
          · 얼마나 잤는지, 수면 리듬은 어떤지
          <br />
          · 일/운동/생활 패턴은 어떤 구조인지
          <br />
          <br />
          이 모든 데이터를 전처리하고 정리해
          <br />
          “당신과 비슷한 사람들은 어떤 방식으로 감량에 성공했는가?”
          를 보여주는 것이 trimly의 목표입니다.
        </p>
      </section>
    </Layout>
  );
}

export default About;
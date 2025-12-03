// src/components/EarlyAccessSection.jsx
import { useState } from 'react';

function EarlyAccessSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    goal: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 여기서 추후 실제 API/폼 연동
    console.log('trimly early access form:', form);
    alert('초기 테스트 신청이 임시로 콘솔에 저장되었습니다. (추후 연동 예정)');
  };

  return (
    <section>
      <div className="section-label">Early access</div>
      <h2 className="section-title">
        trimly 초기 테스트에 참여하고,
        <br />
        내 데이터를 미래의 나를 위한 자산으로.
      </h2>

      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">이름</label>
          <input
            id="name"
            type="text"
            placeholder="예) 김트림"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="email"
            placeholder="초기 테스트 안내를 받을 이메일"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="goal">감량 목표 (kg)</label>
          <input
            id="goal"
            type="number"
            inputMode="numeric"
            placeholder="예) 7"
            value={form.goal}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          초기 테스트 소식 받기
        </button>
      </form>
    </section>
  );
}

export default EarlyAccessSection;
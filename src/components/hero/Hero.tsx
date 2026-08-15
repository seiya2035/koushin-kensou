import './style.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__lead">
            <span className="hero__lead-quote">「外壁塗装」</span>をお考えの方！
          </p>
          <h1 className="hero__title">
            <span className="hero__title-brand">煌真建装</span>
            <span className="hero__title-tail">へお任せください！</span>
          </h1>
          <ul className="hero__stats">
            <li className="hero__stat">
              <span className="hero__stat-label">業界歴</span>
              <span className="hero__stat-value">13<span className="hero__stat-unit">年</span></span>
            </li>
            <li className="hero__stat">
              <span className="hero__stat-label">施工数</span>
              <span className="hero__stat-value">300<span className="hero__stat-unit">件以上</span></span>
            </li>
            <li className="hero__stat">
              <span className="hero__stat-label">自社施工率</span>
              <span className="hero__stat-value">100<span className="hero__stat-unit">%</span></span>
            </li>
          </ul>
        </div>
        <div className="hero__figure" aria-label="翔吾君の写真に変更">
          <a href="#contact" className="hero__cta">無料相談はこちら！</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

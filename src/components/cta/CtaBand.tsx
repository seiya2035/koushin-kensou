import './style.css';

const CtaBand = () => {
  return (
    <section className="cta-band">
      <div className="cta-band__inner">
        <p className="cta-band__note">翔吾君の写真に変更してもいいかも</p>
        <p className="cta-band__lead">
          <span className="cta-band__lead-strong">経験値豊富なプロ</span>が
        </p>
        <p className="cta-band__sub">ベストなご提案をします！</p>
        <a href="#contact" className="cta-band__button">無料相談をする</a>
        <div className="cta-band__figure" aria-label="女性スタッフの写真" />
      </div>
    </section>
  );
};

export default CtaBand;

import './style.css';

const worries = [
  { text: '外壁の色あせや汚れが気になるようになってきた', highlight: '色あせ' },
  { text: '家を建てて10年以上たつけど、まだ何もしていない', highlight: '10年以上' },
  { text: 'コケやカビが生えてきて見た目が悪い', highlight: '見た目が悪い' },
  { text: 'ご近所さんが外壁の工事していて自分もやったほうがいいのかな？', highlight: '外壁の工事' },
];

const Worries = () => {
  return (
    <section className="worries">
      <div className="worries__heading">
        <h2 className="worries__title">
          こんな<span className="worries__title-accent">お悩み</span>ありませんか？
        </h2>
      </div>
      <div className="worries__body">
        <div className="worries__figure" aria-label="悩んでいる男性の写真" />
        <ul className="worries__list">
          {worries.map((w, i) => (
            <li key={i} className={`worries__item worries__item--${i}`}>
              {w.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Worries;

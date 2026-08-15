import './style.css';

const reasons = [
  {
    no: 1,
    title: '施工第一',
    subtitle: '業界13年の自信',
    body: `下請けに丸投げしない自社施工にこだわっています。
現場経験豊富な職人が一件一件、
建物の状態に合わせて最適な下地処理と塗装を実施。
「見えない部分こそ丁寧に」がモットーです。
仕上がりの美しさだけでなく、長持ちする塗装をお約束します。`,
    variant: 'blue',
  },
  {
    no: 2,
    title: '一緒に考える',
    subtitle: '理想の塗り替え',
    body: `お客様の「困った」を「こうしたい」に
変えるのが私たちの役目です。
建物の状態・ご予算・好みの色などを丁寧にヒアリングし、
最適な塗料・施工プランをご提案。
カラーシミュレーションや塗料サンプルを使いながら、
納得いくまで一緒に仕上がりを考えることを大切にしています。`,
    variant: 'red',
  },
  {
    no: 3,
    title: '適正価格',
    subtitle: '中間マージンのない\n安心見積り',
    body: `ハウスメーカーや大手業者を通さないため、余分な中間コストをカット。
同じ品質の塗料・施工内容でも、適正な価格でご提供できます。
「安かろう悪かろう」ではなく、
適正価格で最高の仕上がりを実現するのが煌真建装の信条です。`,
    variant: 'orange',
  },
];

const Reasons = () => {
  return (
    <section className="reasons">
      <div className="reasons__heading">
        <h2 className="reasons__title">
          煌真建装が<span className="reasons__title-accent">選ばれる理由</span>
        </h2>
      </div>
      <div className="reasons__list">
        {reasons.map((r) => (
          <article key={r.no} className={`reason reason--${r.variant}`}>
            <div className="reason__text">
              <p className="reason__title">
                <span className="reason__no">{r.no}</span>
                {r.title}
              </p>
              <p className="reason__subtitle">
                {r.subtitle.split('\n').map((line, i) => (
                  <span key={i} className="reason__subtitle-line">{line}</span>
                ))}
              </p>
              <p className="reason__body">
                {r.body.split('\n').map((line, i) => (
                  <span key={i} className="reason__body-line">{line}</span>
                ))}
              </p>
            </div>
            <div className="reason__figure" aria-label={`理由${r.no}の写真`} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Reasons;

import './style.css';

const cases = [
  {
    name: '〇〇市　B様邸',
    price: '約100万円',
    tags: ['外壁塗装', '屋根塗装', 'シーリング'],
    comment: `丁寧な説明と職人さんの対応で
安心して任せられました。
仕上がりも美しく、
新築のように生まれ変わって大満足です。`,
  },
  {
    name: '〇〇市　C様邸',
    price: '約150万円',
    tags: ['外壁塗装', '屋根塗装', 'シーリング'],
    comment: `複数社と比べて説明が一番分かりやすく、
価格も納得できました。
仕上がりは期待以上で、
細部まで丁寧な仕事に感謝しています。`,
  },
  {
    name: '〇〇市　D様邸',
    price: '約200万円',
    tags: ['外壁塗装', '屋根塗装', 'シーリング'],
    comment: `カラーシミュレーションで
何度も相談に乗ってもらい、
理想の色に仕上がりました。
ご近所からも「きれいになったね」と好評です！`,
  },
];

const Voices = () => {
  return (
    <section className="voices">
      <div className="voices__heading">
        <h2 className="voices__title">お施主様の声</h2>
      </div>

      <div className="voices__video">
        <p className="voices__video-caption">〇〇市 A様邸 インタビュー動画</p>
        <div className="voices__video-frame" aria-label="インタビュー動画">
          <span className="voices__video-note">まだない</span>
          <span className="voices__video-play" aria-hidden>▶</span>
        </div>
      </div>

      <div className="voices__cases">
        {cases.map((c, i) => (
          <article key={i} className="voice-case">
            <div className="voice-case__header">
              <p className="voice-case__name">【{c.name}】</p>
              <p className="voice-case__note">写真まだない</p>
              <p className="voice-case__price">
                総額<span className="voice-case__price-value">{c.price}</span>
              </p>
            </div>
            <div className="voice-case__body">
              <div className="voice-case__ba">
                <div className="voice-case__img voice-case__img--before">
                  <span className="voice-case__badge voice-case__badge--before">before</span>
                </div>
                <div className="voice-case__arrow" aria-hidden>▶</div>
                <div className="voice-case__img voice-case__img--after">
                  <span className="voice-case__badge voice-case__badge--after">after</span>
                </div>
              </div>
              <div className="voice-case__meta">
                <ul className="voice-case__tags">
                  {c.tags.map((t) => (
                    <li key={t} className="voice-case__tag">{t}</li>
                  ))}
                </ul>
                <p className="voice-case__comment">
                  {c.comment.split('\n').map((line, li) => (
                    <span key={li} className="voice-case__comment-line">{line}</span>
                  ))}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Voices;

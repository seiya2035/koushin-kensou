import React from 'react';
import './style.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">無料相談・お問い合わせ</h2>
      
      <form className="contact-form">
        <div className="form-group">
          <label>
            <span className="required-badge">必須</span> お名前
          </label>
          <input type="text" placeholder="例）山田 太郎" required />
        </div>

        <div className="form-group">
          <label>
            <span className="required-badge">必須</span> メールアドレス
          </label>
          <input type="email" placeholder="例）info@example.com" required />
        </div>

        <div className="form-group">
          <label>
            <span className="required-badge">必須</span> 電話番号
          </label>
          <input type="tel" placeholder="例）090-1234-5678" required />
        </div>

        <div className="form-group">
          <label>
            <span className="required-badge">必須</span> ご住所
          </label>
          <input type="text" placeholder="例）東京都渋谷区..." required />
        </div>

        <div className="form-group">
          <label>
            <span className="required-badge">必須</span> 相談内容
          </label>
          <select required className="contact-select">
            <option value="" hidden>ご相談内容を選択してください</option>
            <option value="お見積りのご依頼">お見積りのご依頼</option>
            <option value="外壁塗装について">外壁塗装について</option>
            <option value="屋根塗装について">屋根塗装について</option>
            <option value="防水工事について">防水工事について</option>
            <option value="その他・ご質問">その他・ご質問</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            <span className="required-badge">必須</span> その他
          </label>
          <textarea placeholder="その他、気になる点などがございましたらご記入ください" rows={9} required></textarea>
        </div>

        <button type="submit" className="contact-submit-btn">
          送信する
        </button>
      </form>
    </div>
  );
};

export default Contact;

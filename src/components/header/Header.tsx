import './style.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header__logo">
        煌真<br />建装
      </div>
      <a href="#contact" className="site-header__cta">
        無料相談はこちら！
      </a>
    </header>
  );
};

export default Header;

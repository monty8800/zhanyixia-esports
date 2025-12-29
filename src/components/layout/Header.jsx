import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <nav className="site-nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/logo.png" alt="战一下电竞" />
          <span>战一下电竞</span>
        </Link>
        <div className="nav-links">
          <Link to="/">首页</Link>
          <Link to="/services">服务项目</Link>
          <Link to="/cases">成功案例</Link>
          <Link to="/faq">常见问题</Link>
          <Link to="/about">关于我们</Link>
          <Link to="/contact">联系我们</Link>
        </div>
      </div>
    </nav>
  )
}

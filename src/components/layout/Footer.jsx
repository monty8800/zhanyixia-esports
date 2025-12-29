import { Link } from 'react-router-dom'
import { FaWeixin, FaQrcode, FaComments } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>快速链接</h3>
          <ul>
            <li><Link to="/services">服务项目</Link></li>
            <li><Link to="/guides">游戏攻略</Link></li>
            <li><Link to="/cases">成功案例</Link></li>
            <li><Link to="/faq">常见问题</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>关于我们</h3>
          <ul>
            <li><Link to="/about">公司介绍</Link></li>
            <li><Link to="/contact">联系方式</Link></li>
            <li><Link to="/process">服务流程</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>联系我们</h3>
          <p>微信服务号：战一下电竞</p>
          <p>抖音号：72047935422</p>
          <p>服务时间：7x24小时</p>
        </div>
        <div className="footer-section">
          <h3>关注我们</h3>
          <div className="social-icons">
            <a href="https://work.weixin.qq.com/kfid/kfc48f3dea4d2ea29be" target="_blank" rel="noopener noreferrer">
              <FaWeixin />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <SiTiktok />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 战一下电竞护航俱乐部 | 纯绿服务 · 安全可靠</p>
      </div>
    </footer>
  )
}

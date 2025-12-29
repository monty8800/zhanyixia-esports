import { Helmet } from 'react-helmet-async'

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>关于我们 - 战一下电竞护航俱乐部 | 三角洲行动专业护航团队</title>
        <meta name="description" content="战一下电竞护航俱乐部，专业的三角洲行动护航团队。派出职业打手与您组队进入对局，提供纯绿安全护航服务，7x24小时在线，实名认证保证金制度。" />
        <meta name="keywords" content="战一下电竞,三角洲行动护航,游戏护航,职业选手,组队服务,安全护航" />
      </Helmet>
      
      <div className="about-page">
        <section className="about-hero">
          <h1>关于战一下电竞</h1>
          <p className="subtitle">专业、安全、高效的三角洲行动护航服务</p>
        </section>

        <section className="about-section">
          <div className="container">
            <h2>公司简介</h2>
            <p>
              战一下电竞护航俱乐部成立于2024年，是一家专注于三角洲行动游戏护航服务的专业团队。
              我们致力于为玩家提供安全、高效、专业的护航和陪玩服务。派出职业打手与您组队进入对局，帮助您安全撤离、获取高价值物资，轻松享受游戏乐趣。
            </p>
            <p>
              我们的团队由多名职业选手和资深游戏教练组成，拥有丰富的游戏经验和专业技能。
              通过严格的筛选和培训机制，确保每一位打手都能提供高质量的服务。
            </p>
          </div>
        </section>

        <section className="about-section values">
          <div className="container">
            <h2>核心价值观</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🛡️</div>
                <h3>纯绿保障</h3>
                <p>严格禁止使用任何外挂脚本，确保账号安全，所有服务纯手工完成</p>
              </div>
              <div className="value-card">
                <div className="value-icon">⚡</div>
                <h3>高效专业</h3>
                <p>职业选手团队，技术精湛，效率高，确保快速完成任务目标</p>
              </div>
              <div className="value-card">
                <div className="value-icon">💎</div>
                <h3>诚信经营</h3>
                <p>明码标价，公开透明，不乱收费，保底机制确保客户权益</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3>用户至上</h3>
                <p>7x24小时客服在线，随时响应客户需求，提供优质售后服务</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section team">
          <div className="container">
            <h2>团队实力</h2>
            <div className="team-stats">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">专业打手</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10000+</div>
                <div className="stat-label">服务订单</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99%</div>
                <div className="stat-label">客户满意度</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">在线服务</div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section guarantee">
          <div className="container">
            <h2>服务保障</h2>
            <ul className="guarantee-list">
              <li>✅ 实名认证 - 所有打手经过实名认证和技能考核</li>
              <li>✅ 保证金制度 - 打手缴纳保证金，确保服务质量</li>
              <li>✅ 安全保密 - 严格保护客户隐私和账号安全</li>
              <li>✅ 保底机制 - 明确保底标准，未达标全额退款</li>
              <li>✅ 售后无忧 - 7x24小时客服，随时解决问题</li>
              <li>✅ 价格透明 - 明码标价，无隐藏费用</li>
            </ul>
          </div>
        </section>

        <section className="about-section cta">
          <div className="container">
            <h2>选择我们，开启轻松游戏之旅</h2>
            <p>专业团队，值得信赖</p>
            <a 
              href="https://work.weixin.qq.com/kfid/kfc48f3dea4d2ea29be" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button"
            >
              立即咨询
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

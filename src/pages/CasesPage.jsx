import { Helmet } from 'react-helmet-async'

export default function CasesPage() {
  const cases = [
    {
      id: 1,
      customer: '张先生',
      service: '绝密护航3388W',
      achievement: '单局带出4200W',
      time: '2024-12-20',
      rating: 5,
      comment: '打手技术过硬，全程指挥到位，超出保底很多，非常满意！下次还会再来。',
      highlights: ['超额完成', '专业指挥', '效率高']
    },
    {
      id: 2,
      customer: '李女士',
      service: '天命之子三阶段',
      achievement: '成功摸出9格红',
      time: '2024-12-18',
      rating: 5,
      comment: '之前自己摸了好久都没出，找了战一下两把就出了，运气和技术都给力！',
      highlights: ['快速出货', '服务态度好', '物超所值']
    },
    {
      id: 3,
      customer: '王先生',
      service: '赌油单不出不结版',
      achievement: '3把出火箭燃料',
      time: '2024-12-15',
      rating: 5,
      comment: '虽然价格贵点，但确实做到了不出不结，打手很有耐心，值得信赖。',
      highlights: ['诚信经营', '耐心负责', '技术扎实']
    },
    {
      id: 4,
      customer: '刘先生',
      service: 'S+双陪',
      achievement: '1小时18杀',
      time: '2024-12-12',
      rating: 5,
      comment: '陪玩小哥技术真的强，教了很多实用技巧，自己玩也能用上，推荐！',
      highlights: ['教学认真', '技术一流', '寓教于乐']
    },
    {
      id: 5,
      customer: '陈女士',
      service: '刀皮收藏室困难模式',
      achievement: '成功集齐所有刀皮',
      time: '2024-12-10',
      rating: 5,
      comment: '最难的模式都完成了，打手真的厉害！而且全程直播让我看，很放心。',
      highlights: ['挑战成功', '透明服务', '专业可靠']
    },
    {
      id: 6,
      customer: '赵先生',
      service: '猎护者加强版',
      achievement: '击杀5队护航',
      time: '2024-12-08',
      rating: 5,
      comment: '原本只要求3队，结果打手给力多击杀了2队，体验拉满！',
      highlights: ['超预期', '战斗力强', '服务超值']
    }
  ]

  const stats = [
    { label: '累计服务订单', value: '10000+' },
    { label: '客户满意度', value: '99.8%' },
    { label: '好评率', value: '99.5%' },
    { label: '复购率', value: '85%' }
  ]

  return (
    <>
      <Helmet>
        <title>成功案例 - 真实客户评价展示 | 战一下电竞</title>
        <meta name="description" content="战一下电竞真实客户案例分享，超过10000+成功订单，99%+客户满意度，查看真实评价和服务效果。" />
        <meta name="keywords" content="三角洲行动成功案例,客户评价,服务案例,真实反馈,护航效果" />
      </Helmet>
      
      <div className="cases-page">
        <section className="cases-hero">
          <h1>成功案例</h1>
          <p className="subtitle">真实客户，真实评价，用事实说话</p>
        </section>

        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cases-content">
          <div className="container">
            <h2>客户案例展示</h2>
            <div className="cases-grid">
              {cases.map((caseItem) => (
                <div key={caseItem.id} className="case-card">
                  <div className="case-header">
                    <div className="customer-info">
                      <h3>{caseItem.customer}</h3>
                      <span className="service-tag">{caseItem.service}</span>
                    </div>
                    <div className="case-rating">
                      {'★'.repeat(caseItem.rating)}
                    </div>
                  </div>
                  <div className="case-achievement">
                    <span className="achievement-label">成果：</span>
                    <span className="achievement-value">{caseItem.achievement}</span>
                  </div>
                  <p className="case-comment">"{caseItem.comment}"</p>
                  <div className="case-highlights">
                    {caseItem.highlights.map((highlight, idx) => (
                      <span key={idx} className="highlight-tag">✓ {highlight}</span>
                    ))}
                  </div>
                  <div className="case-time">{caseItem.time}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="container">
            <h2>更多客户评价</h2>
            <div className="testimonials-list">
              <div className="testimonial-item">
                <p>"第一次找护航服务，很担心账号安全，结果服务完成后账号完好无损，物资也超出预期，以后就认准战一下了！"</p>
                <span className="testimonial-author">- 游戏玩家 周先生</span>
              </div>
              <div className="testimonial-item">
                <p>"客服响应很快，打手很专业，全程都很顺利。价格虽然不便宜，但物有所值！"</p>
                <span className="testimonial-author">- 上班族 孙女士</span>
              </div>
              <div className="testimonial-item">
                <p>"之前找过其他家，要么技术不行，要么态度不好。战一下的打手真的专业，服务态度也好，强烈推荐！"</p>
                <span className="testimonial-author">- 学生 吴同学</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cases-cta">
          <div className="container">
            <h2>您也想拥有这样的体验？</h2>
            <p>加入10000+满意客户的行列，立即体验专业护航服务</p>
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

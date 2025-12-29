import { Helmet } from 'react-helmet-async'
import { FaWeixin, FaQq, FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <FaWeixin />,
      title: '微信客服',
      description: '扫码添加客服微信',
      detail: '7x24小时在线响应',
      action: '扫码咨询',
      link: 'https://work.weixin.qq.com/kfid/kfc48f3dea4d2ea29be',
      primary: true
    },
    {
      icon: <FaWeixin />,
      title: '微信公众号',
      description: '战一下电竞',
      detail: '关注获取最新优惠',
      action: '扫码关注',
      qrcode: '/qrcode.png'
    },
    {
      icon: <SiTiktok />,
      title: '抖音账号',
      description: '抖音号：72047935422',
      detail: '观看实战视频',
      action: '扫码关注',
      qrcode: '/douyin-qrcode.jpg'
    },
    {
      icon: <FaClock />,
      title: '服务时间',
      description: '全年无休',
      detail: '7x24小时在线服务',
      info: true
    }
  ]

  const faqs = [
    {
      q: '如何下单？',
      a: '联系客服 → 选择服务 → 支付费用 → 开始服务'
    },
    {
      q: '支付方式有哪些？',
      a: '支持微信支付、支付宝、银行卡转账等多种方式'
    },
    {
      q: '多久能开始服务？',
      a: '下单后5-10分钟客服响应，通常30分钟内开始服务'
    },
    {
      q: '账号安全有保障吗？',
      a: '100%纯绿服务，严格保密协议，已服务10000+客户零事故'
    }
  ]

  return (
    <>
      <Helmet>
        <title>联系我们 - 7x24小时在线客服 | 战一下电竞</title>
        <meta name="description" content="战一下电竞联系方式，微信客服7x24小时在线，快速响应您的需求。提供微信、QQ、抖音等多种联系方式。三角洲行动护航服务咨询，随时为您解答。" />
        <meta name="keywords" content="战一下电竞客服,联系方式,微信客服,在线咨询,客服电话,三角洲行动咨询,7x24小时在线" />
        <link rel="canonical" href="https://zhan1x.com/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="联系我们 - 战一下电竞7x24小时在线客服" />
        <meta property="og:description" content="微信客服7x24小时在线，快速响应您的需求" />
        <meta property="og:url" content="https://zhan1x.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://zhan1x.com/logo.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="联系我们 - 战一下电竞" />
        <meta name="twitter:description" content="7x24小时在线客服，快速响应" />
        <meta name="twitter:image" content="https://zhan1x.com/logo.png" />
      </Helmet>
      
      <div className="contact-page">
        <section className="contact-hero">
          <h1>联系我们</h1>
          <p className="subtitle">7x24小时在线，随时为您服务</p>
        </section>

        <section className="contact-methods">
          <div className="container">
            <h2>联系方式</h2>
            <div className="methods-grid">
              {contactMethods.map((method, index) => (
                <div key={index} className={`method-card ${method.primary ? 'primary' : ''} ${method.info ? 'info' : ''}`}>
                  <div className="method-icon">{method.icon}</div>
                  <h3>{method.title}</h3>
                  <p className="method-description">{method.description}</p>
                  <p className="method-detail">{method.detail}</p>
                  {method.link && (
                    <a 
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="method-button"
                    >
                      {method.action}
                    </a>
                  )}
                  {method.qrcode && (
                    <div className="method-qrcode">
                      <img src={method.qrcode} alt={method.title} />
                      <p>{method.action}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="quick-questions">
          <div className="container">
            <h2>快速解答</h2>
            <div className="questions-grid">
              {faqs.map((faq, index) => (
                <div key={index} className="question-item">
                  <h3>Q: {faq.q}</h3>
                  <p>A: {faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-info">
          <div className="container">
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">
                  <FaClock />
                </div>
                <h3>服务时间</h3>
                <p>全年无休</p>
                <p className="highlight">7×24小时在线</p>
              </div>
              <div className="info-card">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <h3>响应速度</h3>
                <p>客服平均响应时间</p>
                <p className="highlight">5-10分钟</p>
              </div>
              <div className="info-card">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <h3>服务范围</h3>
                <p>覆盖所有服务器</p>
                <p className="highlight">全区全服</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <div className="container">
            <h2>还有疑问？</h2>
            <p>立即联系我们的客服团队，获得专业解答</p>
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

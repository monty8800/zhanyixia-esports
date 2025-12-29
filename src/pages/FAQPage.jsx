import { Helmet } from 'react-helmet-async'
import { useState } from 'react'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      category: '服务相关',
      questions: [
        {
          q: '你们的服务是否安全？会不会封号？',
          a: '我们承诺100%纯绿服务，严格禁止使用任何外挂脚本。所有服务都由真人打手手工完成，确保账号安全。我们已服务超过10000+客户，零封号记录。'
        },
        {
          q: '服务费用如何计算？',
          a: '我们采用明码标价，每个服务都有明确的价格和保底标准。下单前会告知详细费用，无隐藏收费。支持多种支付方式，安全便捷。'
        },
        {
          q: '什么是保底机制？',
          a: '保底机制是指我们承诺在服务过程中至少为您带出指定价值的物资。如果未达到保底标准，我们将全额退款或继续服务直到达标。'
        },
        {
          q: '下单后多久开始服务？',
          a: '我们提供7x24小时服务。下单后，客服会在5-10分钟内响应，根据当前打手排队情况，通常在30分钟内开始服务。'
        }
      ]
    },
    {
      category: '账号安全',
      questions: [
        {
          q: '你们的服务是纯绿安全吗？',
          a: '绝对纯绿！我们俱乐部所有打手均为职业选手，不使用任何外挂、辅助软件，完全靠技术和经验进行游戏。100%手动操作，保证您的账号绝不会因为外挂问题被封号或追缴。'
        },
        {
          q: '会被封号吗？',
          a: '不会。我们采用组队护航模式，您自己登录账号，打手与您组队进入对局。所有操作均为纯手动，无任何外挂行为，符合游戏规则，不存在封号风险。我们已服务10000+订单，零封号记录。'
        },
        {
          q: '会被游戏追缴物资吗？',
          a: '绝对不会。我们的打手不使用任何作弊手段，所有物资都是通过正常游戏流程获取。撤离的装备、物资均为合法所得，不存在被追回或扰判的风险，请放心使用。'
        },
        {
          q: '打手能看到我的账号密码吗？',
          a: '完全不能。我们的护航服务不需要登录您的账号，打手只需知道您的游戏ID即可与您组队。您的账号密码、物资装备完全在自己掌控中，我们只负责帮助您在对局中安全撤离。'
        }
      ]
    },
    {
      category: '服务流程',
      questions: [
        {
          q: '如何下单？',
          a: '微信搜索“战一下电竞”服务号，点击下方“立即下单”按钮，进入小程序选择服务套餐并完成支付。支付成功后，系统会自动分配打手。如果超过5分钟没有打手接单，请立即联系客服处理。'
        },
        {
          q: '可以指定打手吗？',
          a: '可以。如果您之前使用过我们的服务，对某位打手满意，可以要求指定该打手为您服务。我们会尽量安排，但需视打手档期而定。'
        },
        {
          q: '服务过程中可以监督吗？',
          a: '可以。您就在游戏中，可以实时观察打手的操作和游戏进程。如果担心出现售后问题，建议您主动录屏保存游戏过程，以便后续有凭据处理。也可以通过客服实时了解服务情况。'
        },
        {
          q: '服务中途可以暂停吗？',
          a: '支持存单。如果您需要中途暂停服务，可以联系客服申请存单，但需要先完成当前正在进行的对局。不支持对局中途退出，必须等当局结束（撤离或死亡）后才能存单。存单后您可以随时联系客服继续完成剩余服务。'
        }
      ]
    },
    {
      category: '支付与退款',
      questions: [
        {
          q: '支持哪些支付方式？',
          a: '使用小程序在线下单，支持微信支付。支付成功后系统会自动分配打手，方便快捷。重要提示：请不要私下转账给客服或任何工作人员，确保收款账户是企业收款，保障您的资金安全。如有其他支付需求请咨询客服。'
        },
        {
          q: '什么情况下可以退款？',
          a: '1) 未达到保底标准；2) 服务过程中出现账号安全问题（非客户原因）；3) 打手服务态度恶劣经核实属实。退款将在1-3个工作日内原路返回。'
        },
        {
          q: '服务完成后还能退款吗？',
          a: '如果服务已完成且达到保底标准，原则上不支持退款。但如果发现打手有违规操作，您可以在24小时内申请售后，我们会核实情况后处理。'
        }
      ]
    },
    {
      category: '其他问题',
      questions: [
        {
          q: '有优惠活动吗？',
          a: '我们定期推出优惠活动，包括新客户体验价、老客户折扣、节日促销等。关注我们的微信公众号或抖音账号可第一时间获取优惠信息。'
        },
        {
          q: '服务有售后期吗？',
          a: '有。默认订单完成后24小时内为售后期。如果在此期间内因我们的服务导致任何问题，我们将免费处理，直到您满意为止。'
        },
        {
          q: '你们还提供其他游戏的服务吗？',
          a: '目前我们专注于三角洲行动游戏的护航服务。专注才能做到更专业。未来可能会拓展其他游戏项目，敬请期待。'
        }
      ]
    }
  ]

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <Helmet>
        <title>常见问题FAQ - 战一下电竞 | 三角洲行动护航服务疑问解答</title>
        <meta name="description" content="战一下电竞常见问题解答，包括服务安全、账号保护、服务流程、支付退款等问题。专业客服7x24小时在线，为您解答任何疑问。" />
        <meta name="keywords" content="三角洲行动护航FAQ,游戏护航问题,护航安全,账号安全,服务流程" />
      </Helmet>
      
      <div className="faq-page">
        <section className="faq-hero">
          <h1>常见问题</h1>
          <p>为您解答关于我们服务的各种疑问</p>
        </section>

        <section className="faq-content">
          <div className="container">
            {faqs.map((category, catIndex) => (
              <div key={catIndex} className="faq-category">
                <h2 className="category-title">{category.category}</h2>
                <div className="faq-list">
                  {category.questions.map((item, qIndex) => {
                    const index = `${catIndex}-${qIndex}`
                    const isOpen = openIndex === index
                    return (
                      <div key={qIndex} className={`faq-item ${isOpen ? 'open' : ''}`}>
                        <div 
                          className="faq-question" 
                          onClick={() => toggleFAQ(catIndex, qIndex)}
                        >
                          <h3>{item.q}</h3>
                          <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
                        </div>
                        {isOpen && (
                          <div className="faq-answer">
                            <p>{item.a}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="faq-cta">
          <div className="container">
            <h2>还有其他问题？</h2>
            <p>联系我们的客服团队，我们很乐意为您解答</p>
            <a 
              href="https://work.weixin.qq.com/kfid/kfc48f3dea4d2ea29be" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button"
            >
              联系客服
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

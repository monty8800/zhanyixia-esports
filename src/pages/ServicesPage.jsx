import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('全部')

  const allServices = [
    { category: '赌约单', name: '赌约体验单', price: 288, desc: '单局带出1000w', status: '已上架' },
    { category: '赌约单', name: '赌油单【标准版】', price: 209, desc: '最高保底988w内出火箭燃料结单【出火箭燃料也要打满488w保底】', status: '已上架' },
    { category: '赌约单', name: '赌油单【困难版】', price: 588, desc: '最高保底3588w内出火箭燃料结单【出火箭燃料也要打满1588w保底】', status: '已上架' },
    { category: '赌约单', name: '赌油单【不出不结版】', price: 988, desc: '不出火箭燃料不结单【出火箭燃料也要打满4288w保底】', status: '已上架' },
    { category: '赌约单', name: '赌浮力设备单【保底版】', price: 488, desc: '基础保底1488w 不出保底2288w', status: '已上架' },
    { category: '赌约单', name: '赌浮力设备单【不出不结版】', price: 1288, desc: '3小时内出浮力设备 原班打手送免费一小时陪玩', status: '已上架' },
    { category: '护航保底', name: '体验单-绝密护航保底700W', price: 118, desc: '限时每日体验1单', status: '已上架' },
    { category: '护航保底', name: '非洲之心-保底版', price: 288, desc: '基础保底1314w 不出非洲之心加500w保底', status: '已上架' },
    { category: '护航保底', name: '绝密护航1288W', price: 248, desc: '', status: '已上架' },
    { category: '护航保底', name: '绝密护航1788W', price: 358, desc: '', status: '已上架' },
    { category: '护航保底', name: '绝密护航2888W', price: 568, desc: '', status: '已上架' },
    { category: '护航保底', name: '绝密护航3388W', price: 668, desc: '', status: '已上架' },
    { category: '趣味单', name: '特调单228微醉', price: 228, desc: '基础保底1188w 累计带出龙舌兰x1 柠檬茶x3 可乐x3', status: '已上架' },
    { category: '趣味单', name: '特调单488畅饮', price: 488, desc: '基础保底1888w 累计带出香槟x1 龙舌兰x1 柠檬茶x3 可乐x3', status: '已上架' },
    { category: '趣味单', name: '特调单888宿醉', price: 888, desc: '基础保底2888w 累计带出香槟x4 龙舌兰x4 柠檬茶x8 可乐x8 特色酒杯x8', status: '已上架' },
    { category: '趣味单', name: '提神醒脑单 标准版', price: 288, desc: '基础保底1488w  累计带出咖啡x1 挂耳咖啡x1 咖啡机x1 摩卡咖啡x1', status: '已上架' },
    { category: '趣味单', name: '提神醒脑单 高级版', price: 388, desc: '基础保底1888w  累计带出高级咖啡豆x1 挂耳咖啡x1 咖啡机x1 摩卡咖啡x2', status: '已上架' },
    { category: '趣味单', name: '神龙套', price: 1688, desc: '累计保底4888w  累计带出鱼子酱x3 香槟x8 龙舌兰x8 柠檬茶x8 特色酒杯x8 可乐x8 音响x4', status: '已上架' },
    { category: '趣味单', name: '对对磰1.0', price: 388, desc: '保底880W（任意相同红加300W保底，在此基础上这个红每多出一个加150W-红包括：大红小红，不包括头甲，背包，子弹）', status: '已上架' },
    { category: '趣味单', name: '对对磰2.0', price: 588, desc: '保底1280W（任意相同红加300W保底，在此基础上这个红每多出一个加150W-红包括：大红小红，不包括头甲，背包，子弹', status: '已上架' },
    { category: '趣味单', name: '军事专家', price: 388, desc: '保底1388W（老板改装枪械给打手使用，击杀一人减少对应保底 - 30万该枪减少100万/50万改枪减少50万/70万改枪减少30万）', status: '已上架' },
    { category: '趣味单', name: '捏捏乐', price: 388, desc: '保底888W（打手说话最后一个字带捏，被老板抓到一次没喊+50W）', status: '已上架' },
    { category: '趣味单', name: 'i人拯救者', price: 488, desc: '保底1188W（陪玩使用技能需要讲出技能名称，每次释放都必须喊出技能（少喊一次加30万保底）', status: '已上架' },
    { category: '趣味单', name: '装机大师', price: 888, desc: '保底1888W（收集物资：显卡，固态硬盘，CPU，电脑声卡，显示器，电源，风冷散热器，键盘，鼠标，主板，内存条，或出笔记本电脑直接接单 - 物资手机齐全，截图即可无需带出，一把未收集齐加80W保底）', status: '已上架' },
    { category: '趣味单', name: '紫气东来', price: 588, desc: '保底777W（带出一个小紫增加15W保底（只计算撤离成功第一局，老板自己选择物资），带出物资截图发放客服进行保底计算，撤离失败加50万保底）', status: '已上架' },
    { category: '趣味单', name: '开锁大师', price: 988, desc: '保底3188W（老板亲手摸够20个保险，这20个保险内出的所有物品不算保底）', status: '已上架' },
    { category: '趣味单', name: '宝宝真棒', price: 338, desc: '保底728W（打手需全程称呼老板为"宝宝"，老板击杀AI或者干员，两个打手需要老板："宝宝真棒"，少叫一声加80W保底）', status: '已上架' },
    { category: '趣味单', name: '猎护者', price: 368, desc: '保底1288W（必须击杀一队护航，否则不结单 - 护子队认定标准：打手至少5甲4头+满改枪/AWM+老板卡战备/大红包）', status: '已上架' },
    { category: '趣味单', name: '猎护者加强版', price: 888, desc: '保底2688W（必须击杀三队护航，否则不结单 - 护子队认定标准：打手至少5甲4头+满改枪/AWM+老板卡战备/大红包）', status: '已上架' },
    { category: '趣味单', name: '房卡管家', price: 588, desc: '保底1388W（打手必须开全部房卡，老板每摸到一个小红加100W保底，摸到一个大红加500W保底，叠加部分上限1800W）', status: '已上架' },
    { category: '趣味单', name: '满满当当', price: 868, desc: '保底1888W（用金色/红色物资装满40格/45格大红包撤离，不装满不结单 - 枪/装备/子弹要件不算，金蛋一组60发算一格，非洲之心/海洋之泪算16格/红头修/红甲修满耐久才算）', status: '已上架' },
    { category: '趣味单', name: '刀皮收藏室-简单模式', price: 488, desc: '累计打出5种刀皮，撤离失败不算', status: '已上架' },
    { category: '趣味单', name: '刀皮收藏室-进阶模式', price: 788, desc: '累计打出7种刀皮，>100W红算赖子，撤离失败不算', status: '已上架' },
    { category: '趣味单', name: '刀皮收藏室-困难模式', price: 1888, desc: '累计打出所有刀皮同时撤离成功，>200W红算赖子，撤离失败不算', status: '已上架' },
    { category: '趣味单', name: '天命之子-一阶段', price: 228, desc: '基础保底1100W+一个限定小红', status: '已上架' },
    { category: '趣味单', name: '天命之子-二阶段', price: 488, desc: '基础保底2000W+一个限定4格红', status: '已上架' },
    { category: '趣味单', name: '天命之子-三阶段', price: 888, desc: '基础保底3200W+一个限定9格红', status: '已上架' },
    { category: '趣味单', name: '敏感大王', price: 488, desc: '保底1488W，老板指定3个违禁词（1个字），打手违反规定加50W/一次，不设上限', status: '已上架' },
    { category: '趣味单', name: 'BINGO单-二连', price: 288, desc: '二连：288R基础保底：1188W', status: '已上架' },
    { category: '趣味单', name: 'BINGO单-三连', price: 588, desc: '三连：588R基础保底：2388W', status: '已上架' },
    { category: '趣味单', name: 'BINGO单-四连', price: 888, desc: '四连：888R基础保底：3288W', status: '已上架' },
    { category: '趣味单', name: 'BINGO单-五连', price: 1688, desc: '五连：1688R基础保底：4888W', status: '已上架' },
    { category: '趣味单', name: 'BINGO单-六连', price: 2688, desc: '六连：2688R基础保底：6888W', status: '已上架' },
    { category: '趣味单', name: 'BINGO单-九宫格', price: 4888, desc: '九宫格：4888R基础保底：8888W', status: '已上架' },
    { category: '摸红单', name: '不出一直打', price: 688, desc: '保底1688W+累计2个相同的红，不可指定', status: '已上架' },
    { category: '摸红单', name: '不出一直打-高级版', price: 1488, desc: '保底4888W+累计3个相同的红，不可指定', status: '已上架' },
    { category: '摸红单', name: '复苏呼吸机-不出不结', price: 9999, desc: '保底1.2亿+复苏呼吸机', status: '已上架' },
    { category: '摸红单', name: '真非洲之心-不出不结', price: 13140, desc: '保底1.38亿+非洲之心', status: '已上架' },
    { category: '摸红单', name: '能源大红-不出不结', price: 3888, desc: '保底4588W+能源大红', status: '已上架' },
    { category: '摸红单', name: '卫星锅-不出不结', price: 388, desc: '保底888W+卫星锅', status: '已上架' },
    { category: '摸红单', name: '火箭燃料-不出不结', price: 688, desc: '保底1588W+火箭燃料', status: '已上架' },
    { category: '摸红单', name: '纵横/万金泪冠-不出不结', price: 6888, desc: '保底1.3亿+纵横/万金泪冠（2出1即可）', status: '已上架' },
    { category: '摸红单', name: '浮力设备-不出不结', price: 988, desc: '保底2888W+浮力设备', status: '已上架' },
    { category: '摸红单', name: '海洋之泪-不出不结', price: 23888, desc: '保底4.8亿+海洋之泪', status: '已上架' },
    { category: '部门任务', name: '单个部门任务1-4级', price: 120, desc: '完成单个部门任务1-4级', status: '已上架' },
    { category: '部门任务', name: '5个部门任务1-4级', price: 550, desc: '完成5个部门任务1-4级', status: '已上架' },
    { category: '赛季3x3', name: '赛季3x3-不包损耗', price: 1088, desc: '赛季9格保险箱，损耗控制在2500W以内，超了补', status: '已上架' },
    { category: '赛季3x3', name: '赛季3x3-包损耗', price: 1288, desc: '赛季9格保险箱，3天内完成', status: '已上架' },
    { category: '陪玩', name: '娱乐陪单陪', price: 60, desc: '1H（最低4套）', status: '已上架' },
    { category: '陪玩', name: '娱乐陪双培', price: 110, desc: '1H（最低4套）', status: '已上架' },
    { category: '陪玩', name: 'A+单陪', price: 88, desc: '1H（最低5杀）', status: '已上架' },
    { category: '陪玩', name: 'A+双陪', price: 168, desc: '1H（10杀/H+保底800W，打够为止）', status: '已上架' },
    { category: '陪玩', name: 'S单陪', price: 128, desc: '1H（8杀/H）', status: '已上架' },
    { category: '陪玩', name: 'S双陪', price: 288, desc: '1H（12杀/H+保底1000W，打够为止）', status: '已上架' },
    { category: '陪玩', name: 'S+单陪', price: 168, desc: '1H（12杀/H）', status: '已上架' },
    { category: '陪玩', name: 'S+双陪', price: 328, desc: '1H（15杀/H+保底1300W，打够为止）', status: '已上架' },
    { category: '陪玩', name: '店长单陪', price: 588, desc: '1H', status: '已上架' },
    { category: '陪玩', name: '店长+S+', price: 788, desc: '1H', status: '已上架' },
    { category: '保险单', name: '5次沙色保险', price: 488, desc: '保底1788w 板板摸外5次沙色保险', status: '已上架' },
    { category: '保险单', name: '10次沙色保险', price: 788, desc: '保底2588w 板板摸外10次沙色保险', status: '已上架' },
  ]

  const categories = ['全部', '护航保底', '赌约单', '趣味单', '摸红单', '保险单', '陪玩', '部门任务', '赛季3x3']

  const filteredServices = allServices
    .filter(s => s.status === '已上架')
    .filter(s => selectedCategory === '全部' || s.category === selectedCategory)

  return (
    <>
      <Helmet>
        <title>服务项目 - 战一下电竞护航俱乐部 | 三角洲行动护航服务价格表</title>
        <meta name="description" content="战一下电竞提供专业三角洲行动护航服务，包括护航保底、赌约单、趣味单、摸红单、陪玩等多种服务项目。查看详细价格表，选择适合您的服务套餐。70+服务项目，明码标价，透明公开。" />
        <meta name="keywords" content="三角洲行动服务,护航保底,赌约单,趣味单,摸红单,陪玩服务,价格表,服务套餐,游戏护航,Delta Force护航" />
        <link rel="canonical" href="https://zhan1x.com/services" />
        
        {/* Open Graph */}
        <meta property="og:title" content="服务项目 - 战一下电竞护航服务价格表" />
        <meta property="og:description" content="70+专业护航服务项目，明码标价，透明公开" />
        <meta property="og:url" content="https://zhan1x.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://zhan1x.com/logo.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="服务项目 - 战一下电竞护航服务价格表" />
        <meta name="twitter:description" content="70+专业护航服务项目，明码标价" />
        <meta name="twitter:image" content="https://zhan1x.com/logo.png" />
      </Helmet>
      
      <div className="services-page">
        <section className="services-hero">
          <h1>服务项目</h1>
          <p>专业护航团队 · 多样化服务选择 · 透明价格</p>
        </section>

        <section className="services-content">
          <div className="container">
            <div className="services-filter">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="services-stats">
              <p>当前显示 <strong>{filteredServices.length}</strong> 个服务项目</p>
            </div>

            <div className="services-table">
              {filteredServices.map((service, index) => (
                <div key={index} className="service-row">
                  <div className="service-category">{service.category}</div>
                  <div className="service-name">{service.name}</div>
                  <div className="service-desc">{service.desc}</div>
                  <div className="service-price">¥{service.price}</div>
                  <a 
                    href="https://work.weixin.qq.com/kfid/kfc48f3dea4d2ea29be" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-order"
                  >
                    立即下单
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services-cta">
          <div className="container">
            <h2>找不到您需要的服务？</h2>
            <p>联系客服，我们可以为您定制专属服务方案</p>
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

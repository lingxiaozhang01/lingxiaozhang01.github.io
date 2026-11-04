const reports = [
  {
    title: '破解私募股权和创业基金退出难，全国人大代表、北京证监局局长贾文勤提出四点建议',
    url: 'https://epaper-h5.time-weekly.com/article?id=zd2xkr9b',
    image: '/assets/report-jia-wenqin.jpg',
    alt: '贾文勤站在书架前，手持书籍',
  },
  {
    title: '硬科技企业上市仍存堵点！专访全国人大代表田轩：允许更多未盈利新业态公司上市',
    url: 'https://epaper-h5.time-weekly.com/article?id=gnk5zp6r',
    image: '/assets/report-tian-xuan.jpg',
    alt: '全国人大代表田轩的肖像',
  },
  {
    title: '北交所迎IPO“撤单潮”，今年来已有20家企业终止上市',
    url: 'https://www.jiemian.com/article/10876828.html',
    image: '/assets/report-ipo-withdrawals.jpg',
    alt: '蓝色的IPO字母与背景中的灯光',
  },
  {
    title: '沪深年内首单！傲拓科技IPO获受理，科创企业上市升温？投行人士：检查未放松',
    url: 'https://epaper-h5.time-weekly.com/article?id=4r3okx1t',
    image: '/assets/report-aotuo-ipo.jpg',
    alt: '金色国际象棋棋子与站在马形棋子上的人',
  },
  {
    title: '安信证券员工误发“派点”PPT引热议，公募降佣背景下券商派点之争愈演愈烈',
    url: 'https://www.jiemian.com/article/10480698.html',
    image: '/assets/report-broker-commissions.jpg',
    alt: '几个人乘坐过山车的报道配图',
  },
  {
    title: '茅台进军债券领域！旗下财务公司招聘债券交易员，债牛狂飙下收益几何？',
    url: 'https://epaper-h5.time-weekly.com/article?id=5dv61z7r',
    image: '/assets/report-moutai-bonds.jpg',
    alt: '酒瓶冲破木板与红色上升箭头的插画',
  },
];

export default function IndustryReports() {
  return (
    <section className="design-showcase industry-showcase" aria-labelledby="industry-title">
      <div className="design-showcase-inner">
        <p className="design-context">内容策划</p>
        <h2 id="industry-title">行业报道</h2>
        <span className="design-title-mark" aria-hidden="true" />
        <div className="industry-grid">
          {reports.map(report => (
            <article className="industry-report" key={report.url}>
              <img src={report.image} alt={report.alt} width={800} height={600} loading="lazy" />
              <h3><a href={report.url} target="_blank" rel="noopener noreferrer">{report.title}</a></h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

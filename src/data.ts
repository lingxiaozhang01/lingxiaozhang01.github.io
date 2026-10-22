export type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  theme: 'orange' | 'blue' | 'yellow';
  image?: string;
  imageAlt?: string;
  facts: string[];
  sections: {
    title: string;
    text: string;
    placeholder?: boolean;
    links?: { label: string; url: string }[];
    images?: { src: string; alt: string; caption: string }[];
  }[];
  works?: { title: string; publication: string; description: string; url: string; metric?: string }[];
  portfolio?: { label: string; url: string };
};

export const profile = {
  name: '张灵霄',
  email: '13950247290@163.com',
  wechat: 'lingxyklya',
  introduction: '接近具体的人，理解他们的真实困境，再用内容、活动或产品作出回应。',
  about: '我叫张灵霄，毕业于广东金融学院金融工程专业。我做过金融领域的深度报道，也在策划线下活动、尝试做产品。对我来说，采访、活动和产品都是接近具体的人、理解真实困境的方式。我希望在变化的时代里，把自己的观察和体验变成能够抵达他人的内容与行动。',
  background: '金融工程本科 · 特稿写作 · 活动设计 · AI 产品探索',
};

export const projects: Project[] = [
  {
    id: 'conflict', title: '咱们来吵架吧！', subtitle: '把真实冲突，变成一场共同练习。',
    category: '活动设计与执行', theme: 'orange', image: '/assets/conflict.jpg', imageAlt: '咱们来吵架吧活动海报：红色扩音器与回应、边界表达主题',
    description: '一场通过情境模拟，练习回应与边界表达的线下活动。',
    facts: ['3 场活动', '60 名参与者（去重）', '3 轮迭代'],
    sections: [
      { title: '发生了什么', text: '冲突当下说不出口，回家后却越想越气。我从这个具体困境出发，发起以练胆和边界表达为目的的线下活动，让参与者在情境模拟里试着回应。' },
      { title: '我做了什么', text: '发起、策划并主持活动，负责玩法设计、招募推广、现场执行、群内交流和复盘。通过角色和台词卡进入具体冲突，开始前先写下自己真正想要什么；用限时回应和角色轮换组织对练。任何人都可以叫暂停，裁判针对具体表达反馈，结束时选出一句以后能用出来的话。' },
      { title: '一次真实的调整', text: '早期自拟场景不够贴近参与者的生活，大家进入状态较慢。我在活动前用问卷收集真实冲突，整理结果并用图表呈现，再改写角色和台词卡。例如，把情侣分工不均调整为合租室友突然带陌生人回家等情境。第三场已采用改版，现场观察到讨论更热烈。' },
      { title: '让活动被看见', text: '为后两场活动发布推广推文，合计约 1,000 次阅读。在不同现场持续调整练习设计。' },
      {
        title: '现场记录',
        text: '已收集的 25 份活动体验评分中，平均 8.24 分（满分 10 分），其中 9 份给出满分，占 36%。',
        links: [
          { label: '第二场活动推文', url: 'https://mp.weixin.qq.com/s/0eu-_krJLf64g3RHKATe5w' },
          { label: '第三场活动推文', url: 'https://mp.weixin.qq.com/s/iPuk-zL7l_bY0qSl8GLQTw' },
        ],
        images: [
          { src: '/assets/conflict-group.jpg', alt: '吵架活动现场参与者合照', caption: '活动现场合照' },
          { src: '/assets/conflict-ratings.png', alt: '25 份活动体验评分的分布图，10 分评价合计 9 份', caption: '活动体验评分分布，共 25 份反馈' },
          { src: '/assets/conflict-phrases.png', alt: '参与者印象最深的吵架金句词云', caption: '现场金句：参与者印象最深的一句话' },
        ],
      },
    ],
  },
  {
    id: 'odyssey', title: '奥德赛', subtitle: '给反复出现的困境，换一个入口。',
    category: '产品探索 / APP DEMO', theme: 'blue', image: '/assets/odyssey-clean.png', imageAlt: '奥德赛项目海报：我掉进了无限循环的怪物世界',
    description: '把反复出现的现实困境转成游戏副本，探索情绪与行为训练的产品路径。',
    facts: ['7 个核心页面', '3 轮剧情选择', '100 余人投票支持'],
    sections: [
      { title: '发生了什么', text: '已经意识到问题，却不知道如何迈出下一步。奥德赛关注反复退让、冲突前沉默、压力下回避等具体模式，尝试把现实困境变成可重开、可练习的游戏副本。' },
      { title: '我做了什么', text: '完成 1 款 App Demo，围绕“记录 → 识别 → 练习 → 行动”设计产品路径。从记录事件、情绪与实际反应开始，把反复出现的模式命名为副本，通过 3 轮剧情选择、反馈文案和技能卡组织练习。' },
      { title: '把练习带回现实', text: '设计 10 分钟内可执行的小任务，以及“暂存，明天重开”的反馈机制，让抽象建议落到具体选择和行动。交互方案覆盖首页、片段输入、模式识别、副本封面、剧情选择、技能卡、战报与现实任务 7 个核心页面。' },
      { title: '目前的进展', text: '设计方案获得 100 余人的投票支持。目前展示阶段为 Demo，投票反馈不代表实际使用效果。' },
      {
        title: '产品界面与演示',
        text: '从示例战报进入奥德赛 Demo，查看剧情选择后的反馈与现实行动任务。',
        links: [{ label: '查看奥德赛 Demo', url: 'https://loop-quest-0155fcfd.eazo.dev/battle-report?runId=demo&dungeonId=procrastination-escape&choices=C%2CB%2CC' }],
      },
    ],
  },
  {
    id: 'afternoon', title: '心想事成的下午', subtitle: '把想送给自己的小东西，亲手做出来。',
    category: '线下活动 / VIBE CODING', theme: 'yellow', image: '/assets/afternoon.jpg', imageAlt: '心想事成的下午活动海报：Vibe Coding 体验、纸星星与温暖的下午',
    description: '一次围绕“用 AI 给自己做一个小东西”的线下活动。让想象有机会成为作品。',
    facts: ['AI 工具体验', '现场创作', '作品分享'],
    sections: [
      { title: '活动主题', text: '有没有一个想送给自己的小东西？送给小时候的你、现在的你，或者某个平行时空里长大后的你。活动围绕 AI 工具演示、Vibe Coding 创作与作品分享展开。' },
      {
        title: '活动记录与成果',
        text: '活动记录与成果整理在以下文档中。',
        links: [{ label: '查看活动记录与成果', url: 'https://my.feishu.cn/wiki/PPYdwr0lsiwFVkk5GnPcQVI0nVc' }],
      },
    ],
  },
  {
    id: 'stories', title: '走进别人的故事', subtitle: '从一次交谈，开始理解一个人。',
    category: '人物采访 / 内容传播', theme: 'blue',
    description: '从普通人的经历切入，记录行业变化、身份反差与个体选择。曾在界面新闻金融组、北京青年报社会组从事采访与报道。',
    facts: ['人物特稿', '单篇最高 113 万阅读', '调查与采访'],
    sections: [
      { title: '从接近一个人开始', text: '在保险代理人群体流失的报道中，面对“离开的人不好联系”的困难，我通过前同事的信任链、现场探访和社群触达，寻找离职及在职代理人，合作完成深度报道。' },
      { title: '从故事中发现选题', text: '在银行个贷员报道中，抓住日常工作与科幻写作之间的身份反差；在币圈暴跌报道中，采访 3 位处境不同的年轻玩家，呈现普通参与者的情绪和选择。' },
      { title: '调查与内容传播', text: '参与华尔街英语破产事件报道，建立调查问卷，3 天回收 200 余份，用于获取基本信息与筛选采访对象。在润飞工作室策划“基金暴跌、经济诈骗”等电台话题，带来 300 余名新增收听用户。' },
      {
        title: '写回自己',
        text: '戴着社会的面具走了一程，也开始试着卸下它，写回真实的自己。',
        links: [{ label: '《冬至夜航日志》', url: 'https://mp.weixin.qq.com/s/mH6oVyxQxnei47RXM9CUrA' }],
      },
    ],
    works: [
      { title: '卖保险不如送外卖？百万保险代理人“消失”背后', publication: '界面新闻 · 财联社刊发', description: '通过信任链、实地探访与社群触达，记录离开保险行业的人及其职业选择。合作完成。', metric: '全平台 113 万阅读', url: 'https://www.cls.cn/detail/883299' },
      { title: '“白天996，夜晚挣脱现实引力”，“雨果奖”海漄这样的银行个贷员日常是怎样的？', publication: '界面新闻', description: '通过同事与行业访谈，走近银行员工的日常，呈现工作压力与写作热爱。合作完成。', metric: '14.9 万阅读', url: 'https://m.jiemian.com/article/10269909.html' },
      { title: '暴跌之下炒币者心态崩了吗？我们和三位年轻玩家聊了聊', publication: '界面新闻', description: '从 3 位年轻玩家的真实经历切入，记录市场剧变中的情绪、选择与处境。', metric: '32 万阅读', url: 'https://www.jiemian.com/article/6182818.html' },
      { title: '冬至夜航日志', publication: '个人写作', description: '戴着社会的面具走了一程，也开始试着卸下它，写回真实的自己。', url: 'https://mp.weixin.qq.com/s/mH6oVyxQxnei47RXM9CUrA' },
    ],
    portfolio: { label: '查看完整作品集', url: 'https://lingxiaozhang01.github.io/portfolio/' },
  },
];

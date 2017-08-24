export default [
  {
    id: 1,
    slug: 'ask-taoyuan',
    type: 'people',
    name: '桃園立委給問嗎',
    start_date: new Date(2017, 7, 1), // 1 August 2017
    end_date: new Date(2017, 8, 11, 12), // 11 September 2017
    status: 'new',
    question: '這些桃園的立法委員，你想問誰呢？沃草正式推出〈桃園立委給問嗎〉活動，快來選出你想問的立委，就有機會讓他們在9/23下午接受民眾和公民團體的質詢喔！',
    description: `繼前一場〈台南立委給問嗎〉百人現場質詢立委的熱烈活動，這次**沃草**與**桃園在地聯盟**共同舉辦〈桃園立委給問嗎〉活動，在9/23（六）下午，邀請與桃園相關的立委，針對各種與桃園市民關心的議題，直接面對現場公民與公民團體的質詢。\n\n
因為桃園區域及相關不分區立委人數較多，為了妥善安排活動流程，沃草要邀請你，透過這次沃草《找共識》網路投票，選出你最想問的立委。\n\n
**投票截止時間為9/11中午十二點整**，截止後，沃草將盡力邀請得到前三高票的立委，參加〈桃園立委給問嗎〉。如有委員無法參加，我們也將依照票數高低順序邀請其他委員遞補。\n\n
想問哪位立委嗎？那就來沃草《找共識》投票吧！`,
    // question + description → <meta> description
    ballots_per_citizen: 1,
    options: [
      {
        id: '鄭運鵬',
        name: '鄭運鵬',
        party: '民進黨',
        zone: '桃園市',
        district: '第一選舉區',
        neighborhoods: ['蘆竹', '龜山', '桃園']
      },
      {
        id: '陳賴素美',
        name: '陳賴素美',
        party: '民進黨',
        zone: '桃園市',
        district: '第二選舉區',
        neighborhoods: ['大園', '觀音', '新屋', '楊梅']
      },
      {
        id: '陳學聖',
        name: '陳學聖',
        party: '國民黨',
        zone: '桃園市',
        district: '第三選舉區',
        neighborhoods: ['中壢']
      },
      {
        id: '鄭寶清',
        name: '鄭寶清',
        party: '民進黨',
        zone: '桃園市',
        district: '第四選舉區',
        neighborhoods: ['桃園']
      },
      {
        id: '呂玉玲',
        name: '呂玉玲',
        party: '國民黨',
        zone: '桃園市',
        district: '第五選舉區',
        neighborhoods: ['平鎮', '龍潭']
      },
      {
        id: '趙正宇',
        name: '趙正宇',
        party: '無黨籍',
        zone: '桃園市',
        district: '第六選舉區',
        neighborhoods: ['八德', '大溪', '復興', '中壢']
      },
      {
        id: '吳志揚',
        name: '吳志揚',
        party: '國民黨',
        zone: '全國不分區'
      }
    ],
    related_event: {
      id: 16,
      type: 'physical',
      name: '桃園立委給問嗎',
      link: 'https://ask.watchout.tw',
      participation_link: 'https://goo.gl/CfsWRv'
    }
  },
  {
    id: 2,
    slug: 'ask-taichung',
    name: '台中立委給問嗎',
    start_date: new Date(2017, 8, 1), // 1 September 2017
    end_date: new Date(2017, 8, 30) // 30 September 2017
  },
  {
    id: 3,
    slug: 'ask-kaohsiung',
    name: '高雄立委給問嗎',
    start_date: new Date(2017, 9, 1), // 1 October 2017
    end_date: new Date(2017, 9, 31) // 31 October 2017
  }
]

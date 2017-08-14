export default [
  {
    id: 1,
    slug: 'ask-taoyuan',
    type: 'people',
    name: '桃園立委給問嗎',
    start_date: new Date(2017, 7, 1), // 1 August 2017
    end_date: new Date(2017, 7, 31), // 31 August 2017
    status: 'new',
    question: '這些桃園的立法委員，你想問誰？',
    description: '沃草將會邀請得票數前四位的委員參加九月的《桃園立委給問嗎》。',
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
      participation_link: 'https://ask.watchout.tw'
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

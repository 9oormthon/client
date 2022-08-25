export const mockMyPosts = [
  {
    id: 1,
    title: '제주시분들 이주민 반기나요?',
    contents:
      '이번에 제주시 쪽으로 이사갈까 하는데 제가 정이 많은 편인데 걱정이 되어서 글을 올립니다. 혹시 거주민이신 분들 정보 제공 가능하신가요? 감사합니다.',
    createdAt: '2022-08-24 4:44',
    commentsCount: 1,
  },
  {
    id: 2,
    title: '제주시분들 이주민 반기나요?',
    contents:
      '이번에 제주시 쪽으로 이사갈까 하는데 제가 정이 많은 편인데 걱정이 되어서 글을 올립니다. 혹시 거주민이신 분들 정보 제공 가능하신가요? 감사합니다.',
    createdAt: '2022-08-24 4:44',
    commentsCount: 3,
  },
];

export const mockMyComments = [
  {
    id: 1,
    createdAt: '2022-08-25 2:39',
    contents:
      '다들 무척 반기는 분위기라서 따로 걱정 안하셔도 될 것 같습니다:) 저는 오신다면 너무 좋을 것 같아요.',
    postId: 2,
    postTitle: '[제주시 | 분위기] 글 한번씩만 봐주세요..!',
  },
  {
    id: 2,
    createdAt: '2022-08-25 12:39',
    contents: '구름톤 화이팅!',
    postId: 1,
    postTitle: '[제주시 | 분위기] 글 한번씩만 봐주세요..!',
  },
];

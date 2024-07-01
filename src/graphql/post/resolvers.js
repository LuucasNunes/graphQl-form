const post = () => {
  return {
    id: '7341',
    title: 'posted',
  };
};
const posts = () => {
  return [
    {
      id: '7341',
      title: 'posted',
    },
    {
      id: '7521',
      title: 'error',
    },
    {
      id: '7347',
      title: 'notPosted',
    },
  ];
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};

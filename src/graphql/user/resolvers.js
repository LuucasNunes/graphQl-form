const user = () => {
  return {
    id: 'NH2030',
    userName: 'Alice ',
  };
};
const users = () => {
  return [
    {
      id: 'AX400',
      userName: 'Kara detroit',
    },
    {
      id: 'XJ360',
      userName: 'Markus detroit',
    },
    {
      id: 'TK700',
      userName: 'Connor detroit',
    },
  ];
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};

export const getSender = (loggedUser, users) => {
  if (users) {
    return users[0]?._id === loggedUser?._id ? users[1]?.name : users[0]?.name;
  }
};
export const getChatImage = (loggedUser, users) => {
  if (users) {
    return users[0]?._id === loggedUser?._id
      ? users[1]?.image
      : users[0]?.image;
  }
};

export const getChatUserName = (loggedUser, users) => {
  if (users) {
    return users[0]?._id === loggedUser?._id
      ? users[1]?.username
      : users[0]?.username;
  }
};

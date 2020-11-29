import onNews from './action/onNews';

const clickOnNews = (value) => {
  return {
      type: onNews,
      value_1: value
  };
}

export default clickOnNews;
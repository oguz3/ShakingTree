import { AppleProps } from "store/tree";

export const getRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const uniqueId = (index: number) => {
  const randomness = Math.random().toString(36).substr(2);
  return `${randomness}${index}`;
};

export const generateApple = () => {
  let appleArr: Array<AppleProps>;
  appleArr = [...Array(getRandomInteger(12, 20))].map((x, i) => {
    return {
      id: uniqueId(i),
      top: `${getRandomInteger(0, 200)}px`,
      left: `${getRandomInteger(0, 200)}px`,
      isFall: false,
      isInBasket: false,
      fallTimeout: getRandomInteger(400, 1600),
    };
  });

  return appleArr;
};

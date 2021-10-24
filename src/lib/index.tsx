import { AppleProps } from "store/tree";

export const getRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const uniqueId = (index: number) => {
  const randomness = Math.random().toString(36).substr(2);
  return `${randomness}${index}`;
};

export const generateApple = () => {
  const appleArr: Array<AppleProps> = [...Array(getRandomInteger(12, 20))].map(
    (x, i) => {
      return {
        id: uniqueId(i),
        top: `${getRandomInteger(20, 40)}%`,
        left: `${getRandomInteger(14, 80)}%`,
        isFall: false,
        isInBasket: false,
        fallTimeout: getRandomInteger(1000, 4000),
      };
    }
  );

  return appleArr;
};

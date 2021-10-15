import { AppleProps } from "store/tree";

export const getRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateApple = () => {
  let appleArr: Array<AppleProps>;
  appleArr = [...Array(getRandomInteger(12, 20))].map(() => {
    return {
      id: "",
      top: `${getRandomInteger(0, 200)}px`,
      left: `${getRandomInteger(0, 200)}px`,
      isFall: false,
      fallTimeout: getRandomInteger(0, 1200),
    };
  });

  return appleArr;
};

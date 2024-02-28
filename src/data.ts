import { generateMockData } from "../src/mockData";

export const conversionRateMockData = generateMockData(
  1,
  50,
  new Date("2023-01-01"),
  new Date("2023-01-15")
);
export const conversionRateMockDataPrev = generateMockData(
  3,
  80,
  new Date("2022-01-01"),
  new Date("2022-01-15")
);


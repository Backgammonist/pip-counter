import { printPip, shuffle } from "../../src/services/count";
import INITIAL_STATE from "../../fixtures/state";

test("printing pip", () => {
  const userType = "player";
  const text = `${userType}: 15 | 167`;
  expect(printPip("player", INITIAL_STATE)).toBe(text);
});

test("shuffle presents a sum of 15 checkers per userType", () => {
  expect(getCheckerCountByUserType("player")).toBe(15);
});

// helpers
function getCheckerCountByUserType(userType) {
  const shuffleResult = shuffle(false);
  const playerKeys = Object.keys(shuffleResult).filter(
    item => !!shuffleResult[item][userType]
  );

  return playerKeys.reduce((acc, key) => {
    return acc + shuffleResult[key][userType];
  }, 0);
}

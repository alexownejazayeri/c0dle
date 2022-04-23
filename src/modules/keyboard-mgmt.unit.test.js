import { getAllAttemptedChars, rowScore } from "./keyboard-mgmt";

const sampleState = {
  codle: "empty",
  attempts: ["webgl", "error", "thead", "tbody", "empty", ""],
  status: [
    ["-incorrect", "-present", "-incorrect", "-incorrect", "-incorrect"],
    ["-correct", "-incorrect", "-incorrect", "-incorrect", "-incorrect"],
    ["-present", "-incorrect", "-present", "-incorrect", "-incorrect"],
    ["-present", "-incorrect", "-incorrect", "-incorrect", "-correct"],
    ["-correct", "-correct", "-correct", "-correct", "-correct"],
  ],
  turn: 4,
  matrixHistory: [
    [
      ["", "e", "m", "p", "t", "y"],
      ["w", 0, 0, 0, 0, 0],
      ["e", 1, 0, 0, 0, 0],
      ["b", 0, 0, 0, 0, 0],
      ["g", 0, 0, 0, 0, 0],
      ["l", 0, 0, 0, 0, 0],
    ],
    [
      ["", "e", "m", "p", "t", "y"],
      ["e", 1, 0, 0, 0, 0],
      ["r", 0, 0, 0, 0, 0],
      ["r", 0, 0, 0, 0, 0],
      ["o", 0, 0, 0, 0, 0],
      ["r", 0, 0, 0, 0, 0],
    ],
    [
      ["", "e", "m", "p", "t", "y"],
      ["t", 0, 0, 0, 1, 0],
      ["h", 0, 0, 0, 0, 0],
      ["e", 1, 0, 0, 0, 0],
      ["a", 0, 0, 0, 0, 0],
      ["d", 0, 0, 0, 0, 0],
    ],
    [
      ["", "e", "m", "p", "t", "y"],
      ["t", 0, 0, 0, 1, 0],
      ["b", 0, 0, 0, 0, 0],
      ["o", 0, 0, 0, 0, 0],
      ["d", 0, 0, 0, 0, 0],
      ["y", 0, 0, 0, 0, 1],
    ],
    [
      ["", "e", "m", "p", "t", "y"],
      ["e", 1, 0, 0, 0, 0],
      ["m", 0, 1, 0, 0, 0],
      ["p", 0, 0, 1, 0, 0],
      ["t", 0, 0, 0, 1, 0],
      ["y", 0, 0, 0, 0, 1],
    ],
  ],
  win: true,
};

test("testing keyboard modules", () => {
  expect(getAllAttemptedChars(sampleState).toBe('idk'));
});

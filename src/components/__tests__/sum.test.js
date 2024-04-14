import { sum } from "../sum";

test("Sum function checking", () => {
	const result = sum(2, 4);
	expect(result).toBe(6);
});

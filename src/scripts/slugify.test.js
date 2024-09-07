import { expect, test } from 'vitest'
import { slugify } from "./slugify.js";

test.each([
    ["a b c", "a-b-c"],
    ["A b C", "a-b-c"],
    ["ä b ç", "a-b-c"],
    ["á å â", "a-a-a"],
    ["-abc-", "abc"]
])("Slugify text '%s' into '%s'", async (plainText, slugified) => {
    expect(slugify(plainText)).toEqual(slugified);
});

test("Slugify should return non string value", async () => {
    expect(slugify(7331)).toEqual(7331);
})
const assert = require("assert");
const sleep = require("../index");

describe("await-sleep", () => {
    describe("#sleep()", () => {
        it("should wait for around 1,000 milliseconds.", async () => {
            const before = Date.now();
            await sleep.milliseconds(1000);
            const passed = Date.now() - before;

            assert.ok(Math.abs(1000 - passed) <= 10, "Time waited is around 1,000 milliseconds.");
        });

        it("should wait for around 1 second.", async () => {
                const before = Date.now();
                await sleep.seconds(1);
                const passed = Date.now() - before;

                assert.ok(Math.abs(1000 - passed) <= 10, "Time waited is around 1 second.");
        });
    });
});
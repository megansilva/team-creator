const { expect } = require("expect");
const Manager = require ("../lib/manager");

test ("can set the office number", () => {
    const testInfo = 100;
    const e = new Manager ("Foo", 1, "test@work.com", testInfo);
    expect(e.officeNum).toBe(testInfo);
});

test ("getRole should return Manager", () => {
    const testInfo = "Manager";
    const e = new Manager ("Foo", 1, "test@work.com", 100);
    expect(e.getRole()).toBe(testInfo);
});

test ("can get the offcie number", () => {
    const testInfo = 100;
    const e = new Manager ("Foo", 1, "test@work.com", testInfo);
    expect(e.getOfficeNumber()).toBe(testInfo);
});
const { expect } = require("expect");
const Intern = require ("../lib/intern");

test ("can set the school", () => {
    const testInfo = "FSU";
    const e = new Intern ("Foo", 1, "test@work.com", testInfo);
    expect(e.school).toBe(testInfo);
});

test ("getRole should return Intern" , () => {
    const testInfo = "Intern";
    const e = new Intern ("Foo", 1, "test@work.com", "FSU");
    expect(e.getRole()).toBe(testInfo);
});

test ("can get the school", () => {
    const testInfo = "FSU";
    const e = new Intern ("Foo", 1, "test@work.com", testInfo);
    expect(e.getSchool()).toBe(testInfo);
});

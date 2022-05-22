const { expect } = require("expect");
const Engineer = require("../lib/engineer");

test ("can set the github to the engineer", () => {
    const testInfo = "gitHub";
    const e = new Engineer ("Foo", 1, "test@work.com", "gitHub");
    expect(e.gitH).toBe(testInfo);
});

test ("getRole should return Engineer", () => {
    const testInfo = "Engineer";
    const e = new Engineer ("Foo", 1, "test@work.com", "gitHub",);
    expect(e.getRole()).toBe(testInfo);
});

test ("get the github", () => {
    const testInfo = "gitHub";
    const e = new Engineer ("Foo", 1, "test@test.com", testInfo);
    expect(e.getGitHub()).toBe(testInfo);
});

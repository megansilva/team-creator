const Employee = require ("../lib/employee");

describe ("Employee", () => {
    it ("can start employee step", () => {
        const e = new Employee ();
        expect(typeof(e)).toBe("object");
    });

    it ("can set the name for the constructed arguments", () => {
        const name = "Megan";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it ("can set id for the employee", () => {
        const testInfo = 100;
        const e = new Employee("Foo", testInfo);
        expect(e.ID).toBe(testInfo);
    });

    it ("can set the email for the constructed argument", () => {
        const testInfo = "test@work.com";
        const e = new Employee("Foo", 1, testInfo);
        expect(e.email).toBe(testInfo);
    });

    describe ("getName", () => {
        it ("can grab the name of the employee being input", () => {
            const testInfo = "Megan";
            const e = new Employee(testInfo);
            expect(e.getName()).toBe(testInfo);
        });
    });

    describe ("getID", () => {
        it ("can grab the id of the employee being input", () => {
            const testInfo = 100;
            const e = new Employee("Foo", testInfo);
            expect(e.getID()).toBe(testInfo);
        });
    });

    describe ("getEmail", () => {
        it ("can grab the email of the employee being input", () => {
            const testInfo = "test@work.com";
            const e = new Employee("Foo", 1, testInfo);
            expect(e.getEmail()).toBe(testInfo);
        });
    });

    describe ("getRole", () => {
        it ("getRole should return Employee", () => {
            const testInfo = "Employee";
            const e = new Employee ("Megan", 1, "test@work.com");
            expect(e.getRole()).toBe(testInfo);
        });
    });

});
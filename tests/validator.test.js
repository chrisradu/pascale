const { validate } = require("../src/validators/taskValidator");

test("validator", () => {

    expect(validate({

        title: "Task"

    })).toBeTruthy();

});

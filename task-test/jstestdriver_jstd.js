TestCase("JsTestDriver built in numbers test", {
    testA: function () {
        "use strict";
        var total = 10 + 10 + 10;

        assertEquals(30, total);
    },

    testB: function () {
        "use strict";
        var total = 10 * 10 * 10;

        assertEquals(1000, total);
    },

    testFailA: function () {
        "use strict";
        fail("Should fail");
    },

    testFailB: function () {
        "use strict";
        fail("Should fail");
    },

    testError: function () {
        "use strict";
        throw new Error();
    }
});
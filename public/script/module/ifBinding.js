require(["jquery", "knockout", "underscore"], function($, ko, _) {
    var viewModel = {
        compute: ko.observable(0)
    };
    window.instance = viewModel;
    ko.applyBindings(window.instance, $(".bind-to-node")[0]);

    var viewModel2 = {
        persons : [
         {
            name: "foo",
            email: {
                show: true,
                val: "foo@email.com"
            },
            mobile: {
                show: false,
                val: "010-1234-652"
            }
         },
         {
            name: "bar",
            email: {
                show: true,
                val: "bar@email.com"
            },
            mobile: {
                show: true,
                val: "010-3214-619"
            }
         },
         {
            name: "tom",
            email: {
                show: null,
                val: "tom@email.com"
            },
            mobile: {
                show: false,
                val: "045-6314-314"
            }
         }
        ]
    };
    window.instance2 = viewModel2;
    ko.applyBindings(window.instance2, $(".bind-to-node2")[0]);
});
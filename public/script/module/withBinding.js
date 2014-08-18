require(["jquery", "knockout", "underscore"], function($, ko, _) {
    var viewModel = {
        Organization: {
            Departments: [
                {
                    name: "Vertical",
                    groups: {
                        Interactive: {
                            Mobility: [
                                {
                                    name: "experienced",
                                    id: [36520, 26531, 13021 ]
                                },
                                {
                                    name: "literal",
                                    id: [33651, 30120, 23650 ]
                                },
                                {
                                    name: "freshers",
                                    id: [43201, 39560, 36510 ]
                                }
                            ],
                            Web: [
                                {
                                    name: "experienced",
                                    id: [84650, 76513, 86422 ]
                                },
                                {
                                    name: "literal",
                                    id: [78631, 78841, 56140 ]
                                },
                                {
                                    name: "freshers",
                                    id: [89640, 94510, 85620 ]
                                }
                            ],
                            eLearning: [
                                {
                                    name: "experienced",
                                    id: [56510, 46301, 56510 ]
                                },
                                {
                                    name: "literal",
                                    id: [66442, 55410, 43650 ]
                                },
                                {
                                    name: "freshers",
                                    id: [65141, 45210, 96520 ]
                                }
                            ]
                        }
                    }
                },
                {
                    name: "Horizontal",
                    groups: {
                        
                    }
                }
            ]
        }
    };
    window.instance = viewModel;
    ko.applyBindings(window.instance, $(".bind-to-node")[0]);

});
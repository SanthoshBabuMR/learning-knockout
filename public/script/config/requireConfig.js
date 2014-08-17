require.config({
    baseUrl: "/public/script/",
    paths: {
        // lib
        "requireLib": "lib/require",
        "jquery": "lib/jquery.1.11.1.min",
        "knockout": "lib/knockout.2.2.0.min",
        "underscore": "lib/underscore.min",

        // plugins
        "text": "lib/text",
        "i18n": "lib/i18n",
        "knockoutAmd": "lib/knockout.amd.helpers.min",

        // modules
        "observableInput": "module/observableInput",
        "helloWorldInlineTemplate": "module/helloWorldInlineTemplate",
        "inlineTemplate": "module/inlineTemplate",
        "externalTemplate": "module/externalTemplate",
        "computedObservable": "module/computedObservable",
        "observableArray": "module/observableArray",
        "fiddlingWithTemplate": "module/fiddlingWithTemplate",
        "foreachLooping": "module/foreachLooping",
        "ifBinding": "module/ifBinding"
    },
    shim: {
        "underscore": {
            exports: "_"
        },
        "knockout": {
            exports: "ko"
        },
        "knockoutAmd": ["knockout"],
        "jquery": {
            exports: "$"
        }
    },
    urlArgs: "bust=" + (new Date()).getTime(),
    waitSeconds: 15

});

require(["knockout", "knockoutAmd"], function(ko, koAmd) {
    ko.amdTemplateEngine.defaultPath = "../template";
    ko.amdTemplateEngine.defaultSuffix = ".tmpl";
    ko.amdTemplateEngine.defaultRequireTextPluginName = "text";
    ko.bindingHandlers.module.baseDir = "module";
});

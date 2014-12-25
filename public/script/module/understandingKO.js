require(["jquery", "knockout", "underscore", "JSONData", "editorPattern", "myMission"], function($, ko, _, JSONData, editorPatternVM, myMissionVM ) {


    window.instance = {
        editorPattern: new editorPatternVM( JSONData.editorPattern ),
        myMission: new myMissionVM()
    }
    ko.applyBindings(window.instance, $(".bind-to-node")[0]);
});

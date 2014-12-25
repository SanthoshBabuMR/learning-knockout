define(["jquery", "knockout", "underscore"], function($, ko, _) {

    function viewModel(data) {
        var self = this;
        self.selected = ko.observable( {
            name: ko.observable( "-mission name-"),
            risk: ko.observable( "-mission risk-")
        } );
        self.missions = ko.observableArray(
            [ { "name": ko.observable("Save the village"), "risk": "Medium" }, 
              { "name": ko.observable("Stop the mobster"), "risk": "Low" } ,
              { "name": ko.observable("Rescue the children"), "risk": "High" } ]
        );
    }
    return viewModel;
});
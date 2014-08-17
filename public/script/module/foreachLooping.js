require(["jquery", "knockout", "underscore"], function($, ko, _) {
    
    var viewModel = function() {
        var self = this;
        var length = 0;
        self.category = ko.observableArray( [
        {
            name: "Electrical",
            items: ko.observableArray( ["Pipes", "Switch Board", "Switches", "Bulbs"] )
        },
        {
            name: "Pipes",
            items: ko.observableArray( ["PVC pipes", "GI pipes"] )
        },
        /*{
            name: "Fittings",
            items: ko.observableArray( ["PVC fittings", "GI fittings"] )
        },*/
        {
            name: "Tools",
            items: ko.observableArray( ["Screwdriver", "Wrench", "Spanner"] )
        }
        ] );
        self.removeItem= function( parent, item ) {
            var itemIndex = _.indexOf( parent.items, item );
            parent["items"].splice(itemIndex,1);
        };
        self.removeCategory= function() {
            self.category.remove( this );
        };
        self.addCategory = function() {
            var cat = _.extend( {}, newCategory );
            cat.name = cat.name + " " + length++;
            self.category.push( cat );
        }
        var newCategory = {
            name: "Hardware",
            items: ko.observableArray( [ "nuts", "bolt"] )
        }
        var setLength = (function() {
            length = self.category().length
        }() )
    };

    window.instance = new viewModel;
    ko.applyBindings(window.instance, $(".bind-to-node")[0]);

    var viewModel2 = function() {
        var self = this;
        var seasons = [
                                {
                                    name: "Spring",
                                    months: [ "March", "April", "May" ]
                                },
                                {
                                    name: "Summer",
                                    months: [ "June", "July", "August" ]
                                },
                                {
                                    name: "Autumn",
                                    months: [ "September", "October", "Novembter" ]    
                                },
                                {
                                    name: "Winter",
                                    months: [ "December", "January", "February"]
                                }
                            ] 
        self.seasons = ko.observableArray( seasons );
        self.ascOrder = function() {
            self.seasons( _.sortBy(self.seasons(), function(season){ return season.name; }) )
        };
        self.desOrder = function() {
            self.ascOrder();
            self.seasons( self.seasons().reverse() );
        };
        self.defaultOrder = function() {
            self.seasons( seasons );
        };
    }
    window.instance2 = new viewModel2;
    ko.applyBindings(window.instance2, $(".bind-to-node2")[0]);

    var viewModel3 = {
        days: [ "Sun", "Mon", "Tue", "Thu", "Fri", "Sat" ]
    };
    window.instance3 = viewModel3;
    ko.applyBindings(window.instance3, $(".bind-to-node3")[0]);
});
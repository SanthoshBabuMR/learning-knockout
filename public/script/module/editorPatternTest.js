require(["jquery", "knockout", "underscore"], function($, ko, _) {


    function viewModel(data) {
        var self = this;
        var productModel = new model();
        productModel.initialize( data );
        this.model = productModel;
    }

    function modelDTO( ) {
        var self = this;
        self.address = ko.observable();

        ko.utils.extend( modelDTO.prototype, {
            initialize: function( data ) {
                this.address( data.dto.address );
            }
        })
    }

    function model() {
        var self = this;
        self.name = ko.observable();
        self.ownership = ko.observableArray();
        self.dto = ko.observable();

        ko.utils.extend( model.prototype, {
            initialize: function( data ) {
                var ownershipDTO;
                this.name( data.name );
                if( data && data.ownership ) {
                    for( var i=0;i<data.ownership.length;i++ ) {
                        ownershipDTO = new model();
                        ownershipDTO.initialize(data.ownership[i]);
                        this.ownership.push( ownershipDTO );    
                    }       
                }                             
                var modeldto = new modelDTO();
                modeldto.initialize(data);
                this.dto( modeldto );
            },
            save: function() {

            }
        })
    }


    var json = {
        name: "Chennai Corp",
        dto: {
            address: "velachery"
        },
        ownership: [
            {
                name: "Santhosh",
                dto: {
                    address: "Siruseri"
                }
            },
            {
                name: "Shaktish",
                dto: {
                    address: "Mount Road"
                }
            }
        ]

    };
    window.instance = new viewModel( json );
    ko.applyBindings(window.instance, $(".bind-to-node")[0]);

});
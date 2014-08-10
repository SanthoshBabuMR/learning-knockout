require( [ "jquery", "knockout" ], function( $, ko ) {
    var viewModel = {
       firstName: ko.observable()
    };

    ko.applyBindings(viewModel, $(".bind-to-node")[0] )

    viewModel.firstName.subscribe( function( value ) {
      console.log( "current value : " + value  );
    });

    viewModel.firstName.subscribe( function( value ) {
      console.log( "value before change : " + value  );
    }, null, "beforeChange" );

} );

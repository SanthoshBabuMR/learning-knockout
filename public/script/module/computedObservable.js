require(["jquery", "knockout"], function($, ko) {
    var viewModel = function() {
      var self = this;
      self.restUrl = "http://repo.com/rest/api/";
      self.firstName = ko.observable("santhosh");
      self.lastName = ko.observable("pillai");
      self.fullName = ko.computed(function(){
        return self.firstName() + " " + self.lastName.peek();
      });
      self.formatter = ko.computed( {
        read: function() { return "family name is " + self.lastName() },
        write: function(v) { self.lastName( v.replace( "family name is ", "" ) ) },
        owner: this
      } );
    }
    var instance = new viewModel,
    i;
    for( i in instance ){
      if( ko.isWriteableObservable( instance[i] ) ) {
        console.log( "'" + i + "' is an writable observable");
      } else if( ko.isComputed( instance[i] ) ) {
        console.log( "'" + i + "' is computed observable");
      } else if( ko.isObservable( instance[i] ) ) {
        console.log( "'" + i + "' is an observable");
      } else {
        console.log( "'" + i + "' is not an observable");
      }
    }
    ko.applyBindings(instance, $(".bind-to-node")[0]);
});

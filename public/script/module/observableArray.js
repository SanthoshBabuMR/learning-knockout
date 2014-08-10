require(["jquery", "knockout"], function($, ko) {
    var koArr = ko.observableArray();
    koArr.push( "Sunday" );
    koArr.push( "Monday" );
    koArr.push( "Tuesday" );
    koArr.push( "Wednesday" );
    koArr.push( "Thursday" );
    koArr.push( "Friday" );
    koArr.push( "Saturday" );
    var instance = new (function() {
      this.arr = koArr;
    });
    ko.applyBindings(instance, $(".bind-to-node")[0]);
});

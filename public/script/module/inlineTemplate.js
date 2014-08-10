require(["jquery", "knockout"], function($, ko) {
    var viewModel = {
        wikiArticle: {
            title: "Wikipedia",
            content: "<p>Wikipedia is a free-access, free content Internet encyclopedia, supported and hosted by the non-profit Wikimedia Foundation. Wikipedia is the sixth most popular website and constitutes the Internet's largest and most popular general reference work. As of 2014, it has 18 billion page views and nearly 500 million unique visitors each month.</p><p>Jimmy Wales and Larry Sanger launched Wikipedia on January 15, 2001. Sanger coined its name, a portmanteau of wiki and encyclopedia. Although Wikipedia's content was initially only in English, it quickly became multilingual, through the launch of versions in different languages.</p><p>Wikipedia has earned a reputation as a news source because of its rapid updating of articles related to breaking news. In addition, Wikipedia's high openness compared to previous encyclopedias and its inclusion of much unacademic content have received extensive media attention.</p>"
        }
    };
    ko.applyBindings(viewModel, $(".bind-to-node")[0]);

    var viewModel2 = {
        forecast : [
        	{
        		city: "chennai",
        		weather: "humid"
        	},
        	{
        		city: "chittoor",
        		weather: "sunny"
        	},
        	{
        		city: "madurai",
        		weather: "rain"
        	}
        ]
    };
    ko.applyBindings(viewModel2, $(".bind-to-node2")[0]);

    var viewModel3 = {
        seasons: ko.observableArray([
            { name: 'Spring', months: [ 'March', 'April', 'May' ] },
            { name: 'Summer', months: [ 'June', 'July', 'August' ] },
            { name: 'Autumn', months: [ 'September', 'October', 'November' ] },
            { name: 'Winter', months: [ 'December', 'January', 'February' ] }
        ])
    };
    ko.applyBindings(viewModel3, $(".bind-to-node3")[0]);

});
sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'customer/travel/travellist/test/integration/pages/MainListReport' ,
        'customer/travel/travellist/test/integration/pages/MainObjectPage',
        'customer/travel/travellist/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('customer/travel/travellist') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);
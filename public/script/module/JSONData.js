define( [], function() {
  var JSONData = {};

  JSONData.editorPattern = {
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

  JSONData.myMission = {
    selected: { name: "-mission name-", risk: "-mission risk-" },
    missions: [
      { name: "Save the village", risk: "Medium" },
      { name: "Stop the mobster", risk: "Low" },
      { name: "Rescue the children", risk: "High" }
    ]
  };

  return JSONData;

} );

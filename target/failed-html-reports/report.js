$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/odometer.feature");
formatter.feature({
  "name": "Odometer",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify that truck driver should be able to see all vehicle odometer information on the grid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Odometer"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to login valid credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_login_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be click Vehicle Odometer page under the Fleet",
  "keyword": "When "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_click_Vehicle_Odometer_page_under_the_Fleet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be see all the vehicle odometers",
  "keyword": "Then "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_see_all_the_vehicle_odometers()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
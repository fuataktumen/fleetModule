$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/odometer.feature");
formatter.feature({
  "name": "Odometer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Allnew"
    }
  ]
});
formatter.scenario({
  "name": "Verify that truck driver should be able to see all vehicle odometer information on the grid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Allnew"
    },
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
formatter.scenario({
  "name": "Database Verify",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Allnew"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user connect database",
  "keyword": "Given "
});
formatter.match({
  "location": "Odometer.the_user_connect_database()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user see all the vehicle odometers",
  "keyword": "When "
});
formatter.match({
  "location": "Odometer.the_user_see_all_the_vehicle_odometers()"
});
formatter.result({
  "error_message": "java.sql.SQLSyntaxErrorException: SELECT command denied to user \u0027qa_user\u0027@\u002762.20.234.219\u0027 for table \u0027oro_ext_vehiclesodomete\u0027\r\n\tat com.mysql.cj.jdbc.exceptions.SQLError.createSQLException(SQLError.java:120)\r\n\tat com.mysql.cj.jdbc.exceptions.SQLError.createSQLException(SQLError.java:97)\r\n\tat com.mysql.cj.jdbc.exceptions.SQLExceptionsMapping.translateException(SQLExceptionsMapping.java:122)\r\n\tat com.mysql.cj.jdbc.StatementImpl.executeQuery(StatementImpl.java:1200)\r\n\tat com.vytrack.fleetModule.step_definations.Odometer.the_user_see_all_the_vehicle_odometers(Odometer.java:77)\r\n\tat ✽.The user see all the vehicle odometers(file:src/test/resources/features/odometer.feature:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Verify that match UI data and Database data",
  "keyword": "Then "
});
formatter.match({
  "location": "Odometer.verify_that_match_UI_data_and_Database_data()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@createOdometer"
    }
  ]
});
formatter.step({
  "name": "The Truck driver should be in CreateVehicleOdometer page",
  "keyword": "Given "
});
formatter.step({
  "name": "The Truck driver should be able to write \"\u003cOdometerValue\u003e\" under the OdometerValue",
  "keyword": "When "
});
formatter.step({
  "name": "The Truck driver should be able to write \"\u003cDate\u003e\" under the Date",
  "keyword": "And "
});
formatter.step({
  "name": "The Truck driver should be able to write \"\u003cDriver\u003e\" under the Driver",
  "keyword": "And "
});
formatter.step({
  "name": "The Truck driver should be able to select Unit",
  "keyword": "And "
});
formatter.step({
  "name": "The Truck driver should be able to SaveAndClose button",
  "keyword": "Then "
});
formatter.examples({
  "name": "Create Vehicle Odometer",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "OdometerValue",
        "Date",
        "Driver"
      ]
    },
    {
      "cells": [
        "113000",
        "Mar 26, 2020",
        "Fuat Aktümen"
      ]
    },
    {
      "cells": [
        "123423",
        "Mar 26, 2020",
        "Rukiye Aktümen"
      ]
    },
    {
      "cells": [
        "145678",
        "Mar 26, 2020",
        "Akmet Aktümen"
      ]
    },
    {
      "cells": [
        "178976",
        "Mar 26, 2020",
        "Tarık Aktümen"
      ]
    },
    {
      "cells": [
        "hgfdssfghhjhhkkjjkj",
        "Mar 26, 2020",
        "Safiye Aktümen"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Allnew"
    },
    {
      "name": "@createOdometer"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be in CreateVehicleOdometer page",
  "keyword": "Given "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_in_CreateVehicleOdometer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to write \"113000\" under the OdometerValue",
  "keyword": "When "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_write_under_the_OdometerValue(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to write \"Mar 26, 2020\" under the Date",
  "keyword": "And "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_write_under_the_Date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to write \"Fuat Aktümen\" under the Driver",
  "keyword": "And "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_write_under_the_Driver(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to select Unit",
  "keyword": "And "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_select_Unit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to SaveAndClose button",
  "keyword": "Then "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_SaveAndClose_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Allnew"
    },
    {
      "name": "@createOdometer"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be in CreateVehicleOdometer page",
  "keyword": "Given "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_in_CreateVehicleOdometer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to write \"123423\" under the OdometerValue",
  "keyword": "When "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_write_under_the_OdometerValue(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to write \"Mar 26, 2020\" under the Date",
  "keyword": "And "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_write_under_the_Date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to write \"Rukiye Aktümen\" under the Driver",
  "keyword": "And "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_write_under_the_Driver(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to select Unit",
  "keyword": "And "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_select_Unit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to SaveAndClose button",
  "keyword": "Then "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_SaveAndClose_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Allnew"
    },
    {
      "name": "@createOdometer"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be in CreateVehicleOdometer page",
  "keyword": "Given "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_in_CreateVehicleOdometer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to write \"145678\" under the OdometerValue",
  "keyword": "When "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_write_under_the_OdometerValue(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to write \"Mar 26, 2020\" under the Date",
  "keyword": "And "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_write_under_the_Date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to write \"Akmet Aktümen\" under the Driver",
  "keyword": "And "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_write_under_the_Driver(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to select Unit",
  "keyword": "And "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_select_Unit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to SaveAndClose button",
  "keyword": "Then "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_SaveAndClose_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Allnew"
    },
    {
      "name": "@createOdometer"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be in CreateVehicleOdometer page",
  "keyword": "Given "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_in_CreateVehicleOdometer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to write \"178976\" under the OdometerValue",
  "keyword": "When "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_write_under_the_OdometerValue(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to write \"Mar 26, 2020\" under the Date",
  "keyword": "And "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_write_under_the_Date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to write \"Tarık Aktümen\" under the Driver",
  "keyword": "And "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_write_under_the_Driver(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to select Unit",
  "keyword": "And "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_select_Unit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to SaveAndClose button",
  "keyword": "Then "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_SaveAndClose_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Allnew"
    },
    {
      "name": "@createOdometer"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be in CreateVehicleOdometer page",
  "keyword": "Given "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_in_CreateVehicleOdometer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to write \"hgfdssfghhjhhkkjjkj\" under the OdometerValue",
  "keyword": "When "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_write_under_the_OdometerValue(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to write \"Mar 26, 2020\" under the Date",
  "keyword": "And "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_write_under_the_Date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to write \"Safiye Aktümen\" under the Driver",
  "keyword": "And "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_write_under_the_Driver(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to select Unit",
  "keyword": "And "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_select_Unit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Truck driver should be able to SaveAndClose button",
  "keyword": "Then "
});
formatter.match({
  "location": "Odometer.the_Truck_driver_should_be_able_to_SaveAndClose_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
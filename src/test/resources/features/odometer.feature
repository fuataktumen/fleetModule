
@Allnew
Feature: Odometer

  @Odometer
  Scenario: Verify that truck driver should be able to see all vehicle odometer information on the grid

    Given The Truck driver should be able to login valid credentials
    When The Truck driver should be click Vehicle Odometer page under the Fleet
    Then The Truck driver should be see all the vehicle odometers
   @db
  Scenario:Database Verify

    Given The user connect database
    When  The user see all the vehicle odometers
    Then Verify that match UI data and Database data
  @createOdometer
    Scenario Outline:

      Given The Truck driver should be in CreateVehicleOdometer page
      When  The Truck driver should be able to write "<OdometerValue>" under the OdometerValue
      And The Truck driver should be able to write "<Date>" under the Date
      And The Truck driver should be able to write "<Driver>" under the Driver
      And The Truck driver should be able to select Unit
      Then The Truck driver should be able to SaveAndClose button


Examples:Create Vehicle Odometer

    |  OdometerValue| Date | Driver |
    |113000          |Mar 26, 2020|Fuat Aktümen|
    |123423         |Mar 26, 2020|Rukiye Aktümen|
    |145678         |Mar 26, 2020|Akmet Aktümen|
    |178976        |Mar 26, 2020|Tarık Aktümen|
    |hgfdssfghhjhhkkjjkj      |Mar 26, 2020|Safiye Aktümen|

package com.vytrack.fleetModule.step_definations;

import com.vytrack.fleetModule.pages.ContactInfoPage;
import com.vytrack.fleetModule.pages.DashboardPage;
import com.vytrack.fleetModule.pages.LoginPage;

import com.vytrack.fleetModule.utilities.utilities.BrowserUtils;
import com.vytrack.fleetModule.utilities.utilities.ConfigurationReader;
import com.vytrack.fleetModule.utilities.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebElement;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Odometer {
    @Given("The Truck driver should be able to login valid credentials")
    public void the_Truck_driver_should_be_able_to_login_valid_credentials() {
        String url = ConfigurationReader.get("url");
        Driver.get().get(url);
        LoginPage loginPage = new LoginPage();
        String username = ConfigurationReader.get("username");
        String password = ConfigurationReader.get("password");

        loginPage.login(username, password);

    }

    @When("The Truck driver should be click Vehicle Odometer page under the Fleet")
    public void the_Truck_driver_should_be_click_Vehicle_Odometer_page_under_the_Fleet() {

        DashboardPage dashboardPage = new DashboardPage();
        dashboardPage.navigateToModule("Fleet", "Vehicle Odometer");

    }

    @Then("The Truck driver should be see all the vehicle odometers")
    public void the_Truck_driver_should_be_see_all_the_vehicle_odometers() {

        ContactInfoPage contactInfoPage = new ContactInfoPage();
        contactInfoPage.waitUntilLoaderScreenDisappear();
        for (WebElement as : contactInfoPage.OdometerValue
        ) {
            System.out.println(as.getText());
        }

//------------------------------------------------------------------------------------------------------------------
    }

    String dbUrl = ConfigurationReader.get("dbUrl");
    String dbUsername = ConfigurationReader.get("dbUsername");
    String dbPassword = ConfigurationReader.get("dbPassword");

    @Given("The user connect database")
    public void the_user_connect_database() throws SQLException {


        Connection connection = DriverManager.getConnection(dbUrl, dbUsername, dbPassword);
        Statement statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
        ResultSet resultSet = statement.executeQuery("select odometerValue from oro_ext_vehiclesodometer;");


        resultSet.close();
        statement.close();
        connection.close();
    }

    @When("The user see all the vehicle odometers")
    public void the_user_see_all_the_vehicle_odometers() throws SQLException {
        Connection connection = DriverManager.getConnection(dbUrl, dbUsername, dbPassword);
        Statement statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
        ResultSet resultSet = statement.executeQuery("select odometerValue from oro_ext_vehiclesodometer;");


        resultSet.last();
        int rowNumber = resultSet.getRow();


        System.out.println(rowNumber);

        resultSet.beforeFirst();

        while (resultSet.next()) {

            System.out.println(resultSet.getString(1));
        }


        resultSet.close();
        statement.close();
        connection.close();

    }

    @Then("Verify that match UI data and Database data")
    public void verify_that_match_UI_data_and_Database_data() throws SQLException {
        Connection connection = DriverManager.getConnection(dbUrl, dbUsername, dbPassword);
        Statement statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
        ResultSet resultSet = statement.executeQuery("select odometerValue from oro_ext_vehiclesodometer;");
        ResultSetMetaData rsMetadata = resultSet.getMetaData();

        List<List<Object>> rowList = new ArrayList<>();

        while (resultSet.next()) {
            List<Object> row = new ArrayList<>();
            for (int i = 1; i <= rsMetadata.getColumnCount(); i++) {
                row.add(resultSet.getObject(i));
            }
            rowList.add(row);

        }
    }
//------------------------------------------------------------------------------------
@Given("The Truck driver should be in CreateVehicleOdometer page")
public void the_Truck_driver_should_be_in_CreateVehicleOdometer_page() {

    String url = ConfigurationReader.get("url");
    Driver.get().get(url);
    LoginPage loginPage = new LoginPage();
    String username = ConfigurationReader.get("username");
    String password = ConfigurationReader.get("password");

    loginPage.login(username, password);

    DashboardPage dashboardPage = new DashboardPage();
    dashboardPage.navigateToModule("Fleet", "Vehicle Odometer");
    BrowserUtils.waitFor(5);
    ContactInfoPage contactInfoPage= new ContactInfoPage();
    BrowserUtils.waitFor(5);
    contactInfoPage.createVehicleOdometer.click();


}

    @When("The Truck driver should be able to write {string} under the OdometerValue")
    public void the_Truck_driver_should_be_able_to_write_under_the_OdometerValue(String odometerValue) {

ContactInfoPage contactInfoPage = new ContactInfoPage();
contactInfoPage.odometerValue.sendKeys(odometerValue);



    }

    @When("The Truck driver should be able to write {string} under the Date")
    public void the_Truck_driver_should_be_able_to_write_under_the_Date(String date) {


ContactInfoPage contactInfoPage = new ContactInfoPage();
contactInfoPage.date.click();
BrowserUtils.waitFor(5);
contactInfoPage.today.click();
BrowserUtils.waitFor(5);


    }

    @When("The Truck driver should be able to write {string} under the Driver")
    public void the_Truck_driver_should_be_able_to_write_under_the_Driver(String Driver) {


ContactInfoPage contactInfoPage = new ContactInfoPage();
contactInfoPage.DriverName.sendKeys(Driver);

    }

    @When("The Truck driver should be able to select Unit")
    public void the_Truck_driver_should_be_able_to_select_Unit() {

        ContactInfoPage contactInfoPage = new ContactInfoPage();
        contactInfoPage.unit.click();
        BrowserUtils.waitFor(5);




    }

    @Then("The Truck driver should be able to SaveAndClose button")
    public void the_Truck_driver_should_be_able_to_SaveAndClose_button() {



    }

}
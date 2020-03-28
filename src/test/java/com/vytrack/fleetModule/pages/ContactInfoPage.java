package com.vytrack.fleetModule.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class ContactInfoPage extends BasePage {

    @FindBy(className = "user-name")
    public WebElement contactFullName;

    @FindBy(css="a.phone")
    public WebElement phone;

    @FindBy(css="a.email")
    public WebElement email;

    @FindBy (xpath = "//td[@data-column-label='Odometer Value']")
    public List<WebElement> OdometerValue;

    @FindBy (css = "[title='Create Vehicle Odometer']")
    public  WebElement createVehicleOdometer;

    @FindBy ( name = "custom_entity_type[OdometerValue]")
    public WebElement odometerValue;

    @FindBy ( css = "[placeholder='Choose a date']")
    public WebElement date;

    @FindBy ( name = "custom_entity_type[Driver]")
    public WebElement DriverName;

    @FindBy ( css = "[class='select2-choice']")
    public WebElement unit;

    @FindBy ( css = "[data-handler='today']")
    public WebElement today;

    @FindBy ( css = ".btn.btn-success.action-button")
    public WebElement saveandclose;




}

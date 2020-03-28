package com.vytrack.fleetModule.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class odometer extends BasePage{

    @FindBy(xpath = "//td[@data-column-label='Odometer Value']")
    public List<WebElement> OdometerValue;
}

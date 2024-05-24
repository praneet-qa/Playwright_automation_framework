const commonNavigation = require("../locators/CommonNavigation.json");

class CommonDriver {
  getLocator(pageName, locatorName) {
    switch (pageName) {
      case "LoginPage":
        locator = commonNavigation[pageName][locatorName];
        break;
    }
    return locator;
  }
}

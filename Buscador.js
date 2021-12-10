function Test1()
{
  Browsers.Item(btChrome).Navigate("http://automationpractice.com/index.php");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let page = browser.pageOrderMyStore;
  let form = page.header.formSearchbox;
  let textbox = form.textboxSearchQueryTop;
  textbox.Click();
  textbox.SetText("faded");
  let button = form.buttonSubmitSearch;
  button.ClickButton();
  aqObject.CheckProperty(button, "contentText", cmpEqual, "Search");
  page.Wait();
}
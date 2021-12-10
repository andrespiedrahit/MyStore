function Test1()
{
  Browsers.Item(btChrome).Navigate("http://automationpractice.com/index.php");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let page = browser.pageOrderMyStore;
  page.Wait();
  page.header.linkSignIn.Click();
  page.Wait();
  let textbox = page.formAccountCreationForm;
  let textbox2 = textbox.textboxEmail;
  textbox2.Click();
  textbox2.Keys("ANDRESPIEDRAHITA98@HOTMAIL.COM");
  textbox2.DblClick(110, 15);
  textbox2.Click();
  textbox2.DblClick(108, 24);
  textbox2.Click();
  textbox2.Keys("~^q~^2");
  textbox2.SetText("andrespiedrahita98@hotmail.com");
  textbox2.Keys("[Tab]");
  textbox.passwordboxPassword.SetText(Project.Variables.Password1);
  page.formLoginForm.buttonSubmitlogin.ClickButton();
}
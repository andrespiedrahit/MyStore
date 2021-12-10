function Test1()
{
  Browsers.Item(btChrome).Navigate("http://automationpractice.com/index.php");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let page = browser.pageOrderMyStore;
  page.header.linkSignIn.Click();
  page.Wait();
  let form = page.formLoginForm;
  let link = form.linkForgotYourPassword;
  aqObject.CheckProperty(link, "contentText", cmpEqual, "Forgot your password?");
  link.Click();
  page.Wait();
  let textbox = page.formCreateAccountForm.textboxEmailAddress;
  textbox.Click();
  textbox.Keys("~^q~^2");
  textbox.SetText("andrespiedrahitabg@gmail.com");
  let button = form.buttonSubmitlogin;
  button.ClickButton();
  aqObject.CheckProperty(button, "contentText", cmpEqual, "Retrieve Password");
  page.Wait();
  let textNode = page.textnodeQuickView.linkQuickView.textnodeQuickView2;
  aqObject.CheckProperty(textNode, "contentText", cmpEqual, "Back to Login");
  textNode.Click();
}
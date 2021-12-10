function Test1()
{
  Browsers.Item(btChrome).Navigate("http://automationpractice.com/index.php");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let page = browser.pageOrderMyStore;
  let link = page.header;
  link.textnodeWomen.linkWomen.Click();
  page.Wait();
  let textNode = page.textnodeQuickView.linkAddToCart.textnodeAddToCart;
  textNode.Drag(76, 15, 29, -44);
  textNode.Click();
  link.linkProceedToCheckout2.textnodeProceedToCheckout2.Click();
  page.Wait();
  link.panelCart.Click();
  page.linkProceedToCheckout.textnodeProceedToCheckout.Click();
  page.Wait();
  let textbox = page.formAccountCreationForm;
  let textbox2 = textbox.textboxEmail;
  textbox2.Click();
  textbox2.Keys("andrespiedrahita98@hotmail.com");
  let form = page.formLoginForm;
  form.panelPassword.Click();
  let passwordBox = textbox.passwordboxPassword;
  passwordBox.Click();
  passwordBox.SetText(Project.Variables.Password1);
  let button = form.buttonSubmitlogin;
  button.ClickButton();
  page.Wait();
  aqObject.CheckProperty(button, "contentText", cmpEqual, "Proceed to checkout");
  button.ClickButton();
  page.Wait();
  page.formCreateAccountForm.checkboxCgv.ClickChecked(true);
  button.ClickButton();
  page.Wait();
}
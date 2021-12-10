function Test1()
{
  Browsers.Item(btChrome).Navigate("http://automationpractice.com/index.php");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let page = browser.pageOrderMyStore;
  let link = page.header.textnodeWomen;
  let link2 = link.linkWomen;
  aqObject.CheckProperty(link2, "ObjectLabel", cmpEqual, "Women");
  link2.Click();
  page.Wait();
  link2 = link.linkDresses;
  aqObject.CheckProperty(link2, "ObjectLabel", cmpEqual, "Dresses");
  link2.Click();
  page.Wait();
  link2 = link.linkTShirts;
  aqObject.CheckProperty(link2, "contentText", cmpEqual, "T-shirts");
  link2.Click();
  page.Wait();
}
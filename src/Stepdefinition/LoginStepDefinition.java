package Stepdefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginStepDefinition {
	
	WebDriver driver;
	By email=By.xpath("//input[@id='email']");
	By password=By.xpath("//input[@id='passwd']");
	By signin=By.xpath("//button[@id='SubmitLogin']");
	By login=By.xpath("//a[@class='login']");
	
	@Before
	public void setUp()
	{
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\SABARISH\\Downloads\\chromedriver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);	
	}
	@Given("^user is already on Login page$")
	public void user_is_already_on_Login_page() throws InterruptedException
	{
		
		driver.get("http://automationpractice.com/index.php");
		Thread.sleep(2000);
	}
	@When("^title of the page is$")
	public void title_of_the_page_is()
	{
		String title=driver.getTitle();
		System.out.println(title);
				
	}
	@When("^user clicks on Sign in$")
	public void user_clicks_on_Sign_in()
	{
		driver.findElement(login).click();
		driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
	}
	@Then("^user enters \"(.*)\"$")
	public void user_enters_username(String username)
	{
		driver.findElement(email).sendKeys(username);
			
	}
	@Then("^user types \"(.*)\"$")
	public void user_types_password(String Password)
	{
		driver.findElement(password).sendKeys(Password);
		driver.findElement(signin).click();
	}
	@After
	public void tearDown()
	{
		driver.quit();
	}
	
}

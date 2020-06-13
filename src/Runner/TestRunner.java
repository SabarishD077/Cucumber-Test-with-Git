package Runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@Cucumber.Options(
 features = "C:\\Users\\SABARISH\\eclipse-workspace\\CucumberPractice\\src\\Features\\Login.feature",
 glue={"Stepdefinition"},
 format={"pretty", "html:test-output"},
 dryRun=false,//do not run the program instead compare all feature file with step definition and provide result
 monochrome=true,// good readable format on console
 strict=true,
 tags= {"@PracticeSession"}
 )


public class TestRunner {

}

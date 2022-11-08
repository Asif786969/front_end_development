@tag
Feature: Login check validation for User

  Scenario: Selenium testing for user
    Given user chose "<browser>" browser
    When user click the Login header
    When user enter "<username>" as userame and "<password>" as password
    And user clicks enter and verify
    Then user close browser
    
  Examples: 
      | browser            | username | password |
      | chrome         | hello@1324   | kill#1242Q |
      | firefox         | Hklawe@1313   | kill#1242Q |
      | edge | hello@123   | kill#1242Q |
    
Feature: Hotel searching process journey - happy path

# I wrote the hotel searching scenario happy path in cucumber gherkin
# I made the executable code for the hotel searching process path

    @Regression
    Scenario: Bookings - part2
        Given user navigates to https://www.mrandmrssmith.com/
        When user enters london in the search bar
        And user click on London tag as suggested destinations
        And user click on check-in date and check-out date to enter dates
            | CheckInDate     | CheckOutDate    |
            | August 30, 2022 | August 31, 2022 |
        And user click on the search button
        And user click on select rooms button on any hotel except first and last
        Then User should be on Get A Room page
Feature: Hotel booking process journey - happy path

# I wrote the hotel booking scenario happy path in cucumber gherkin
# I made the executable code for the hotel booking process path with an invalid card number. 

#Hotel booking process negative path with an invalid card number
    @Regression
    Scenario: Bookings - part1
        Given user navigates to https://www.mrandmrssmith.com/
        When user search for a hotel
            | hotel       |
            | Berns hotel |
        And user click on check-in date and check-out date to enter dates
            | CheckInDate     | CheckOutDate    |
            | August 29, 2022 | August 30, 2022 |
        And user click on the search button
        Then booking options are displayed
        When user select the book now button for a room
        And user select confirm a booking
        Then booking summary is displayed
        When user select customer details
            | FirstName | LastName  | Phone      | Email                |
            | Jader     | Cunha     | 7986432689 | jafc.tests@gmail.com |
        And user select billing address details
            | Address         | City   | PostCode | Country        |
            | 14 Hanway Place | London | W1T1HA   | United Kingdom |
        And user select payment details
            | CardName | CardType       | CardNumber          | ExpiryDate | CVV |
            | Jader    | Mastercard     | 5269 2437 8759 2071 | 05/24      | 866 |
        And user select the pay now button
        Then booking should be successful
/// <reference types="Cypress" />
import HotelHomePage from '../../../support/pageObjects/HotelHomePage'
import HotelPaymentPage from '../../../support/pageObjects/HotelPaymentPage'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const hotelHomePage = new HotelHomePage()
const hotelPaymentPage = new HotelPaymentPage()
let checkin
let checkout
let hotel

Given('user navigates to https://www.mrandmrssmith.com/', () => {
  cy.visit(Cypress.env('url'))
});

And('user search for a hotel', function (dataTable) {
  hotelHomePage.getSearchHotelEdit().should('have.text', 'Where would you like to go?')
  hotelHomePage.getSearchHotelName().click()
  hotelHomePage.getSearchHotelName().type(dataTable.rawTable[1][0])
});

And('user enters london in the search bar', () => {
  hotelHomePage.getSearchHotelName().click()
  hotelHomePage.getSearchHotelName().type('london')
  hotelHomePage.getSearchHotelName().trigger('mouseover')
});

And('user click on London tag as suggested destinations', () => {
});

And('user click on check-in date and check-out date to enter dates', function (dataTable) {
  hotelHomePage.getFromDate().click()
  hotelHomePage.getChooseDate().each(($el, index, $list) => {
    if ($el.attr('aria-label').includes(dataTable.rawTable[1][0])) {
      cy.wrap($el).click()
      return false
    }
  })

  hotelHomePage.getChooseDate().each(($el, index, $list) => {
    if ($el.attr('aria-label').includes(dataTable.rawTable[1][1])) {
      cy.wrap($el).click()
      return false
    }
  })

});

And('user click on the search button', () => {
  hotelHomePage.getSearchButton().click()
});

And('user click on select rooms button on any hotel except first and last', () => {
  hotelHomePage.getSelectRoomButtonSecondHotel().click()
});

Then('User should be on Get A Room page', () => {
  hotelHomePage.getARoomPage().should('exist')
});



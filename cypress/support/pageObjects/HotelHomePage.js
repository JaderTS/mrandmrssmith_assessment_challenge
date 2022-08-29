class HotelHomePage
{
    getShopTab() {
        return  cy.get(':nth-child(2) > .nav-link',{ timeout: 30000 })
    }

    getSearchHotelEdit() {
        return cy.get('div#label-placeholder-text',{ timeout: 30000 })
    }

    getSearchHotelName() {
        return cy.get('#react-s_query',{ timeout: 30000 })
    }

    getFromDate() {
        return cy.get('.checkin-checkout-follow-icon',{ timeout: 30000 })
    }

    getChooseDate()
    {
        return cy.get("div[class='calendarMonth'][data-visible='true']>div[class='calendarMonth__container'] td[class^='calendarDay'][aria-label^='Choose']",{ timeout: 30000 })
    }

    getSearchButton()
    {
        return cy.get('button#s_search',{ timeout: 30000 })
    }

    getConfirmBookingButton()
    {
        return cy.get(".quick-checkout-inner > .basket-buttons > .j-confirmButton",{ timeout: 30000 })
    }

    getBookNowButton()
    {
        return cy.get('body > div:nth-child(4) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > article:nth-child(1) > div:nth-child(3) > div:nth-child(2)',{ timeout: 30000 })
    }

    getSelectRoomButtonSecondHotel()
    {
        return cy.get(':nth-child(2) > .hotelcard > .hotelcard-bttns > .hotelcard-bttns-wrapper > .hotelcard-bttns-rates',{ timeout: 30000 })
    }

    getARoomPage()
    {
        return cy.get('#list-menu-rooms',{ timeout: 30000 })
    }

}

export default HotelHomePage;

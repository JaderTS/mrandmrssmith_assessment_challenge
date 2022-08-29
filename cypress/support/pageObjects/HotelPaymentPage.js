class HotelPaymentPage {

    getBookingSummaryPage() {
        return cy.get('div.summary-box-container h2.box-title')
    }

    getBooked(){
        return cy.get('.p-consultant-bookingName')
    }

    getFirstNameEdit() {
        return cy.get('input#firstName')
    }

    getLastNameEdit() {
        return cy.get('input#lastName')
    }

    getPhoneNumberEdit() {
        return cy.get('input#defaultPhoneNumber')
    }

    getEmailEdit() {
        return cy.get("input[name='defaultEmail']")
    }

    getEnterAddressManuallyLink() {
        return cy.get('div.postcode-results a')
    }

    getBillingAddressEdit() {
        return cy.get('input#billingaddress1')
    }

    getBillingCityEdit() {
        return cy.get('input#billingcity')
    }

    getBillingPostCodeEdit() {
        return cy.get('input#billingpostcode')
    }

    getBillingCountryDropdown() {
        return cy.get('.country-select > .c-form__field > .c-form__selectBox > .c-form__select')
    }

    getNameOnCard() {
        return cy.get('input[id*=name_on_card]')
    }

    getCardTypeDropdown() {
        return cy.get('select[name*=type]')
    }

    getCardNumberEdit() {
        return cy.get('input[name*=number]')
    }

    getExpiryDateEdit() {
        return cy.get('input[id*=date]')
    }

    getCardCvv() {
        return cy.get('input[name*=cvv]')
    }

    getPayNowButton() {
        return cy.get('button#confirmOrder')
    }
}

export default HotelPaymentPage;

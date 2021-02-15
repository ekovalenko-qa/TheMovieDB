// enable I and another page object
const { I } = inject();
const { urls } = require('../framework/config/urls');

module.exports = {
    // setting locators
    fields: {
        search: '#inner_search_v4',
        movieName: '#popular_scroller > div > div:nth-child(3) > div.content > h2 > a',
        account: '#body > div.page_wrap.tv_wrap > header > div.content > div > div.flex > ul > li.user > a',
        lists: '#body > div:nth-child(44) > div > div.k-tooltip-content > div > div:nth-child(2) > p:nth-child(2) > a',
        discussions: 'body > div:nth-child(44) > div > div.k-tooltip-content > div > div:nth-child(2) > p:nth-child(1) > a'
    },
    searchButton: {css: '#inner_search_form > input[type=submit]'},
    comeInButton: {css: 'body > div.page_wrap._wrap > header > div.content > div > div.flex > ul > li:nth-child(3) > a'},

    // introducing methods
    searchMovie(movie) {
        I.amOnPage(urls.tmdbUI);
        I.fillField(this.fields.search, movie);
        I.click(this.searchButton);
    },
    comeIn() {
        I.amOnPage(urls.tmdbUI);
        I.click(this.comeInButton);
    },
    comeIn() {
        I.amOnPage(urls.tmdbUI);
        I.click(this.comeInButton);
    },

}

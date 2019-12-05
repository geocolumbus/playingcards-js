"use strict"

const _eq = function (cards, first, second) {
    return cards[first].valueIndex === cards[second].valueIndex
}

const _eq3 = function (cards, first, second, third) {
    return cards[first].valueIndex === cards[second].valueIndex && cards[first].valueIndex === cards[third].valueIndex
}

const _eq4 = function (cards, first, second, third, fourth) {
    return _eq3(cards, first, second, third) && _eq(cards, third, fourth)
}

const _sameSuite = function (cards, first, second) {
    return cards[first].suiteIndex === cards[second].suiteIndex
}

exports.eq = _eq
exports.eq3 = _eq3
exports.eq4 = _eq4
exports.sameSuite = _sameSuite

const Identify = require("../src/identify.js")
const identify = Identify.new()

test("identifies high card", () => {
    const handAceHigh = {
        "cards": [
            {
                "valueIndex": 0,
                "suiteIndex": 2
            },
            {
                "valueIndex": 10,
                "suiteIndex": 1
            },
            {
                "valueIndex": 6,
                "suiteIndex": 0
            },
            {
                "valueIndex": 4,
                "suiteIndex": 1
            },
            {
                "valueIndex": 3,
                "suiteIndex": 1
            }
        ]
    }

    const handTenHigh = {
        "cards": [
            {
                "valueIndex": 10,
                "suiteIndex": 1
            },
            {
                "valueIndex": 6,
                "suiteIndex": 0
            },
            {
                "valueIndex": 4,
                "suiteIndex": 1
            },
            {
                "valueIndex": 3,
                "suiteIndex": 1
            },
            {
                "valueIndex": 1,
                "suiteIndex": 2
            },
        ]
    }

    expect(identify.getScore(handAceHigh)).toStrictEqual({name: "High Card", rank: 0})
    expect(identify.getScore(handTenHigh)).toStrictEqual({name: "High Card", rank: 0})
})

test("identifies one pair", () => {
    const handOnePair = {
        "cards": [
            {
                "valueIndex": 0,
                "suiteIndex": 2
            },
            {
                "valueIndex": 0,
                "suiteIndex": 1
            },
            {
                "valueIndex": 6,
                "suiteIndex": 0
            },
            {
                "valueIndex": 4,
                "suiteIndex": 1
            },
            {
                "valueIndex": 3,
                "suiteIndex": 1
            }
        ]
    }

    expect(identify.getScore(handOnePair)).toStrictEqual({name: "One Pair", rank: 1})
})

test("identifies two pairs", () => {
    const handTwoPair1 = {
        "cards": [
            {
                "valueIndex": 8,
                "suiteIndex": 2
            },
            {
                "valueIndex": 8,
                "suiteIndex": 1
            },
            {
                "valueIndex": 7,
                "suiteIndex": 0
            },
            {
                "valueIndex": 7,
                "suiteIndex": 1
            },
            {
                "valueIndex": 5,
                "suiteIndex": 0
            }
        ]
    }

    const handTwoPair2 = {
        "cards": [
            {
                "valueIndex": 11,
                "suiteIndex": 2
            },
            {
                "valueIndex": 10,
                "suiteIndex": 1
            },
            {
                "valueIndex": 10,
                "suiteIndex": 0
            },
            {
                "valueIndex": 7,
                "suiteIndex": 1
            },
            {
                "valueIndex": 7,
                "suiteIndex": 0
            }
        ]
    }

    const handTwoPair3 = {
        "cards": [
            {
                "valueIndex": 11,
                "suiteIndex": 2
            },
            {
                "valueIndex": 11,
                "suiteIndex": 1
            },
            {
                "valueIndex": 7,
                "suiteIndex": 0
            },
            {
                "valueIndex": 1,
                "suiteIndex": 1
            },
            {
                "valueIndex": 1,
                "suiteIndex": 0
            }
        ]
    }

    expect(identify.getScore(handTwoPair1)).toStrictEqual({name: "Two Pair", rank: 2})
    expect(identify.getScore(handTwoPair2)).toStrictEqual({name: "Two Pair", rank: 2})
    expect(identify.getScore(handTwoPair3)).toStrictEqual({name: "Two Pair", rank: 2})
})

test("identifies three of a kind", () => {
    const handThreeOfAKind1 = {
        "cards": [
            {
                "valueIndex": 0,
                "suiteIndex": 2
            },
            {
                "valueIndex": 0,
                "suiteIndex": 1
            },
            {
                "valueIndex": 0,
                "suiteIndex": 0
            },
            {
                "valueIndex": 3,
                "suiteIndex": 1
            },
            {
                "valueIndex": 4,
                "suiteIndex": 1
            }
        ]
    }

    const handThreeOfAKind2 = {
        "cards": [
            {
                "valueIndex": 11,
                "suiteIndex": 2
            },
            {
                "valueIndex": 5,
                "suiteIndex": 1
            },
            {
                "valueIndex": 5,
                "suiteIndex": 0
            },
            {
                "valueIndex": 5,
                "suiteIndex": 2
            },
            {
                "valueIndex": 3,
                "suiteIndex": 1
            }
        ]
    }

    const handThreeOfAKind3 = {
        "cards": [
            {
                "valueIndex": 12,
                "suiteIndex": 2
            },
            {
                "valueIndex": 10,
                "suiteIndex": 1
            },
            {
                "valueIndex": 9,
                "suiteIndex": 0
            },
            {
                "valueIndex": 9,
                "suiteIndex": 2
            },
            {
                "valueIndex": 9,
                "suiteIndex": 1
            }
        ]
    }

    expect(identify.getScore(handThreeOfAKind1)).toStrictEqual({name: "Three of a Kind", rank: 3})
    expect(identify.getScore(handThreeOfAKind2)).toStrictEqual({name: "Three of a Kind", rank: 3})
    expect(identify.getScore(handThreeOfAKind3)).toStrictEqual({name: "Three of a Kind", rank: 3})
})

test("identifies straight", () => {
    const handStraight1 = {
        "cards": [
            {
                "valueIndex": 7,
                "suiteIndex": 2
            },
            {
                "valueIndex": 6,
                "suiteIndex": 1
            },
            {
                "valueIndex": 5,
                "suiteIndex": 0
            },
            {
                "valueIndex": 4,
                "suiteIndex": 1
            },
            {
                "valueIndex": 3,
                "suiteIndex": 1
            }
        ]
    }

    const handStraight2 = {
        "cards": [
            {
                "valueIndex": 4,
                "suiteIndex": 2
            },
            {
                "valueIndex": 3,
                "suiteIndex": 1
            },
            {
                "valueIndex": 2,
                "suiteIndex": 0
            },
            {
                "valueIndex": 1,
                "suiteIndex": 1
            },
            {
                "valueIndex": 0,
                "suiteIndex": 1
            }
        ]
    }

    const handStraight3 = {
        "cards": [
            {
                "valueIndex": 13,
                "suiteIndex": 2
            },
            {
                "valueIndex": 12,
                "suiteIndex": 1
            },
            {
                "valueIndex": 11,
                "suiteIndex": 0
            },
            {
                "valueIndex": 10,
                "suiteIndex": 1
            },
            {
                "valueIndex": 0,
                "suiteIndex": 1
            }
        ]
    }

    expect(identify.getScore(handStraight1)).toStrictEqual({name: "Straight", rank: 4})
    expect(identify.getScore(handStraight2)).toStrictEqual({name: "Straight", rank: 4})
    expect(identify.getScore(handStraight3)).toStrictEqual({name: "Straight", rank: 4})
})

test("identifies flush", () => {
    const handFlush = {
        "cards": [
            {
                "valueIndex": 7,
                "suiteIndex": 2
            },
            {
                "valueIndex": 6,
                "suiteIndex": 2
            },
            {
                "valueIndex": 4,
                "suiteIndex": 2
            },
            {
                "valueIndex": 3,
                "suiteIndex": 2
            },
            {
                "valueIndex": 1,
                "suiteIndex": 2
            }
        ]
    }

    expect(identify.getScore(handFlush)).toStrictEqual({name: "Flush", rank: 5})
})

test("identifies full house", () => {
    const handFullHouse1 = {
        "cards": [
            {
                "valueIndex": 7,
                "suiteIndex": 2
            },
            {
                "valueIndex": 7,
                "suiteIndex": 2
            },
            {
                "valueIndex": 7,
                "suiteIndex": 1
            },
            {
                "valueIndex": 3,
                "suiteIndex": 0
            },
            {
                "valueIndex": 3,
                "suiteIndex": 2
            }
        ]
    }

    const handFullHouse2 = {
        "cards": [
            {
                "valueIndex": 7,
                "suiteIndex": 2
            },
            {
                "valueIndex": 7,
                "suiteIndex": 2
            },
            {
                "valueIndex": 3,
                "suiteIndex": 1
            },
            {
                "valueIndex": 3,
                "suiteIndex": 0
            },
            {
                "valueIndex": 3,
                "suiteIndex": 2
            }
        ]
    }

    expect(identify.getScore(handFullHouse1)).toStrictEqual({name: "Full House", rank: 6})
    expect(identify.getScore(handFullHouse2)).toStrictEqual({name: "Full House", rank: 6})
})


test("identifies four of a kind", () => {
    const handFour1 = {
        "cards": [
            {
                "valueIndex": 7,
                "suiteIndex": 0
            },
            {
                "valueIndex": 7,
                "suiteIndex": 1
            },
            {
                "valueIndex": 7,
                "suiteIndex": 2
            },
            {
                "valueIndex": 7,
                "suiteIndex": 3
            },
            {
                "valueIndex": 3,
                "suiteIndex": 2
            }
        ]
    }

    const handFour2 = {
        "cards": [
            {
                "valueIndex": 7,
                "suiteIndex": 2
            },
            {
                "valueIndex": 8,
                "suiteIndex": 0
            },
            {
                "valueIndex": 8,
                "suiteIndex": 1
            },
            {
                "valueIndex": 8,
                "suiteIndex": 2
            },
            {
                "valueIndex": 8,
                "suiteIndex": 3
            }
        ]
    }

    expect(identify.getScore(handFour1)).toStrictEqual({name: "Four of a Kind", rank: 7})
    expect(identify.getScore(handFour2)).toStrictEqual({name: "Four of a Kind", rank: 7})
})

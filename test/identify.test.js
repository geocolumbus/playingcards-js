const Identify = require("../src/identify.js")
const identify = Identify.new()

test("identifies ace high", () => {
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

    expect(identify.getScore(handAceHigh)).toStrictEqual({
        "card": [{"suiteIndex": 2, "valueIndex": 0}],
        "name": "High Card",
        "rank": 0
    })

    expect(identify.getScore(handTenHigh)).toStrictEqual({
        "card": [{"suiteIndex": 1, "valueIndex": 10}],
        "name": "High Card",
        "rank": 0
    })
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

    expect(identify.getScore(handOnePair)).toStrictEqual({
        "card": [
            {
                "suiteIndex": 2,
                "valueIndex": 0
            },
            {
                "suiteIndex": 1,
                "valueIndex": 0
            }
        ],
        "name": "One Pair",
        "rank": 1,
    })
})

test("identifies two pairs", () => {
    const handTwoPair = {
        "cards": [
            {
                "valueIndex": 8,
                "suiteIndex": 2
            },
            {
                "valueIndex": 7,
                "suiteIndex": 1
            },
            {
                "valueIndex": 7,
                "suiteIndex": 0
            },
            {
                "valueIndex": 6,
                "suiteIndex": 1
            },
            {
                "valueIndex": 6,
                "suiteIndex": 0
            }
        ]
    }

    expect(identify.getScore(handTwoPair)).toStrictEqual({
        "card": [
            {
                "suiteIndex": 1,
                "valueIndex": 7,
            },
            {
                "suiteIndex": 0,
                "valueIndex": 7,
            },
            {
                "suiteIndex": 1,
                "valueIndex": 6,
            },
            {
                "suiteIndex": 0,
                "valueIndex": 6,
            },
        ],
        "name": "Two Pair",
        "rank": 2,
    })
})

test("identifies Three of a Kind", () => {
    const handThreeOfAKind = {
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
                "valueIndex": 4,
                "suiteIndex": 1
            },
            {
                "valueIndex": 3,
                "suiteIndex": 1
            }
        ]
    }

    expect(identify.getScore(handThreeOfAKind)).toStrictEqual({
        "card": [
            {
                "suiteIndex": 2,
                "valueIndex": 0
            },
            {
                "suiteIndex": 1,
                "valueIndex": 0
            },
            {
                "suiteIndex": 0,
                "valueIndex": 0
            }
        ],
        "name": "Three of a Kind",
        "rank": 3
    })
})

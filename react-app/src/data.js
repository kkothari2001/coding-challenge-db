
// const data = [
//     {
//         "isin": "INE774D01024",
//         "face_value": 3445,
//         "coupon": 90,
//         "Maturity Date": "45th May",
//         "recent_trades": [

//         ],
//         "status": "Transaction failure",
//         "assigned": "Username",
//         "indicator": false

//     },
//     {
//         "isin": "INE774D01024",
//         "face_value": 45780,
//         "coupon": 90,
//         "Maturity Date": "45th May",
//         "recent_trades": [

//         ],
//         "status": "Transaction failure",
//         "assigned": "Username",
//         "indicator": false

//     },
//     {
//         "isin": "INE774D01024",
//         "face_value": 398,
//         "coupon": 90,
//         "Maturity Date": "45th May",
//         "recent_trades": [

//         ],
//         "status": "Transaction failure",
//         "assigned": "Username",
//         "indicator": false

//     }
// ]


const data = [
    {
        "id": "ABNX",
        "isin": "INE774D01024",
        "issuer": {
            "name": "Kotak Mahindra Bank",
            "industry": "Financial Banking"
        },
        "maturity_date": "13/12/23",
        "coupon": {
            "rate": 3,
            "unit": "p.a."
        },
        "type": ["Fixed Rate"],
        "face_value": 34000,
        "status": true,
        "issue": "",
        "trades": [
            {
                "counterparty": "Kush Kothari Bank",
                "price": 32000,
                "status": false,
                "issue": "failed transaction"
            },
            {
                "counterparty": "DB Bank",
                "price": 3500,
                "status": true,
                "issue": ""
            },
        ]
    },
    {
        "id": "ABNX",
        "isin": "INE774D01024",
        "issuer": {
            "name": "Kotak Mahindra Bank",
            "industry": "Financial Banking"
        },
        "maturity_date": "13/12/23",
        "coupon": {
            "rate": 3,
            "unit": "p.a."
        },
        "type": ["Fixed Rate", "Medium Term"],
        "face_value": 34000,
        "status": false,
        "issue": "Mis-Booking",
        "trades": [
            {
                "counterparty": "Kush Kothari Bank",
                "price": 32000,
                "status": false,
                "issue": "failed transaction"
            },
            {
                "counterparty": "DB Bank",
                "price": 3500,
                "status": true,
                "issue": ""
            },
        ]
    },
    {
        "id": "ABNX",
        "isin": "INE774D01024",
        "issuer": {
            "name": "Kotak Mahindra Bank",
            "industry": "Financial Banking"
        },
        "maturity_date": "13/12/23",
        "coupon": {
            "rate": 3,
            "unit": "p.a."
        },
        "type": ["Fixed Rate", "Long Term"],
        "face_value": 34000,
        "status": true,
        "issue": "",
        "trades": [
            {
                "counterparty": "Kush Kothari Bank",
                "price": 32000,
                "status": false,
                "issue": "failed transaction"
            },
            {
                "counterparty": "DB Bank",
                "price": 3500,
                "status": true,
                "issue": ""
            },
        ]
    },
    {
        "id": "ABNX",
        "isin": "INE774D01024",
        "issuer": {
            "name": "Kotak Mahindra Bank",
            "industry": "Financial Banking"
        },
        "maturity_date": "13/12/23",
        "coupon": {
            "rate": 3,
            "unit": "p.a."
        },
        "type": ["Fixed Rate"],
        "face_value": 34000,
        "status": false,
        "issue": "Trade Fail",
        "trades": [
            {
                "counterparty": "Kush Kothari Bank",
                "price": 32000,
                "status": false,
                "issue": "failed transaction"
            },
            {
                "counterparty": "DB Bank",
                "price": 3500,
                "status": true,
                "issue": ""
            },
        ]
    },
    {
        "id": "ABNX",
        "isin": "INE774D01024",
        "issuer": {
            "name": "Kotak Mahindra Bank",
            "industry": "Financial Banking"
        },
        "maturity_date": "13/12/23",
        "coupon": {
            "rate": 3,
            "unit": "p.a."
        },
        "type": ["Fixed Rate"],
        "face_value": 34000,
        "status": false,
        "issue": "Mis-Booking",
        "trades": [
            {
                "counterparty": "Kush Kothari Bank",
                "price": 32000,
                "status": false,
                "issue": "failed transaction"
            },
            {
                "counterparty": "DB Bank",
                "price": 3500,
                "status": true,
                "issue": ""
            },
        ]
    },
    {
        "id": "ABNX",
        "isin": "INE774D01024",
        "issuer": {
            "name": "Kotak Mahindra Bank",
            "industry": "Financial Banking"
        },
        "maturity_date": "13/12/23",
        "coupon": {
            "rate": 3,
            "unit": "p.a."
        },
        "type": ["Fixed Rate"],
        "face_value": 34000,
        "status": false,
        "issue": "Mis-Booking",
        "trades": [
            {
                "counterparty": "Kush Kothari Bank",
                "price": 32000,
                "status": false,
                "issue": "failed transaction"
            },
            {
                "counterparty": "DB Bank",
                "price": 3500,
                "status": true,
                "issue": ""
            },
        ]
    },
]
export default data;
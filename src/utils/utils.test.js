import { dateFormate, isValidPassword, sortAscending } from './utils.js';
import moment from 'moment';
let billgroups = [
    {
        "billGroupId": 957300001,
        "billGroupName": "bcdferg",
        "userBuNumber": "5",
        "subGroupId": "5",
        "groupId": "1904",
        "groupName": "Bank Of America",
        "pendingEnrollmentCount": 113,
        "cobra": "",
        "memberCount": 4,
        "pendingMemberships": "0",
        "activeMemberships": "4"
    },
    {
        "billGroupId": 657300001,
        "billGroupName": "abcdefg",
        "userBuNumber": "0",
        "subGroupId": "0",
        "groupId": "1904",
        "groupName": "Bank Of America",
        "pendingEnrollmentCount": 21,
        "cobra": "",
        "memberCount": 2904,
        "pendingMemberships": "0",
        "activeMemberships": "2904"
    }
];

let billgroups2 = [
    {
        "billGroupId": 657300001,
        "billGroupName": "abcdefg",
        "userBuNumber": "0",
        "subGroupId": "0",
        "groupId": "1904",
        "groupName": "Bank Of America",
        "pendingEnrollmentCount": 21,
        "cobra": "",
        "memberCount": 2904,
        "pendingMemberships": "0",
        "activeMemberships": "2904"
    },
    {
        "billGroupId": 957300001,
        "billGroupName": "bcdferg",
        "userBuNumber": "5",
        "subGroupId": "5",
        "groupId": "1904",
        "groupName": "Bank Of America",
        "pendingEnrollmentCount": 113,
        "cobra": "",
        "memberCount": 4,
        "pendingMemberships": "0",
        "activeMemberships": "4"
    },
]
describe("utils function", () => {
    test("dateFormate", () => {
        let result = dateFormate(1);
        expect(result).toEqual(moment().subtract(1, 'month').format("MM/DD/YYYY"));

        let result2 = dateFormate(10);
        expect(result2).toEqual(moment().subtract(10, 'month').format("MM/DD/YYYY"));

        let result3 = dateFormate(13);
        expect(result3).toEqual(moment().subtract(13, 'month').format("MM/DD/YYYY"))

    })
    test("isValidPassword", () => {
        //Length sc num
        let result = isValidPassword('abc');
        expect(result).toEqual(false);
        //num
        let result1 = isValidPassword('abcdef$%');
        expect(result1).toEqual(false);
        //First sc
        let result2 = isValidPassword('*def$%89');
        expect(result2).toEqual(false);
        //sc
        let result3 = isValidPassword('defgf89');
        expect(result3).toEqual(false);

        let result4 = isValidPassword('abcdef$%89');
        expect(result4).toEqual(true); 

        let result5 = isValidPassword(' ');
        expect(result5).toEqual(false); 

        let result6 = isValidPassword('abcdefghijk');
        expect(result6).toEqual(false); 

        let result7 = isValidPassword('156879123');
        expect(result7).toEqual(false); 
    })

    test("sort Ascending", () => {
        let result = sortAscending("billGroupId");
        expect(result).toEqual(billgroups2);

        let result2 = sortAscending("memberCount");
        expect(result2).toEqual(billgroups);

        let result3 = sortAscending("pendingEnrollmentCount");
        expect(result3).toEqual(billgroups2);
    })
})
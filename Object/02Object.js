// two object marge karva mate 

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};
const obj4 = {5:"a", 6:"b"};

// =========================================
// const obj3 = { obj1, obj2 };
// console.log(obj3);
//==== { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// =========================================
// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3);
// === { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// =========================================
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// === { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// =========Array ka object ==============
const trinderUser = {}
trinderUser.id = "123abc"
trinderUser.name = "sammy"
trinderUser.isloading = false

const users = [
    {
        id: 1,
        emali : "n@gmail.com"
    },
    {
        id: 1,
        emali : "n@gmail.com"
    },
    {
        id: 1,
        emali : "n@gmail.com"
    },
    {
        id: 1,
        emali : "n@gmail.com"
    },
    {
        id: 1,
        emali : "n@gmail.com"
    }
]

users[1].emali
console.log(trinderUser);   
// ===={ id: '123abc', name: 'sammy', isloading: false }
console.log(Object.keys(trinderUser));
// === [ 'id', 'name', 'isloading' ]

console.log(Object.values(trinderUser));
// === [ '123abc', 'sammy', false ]
console.log(Object.entries(trinderUser));
// === [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isloading', false ] ]


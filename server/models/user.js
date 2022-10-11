const mongoose = require('mongoose')
const validator = require('validator')

const Task = mongoose.model('User', {
    // abc :{
    //     description: {
    //         type: String,
    //         required: true,
    //         trim: true
    //     },
    //     completed: {
    //         type: Boolean,
    //         default: false
    //     }
    // 
    personal_detail: {
        name: {type: String, required: true, trim: true},
        phone: {type: String, required: true, trim: true},
        location: {
            address: {type: String, trim: true},
            city: {type: String, required: true, trim: true},   
            state: {type: String, required: true, trim: true}
        },
        dob: {
            type: String,
            required: true,
            trim: true,
            validate(value) {
                if (!validator.isDate(value)) {
                    throw new Error('Date is invalid.')
                }
            }
        }
        }
    }

})
// {
//     // "user-id": "#gdfneuf",
//     personal_detail: {
//         name: {type: String, required, true, trim: true};
        
//     }
//     {
//         "name": "Utkarsh", 
//         "phone": "9771501217", 
//         "address": "lorem ipsum",
//         "dob": "23-6-19", 
//         "email-id": "dgfsdfds@gmail.com",
//         "password": "afsdafds",
//         "display-picture": "photo",
//         "cover-picture": "photo"
//     },
//     "isAdmin": false,
//     "isPublic": false,
//     "friends": [
//         {
//             "user-id": "fsdfs"
//         }
//         ],
//     "joined-community": [{
//         "role": "student",
//         "community": {}
//     }]
// }

module.exports = User
import * as ACTIONS from '../actions/actionHelper';

export var usersReduser = (state = [], action) => {

    switch (action.type){

        case ACTIONS.ADD_USER:
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    age: action.age,
                    payments: action.payments
                }
            ];

        case ACTIONS.UPDATE_USER:
            for(let user of state){
                if(user.id === action.id){
                    user.name = action.name;
                    user.age = action.age;
                }
            };
            return [
                ...state
            ];

        case ACTIONS.ADD_SET_OF_USER:
            return [
                ...state,
                ...action.users
            ];

        case ACTIONS.REMOVE_USER:
            return [
                ...state.filter(user => {
                    return user.id !== action.id;
                })
            ];

        case ACTIONS.ADD_PAYMENT:
            state.forEach((user)=>{
                if(user.id === action.userId){
                    user.payments.push(action.payment);
                }
            });
            return [
                ...state
            ];

        case ACTIONS.UPDATE_PAYMENT:
            state.forEach((user)=>{
                if(user.id === action.userId){
                    for(let pay in user.payments){
                        if(user.payments[pay].id === action.payment.id){
                            user.payments[pay].title = action.payment.title;
                            user.payments[pay].amount = action.payment.amount;
                        }
                    }
                }
            });
            return [
                ...state
            ];

        case ACTIONS.REMOVE_PAYMENT:
            state.forEach((user)=>{
                if(user.id === action.userId){
                    user.payments = user.payments.filter((payment)=>{
                        return payment.id !== action.paymentId;
                    });
                }
            });
            return [
                ...state
            ];

        case ACTIONS.LOGOUT:
            return [];

        default:
            return state;
    }
};

export var selectedUsersReduser = (state = false, action) => {
    switch (action.type){

        case ACTIONS.USER_WAS_SELECTED:
            return action.selectedUser;

        case ACTIONS.USER_LOST_FOCUS:
            return action.selectedUser;

        default:
            return state;
    }
};

export var authReducer = (state = {}, action) => {
    switch (action.type){

        case ACTIONS.LOGIN:
            return {
                uid: action.uid,
                accessToken: action.accessToken
            };

        case ACTIONS.LOGOUT:
            return {};

        default:
            return state;
    }
};


export var avatarReducer = (state = 'https://www.mautic.org/media/images/default_avatar.png', action) => {
    switch (action.type){

        case ACTIONS.SET_AVATAR:
            return action.avatarUrl;

        default:
            return state;
    }
};

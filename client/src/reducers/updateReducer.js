import { types } from "../types/type";

export const authReducer = (authState = {}, action) => {

    switch (action.type) {

        case types.UPDATE: {

        }

        default:
            return authState;
    }
};
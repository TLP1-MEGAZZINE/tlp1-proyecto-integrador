import { types } from "../types/type";

export const chatReducer = (chatState, action) => {

    switch (action.type) {
        //USUARIOS ACTIVOS
        case types.ACTIVE_USERS:
            return {
                ...state,
                usuarios: [...action.payload]
            }

        //CHAT ACTIVO
        case types.ACTIVE_CHAT:
            return {
                ...state,
                activeChat: [...action.payload]
            }

        //NUEVOS MENSAJES
        case types.NEW_MESSAGE:
            if (chatState.activeChat == action.payload.from || state.chatActivo === action.payload.to) {
                return {
                    ...state,
                    messages: [...chatState.messages, action.payload]
                }
            } else {
                return state;
            }

        //CARGAR MENSAJES
        case types.LOAD_MESSAGES:
            return {
                ...state,
                messages: action.payload
            }

        default:
            return chatState;
    }
};
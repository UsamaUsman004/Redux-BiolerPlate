const INITIAL_STATE = {
    users: [
        {
            name: "Usama",
            email: "uusman004@gmail.com"
        },
        {
            name: "Usman",
            email: "usmanali@gmail.com"
        }
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SETDATA":
            return (
                {
                    ...state,
                    users:[...state.users , action.data]
                }
            )
        default:
            return state;

    }

}
import dispatcher from "../Dispatcher";
export const COLOR_APP_ACTIONS={
    CHANGE_COLOR:"colorAppAction.ChangeColor",
};

export function changeColor(colorName){
    dispatcher.dispatch({
        type:COLOR_APP_ACTIONS.CHANGE_COLOR,
        value:colorName
    })
}
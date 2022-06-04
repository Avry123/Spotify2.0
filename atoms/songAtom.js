import {atom} from 'recoil';

export const currentTrackIdState = atom({
    key: "currentTrackIdState",
    //Unique Id with respect to other atom/selectors
    default: null, //default value {aka initial value}
});

export const isPlayingState = atom({
    key: "isPlayingState",
    default: false,
});
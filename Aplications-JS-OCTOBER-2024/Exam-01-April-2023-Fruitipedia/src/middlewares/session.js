import { getUserData } from '../utils/userUtils.js'

export function addSession(){
    return function (ctx, next) {
        const userData = getUserData();

        ctx.userData = userData;

        next();
    }
}
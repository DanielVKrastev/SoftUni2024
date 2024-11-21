import { get } from "./api.js";

const endpoint = {
    allMembers: '/data/members',
    member: '/data/members/?where=teamId%3D%22'
};

export async function getAllMembers() {
    return get(endpoint.allMembers);
}

export async function getMember(teamId) {
    return get(endpoint.member + teamId + '%22&load=user%3D_ownerId%3Ausers');
}
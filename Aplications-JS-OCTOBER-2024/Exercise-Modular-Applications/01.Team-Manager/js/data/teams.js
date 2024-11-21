import { get } from "./api.js";

const endpoint = {
    allTeams: '/data/teams',
    team: '/data/teams/'
};

export async function getAllTeams() {
    return get(endpoint.allTeams);
}

export async function getTeam(teamId) {
    return get(endpoint.team + teamId);
}
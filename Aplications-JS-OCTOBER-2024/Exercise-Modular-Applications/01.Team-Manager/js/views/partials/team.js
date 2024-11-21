import { html } from "lit-html"

export const teamPartial = (teamData) => html`        
    <article class="layout">
        <img src="${teamData.logoUrl}" class="team-logo left-col">
        <div class="tm-preview">
            <h2>${teamData.name}</h2>
            <p>${teamData.description}</p>
            <span class="details">${teamData.members.length} Member${teamData.members.length != 1 ? 's' : ''}</span>
            <div><a href="/teams/${teamData._id}" class="action">See details</a></div>
        </div>
    </article>
`;
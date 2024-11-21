import { html } from "lit-html"
import { getTeam } from "../../data/teams.js";
import { getAllMembers, getMember } from "../../data/members.js";
import { addMembersToTeams } from "../../utils.js";

export const teamDetailsTemplate = (teamData, membersData) => html`      
    <section id="team-home">
        <article class="layout">
            <img src="../..${teamData.logoUrl}" class="team-logo left-col">
            <div class="tm-preview">
                <h2>${teamData.name}</h2>
                <p>${teamData.description}</p>
                <span class="details">${teamData.members.length} Member${teamData.members.length != 1 ? 's' : ''}</span>
                <div>
                    <a href="#" class="action">Edit team</a>
                    <a href="#" class="action">Join team</a>
                    <a href="#" class="action invert">Leave team</a>
                    Membership pending. <a href="#">Cancel request</a>
                </div>
            </div>
            <div class="pad-large">
                <h3>Members</h3>
                <ul class="tm-members">
                    <li>My Username</li>
                    ${
                       membersData.map((memberData) => html`<li>${memberData.user.username}<a href="${memberData.user._id}" class="tm-control action">Remove from team</a></li>`)
                    }
                </ul>
            </div>
            <div class="pad-large">
                <h3>Membership Requests</h3>
                <ul class="tm-members">
                    <li>John<a href="#" class="tm-control action">Approve</a><a href="#"
                            class="tm-control action">Decline</a></li>
                    <li>Preya<a href="#" class="tm-control action">Approve</a><a href="#"
                            class="tm-control action">Decline</a></li>
                </ul>
            </div>
        </article>
    </section>
`;

export async function teamDetailsView(ctx){
    //get team ID
    const teamId = ctx.params.id;

    const [teamData, members] = await Promise.all([
        getTeam(teamId),
        getAllMembers(),
    ]);
    //change teams
    addMembersToTeams(teamData, members);

    console.log(teamData.members);

    const membersData = await getMember(teamId);
    
    console.log(membersData);
    membersData.map(memberData => {
       console.log(memberData.user.username);
       
       })

    if(teamData){
        ctx.render(teamDetailsTemplate(teamData, membersData));
    }else{
        ctx.page.redirect('/');
    }


}

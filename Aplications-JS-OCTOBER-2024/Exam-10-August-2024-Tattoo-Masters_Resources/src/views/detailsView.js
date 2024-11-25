import { getOneTattoo } from "../api/tattoos.js";
import { addLike, getAllForTattoo, getAllForTattooAndUser } from "../lib/likes.js";
import { html, render } from "../lib/lit-html.js";

const template = (tattoo, isOwner, accessToken, likesCount, hasLiked, likeHandler) => html`
<!-- Details page -->
<section id="details">
    <div id="details-wrapper">
    <img id="details-img" src="${tattoo.imageUrl}" alt="${tattoo.type}"
    />
        <div>
            <div id="info-wrapper">
                <p id="details-type">${tattoo.type}</p>
                <div id="details-description">
                    <p id="user-type">${tattoo.userType}</p>
                    <p id="description">
                    ${tattoo.description}
                    </p>
                </div>
                <h3>Like tattoo:<span id="like">${likesCount}</span></h3>

                <!--Edit and Delete are only for creator-->
                <div id="action-buttons">
                    ${isOwner 
                        ? html`
                        <a href="/edit/${tattoo._id}" id="edit-btn">Edit</a>
                        <a href="/delete/${tattoo._id}" id="delete-btn">Delete</a>`
                        : ''
                    }

                    <!--Bonus - Only for logged-in users ( not authors )-->
                    ${ !isOwner && accessToken && hasLiked === false
                        ? html`<a href="javascript:(0)" @click=${likeHandler} id="like-btn">Like</a>`
                        : ''
                    }
                </div>
            </div>
        </div>
    </div>
</section>
`;

export default async function detailsView(ctx){
    const tattooId = ctx.params.id;
    const tattooData = await getOneTattoo(tattooId);
    const accessToken = ctx.userData.accessToken;
    const userId = ctx.userData._id;

    let isOwner = false;
    if(userId === tattooData._ownerId){
        isOwner = true;
    }

    //likes count
    const likesCount = await getAllForTattoo(tattooId);

    //has liked
    const userLikes = await getAllForTattooAndUser(tattooData._id, userId);
    let hasLiked = userLikes > 0;

    ctx.render(template(tattooData, isOwner, accessToken, likesCount, hasLiked, likeHandler));

    async function likeHandler(){
        const like = { tattooId }; //get owner id
        
        try{
            const result = await addLike(like);
            ctx.page.redirect(`/details/${tattooId}`);
        }catch(err){
            alert(err.message);
        }

        
    }
}
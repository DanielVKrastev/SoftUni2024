import { getOne } from "../api/characters.js";
import { addLike, getAllForCharacterAndUser, getAllForCharacters } from "../lib/likes.js";
import { html } from "../lib/lit-html.js";

const template = (character, isOwner, accessToken, likesCount, hasLiked, likeHandler) => html`

<!-- Details page -->
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${character.imageUrl}" alt="${character.category}" />
    <div>
    <p id="details-category">${character.category}</p>
    <div id="info-wrapper">
        <div id="details-description">
            <p id="description">
                ${character.description}
            </p>
            <p id ="more-info">
                ${character.moreInfo}
            </p>
        </div>
    </div>
    <h3>Is This Useful:<span id="likes">${likesCount}</span></h3>

        <!--Edit and Delete are only for creator-->
    <div id="action-buttons">
        ${isOwner 
            ? html`
            <a href="/edit/${character._id}" id="edit-btn">Edit</a>
            <a href="/delete/${character._id}" id="delete-btn">Delete</a>`
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
      </section>
`;

export default async function detailsView(ctx){
    const characterId = ctx.params.id;
    const characterData = await getOne(characterId);
    const accessToken = ctx.userData.accessToken;
    const userId = ctx.userData._id;

    let isOwner = false;
    if(userId === characterData._ownerId){
        isOwner = true;
    }

    //likes count
    const likesCount = await getAllForCharacters(characterId);

    //has liked
    const userLikes = await getAllForCharacterAndUser(characterData._id, userId);
    let hasLiked = userLikes > 0;

    ctx.render(template(characterData, isOwner, accessToken, likesCount, hasLiked, likeHandler));

    async function likeHandler(){
        const like = { characterId }; //get owner id
        
        try{
            const result = await addLike(like);
            ctx.page.redirect(`/details/${characterId}`);
        }catch(err){
            alert(err.message);
        }

        
    }
}
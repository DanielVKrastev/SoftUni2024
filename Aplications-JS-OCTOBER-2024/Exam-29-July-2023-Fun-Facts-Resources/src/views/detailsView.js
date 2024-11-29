import { getOne } from "../api/facts.js";
import { addLike, getAllForFactAndUser, getAllForFacts } from "../lib/likes.js";
import { html, render } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";

const template = (fact, isOwner, accessToken, likesCount, hasLiked, likeHandler) => html`
<!-- Details page -->
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${fact.imageUrl}" alt="${fact.category}" />
            <p id="details-category">${fact.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">
                  ${fact.description}
                  </p>
                   <p id ="more-info">
                   ${fact.moreInfo}
                    </p>
              </div>

              <h3>Likes:<span id="likes">${likesCount}</span></h3>

               <!--Edit and Delete are only for creator-->
          <div id="action-buttons">
            ${isOwner 
            ? html`
            <a href="/edit/${fact._id}" id="edit-btn">Edit</a>
            <a href="/delete/${fact._id}" id="delete-btn">Delete</a>
            `
                : ''
            }
             <!--Bonus - Only for logged-in users ( not authors )-->
             ${ !isOwner && accessToken && hasLiked === false
            ? html`<a href="javascript:void(0)" @click=${likeHandler} id="like-btn">Like</a>`
            : ''
            }

          </div>
            </div>
        </div>
      </section>
`;

export default async function detailsView(ctx){
    const factId = ctx.params.id;
    const factData = await getOne(factId);
    const accessToken = ctx.userData.accessToken;
    const userId = ctx.userData._id;

    let isOwner = false;
    if(userId === factData._ownerId){
        isOwner = true;
    }

    //like counts
    const likesCount = await getAllForFacts(factId);

    const userLikes = await getAllForFactAndUser(factData._id, userId);
    let hasLiked = userLikes > 0;

    ctx.render(template(factData, isOwner, accessToken, likesCount, hasLiked, likeHandler));

    async function likeHandler(){
        const like = { factId }; //get owner id
        
        try{
            const result = await addLike(like);
            ctx.page.redirect(`/details/${factId}`);
        }catch(err){
            alert(err.message);
        }
    }

}
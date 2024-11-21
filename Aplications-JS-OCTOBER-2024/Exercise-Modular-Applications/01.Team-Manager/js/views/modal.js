import { html, nothing, render } from "lit-html";

const modalTemplate = (message, onConfirm, onCancel) => html`
    <div class="overlay">
        <div class="modal">
            <p>${message}</p>
            <a @click=${onConfirm} href="javascript:void(0)" class="action">Confirm</a>
            <a @click=${onCancel} href="javascript:void(0)" class="action">Cancel</a>
        </div>
    </div>
`;

export function showModal(message) {
    let resolveModal;

    render(modalTemplate(message, onConfirm, onCancel), document.body);

    return new Promise((resolve) => {
        resolveModal = resolve;
    });

    function onConfirm(){
        resolveModal(true);
        close();
    }

    function onCancel(){
        resolveModal(false);
        close();
    }
    
    function close(){
        render(nothing, document.body);
    }
}


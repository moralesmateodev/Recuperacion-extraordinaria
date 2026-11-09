document.addEventListener('DOMContentLoaded', () => {
    const likeBtn = document.getElementById('likeBtn');
    const likeCount = document.getElementById('likeCount');
    const feedbackMsg = document.getElementById('feedbackMsg');

    let likes = 12;
    let liked = false;

    likeBtn.addEventListener('click', () => {
        if (!liked) {
            likes++;
            likeCount.textContent = likes;
            feedbackMsg.textContent = "¡Gracias por dejar tu me gusta en el blog del INFRAMEN!";
            likeBtn.style.backgroundColor = "#27ae60";
            liked = true;
        } else {
            likes--;
            likeCount.textContent = likes;
            feedbackMsg.textContent = "";
            likeBtn.style.backgroundColor = "#b30000";
            liked = false;
        }
    });
});
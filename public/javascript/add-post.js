async function newPostHandler(event) {
  event.preventDefault();

  const post_title = document.querySelector("#post-title").value.trim();
  const post_text = document.querySelector("#post-text").value.trim();
  console.log(post_text);
  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      post_title,
      post_text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newPostHandler);
document
  .querySelector(".new-post-btn")
  .addEventListener("click", unhideCreatePost);

function unhideCreatePost() {
  const element = document.getElementById("create-post");
  element.classList.remove("hide");
}

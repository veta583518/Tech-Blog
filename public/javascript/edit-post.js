async function editFormHandler(event) {
  event.preventDefault();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const post_title = document.querySelector("#post-title").value.trim();
  const post_text = document.querySelector("#post-text").value.trim();

  if (!post_title || !post_text) {
    alert("Please complete both fields to continue.");
    return;
  } else {
    console.log(post_title, post_text);
    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        post_title,
        post_text,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);

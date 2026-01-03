// 7. (4p) 
// Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <ul id="posts"></ul> 
// Visa endast posts från användaren med userId: 1
// Använd async/await med felhantering. Använd dig av filter samt forEach eller map.


// Din kod här:
async function getPost() {
	try {
		const listPostEl = document.getElementById("posts");
		const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
		const data = await response.json();

	// Filter: visa bara posts med userId 1
	const userPosts = data.filter(post =>post.userId ===1);

    // Skapa HTML-lista
    const list = userPosts.map(post => {
      return `<li>${post.title}<br>${post.body}</li>`;
    }).join("");

    listPostEl.innerHTML = list;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

}
 getPost()
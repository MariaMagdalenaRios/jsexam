// 7. (4p) 
// Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <ul id="posts"></ul> 
// Visa endast posts från användaren med userId: 1
// Använd async/await med felhantering. Använd dig av filter samt forEach eller map.


// Din kod här:
async function getPost() {
	
	const listPostEl = document.getElementById("post");
	const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
	const data = await response.json();

}
 getPost()
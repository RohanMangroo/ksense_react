export const baseString = 'https://jsonplaceholder.typicode.com';

export async function fetchData(resource) {
  const data = await fetch(`${baseString}/${resource}`);
  return await data.json();
}

// export async function populatePostsTable(user) {
//   removeAllChildNodes(postsTable);
//   const postsData = await fetchData(`posts?userId=${user.id}`);
//   postsData.forEach((post) => {
//     createPostsRow(post);
//   });
// }

// export function createUserRow(user) {
//   const row = document.createElement('div');
//   const content = document.createTextNode(user.name);
//   row.appendChild(content);
//   row.classList.add('table-row');

//   row.addEventListener('click', () => {
//     hightLightNode(row);
//     populatePostsTable(user);
//   });

//   usersTable.appendChild(row);
// }

// export function createPostsRow(post) {
//   const row = document.createElement('div');

//   const postTitle = document.createElement('h3');
//   const postTitleText = document.createTextNode(post.title);
//   postTitle.appendChild(postTitleText);
//   postTitle.classList.add('post-title');

//   const postBody = document.createElement('div');
//   const postBodyText = document.createTextNode(post.body);
//   postBody.appendChild(postBodyText);
//   postBody.classList.add('post-body');

//   row.appendChild(postTitle);
//   row.appendChild(postBody);

//   row.classList.add('table-row');

//   postsTable.appendChild(row);
// }

// export function removeAllChildNodes(parent) {
//   while (parent.firstChild) {
//     parent.removeChild(parent.firstChild);
//   }
// }

// export let currentHighlightedNode = null;

// export function hightLightNode(node) {
//   if (currentHighlightedNode) {
//     currentHighlightedNode.classList.remove('highlight');
//   }
//   node.classList.add('highlight');
//   currentHighlightedNode = node;
// }

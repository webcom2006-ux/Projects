 export async function users() {

 try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');       
    }
    const userData = await response.json();

    return userData;
  }
catch (error) {
     console.error('Error fetching user data:', error);
     return null;
   }
 
}
 export async function post(posts) {

 try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + posts);
    if (!response.ok) {
      throw new Error('Network response was not ok');       
    }
    const postData = await response.json();

    return postData;
  }
catch (error) {
     console.error('Error fetching post data:', error);
     return null;
   }
 
}
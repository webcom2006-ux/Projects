import React, { useState, useEffect } from 'react';
import { users, post }  from '../api/user'; 

 export function TestPage() { 
  const [userData, setUserData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [updateName, setupdateName] = useState('');

  function deleteList(postId) {
    setPostData((prevPostData) => prevPostData.filter((post) => post.id !== postId));
  }

  function handleSave(updatedName) { 
    setUserData((prevUserData) => {
      return prevUserData.map((user) =>
        user.id === selectedUserId ? { ...user, name: updatedName } : user // for updating  name value of selected user id in userData array
        //user.id === selectedUserId ? { ...user, newkey: "updatedName"} : user // for adding new key-value in matched user id object in userData array  
    );
    });
    setSelectedUserId(null); // Reset the selected user ID after saving
  }

 useEffect(() => {
     async function loadData(){
      const data = await users();
      setUserData(data); 
     }

     loadData();  
  }, []);

  useEffect(() => {
    async function loadPostData() {
      if (userData.length > 0) {
        const userId = userData[0].id; // Get the first user's ID
        const posts = await post(userId);
        setPostData(posts);
      } 
    }
    loadPostData();
  }, [userData]);

  
  useEffect(() => {
    const dialog = document.getElementById("myDialog");
      document.getElementById("openBtn").addEventListener("click", () => {
      dialog.showModal();
      //dialog.show(); //no shadow behind the modal
    });
    document.getElementById("inertremove").inert = false;

    document.getElementById("closeBtn").addEventListener("click", () => {
      document.getElementById("inertremove").inert = false; // Enable interaction with the rest of the page
      dialog.close();
    });
  }, [userData]);


  // by using same useEffect we can fetch both users and posts data at the same time
 /*  useEffect(() => {
    async function loadData() {
      try {
        const usersResponse = await users();
        const userList = usersResponse ?? []; //If usersResponse is null or undefined, use [] instead.
        setUserData(userList);

        const firstUserId = userList[0]?.id;
        const postsResponse = firstUserId ? await post(firstUserId) : [];
        setPostData(postsResponse ?? []);
      } catch (err) {
        console.error('Failed to load data', err);
      }
    }

    loadData();
  }, []); */

// by using Promise.all we can fetch both users and posts data at the same time
  /* useEffect(() => { 

    async function loadData() {
      try { 
        const [usersResponse, postsResponse] = await Promise.all([users(), post(2)]);
        setUserData(usersResponse ?? []);
        setPostData(postsResponse ?? []);
      } catch (err) {
         
        console('Failed to load data' + err);
      }  
    }

    loadData();
     
  }, []); */
//END
    

  return (
    <div className="container">
      <h1>Testing Page <br /><br /></h1> 

      {userData.map((user) => (
        <div key={user.id}>
          {selectedUserId === user.id ? <div> 
            <input type="text" value={updateName} onChange={(e) => setupdateName(e.target.value)} />
            <button onClick={() => handleSave(updateName)}>Save</button>
            <button onClick={() => setSelectedUserId(null)}>Cancel</button>
          </div> :           
           <div onClick={()=>{
             setSelectedUserId(user.id);
             setupdateName(user.name)
           }

           }>{user.name}</div>
          }
          
        </div>
      ))} 


    <div inert id="inertremove">
      {
        userData.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))
      }

      <h1>Posts <br /><br /></h1>
       <ul>
      {
        postData.map((post) => (
          <li key={post.id} id={post.userId}>
            <h2>{post.title}</h2>
            <button onClick={() => deleteList(post.id)}>Delete Post</button>
          </li>
        ))
        
      }
      </ul>
      </div>
      <br /><br />
      <input
        id="browser"
        list="browsers"
        placeholder="Type browser name"
        style={{ border: '5px solid green', padding: '10px' , width: '300px' }}
      />

      <datalist id="browsers">
        <option> Chrome </option>
        <option value="Firefox" />
        <option value="Edge" />
        <option value="Safari" />
      </datalist>
      <button id="openBtn" style={{ border: '5px solid green', padding: '10px' }}>Open Modal</button>
      
  
    <dialog id="myDialog" open>
      <h2>Welcome</h2>
      <p>This is a native HTML modal.</p>

      <form method="dialog">
        <button value="cancel2">Cancel</button>
        <button value="confirm123">Confirm</button>
      </form>

      <button id="closeBtn">Close</button>
    </dialog>
 
       <button popoverTarget="menu">
        popover Open Menu
      </button>

      <div id="menu" popover="auto">
        <p>Profile</p>
        <p>Settings</p>
        <p>Logout</p>
      </div>

    <details>
        <summary>Frontend</summary>
        <p>React, Angular, Vue</p>
      </details>

    <details>
      <summary>Backend</summary>
      <p>Node.js, Java, .NET</p>
    </details>

    <details name="backend">
      <summary>Backend</summary>
      <p>Node.js, Java, .NET</p>
    </details>
    <details name="backend">
      <summary>Backend</summary>
      <p>Node.js, Java, .NET</p>
    </details>

     
      
    </div>
  );
}
import User from "../../components/user";

export default function UsersList({ users }) {
  return (
    <>
      <h1>List of users</h1>
      {users.map((user) => (
        <div key={user.id}>
          {<User user={user}/>}
        </div>
      ))}
    </>
  );
}

export async function getStaticProps(){
    const resp = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await resp.json()

    return {
        props: {
            users: data
        }
    }
    // *remove async
    // return fetch("https://jsonplaceholder.typicode.com/users")
    // .then(response => response.json())
    // .then(data => {
    //     return {
    //         props: {
    //             users: data
    //         }
    //     }
    // })
}

import Image from "next/image";

const fetchdata = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

const Userdata = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

const getdata = async () => {
  const res = await fetch('https://dog.ceo/api/breeds/image/random',{
    next:{
        revalidate:10      // change after 10sec
    },
  });
  return res.json();
};

export default async function ListofPost() {
  try {
    const [posts, users, dog] = await Promise.all([fetchdata(), Userdata(), getdata()]); // Corrected invocation of getdata
    return (
      <div>
        <Image src={dog.message} alt="dog" width={300} height={300} />
        {posts.map((post: any) => {
          return <p key={post.id}>{post.title}</p>;
        })}
        <div>
          {users.map((user: any) => {
            return <p key={user.id}>{user.name}</p>;
          })}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}



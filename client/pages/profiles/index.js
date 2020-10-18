import React, { useState } from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import { useRouter } from 'next/router';
import { Card, Feed } from 'semantic-ui-react';

export default function Home({ userData }) {
  const router = useRouter();
  const { query } = useRouter();
  console.log('query', query);

  const myStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const cardStyle = {
    margin: '10px 50px ',
  };

  const patchUserData = e => {
    e.preventDefault();
    axios({
      method: 'patch',
      url: `http://localhost:4000/profiles/${e.target.id.value}`,
      data: {
        id: e.target.id.value,
        name: e.target.name.value,
        image: e.target.image.value,
        description: e.target.description.value,
      },
    });
    // router.push(`http://localhost:3000/profiles`);
    e.target.reset();
  };

  // //get user by id
  const getUserById = id => {
    router.push(`/profiles/${id}`);
  };

  return (
    <div>
      <form onSubmit={patchUserData}>
        <input name="id" placeholder="id" type="id" />
        <input name="name" placeholder="Name" type="text" />
        <input name="image" placeholder="Image" type="text" />
        <input name="description" placeholder="Description" type="text" />
        <button type="submit">Search</button>
      </form>
      <div style={myStyle}>
        {userData?.map((person, id) => (
          <Card
            style={cardStyle}
            key={id}
            onClick={() => {
              getUserById(person.id);
            }}
          >
            <Card.Content>
              <Card.Header>{person.id}</Card.Header>
            </Card.Content>
            <Card.Content>
              <Feed>
                <Feed.Event>
                  <Feed.Label image={person.image} />
                  <Feed.Content>
                    <p>{person.name}</p>
                    <Feed.Summary>
                      <Feed.Date content={person.description} />
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Card.Content>
          </Card>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async ({ params, query }) => {
  console.log(params), console.log(query);

  const res = await axios.get(`http://localhost:4000/profiles`);
  const userData = await res.data;

  return {
    props: { userData },
    revalidate: 1,
  };
};

import React from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import { Card, Feed } from 'semantic-ui-react';

export default function Test({ userData }) {
  const myStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const cardStyle = {
    margin: '10px 50px ',
  };

  return (
    <div style={myStyle}>
      <Card style={cardStyle}>
        <Card.Content>
          <Card.Header>{userData.id}</Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Label image={userData.image} />
              <Feed.Content>
                <p>{userData.name}</p>
                <Feed.Summary>
                  <Feed.Date content={userData.description} />
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  console.log(params);

  const res = await axios.get(`http://localhost:4000/profiles/${params.id}`);
  const userData = await res.data;

  return {
    props: {
      userData,
      params,
    },
  };
}

import { gql, useMutation } from "@apollo/client";
import { Button, Heading, Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import FlexViewContainer from "../../components/FlexViewContainer";

// Create new user in the user database
const CREATE_NEW_USER = gql`
  mutation CreateNewUser($name: String) {
    insert_users(objects: {
      name: $name
    }) {
      returning {
        id
        name
      }
    }
  }
`;

const CollectUserInfo = () => {

  const router = useRouter();

  const name = useRef(null);

  const [createUser, { data, loading, error }] = useMutation(CREATE_NEW_USER);

  const handleSubmit = (event) => {
    event.preventDefault();

    // extract name from form and save to reference variable
    name.current = event.target.elements['name'].value;

    // create a new user with the name from the form
    createUser({ variables: { 'name': `${name.current}` } });
  };

  useEffect(() => {

    if (data && !loading && !error) {
      const USER_ID = data.insert_users.returning[0].id;
      const USER_NAME = data.insert_users.returning[0].name;

      localStorage.setItem('QueuedUpUserId', USER_ID);
      localStorage.setItem('QueuedUpUserName', USER_NAME);

      document.referrer;
      // redirect to the home page
      router.push('/');
    }
  }, [data, loading, error, router])

  return (
    <FlexViewContainer>
      <Heading
        as='h1'
        size='4xl'
        marginBottom='15vh'
      >
        <Text>Create New User</Text>
      </Heading>
      <form
        onSubmit={(e) => handleSubmit(e)}
      >
        <Text>Name</Text>
        <Input id='name' placeholder='name' marginY='10px' />
        <Button isLoading={loading} type='submit' colorScheme='blue'>Submit</Button>
      </form>
    </FlexViewContainer>
  );
};

export default CollectUserInfo;
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function TokenTopup() {
    return <div>this is token top up page</div>;
  }
  

export const getServerSideProps = withPageAuthRequired(() => {
    return {
        props: {},
    };
});
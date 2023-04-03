import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../../components/AppLayout";

export default function NewPost(props) {

    console.log('NEW POST PROPS', props)

    return (
        <div>this is new post page</div>
    );
}

NewPost.getLayout = function getLayout(page, pageProps){

    return <AppLayout {...pageProps}>{page}</AppLayout>

}

export const getServerSideProps = withPageAuthRequired(() => {
    return {
        props: {},
    };
});

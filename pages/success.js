import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../components/AppLayout";
import { getAppProps } from "../utils/getAppProps";

export default function success() {

    return (
        <div>
            <h1>Thank you for your purchase!</h1>
        </div>
    );
}


success.getLayout = function getLayout(page, pageProps) {

    return <AppLayout {...pageProps}>{page}</AppLayout>
}

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx) {
        const props = await getAppProps(ctx)
        return {
            props
        }
    }
});

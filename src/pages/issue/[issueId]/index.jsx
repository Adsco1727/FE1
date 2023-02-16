import MLayoutWithHeaderAndFooter from "../../../layout/layout-headerAndFooter";
import MIssueDetailById from "../../../components/issues/issueItem";

export default function MIssueById(props) {
    return(
        <MIssueDetailById issueId={props.issueId}/>
    )
}

export async function getServerSideProps(context) {
    const { params } = context;
    const issueId = params.issueId;
    return {
        props: {
            issueId: issueId
        }
    }
}

MIssueById.getLayout = function getLayout(page) {
    return (
        <MLayoutWithHeaderAndFooter>
            { page }
        </MLayoutWithHeaderAndFooter>
    )
}

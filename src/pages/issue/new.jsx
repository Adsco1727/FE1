import MIssueCreate from "../../components/issues/newIssue";
import MLayoutWithHeaderAndFooter from '../../layout/layout-headerAndFooter'

export default function MNewIssue() {
    return(
        <MIssueCreate />
    )
}

MNewIssue.getLayout = function getLayout(page) {
    return(
        <MLayoutWithHeaderAndFooter>
            {page}
        </MLayoutWithHeaderAndFooter>
    )
}
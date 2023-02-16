import { useEffect, useState } from "react";

import MLandingOptions from "./options";
import MLandingWhyChoose from "./whychoose";
import MLandingCallUs from "./callus";
import MLandscape from "./landscape";
import MWhitePaper from "./whitepaper";
import MKDrawer from "../../core/ui-kit/drawer/drawer";

import { LandingCards } from "../../core/data/landing/landingcards";
import { WhyChooseUs } from "../../core/data/landing/chooseus";
import { Divider} from "antd";
import { AcknowledgeData } from '../../core/data/config/acknowledge';


export default function MLandingContent() {
    const [drawerVisible, setDrawerVisible] = useState(true);
    useEffect(() => {
        let checkStatus = localStorage.getItem('acknowledged');
        setDrawerVisible(!checkStatus);
    }, [])

    const onAcknowledgeClick = () => {
        localStorage.setItem('acknowledged', true);
        setDrawerVisible(false);
    }

    return(
        <div className="container-fluid no-padding">
            <MLandscape key={'landscape'}/>
            <MLandingOptions key={'options'} cards={LandingCards}/>
            <Divider key={'firstDivider'}/>
            <MLandingWhyChoose key={'whyChooseUs'} detail={WhyChooseUs}/>
            <Divider key={'secondDivider'}/>
            <MLandingCallUs key={'callUs'}/>
            <MWhitePaper key={'whitePaper'}/>
            <MKDrawer key={'drawer'} visible={drawerVisible} action={onAcknowledgeClick} {...AcknowledgeData}/>
        </div>
    )
}

import React from 'react'
import './Sidebar.css';
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import SidebarOptions from "./SidebarOptions";

function Sidebar() {
    return (
        <div className="sidebar">
            <Button 
                startIcon={<AddIcon fontSize="large"
                className="sidebar__compose" />}
            >
                Compose
            </Button>

            <SidebarOptions Icon={InboxIcon} title="Inbox" number={54} />
        </div>
    )
}

export default Sidebar;

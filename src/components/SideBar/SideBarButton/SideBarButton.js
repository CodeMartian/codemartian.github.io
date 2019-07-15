import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBarButton = (props) => {
    return <>
        <NavLink to="" className="row">{props.name}</NavLink>
    </>;
};

export default SideBarButton;

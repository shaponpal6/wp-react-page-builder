import React, { useEffect, useState, memo } from 'react'
import SideBarItem from "./SideBarItem";
import { SIDEBAR_ITEMS, COMPONENTS_TYPE } from "./constants";

function ComponentItemList(props) {
    const [components, setComponents] = useState({});
    const [search, setSearch] = useState('');
    useEffect(() => {
        if(search !== "") {
            setComponents(SIDEBAR_ITEMS.filter(item => item?.component?.name.toLowerCase().includes(search.toLowerCase())));
        } else {
            setComponents(SIDEBAR_ITEMS);
        }
    }, [search])

    return (
        <div>
            <input type="text" className="component_search_box" placeholder="Search Components" value={search} onChange={(e)=>setSearch(e.target.value)} />
            <div className="component_container">
                {Object.values(components).map((sideBarItem) => (
                    <SideBarItem key={sideBarItem.id} data={sideBarItem} />
                ))}
            </div>
        </div>
    )
}

export default memo(ComponentItemList);


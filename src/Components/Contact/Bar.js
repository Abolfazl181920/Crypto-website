import React from 'react';

import Members from 'Components/Contact/Members';

const Bar = () => {
    return (
        <div className="bar">
            <h4>Members</h4>
            <p>All members that joined to our projects.</p>
            <Members />
        </div>
    )
}

export default Bar;
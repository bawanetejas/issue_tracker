import React from 'react'
import TeamsList from '../common/TeamsList'

export default function Teams() {
    const teamsData = [
        {
            id: 1,
            name: "Engineering",
            members: 8,
        },
        {
            id: 2,
            name: "Design",
            members: 4,
        },
        {
            id: 3,
            name: "Product",
            members: 3,
        },
    ];
    return (
        <div className='w-full '>
            <TeamsList teams={teamsData} />
        </div>
    )
}

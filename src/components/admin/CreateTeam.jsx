import React, { useEffect, useState } from 'react'
import { getAllTeamLeads } from '../../services/users'
import toast from 'react-hot-toast';
import { createTeam } from '../../services/teams';
import { teamSchema } from '../../schema/team.schema';

export default function CreateTeam({ setFlag }) {
    const [formData, setFormData] = useState({
        name: "",
        description: '',
        teamLead: ''

    })

    const [leads, setLeads] = useState([])

    async function getTeamLead() {
        const leads = await getAllTeamLeads({ role: "Lead", page: 1 });
        setLeads(leads)
    }

    useEffect(() => {
        getTeamLead()
    }, [])
    function onInputChangeHandler(e) {
        setFormData((pre) => ({
            ...pre,
            [e.target.name]: e.target.value
        }))
    }
    async function formHandler(e) {
        e.preventDefault();
        const zodParsedData = teamSchema.safeParse(formData)
        if (!zodParsedData.success) {
            toast.error("Enter valid data");
            return;
        }
        try {
            const teamData = await createTeam(formData)
            toast.success("team created successfully")
            setFlag(false)
        } catch (error) {
            console.log("error while creating the team -->", error)
            toast.error("Not able to creat team")
        }
    }


    return (
        <div
            className="fixed w-screen inset-0 z-50 flex items-center justify-center p-lg bg-surface-container-lowest/80 backdrop-blur-sm"
        >
            <form onSubmit={formHandler}
                className="w-full max-w-[450px] bg-surface-container-low border border-outline-variant rounded-xl shadow-lg overflow-hidden"
            >
                <div
                    className="p-lg border-b border-outline-variant flex justify-between items-center"
                >
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Create New Team
                    </h3>
                    <button
                        className="text-on-surface-variant hover:text-on-surface transition-colors"
                    >
                        <span onClick={() => setFlag(false)} className="material-symbols-outlined">close</span>
                    </button>
                </div>
                <div className="p-lg flex flex-col gap-lg">
                    <div className="flex flex-col gap-xs">
                        <label className="text-label-md font-medium text-on-surface-variant"
                        >Team Name</label>
                        <input
                            className="w-full bg-surface-container border border-outline-variant rounded-lg px-md py-2 text-body-md focus:outline-none focus:border-primary transition-colors"
                            placeholder="e.g. Frontend Engineering"
                            name='name'
                            value={formData.name}
                            onChange={onInputChangeHandler}
                            type="text"
                        />
                    </div>
                    <div className="flex flex-col gap-xs">
                        <label className="text-label-md font-medium text-on-surface-variant"
                        >Team Description</label>
                        <textarea
                            className="w-full bg-surface-container border border-outline-variant rounded-lg px-md py-2 text-body-md focus:outline-none focus:border-primary transition-colors resize-none"
                            placeholder="Describe the team's focus..."
                            name='description'
                            value={formData.description}
                            onChange={onInputChangeHandler}
                            rows="3"
                        ></textarea>
                    </div>
                    <div className="flex flex-col  gap-xs">
                        <label className="text-label-md font-medium text-on-surface-variant"
                        >Team Lead</label>
                        <select
                            name='teamLead'
                            value={formData.teamLead}
                            onChange={onInputChangeHandler}
                            className="w-full max-h-12  bg-surface-container border border-outline-variant rounded-lg px-md py-2 text-body-md focus:outline-none focus:border-primary transition-colors appearance-none"
                        >
                            <option value=''>
                                Select a team lead
                            </option>
                            {
                                leads && leads.map((lead) => {
                                    return <option value={lead._id}>{lead.fullName}</option>
                                })
                            }

                        </select>
                    </div>
                </div>
                <div className="p-lg bg-surface-container-high/50 flex justify-end gap-md">
                    <button onClick={() => setFlag(false)}
                        className="px-lg py-md rounded-lg border border-outline-variant text-on-surface font-label-md hover:bg-surface-container-high transition-colors active:scale-95 duration-150"
                    >
                        Cancel
                    </button>
                    <button type='submit'
                        className="px-lg py-md rounded-lg bg-primary text-on-primary font-label-md hover:bg-primary/90 transition-colors active:scale-95 duration-150 shadow-lg"
                    >
                        Create Team
                    </button>
                </div>
            </form>
        </div>
    )
}

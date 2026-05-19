import React from 'react'

export default function BlueBtn({ icon, name }) {
    return (
        <button
            class="flex items-center gap-sm px-lg py-md rounded-lg bg-primary text-on-primary font-label-md hover:bg-primary/90 transition-colors active:scale-95 duration-150 shadow-lg"
        >
            <span class="material-symbols-outlined" data-icon="add_circle"
            >{icon}</span>
            <span>{name}</span>
        </button>
    )
}

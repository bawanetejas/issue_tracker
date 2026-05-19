import React from 'react'

export default function TransparentBtn({ icon, name }) {
    return (
        <button
            class="flex items-center gap-sm px-lg py-md rounded-lg border border-outline-variant text-on-surface font-label-md hover:bg-surface-container-high transition-colors active:scale-95 duration-150"
        >
            <span class="material-symbols-outlined" data-icon="group_add"
            >{icon}</span>
            <span>{name}</span>
        </button>
    )
}

import React, {useRef, useEffect, useCallback} from 'react'

export default function MovieModal({showModal, setShowModal}) {
    return (
        showModal ? (
        <div className="modal-container">
            <h1>Modal</h1>
        </div>) : null
        
    )
}

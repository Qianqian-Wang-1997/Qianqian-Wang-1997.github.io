import React from 'react'

export default function Alert({ type, message }) {
    return (
        <>
            {
                type === 'error' &&
                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium">Error: {message}</span>
                </div>
            }
            {
                type === 'success' &&
                <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                    <span class="font-medium">{message}</span>
                </div>
            }
        </>
    )
}

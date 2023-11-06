import React from 'react'

export default function Table({ heading, data }: { heading: any, data: any }) {
    return (
        <table>
            <thead>
                <tr>
                    {
                        heading && heading.map((item: any, index: any) => <th key={index}>{item}</th>)
                    }
                </tr>
            </thead>
            <tbody>
                <tr>
                    {
                        data && data.map((item: any, index: any) => <td key={index}>{item}</td>)
                    }
                </tr>
            </tbody>
        </table>
    )
}

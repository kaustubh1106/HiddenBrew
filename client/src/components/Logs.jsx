import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/Logs.css'
const Logs = ({ Contract }) => {
    const [logs, setLogs] = useState([])
    useEffect(() => {
        const showdetails = async () => {
            try{const memo = await Contract.showDetails();
            if (memo) {
                console.log(memo)
            }
            setLogs(memo)
            
        }catch(error){
            console.log(error)
        }}
        showdetails();
    }, [Contract])
    return (
        <div className='div1'>
            <div className='div2'>
                <section className="table-sec">
                <table className="table1">
                                    <tr className="table-head">
                                        <th className="table-head1">From</th>
                                        <th className="table-head1">To</th>
                                        <th className="table-head1">Address of Sender</th>
                                        <th className="table-head1">Address of Reciever</th>
                                    </tr>
                                    
                                
                    {logs.map((log) => {
                        return (
                            <>
                                <tr className="table-head">
                                        <td className="table-head1">{log[0]} </td>
                                        <td className="table-head1">{log[1]}</td>
                                        <td className="table-head1">{log[2]}</td>
                                        <td className="table-head1">{log[3]}</td>
                                    </tr>
                            </>
                        )
                    })
                        // <table className="table1">
                        //     <tr className="table-head">
                        //         <th className="table-head1">From</th>
                        //         <th className="table-head1">To</th>
                        //         <th className="table-head1">Address of Sender</th>
                        //         <th className="table-head1">Address of Reciever</th>
                        //     </tr>
                        //     <tr className="table-head">
                        //         <td className="table-head1">shubham jha</td>
                        //         <td className="table-head1">kaustubh sharma</td>
                        //         <td className="table-head1">0x76BA4AfF6BB08adDa192E451AA290003379996A6</td>
                        //         <td className="table-head1">0x76BA4AfF6BB08adDa192E451AA290003379996A6</td>
                        //     </tr>
                        // </table>
                    }
                    </table>
                </section>
            </div>
        </div>
    )
}

export default Logs
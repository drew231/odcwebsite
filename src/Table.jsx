import React from 'react'

const Table = ({ data }) => {
  return (
    <div className='container my-5'>
    <table className='table'>
      <tbody>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Surname</th>
          <th scope='col'>Course</th>
          <th scope='col'>Batch No</th>
        </tr>
        {data.map(item => (
          <tr key='{item.batchNo}'>
            <td>{item.fitst_name}</td>
            <td>{item.last_name}</td>
            <td>{item.course}</td>
            <td>{item.batchNo}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}
export default Table

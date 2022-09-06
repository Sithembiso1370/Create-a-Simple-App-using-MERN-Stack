import React from 'react';



const List = ({ list, deleteItem }) => {
return (
    <ul>
      {
        list &&
          list.length > 0 ?
            (
              list.map(item => {
                return (
                  <li key={item._id} onClick={() => deleteItem(item._id)}>{item.action}</li>
                )
              })
            )
            :
            (
              <li>No item left</li>
            )
      }
    </ul>
  )
}




export default List
import React, {Component} from 'react';
import axios from 'axios';
import Input from './Input';
import List from './List';


class Item extends Component {
  state = {
    list: []
  }
  componentDidMount(){
    this.getList();
  }


getList = () => {
    axios.get('/api/item')
      .then(res => {
        if(res.data){
          this.setState({
            list: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }


  deleteItem = (id) => {
    axios.delete(`/api/list/${id}`)
          .then(res => {
            if(res.data){
              this.getList()
            }
          })
          .catch(err => console.log(err))
  }

  
  render() {
    let { list } = this.state;
return(
      <div>
        <h1>My Item</h1>
        <Input getList={this.getList}/>
        <List list={list} deleteItem={this.deleteItem}/>
      </div>
    )
  }
}



export default Item;
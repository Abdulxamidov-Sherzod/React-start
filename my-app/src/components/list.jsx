import React, { Component } from 'react'
import './style/list.scss'
import "./FA/css/all.min.css"
import { Modal, Button } from 'antd';


export default class List extends Component {

    state={
        visible: false ,
        work: "",
        todos: [],
        id: 1,
        fullName:this.props.Fisrtname + this.props.Lastname,
    }

    handleInputChange = (e) =>{
        let work= this.state.work;
        this.setState({
            work: e.target.value 
        })
    }


    add = () =>{
        if(this.state.work !==""){
            let todo={
                work: this.state.work,
                id: this.state.id,
                isComplete: false
            }
            this.setState({
                todos: this.state.todos.concat(todo),
                id: this.state.id + 1,
                work: ""
            })
        }
        else{
            alert("Textni kiritng")
        }
      
    }

    delete = (id) =>{
        this.setState({
            todos: this.state.todos.filter((todo)=>{
                if (todo.id !== id){
                    return todo
                }
            })
        })
        console.log("sherzod")
    }

    check = (id) =>{
        this.setState({
            todos: this.state.todos.filter((todo)=>{
                if (todo.id === id){
                    todo.isComplete =! todo.isComplete
                }
                return todo
            })
        })
        console.log("sherzod")
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });}

    render() {
        return (
            <div className="container">
                <div className="row mt-5"> 
                    <div className="col-md-9">
                        <input type="text" value={this.state.work} onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-md-3"><button className="btn btn-danger" onClick={this.add}>Add</button></div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-8">
                        {this.state.todos.map((todo) =>{
                            
                            var a=  <div className="box2 mt-3" >{todo.work}</div>
                            var b=  <div className="box2_1 mt-3" >{todo.work}</div>
                            return <div className="box">
                                <div className="box1 mt-3" >{todo.id}</div>
                                {todo.isComplete ? 
                                b : a 
                                }
                                <button className="btn btn-dark mt-3"  style={{fontSize:14}} onClick={()=> this.check(todo.id)}><i className="fa fa-check"></i></button>
                                <button className="btn btn-dark mt-3"  style={{fontSize:14}} onClick={this.showModal}><i className="fa fa-pen-nib"></i></button>
                               
                                <Modal
                                    title="Basic Modal"
                                    visible={this.state.visible}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                                    okButtonProps={{ disabled: true }}
                                    cancelButtonProps={{ disabled: true }}
                                    >
                                   
                                 </Modal>
                                <button className="btn btn-dark mt-3" style={{fontSize:14}} onClick={() => this.delete(todo.id)}><i className="fa fa-times"></i></button>
                            </div>
                        }
                        )}
                    </div>
                </div>
            </div>
        )
    }
}



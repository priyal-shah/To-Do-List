import React, { Component } from 'react';

class List extends Component{
 
    constructor(){
        super();
        this.state ={
           list:[],
           temp:[]
        };
        this.addItem= this.addItem.bind(this);
        this.changeTemp= this.changeTemp.bind(this);
        this.removeItem= this.removeItem.bind(this);
        this.editItem= this.editItem.bind(this);
    }

        // to add item to the list
     addItem() {
        if(this.state.temp!=""){
        this.setState({list:this.state.list.concat(this.state.temp)});
        this.setState({temp:[]});
        document.getElementById("myinput").value="";
        document.getElementById("addbtn").innerHTML="+  ";
        }
    }


    // to change temp value on change in input field
    changeTemp(event){
        this.setState({temp:[event.target.value]});
    }


    // to remove item from the list
    removeItem(index){
        const l=this.state.list.filter((itemvalue, id)=>{
            return id!=index;
        });
        this.setState({list:l});
    }


    // edit item
    editItem(index, listItem){
        document.getElementById("myinput").value=listItem;
        document.getElementById("addbtn").innerHTML='<i class="bi bi-pencil-square"></i>';
        this.removeItem(index);
    }

    render(){


        //making list
       const makeList = this.state.list.map((listvalue, index)=>{
        console.log(index);
           return(
               <div className="row listElement m-3" key={index}>
                   <input type="checkbox" for="#itemlist" className="col-1 mt-2"/>
                    <li className="col-8" id="itemlist">{listvalue}</li>
                    <button className="col-1 listbtn rmvbtn" onClick={()=>this.removeItem(index)} title="delete item"><i class="bi bi-trash"></i></button>
                   <button className="col-1 listbtn editbtn" onClick={()=>this.editItem(index, listvalue) } title="edit item"><i class="bi bi-pencil-square"></i></button>
                </div>
           );
       });

        return(
            <>
            <div className="container ">
                <div className="row">
                    <div className="col-md-8 col-10 offset-md-2 offset-1" >
                        <div className="row">
                            <h2 className="col-12 todolist mt-5">ToDo List <i class="bi bi-pencil-square"></i> </h2>
                            {/* <p className="pencile"> <i class="bi bi-pen"></i> </p> */}
                            {/* add item */}
                            <div className="row col-12 mb-3">
                                <input type="text" placeholder="✍ Add Item"  onChange={this.changeTemp}
                                id="myinput" className="col-8 offset-2 col-md-9 offset-md-1" />
                                <button onClick={this.addItem} id="addbtn" className="col-1"><i class="bi bi-plus-lg"></i></button>
                            </div>

                            
                            <div className="col-11">
                                <ol >
                                    {makeList}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            </>


        );
    }
} 

export default List;
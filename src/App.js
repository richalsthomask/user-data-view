import axios from 'axios';
import React,{useEffect, useState} from 'react';
import './App.css';


function App() {

  const [array, setarray] = useState([]);

  useEffect(() => { document.title = "User Data" }, []);

  useEffect(() => { axios.get( "https://jsonplaceholder.typicode.com/users" )
                         .then( res => { setarray(res.data); } )
                  } , [] );

  
  
  return (

    <div Style="background-image:url(joanna-kosinska-eVQBXxeCre4-unsplash.jpg);
                background-size:cover;
                height:100vh;
                width:100%;
                overflow-y:scroll;">
      
        <div Style="margin=5px auto;">

        <div Style="height:5px;" />

        <a Style="font-size:30px;color:white;"> The api doesn't support server modification of data <br/> check console for api responses <br/> click on the fields you want to change</a>

        <Rows array={array} />

          <div Style="height:5px" />

        </div>
      
    </div>
  );
}

export default App;

class Rows extends React.Component{

  constructor(props){
    super(props);
    this.state={
      a:[],
      name:'',
      username:'',
      email:'',
      phone:'',
      website:''
    };
  }
  
  

  render(){
    return(
      <div>
        
        <br />

        {  this.props.array.map( ( value , index ) => {

     
      if( ! this.state.a.includes( index ) )   return <div id="card1" >

          <div Style="float:left;
                      height:100%;
                      width:5%;" />

          <div Style="width:95%">

          <br />

          <div id="deletebutton" 
               onClick={
                      () => { axios.delete("https://jsonplaceholder.typicode.com/users/" + value.id)
                                   .then( res => { console.log( res.data ) }); 
                                
                              this.setState({ a : [...this.state.a,index ] } ) ; 
                            }
                        }>
                          &nbsp; Delete &nbsp;
          </div>

          <div class="textline">

                  <a> Name : </a>
                 
                  <input  defaultValue={value.name} 

                          onChange={(e) => { this.props.array[ index ].name = e.target.value}}>

                  </input> 
                  
                  <br />
          </div>

          <div class="textline">
                
                <a> Username : </a>
                
                <input defaultValue = {value.username} 

                       onChange={(e) => { this.props.array[index].usernamename = e.target.value }}>
                         
                </input>
                
                <br />
                
          </div>

          <div class="textline"><a>Email : </a><input defaultValue={value.email} onChange={(e) => { this.props.array[index].email = e.target.value }}></input><br /></div>
          <div class="textline"><a>phone : </a><input defaultValue={value.phone} onChange={(e) => { this.props.array[index].phone = e.target.value }}></input><br /></div>
          <div class="textline"><a>Website : </a><input defaultValue={value.website} onChange={(e) => { this.props.array[index].website = e.target.value }}></input><br /></div>
          <div id="updatebutton" onClick={() => { axios.patch("https://jsonplaceholder.typicode.com/users/" + value.id, { name: this.props.array[index].name, username: this.props.array[index].username, email: this.props.array[index].email, phone: this.props.array[index].phone, website: this.props.array[index].website}).then(res=>console.log(res.data)) }}>&nbsp;Update&nbsp;</div>
          </div>
        </div>
    })}
        <div id="card1"  >

          <div Style="float:left;height:100%;width:5%;" />
          <div Style="width:95%">
            <br />
            <a  Style="color:blue;position:relative;left:30%;font-weight:500">Add new User</a>
            <div class="textline" ><a>Name : </a><input id="name2" Style="background-color:rgba(255,255,255,.5);border-radius:5px;" onChange={(e) => { this.setState({name:e.target.value}) }}></input> <br /></div>
            <div class="textline"><a>Username : </a><input id="username2" Style="background-color:rgba(255,255,255,.5);border-radius:5px" onChange={(e) => { this.setState({ username: e.target.value }) }}></input><br /></div>
            <div class="textline"><a>Email : </a><input id="email2" Style="background-color:rgba(255,255,255,.5);border-radius:5px" onChange={(e) => { this.setState({ email: e.target.value })}}></input><br /></div>
            <div class="textline"><a>phone : </a><input id="phone2" Style="background-color:rgba(255,255,255,.5);border-radius:5px" onChange={(e) => { this.setState({ phone: e.target.value }) }}></input><br /></div>
            <div class="textline"><a>Website : </a><input id="website2" Style="background-color:rgba(255,255,255,.5);border-radius:5px" onChange={(e) => { this.setState({ website: e.target.value })}}></input><br /></div>
            <div id="updatebutton" Style="position:relative;bottom:30px" onClick={() => { axios.post("https://jsonplaceholder.typicode.com/users", { name: this.state.name, username: this.state.username, email: this.state.email, phone: this.state.phone, website: this.state.website }).then(res => console.log(res.data)); this.props.array.push({ "name": this.state.name, "username": this.state.username, "email": this.state.email, "phone": this.state.phone, "website": this.state.website }); document.getElementById("name2").value = ""; document.getElementById("username2").value = ""; document.getElementById("email2").value = ""; document.getElementById("phone2").value = ""; document.getElementById("website2").value = "";this.setState({}); }}>&nbsp;Add&nbsp;</div>

          </div><br />
        </div>
        
    </div>
    );
  }
}


import  React, {Component}  from "react";
import TSlider from "./Slider";
import MyUniForm from "./Uniform/UniForm";
import MyNewForm from "../Tasks/newTask/myNewForm";


export default class Test extends Component {

constructor(props){
    super(props);

    this.state ={

        count: 1,
        visible: true,
        formVisible: true
    };

}

//handleClick(){
 //console.log(this.state.count);
 //console.log("Button Click");
//}

increment =() => {

        console.log(this.state);

        this.setState({

            count: this.state.count +1
        });

};

decrement =() => {

    console.log(this.state);

    this.setState({

        count: this.state.count -1
    });

};

    
componentDidMount(){

    console.log("Test did mounted...");
 //  

  }

  componentWillMount(){
    console.log("Test will mounted...");

  }

  componentWillUnmount(){

    console.log("Test will Unmounted...");
    
 
  }

  render(){

    const btnText = this.state.visible? "Hide" : "show";
    const formBtn = this.state.formVisible? "Change to UniForm Form " : "Change to My Own Form";


    return (
               
                  <div>
                        <div>
                            count: {this.state.count}
                            
                            <button onClick={this.increment} > increment</button>
                            <button onClick={this.decrement} > decrement</button>
                        </div>
                        
                    
                        <div>
                            { this.state.visible ? <TSlider Index={this.state.count} /> : <div> Image is hidden</div> }
                         </div>                 
                       
                         <div>
                                <button onClick={ ()=>{
                                    this.setState({

                                        visible: !this.state.visible
                                    });

                                }} > 
                                
                                {btnText}
                                
                                </button>
                         </div> 
                         <div>
                                <button onClick={ ()=>{
                                    this.setState({

                                        formVisible: !this.state.formVisible
                                    });

                                }} > 
                                
                                {formBtn}
                                
                                </button>
                         </div> 

                         <div>
                             { this.state.formVisible ? <MyNewForm /> : <MyUniForm /> }
                             
                         </div>
               
                     </div>

                
                   
    );
  }

} 





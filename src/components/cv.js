import React,{ Component } from 'react';

class CV extends Component {
  constructor(props) {
    super(props);
    this.mode = props.mode;
    this.state = {
      info: [{title: 'name', value: 'John'},
             {title: 'age', value: 19},
             {title: 'gender', value: 'male'}],
      infoForm: false,
      workForm: false,
      studyForm: false
    }  
  }
   
  render() {
    return (
      <div className="cv">
        <ul>
          {this.state.info.map((item) => {
            return <li>
                    <h5>{item.title}</h5>
                    <p>{item.value}</p>
                  </li>
          })} 
        </ul>
        {this.mode  === 'edit' && this.state.infoForm === false ? <button onClick={()=>this.setState({infoForm: true})}>Add Info</button> : <></>}
        {this.state.infoForm ? <form className="info-form" onSubmit={(e) => {e.preventDefault(); this.setState({infoForm : false})}}>
                          <input type="text" name="title"/> 
                          <input type="text" name="value"/>
                          <input type="submit" value="add"/>
                         </form> : <></>}
      </div>
    );
  }
};

export default CV;
import React,{ Component } from 'react';
import Field from './field';

class CV extends Component {
  constructor(props) {
    super(props);
    this.addInfo = this.addInfo.bind(this);
    this.addWork = this.addWork.bind(this);
    this.addStudy = this.addStudy.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.makeField = this.makeField.bind(this);
    this.state = {
      info: [{title: this.makeField('name'), value: this.makeField('John Wich')},
             {title: this.makeField('age'), value: this.makeField('19')},
             {title: this.makeField('gender'), value: this.makeField('male')}],
      work: [],
      study: [],
      infoForm: false,
      workForm: false,
      studyForm: false,
      mode: this.props.mode
    }  
  }

  addInfo(e) {
    e.preventDefault();
    let newItem = {
      title: this.makeField(e.target['title'].value),
      value: this.makeField(e.target['value'].value)
    };
    this.setState({infoForm: false, info: this.state.info.concat(newItem)});
  }

  addWork(e) {
    e.preventDefault();
    let newItem = {
      company: e.target['company'].value,
      position: e.target['position'].value,
      from: e.target['from'].value,
      to: e.target['to'].value
    }
    this.setState({workForm: false, work: this.state.work.concat(newItem)});
  }

  addStudy(e) {
    e.preventDefault();
    let newItem = {
      name: e.target['name'].value,
      degree: e.target['degree'].value,
      subject: e.target['subject'].value,
      from: e.target['from'].value,
      to: e.target['to'].value
    }
    this.setState({studyForm: false, study: this.state.study.concat(newItem)});
  }

  removeItem(list,item) {
    switch(list){
      case 'info': this.setState({info: this.state.info.filter((data,idx) => idx !== item)});
      case 'work': this.setState({work: this.state.work.filter((data,idx) => idx !== item)});
      case 'study': this.setState({study: this.state.study.filter((data,idx) => idx !== item)});
    }
  }

  makeField(text) {
    return <Field mode={this.props.mode} text={text} key={Math.floor(Math.random()*10000)}/>;
  }
   
  render() {
    return (
      <div className="cv">

        {/* general info */}
        <ul>
          {this.state.info.map((item) => {
            return <li>
                    {this.props.mode === 'edit' ? <button onClick={(() => this.removeItem('info',this.state.info.indexOf(item)))}>X</button> : <></>}
                    {item.title}
                    {item.value}
                  </li>
          })} 
        </ul>

        {this.mode  === 'edit' && this.state.infoForm === false ? <button onClick={()=>this.setState({infoForm: true})}>Add Info</button> : <></>}
        {this.state.infoForm ? <form className="info-form" onSubmit={this.addInfo}>
                          <input type="text" name="title"/> 
                          <input type="text" name="value"/>
                          <input type="submit" value="add"/>
                         </form> : <></>}

        {/* work experience */}
        <ul>
          {this.state.work.map((item) => {
            return <li>
                    {this.mode === 'edit' ? <button onClick={() => this.removeItem('work',this.state.work.indexOf(item))}>X</button> : <></>}
                    <p>Company: {item.company}</p>
                    <p>Position: {item.position}</p>
                    <p>From: {item.from}</p>
                    <p>To: {item.to}</p>
                   </li>
          })}
        </ul>

        {this.mode  === 'edit' && this.state.workForm === false ? <button onClick={()=>this.setState({workForm: true})}>Add Work Experience</button> : <></>}
        {this.state.workForm ? <form className="work-form" onSubmit={this.addWork}>
                          <input type="text" placeholder="company" name="company"/> 
                          <input type="text" placeholder='position' name="position"/>
                          <input type="text" placeholder="From" name="from"/> 
                          <input type="text" placeholder='To' name="to"/>
                          <input type="submit" value="add"/>
                         </form> : <></>}

        {/* studies */}
        <ul>
          {this.state.study.map((item) => {
            return <li>
                    {this.mode === 'edit' ? <button onClick={() => this.removeItem('study',this.state.study.indexOf(item))}>X</button> : <></>}
                    <p>Name: {item.name}</p>
                    <p>Degree: {item.degree}</p>
                    <p>Subject: {item.subject}</p>
                    <p>From: {item.from}</p>
                    <p>To: {item.to}</p>
                   </li>
          })}
        </ul>

        {this.mode  === 'edit' && this.state.studyForm === false ? <button onClick={()=>this.setState({studyForm: true})}>Add Studies</button> : <></>}
        {this.state.studyForm ? <form className="study-form" onSubmit={this.addStudy}>
                          <input type="text" placeholder="name" name="name"/> 
                          <input type="text" placeholder='degree' name="degree"/>
                          <input type="text" placeholder='subject' name="subject"/>
                          <input type="text" placeholder="From" name="from"/> 
                          <input type="text" placeholder='To' name="to"/>
                          <input type="submit" value="add"/>
                         </form> : <></>}
        
      </div>
    );
  }
};

export default CV;
import React from 'react'; 
import './App.css';


const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

      /* Here’s the juicy bit for posting the form submission */

      handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
  
        e.preventDefault();
      };
  
      handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render(){
    const { name, email, message } = this.state;
    return(
      
      <div className="App">
        <header className="App-header">  
  
  
        <form onSubmit={this.handleSubmit}>
            <p>
              <label>
                Please enter your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message" value={message} onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
  
  
        </header>
      </div>

    )
  }
}

export default App;

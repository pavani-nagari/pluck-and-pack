import React,{Component} from "react";

class Welcome extends Component{
    
    render() {
        const { onStartShopping } = this.props;
    
        return (
            <div className="Welcome-container">
            <h1 className="Welcome-title">Welcome to Pluck and Pack</h1>
            <button className="Welcome-button" onClick={onStartShopping}>
              Ready to shop?
            </button>
          </div>
        );
      }
    }
    
    export default Welcome;

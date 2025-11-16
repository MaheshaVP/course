import React, { Component } from "react"

const Hoc = (App) => {
    
    return  class extends React.Component{
            state = {
                auth : true
            }

            render(){
                return(

                    <div>
                        {this.state.auth ? (<App {...this.props} name="Mahesh"/>) : (<h1>Please Login</h1>)} 
                    </div>
                )
            }
        }
    
}

export default Hoc;
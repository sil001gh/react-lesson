import React from "react";


class B extends React.Component{

    constructor(props) {
        super()
    }


    render(){
        return(
            <div>
                {this.props.send}
            </div>
        )
    }
}
export default B;
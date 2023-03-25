import React from "react";
import B from "./B";

class A extends  React.Component{
    render() {
        return(
            <div>
                <h1>Apple</h1>
                <B send="500"/>
            </div>
        )
    }
}

export default A;
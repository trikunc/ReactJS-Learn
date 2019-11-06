import React, {Component} from 'react';
//import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import Product from '../Product/Product';


class Home extends Component{
    render(){
        return (
        <div>
            {/* <p>YouTube Component</p>
            <hr/>
            <YouTubeComp 
                time="7.12" 
                title="Tutorial 1"
                desc="Sudah ditotonton 1x"/>
             <YouTubeComp 
                time="8.02" 
                title="Tutorial 2"
                desc="Sudah ditotonton 12x"/>
            <YouTubeComp 
                time="5.04" 
                title="Tutorial 3"
                desc="Sudah ditotonton 123x"/>
            <YouTubeComp 
                time="4.12" 
                title="Tutorial 4"
                desc="Sudah ditotonton 1234x"/>
            <YouTubeComp /> */}
            <p>Counter</p>
            <hr/>
            <Product />
        </div>
        )
    }
    
}

export default Home;
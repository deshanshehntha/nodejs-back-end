import React, { Component } from 'react';
import main_background from './images/main_background.jpg';

export default class Login extends Component {

    componentDidMount(){
        if(!sessionStorage.getItem('isloged')){
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <div >
                <div class="jumbotron" style={{backgroundImage: `url(${main_background})`, backgroundSize: 'cover' }}>
                    <div class="container"style={{color:'white',backgroundColor: 'rgba(0,0,0,.5)',padding:'10px'}}>
                    <h1 class="display-3" >Welcome to SLIIT!</h1>
                    <p style={{color:'white'}} >We are a leading non-state degree awarding institute approved 
                        by the University Grants Commission (UGC) under the Universities Act. 
                        We are also members of the Association of Commonwealth Universities (ACU), as 
                        well as the International Association of Universities (IAU), and the first Sri 
                        Lankan institute to be accredited by the Institution of 
                        Engineering and Technology, UK.</p>
                    <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
                    </div>
                </div>
            </div>
        )
    }

}
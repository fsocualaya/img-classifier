import React, {Component} from "react";
import './Image.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class Image extends Component{

    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            classes: [],
        };
        this.Recognize = this.Recognize.bind(this);
    }

    async Recognize(){
        this.state.classes = await fetch('http://localhost:8080/recognize?url=' + this.state.url)
            .then(response => response.json())
            .then(classifiers => classifiers.images[0].classifiers[0].classes);
        console.log(this.state.classes);
    };

    render() {

        return (
            <div>
                <Card style={{ width: '18rem' }} key={this.props.id}>
                    <p>{this.props.name}</p>
                    <img alt={this.props.id} src={this.props.url} className="pic" />
                    <Button onClick={this.Recognize}> Recognize </Button>
                </Card>

                <ul>
                    { this.state.classes.map((item, index) =>  {return <li key={index}>{item.xclass}</li>;})}
                </ul>
            </div>
        );
    }
}

export default Image;
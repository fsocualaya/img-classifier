import React, { useState, useEffect} from "react";
import './Image.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'



const Image = (props) => {
    const [url,setUrl] = useState("")
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        if(props.url !== "") {
            setUrl(props.url)
        }
    }, [props.url])


    const onClick = () => {
        Recognizer();
    }

    const Recognizer = async () => {
        const clas =  await fetch('http://localhost:8080/recognize?url=' + url).then((res) => {
                const newRes =  res.json();
                return newRes.images[0].classifiers[0].classes;
            }
        )
        setClasses(clas);
    };


    return(
        <div>
            <Card style={{ width: '18rem' }} key={props.id}>
                <p>{props.name}</p>
                <img alt={props.id} src={props.url} className="pic" />
                <Button onClick={onClick}> Recognize </Button>
            </Card>
                <ul>
                    {classes ? classes.map((item,index) => {return <li key={index}>{item.xclass}</li>}) : "" 
                    }
                </ul>
        </div>
    )

}
// class Image extends Component{

//     constructor(props) {
//         super(props);
//         this.state = {
//             url: props.url,
//             classes: [],
//         };
//         this.Recognize = this.Recognize.bind(this);
//     }

//     async Recognize(){
//         this.state.classes = await fetch('http://localhost:8080/recognize?url=' + this.state.url)
//             .then(response => response.json())
//             .then(classifiers => classifiers.images[0].classifiers[0].classes);
//         console.log(this.state.classes);
//     };

//     render() {

//         return (
//             <div>
//                 <Card style={{ width: '18rem' }} key={this.props.id}>
//                     <p>{this.props.name}</p>
//                     <img alt={this.props.id} src={this.props.url} className="pic" />
//                     <Button onClick={this.Recognize}> Recognize </Button>
//                 </Card>

//                 <ul>
//                     { this.state.classes.map((item, index) =>  {return <li key={index}>{item.xclass}</li>;})}
//                 </ul>
//             </div>
//         );
//     }
// }

export default Image;
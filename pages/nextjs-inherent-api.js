import {useState} from 'react'
export default function NextInherentApi() {

    let display = 'block';
    const [name, setName] = useState(null);

    fetch('api/hello').then(res=>handleResp(res));

    function handleResp(res){

        res.json().then(body=> {
            console.log('body: ', body);
            
            display = 'block';
            setName(body.name)
        })
    }

    return (
    <div>
        Response to Hello API:
        <div style={{display}}>
            <div><span>Name:</span><span>{name}</span></div>
        </div>
    </div>
    )
}
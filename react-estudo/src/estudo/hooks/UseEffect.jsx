import {useState, useEffect} from "react";


const FeedApp  = () => {

    const  [resourceType, setResourceType] = useState('post')
    const [loading, setLoading] = useState(true);
    const changeSetResourceType  = (resourceType) => {
        setResourceType(resourceType)
    }
    useEffect( function(){

        console.log(resourceType)
    },[resourceType])

    return (
        <div>
            <h2> Feed App</h2>
            <h4>{resourceType.toLocaleLowerCase()}</h4>
            <div>
                <button onClick={ ()=> changeSetResourceType('post') }>Posts</button>
                <button onClick={ ()=> changeSetResourceType('comments')}>Comments</button>
                <button onClick={ ()=> changeSetResourceType('todos')}>Todos</button>

            </div>
            <div className='mt-3'>
                <button onClick={() => { setLoading(prevState =>  !prevState)}}>
                    {loading?'loading':'success'}
                </button>
            </div>
        </div>
    );

}

export default FeedApp
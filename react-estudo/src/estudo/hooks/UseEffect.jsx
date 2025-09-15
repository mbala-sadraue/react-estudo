import {useState, useEffect} from "react";


const FeedApp  = () => {

    const  [resourceType, setResourceType] = useState('posts')
    const [loading, setLoading] = useState(false);
    const changeSetResourceType  = (resourceType) => {
        setResourceType(resourceType)
    }
    useEffect(  () => {
        setLoading(true)
        const fetchData =  async () =>{
           const response =  await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            console.log(await response.json())
            setLoading(false)
        }
          fetchData()
        /*fetch(`https://jsonplaceholder.typicode.com/${resourceType}`).then(
            (result) => result.json()
        ).then( (result) => {
            console.log(result)
        }).finally(() => setLoading(false))*/
    },[resourceType])

    useEffect(() => {}, []);
    return (
        <div>
            <h2> Feed App</h2>
            <h4>{resourceType.toLocaleLowerCase()}</h4>
            <div>
                <button onClick={ ()=> changeSetResourceType('posts') }>Posts</button>
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
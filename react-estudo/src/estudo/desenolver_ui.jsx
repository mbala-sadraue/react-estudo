


export default function  Card(){
    return (
        <div>
        <h1> Card</h1>
    </div>
    );
}

export  function MyButton(props) {

    console.log(props);
    return <button style={{color:'white',backgroundColor:'red'}}> <del>{props.children}✅</del> </button>
}
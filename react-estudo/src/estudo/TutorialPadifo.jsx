import '../assets/css/Style.css'
import { useState } from 'react'



const user = {
    name: 'Mbala Sadraque',
    'avatar': 'https://avatar.iran.liara.run/public/15',
    imageSize: 100
}

function TutorialRapido() {
    const [count, setCount] = useState(0)

    function onClickItem() {
        setCount(count + 1)
    }

    return (
        <div>
            <h1 className=''>{user.name}</h1>
            <img src={user.avatar} style={{ width: user.imageSize, height: user.imageSize, }} />

            <ProdutoList />
            <MyButton count={count} onClickItem={onClickItem} />
            <MyButton count={count} onClickItem={onClickItem} />
        </div>
    )
}

export default TutorialRapido;

function MyButton({ count, onClickItem }) {


    return (<div><button className="btn" onClick={onClickItem}>aumentar {count} </button></div>)
}

function ProdutoList() {
    const products = [
        { title: 'Repolho', isFruit: false, id: 1 },
        { title: 'Alho', isFruit: false, id: 2 },
        { title: 'Maçã', isFruit: true, id: 3 },
    ];


    let products_list = products.map((product) => <li key={product.id} style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }} >{product.title}</li>);

    return (<ul>{products_list}</ul>)

}
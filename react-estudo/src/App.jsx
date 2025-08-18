import './assets/css/Style.css'


const user = {
  name: 'Mbala Sadraque',
  'avatar': 'https://avatar.iran.liara.run/public/15',
  imageSize: 100
}

function App() {
  return (
    <div>
      <h1 className=''>{user.name}</h1>
      <img src={user.avatar} style={{ width: user.imageSize, height: user.imageSize, }} />

      <ProdutoLList />
      <MyButton />
    </div>
  )
}

export default App;


function MyButton() {
  return (<div><button className="btn">aumentar</button></div>)
}

function ProdutoLList() {

  const products = [
    { title: 'Repolho', isFruit: false, id: 1 },
  { title: 'Alho', isFruit: false, id: 2 },
  { title: 'Maçã', isFruit: true, id: 3 },
  ];


 let  products_list = products.map((product) => <li key={product.id}  style={{color: product.isFruit?'magenta':'darkgreen'}} >{ product.title}</li> );

 return(<ul>{products_list}</ul>)
  console.log(products_list);
  
}
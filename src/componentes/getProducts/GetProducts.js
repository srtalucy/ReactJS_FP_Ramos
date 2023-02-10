import ItemDetail from "../ItemDetail/ItemDetail"
const GetProducts = ()=>{
    const [productos, setProductos] = useState([])
    const { productosId } = useParams()
    fetch('/productos.json')
    .then(response => response.json())
    .then(productos => setProductos(productos.find(el => el.id === parseInt(id))))

    return(
        <div>
            <ItemDetail {...productos}/>
        </div>
    )
}

export default GetProducts
import { Router } from 'express'
const routerCarritos = Router();

import { 
    getCarritoControler,
    postCarritoControler,
    deleteCarritoIdControler,
    getCarritoIdControler,
    putCarritoIdControler,
    getCarritoIdProductosControler,
    postCarritoIdProductoIdControler,
    deleteCarritoIdProductoIdControler 
} from './../controladores/controlerCarritos.js'

routerCarritos.get('/', getCarritoControler)
routerCarritos.post('/', postCarritoControler)
routerCarritos.delete('/:id', deleteCarritoIdControler)
routerCarritos.get('/:id', getCarritoIdControler)
routerCarritos.put('/:id', putCarritoIdControler)
routerCarritos.get('/:id/productos', getCarritoIdProductosControler)
routerCarritos.post('/:id/productos', postCarritoIdProductoIdControler)
routerCarritos.delete('/:id/productos/:idProducto', deleteCarritoIdProductoIdControler)


export default routerCarritos;




import { Injectable } from '@angular/core';
import { IProduto, produtos } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }

  produtos: IProduto[] = produtos

  getAll()
  {
    return this.produtos
  }

  getById(productId: number)
  {
    return this.produtos.find(product => product.id == productId)
  }
}

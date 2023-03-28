import { Injectable } from '@angular/core';
import { IProtudoCarrinho } from './Product';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: IProtudoCarrinho[] = []
  constructor() { }

  obterCarrinho()
  {
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]")
    return this.itens
  }

  adicionarAoCarrinho(produto: IProtudoCarrinho)
  {
    this.itens.push(produto)
    localStorage.setItem("carrinho", JSON.stringify(this.itens))
  }

  removerProdutoCarrinho(productId: number)
  {
    this.itens = this.itens.filter(item => item.id !== productId)
    localStorage.setItem("carrinho", JSON.stringify(this.itens))
  }

  limparCarrinho()
  {
    this.itens = []
    localStorage.clear()
  }
}

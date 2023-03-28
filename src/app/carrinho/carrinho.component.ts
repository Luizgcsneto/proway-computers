import { Component, OnInit } from '@angular/core';
import { IProtudoCarrinho } from '../Product';
import { CarrinhoService } from '../carrinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: IProtudoCarrinho[] = []
  total: number = 0

  constructor(
    private carrinhoService: CarrinhoService,
    private route: Router) { }

  ngOnInit(): void
  {
    this.itensCarrinho = this.carrinhoService.obterCarrinho()
    this.calculaTotal()
  }

  calculaTotal()
  {
    this.total = this.itensCarrinho.reduce((prev,curr) => prev + (curr.preco * curr.quantidade),0)
  }

  removerProdutoCarrinho(productId: number)
  {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== productId)
    this.carrinhoService.removerProdutoCarrinho(productId)
    this.calculaTotal()
  }

  comprar()
  {
    alert("Parabéns pela sua compra")
    this.carrinhoService.limparCarrinho()
    this.route.navigate(['produtos'])
  }

}

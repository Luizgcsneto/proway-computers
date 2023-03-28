import { Component, OnInit } from '@angular/core';
import { IProduto, produtos, IProtudoCarrinho } from '../../Product';
import { ProdutosService } from '../../produtos.service';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from '../../notificacao.service';
import { CarrinhoService } from '../../carrinho.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  product: IProduto | undefined
  quantidade: number = 1

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void
  {
    const routeParams = this.route.snapshot.paramMap
    const productId = Number(routeParams.get('id'))
    this.product = this.produtosService.getById(productId)
  }

  adicionarAoCarrinho()
  {
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho")
    const produto: IProtudoCarrinho = {
      ...this.product!,
      quantidade : this.quantidade
    }
    this.carrinhoService.adicionarAoCarrinho(produto)
  }

}

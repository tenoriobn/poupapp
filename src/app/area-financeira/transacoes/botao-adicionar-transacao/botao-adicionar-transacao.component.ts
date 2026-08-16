<<<<<<< HEAD
import { Component, input, output, signal } from '@angular/core';
=======
import { Component, output, signal } from '@angular/core';
>>>>>>> a9ac11f18ed8fd50db9d7e780dffe93b882aeedb
import { BotaoComponent } from '../../../compartilhados/botao/botao.component';
import { ModalComponent } from '../../../compartilhados/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { KeyValuePipe } from '@angular/common';
import { TipoTransacao } from '../../../compartilhados/transacao.model';
import { Transacao } from '../../compartilhados/transacao.model';
<<<<<<< HEAD
import { Conta } from '../../compartilhados/conta.model';
=======
>>>>>>> a9ac11f18ed8fd50db9d7e780dffe93b882aeedb

@Component({
  selector: 'app-botao-adicionar-transacao',
  imports: [BotaoComponent, ModalComponent, FormsModule, KeyValuePipe],
  templateUrl: './botao-adicionar-transacao.component.html',
  styleUrl: './botao-adicionar-transacao.component.css',
})
export class BotaoAdicionarTransacaoComponent {
  modalAberto = signal(false);

  novaTransacaoForm = {
    nome: '',
    tipo: '',
    valor: '',
    data: '',
    conta: '',
  };

  tiposTransacao = TipoTransacao;

<<<<<<< HEAD
  contas = input.required<Conta[]>();

=======
>>>>>>> a9ac11f18ed8fd50db9d7e780dffe93b882aeedb
  transacaoCriada = output<Transacao>();

  abrirModal() {
    this.modalAberto.set(true);
  }

  aoSubmeter() {
    const novaTransacao = new Transacao(
      this.novaTransacaoForm.nome,
      this.novaTransacaoForm.tipo as TipoTransacao,
      Number(this.novaTransacaoForm.valor),
      this.novaTransacaoForm.data,
      this.novaTransacaoForm.conta,
    );

    this.transacaoCriada.emit(novaTransacao);
    this.modalAberto.set(false);
  }
}

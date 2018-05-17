import React from 'react';

class EditarUsuario extends React.Component {

  state = {
    nome: '',
    idade: '',
  };

  async onSubmit(event) {
    event.preventDefault();

    try {
      const usuario = { nome: this.state.nome, idade: this.state.idade };

      const response = await fetch('/api/usuario/salvar-usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
        credentials: 'include',
      });
      await response.json();
      this.props.history.push('/');
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <form className="w3-container" onSubmit={e => this.onSubmit(e)}>
          <p>
            <label className="w3-text"><b>Nome</b></label>
            <input
              className="w3-input w3-border"
              type="text"
              value={this.state.nome}
              onChange={e => this.setState({ nome: e.target.value })}
              required />
          </p>

          <p>
            <label className="w3-text"><b>Idade</b></label>
            <input
              className="w3-input w3-border"
              type="number"
              value={this.state.idade}
              onChange={e => this.setState({ idade: e.target.value })}
              required />
          </p>

          <input type="submit" value="Salvar" className="w3-btn w3-black" />
        </form>
      </div>
    );
  }
}

export default EditarUsuario;

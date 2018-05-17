import React from 'react';

class Usuarios extends React.Component {

  state = {
    usuarios: [],
    carregando: true,
  };

  componentWillMount() {
    this.getUsuarios();
  }

  async getUsuarios() {
    try {
      const response = await fetch('/api/usuario/buscar-usuarios');
      const usuarios = await response.json();
      this.setState({ usuarios, carregando: false });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <div className="w3-container w3-margin-top">
          <input type="button" value="Novo" className="w3-btn w3-black" onClick={() => this.props.history.push('/usuario')} />
        </div>
        <hr />
        <div className="w3-container">
          {
            this.state.carregando ?
              <p>Carregando...</p> :
              <table className="w3-table-all">
                <thead>
                  <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Idade</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.usuarios.map((x, index) => {
                      return (
                        <tr key={index}>
                          <td>{x.codigo}</td>
                          <td>{x.nome}</td>
                          <td>{x.idade}</td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
          }
        </div>
      </div>
    );
  }
}

export default Usuarios;

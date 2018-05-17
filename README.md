## Slides
Os slides da apresentação estão disponíveis [aqui](https://slides.com/claudioscheer/curso-node-js/).

## Base de dados
```sql
DROP DATABASE IF EXISTS react_node;
CREATE DATABASE IF NOT EXISTS react_node;
USE react_node;

DROP TABLE IF EXISTS usuario;
CREATE TABLE IF NOT EXISTS usuario (
  codigo int(11) NOT NULL AUTO_INCREMENT,
  nome varchar(255) NOT NULL,
  idade int(11) NOT NULL,
  PRIMARY KEY (codigo)
);
```
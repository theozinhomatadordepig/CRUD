USE CRUD;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    papel ENUM('admin', 'user') NOT NULL
);

CREATE TABLE carros (categories
    id INT AUTO_INCREMENT PRIMARY KEY, 
    marca VARCHAR(244) NOT NULL, 
    modelo VARCHAR(255) NOT NULL,
    placa VARCHAR(255) NOT NULL,
    proprietario INT NOT NULL,
    FOREIGN KEY(proprietario) REFERENCES usuarios (id)
);

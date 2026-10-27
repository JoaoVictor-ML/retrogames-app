create database db_retrogames;

use db_retrogames;

create table jogos (
    id int primary key auto_increment,
    titulo varchar(150) not null,
    plataforma varchar(50) not null,
    desenvolvedora varchar(100) not null,
    imagem_url varchar(500) not null,
    preco decimal(10, 2) not null,
    data_cadastro datetime 
);

insert into jogos (titulo, plataforma, desenvolvedora, imagem_url, preco)
values
('minecraft', 'pc', 'mojang studios', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpfbvUs3FQZQRDTICbl_a8egcITf9kFjBH_sjy_RhM-ZtYAWXb6_0Hy8fT&s=10', 99.90),
('the last of us', 'ps3', 'naughty dog', 'https://upload.wikimedia.org/wikipedia/pt/b/be/The_Last_of_Us_capa.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original', 149.90),
('red dead redemption 2', 'ps4', 'rockstar games', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZEMtBJYOKeuFxpFxD846h9sm-Imbb8ByWulSO3eLwXUZFB_K088aNjHjk&s=10', 199.90);
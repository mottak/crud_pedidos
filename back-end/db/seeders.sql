USE ordersDatabase;

INSERT INTO
    users (id, name, email, password, role)
VALUES (
        'bdcb4d42-4449-470e-ba88-4a3b6c290383',
        'Zé da Silva',
        'zesilva@email.com',
        '123456',
        'client'
    ), (
        'bdcb4d42-4449-470e-ba88-4a3b6c290353',
        "João dono da loja",
        "joao@email.com",
        "123456",
        "seller"
    );

INSERT INTO
    address (
        id,
        user_id,
        street,
        number,
        complement,
        neighborhood,
        city,
        default_address
    )
VALUES (
        'bdcb4d42-5559-470e-ba88-4a3b6c290383',
        'bdcb4d42-4449-470e-ba88-4a3b6c290383',
        'Rua dos bobos',
        'zero',
        '',
        'Bairro das laranjeiras',
        'Serra da Saudade',
        true
    ), (
        'bdcb4d42-5559-470e-ba88-4a3b6c255583',
        'bdcb4d42-4449-470e-ba88-4a3b6c290353',
        'Rua da Serra',
        '5537',
        'apt 101',
        'centro',
        'Serra da Saudade',
        false
    );

INSERT INTO
    products (
        id,
        seller_id,
        name,
        quantity,
        price,
        photo
    )
VALUES (
        "5a9df949-3e28-4865-bd19-260b9cef4754",
        'bdcb4d42-4449-470e-ba88-4a3b6c290353',
        "lápis",
        20,
        0.5,
        'http://localhost:3001/img/lapis-preto.webp'
    ), (
        "ba18fc37-c7b2-48ac-82f1-9bf161d396f2",
        'bdcb4d42-4449-470e-ba88-4a3b6c290353',
        "borracha",
        10,
        1.2,
        'http://localhost:3001/img/borracha.webp'
    ), (
        "53ee23dc-d502-456c-a93f-1e4b6646bd41",
        'bdcb4d42-4449-470e-ba88-4a3b6c290353',
        "caderno",
        50,
        18.8,
        'http://localhost:3001/img/caderno.jpg'
    )
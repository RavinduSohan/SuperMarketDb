import sql from "mssql";

const dbConfig = {
    server: 'DESKTOP-GMHV9JJ\SQLEXPRESS',
    database: 'SuperMarketDB1',
    options: {
        encrypt: true, 
        trustServerCertificate: true, 
    },
    authentication: {
        type: 'ntlm', 
        options: {
            domain: 'your_domain', 
            userName: '', 
            password: '', 
        },
    },
};

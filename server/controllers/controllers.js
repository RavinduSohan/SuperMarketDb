import sql from "mssql";
import dbConfig from "../config/db";

const handleCRUD = async (req, res, table, action) => {
    try {
        const pool = await sql.connect(dbConfig);
        let result;
        const { id } = req.params;
        const body = req.body;

        switch (action) {
            case 'read':
                result = await pool.request().query(`SELECT * FROM ${table}`);
                res.json(result.recordset);
                break;
            case 'create':
                const columns = Object.keys(body).join(',');
                const values = Object.values(body).map((v) => `'${v}'`).join(',');
                await pool.request().query(`INSERT INTO ${table} (${columns}) VALUES (${values})`);
                res.send('Record added');
                break;
            case 'update':
                const updates = Object.entries(body)
                    .map(([key, value]) => `${key}='${value}'`)
                    .join(',');
                await pool.request().query(`UPDATE ${table} SET ${updates} WHERE id=${id}`);
                res.send('Record updated');
                break;
            case 'delete':
                await pool.request().query(`DELETE FROM ${table} WHERE id=${id}`);
                res.send('Record deleted');
                break;
            default:
                res.status(400).send('Invalid action');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Database error');
    }
};

module.exports = { handleCRUD };

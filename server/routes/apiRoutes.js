import express from "express";
import { handleCRUD } from "../controllers/tableController.js";

const router = express.Router();

const tables = [
    'CustomerDetails', 'LoyaltyPoints', 'Phone', 'RegularCustomer',
    'CorporateCustomer', 'StockTable', 'ProductTable', 'PerishableStock',
    'NonPerishableStock', 'SupplierTable', 'SupplierContact', 'Discount',
    'Sales', 'SalesDetails', 'Reports', 'ReportType', 'ReportDetail'
];

tables.forEach((table) => {
    router.get(`/${table}`, (req, res) => handleCRUD(req, res, table, 'read'));
    router.post(`/${table}`, (req, res) => handleCRUD(req, res, table, 'create'));
    router.put(`/${table}/:id`, (req, res) => handleCRUD(req, res, table, 'update'));
    router.delete(`/${table}/:id`, (req, res) => handleCRUD(req, res, table, 'delete'));
});

export default router;

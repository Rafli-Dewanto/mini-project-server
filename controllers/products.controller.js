import Connection from "../config/db.js";

export const getAllProducts = (req, res) => {
        const sql = "SELECT * FROM products";
        Connection.query(sql, (err, result) => {
            if (err) {
                return res.status(404).json({ message: "Produk tidak ditemukan" });
            }
            res.status(200).json({
                payload: result,
                message: "Tampilkan produk",
        });
    });
}

export const getProductById = (req, res) => {
    
}

export const createProduct = (req, res) => {
    
}

export const updateProduct = (req, res) => {
    
}

export const deleteProduct = (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM products WHERE id = '${id}';`
    Connection.query(sql, (err, results) => {
        if (err) {
            return res.status(404).json({
                code: 404,
                status: 'NOT_FOUND',
                message: 'Product not found'
            })
        }
        res.status(200).json({
            code: 200,
            status: 'OK',
            message: 'product deleted successfully'
        })
    })

}
const Products = require('../models/productsModel');

// get all products 
const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Products.find();
        res.status(200).json({
            success: true,
            message: 'Products retrieved successfully',
            products: allProducts,
        });
    } catch (error) {
        console.error('Error retrieving products:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
};

// get one product by ID
const getOneProduct = async (req, res) => {
    const id = req.params.id;

    try {
        const product = await Products.findById(id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Product retrieved successfully',
            product: product,
        });
    } catch (error) {
        console.error('Error retrieving product:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
};

// Add new product 
const addProduct = async (req, res) => {
    const  formData  = req.body;

    console.log(req.body);
    try {
        const newProduct = await Products.create(formData);

        res.status(201).json({
            success: true,
            message: 'Product added successfully',
            product: newProduct,
        });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
};

// update product
const updateProduct = async (req, res) => {
    const id = req.params.id;
    const updateData = req.body; 

    try {
        const product = await Products.findByIdAndUpdate(id, updateData, { new: true });

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Product updated successfully',
            product: product,
        });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
};




module.exports = {
    getAllProducts,
    getOneProduct,
    addProduct,
    updateProduct,
    
};

const Produto = require("../models/Produto");
const { param } = require("../routes/produto");

exports.criarProduto = async (req, res) => {
    try {
        let produto;

        //Cria PRODUTO
        produto = new Produto(req.body);

        await produto.save();
        res.send(produto);

    } catch(error){
        console.log(error);
        res.status(500).send('Ocorreu um erro!')
    }
}

exports.obterProtudos = async (req, res) => {

    try{
        const produtos = await Produto.find();
        res.json(produtos);

    } catch (error){
        console.log(error);
        res.status(500).send('Ocorreu um erro!')
    }
}

exports.atualizarProtudos = async (req, res) => {

    try{
        const {nome, categoria, preco } = req.body;
        let produto = await Produto.findById(req.params.id);

        if(!produto){
            res.status(404).json({ msg:'Produto não existente'})
        }

        produto.nome = nome;
        produto.categoria = categoria;
        produto.preco = preco;
        
        produto = await Produto.findOneAndUpdate({ _id: req.params.id}, produto, {new: true})

        res.json(produto);

    } catch (error){
        console.log(error);
        res.status(500).send('Ocorreu um erro!')
    }
}

exports.obterProtudo = async (req, res) => {

    try{
        let produto = await Produto.findById(req.params.id);

        if(!produto){
            res.status(404).json({ msg:'Produto não existente'})
        }

        res.json(produto);

    } catch (error){
        console.log(error);
        res.status(500).send('Ocorreu um erro!')
    }
}

exports.eliminarProtudos = async (req, res) => {

    try{
        let produto = await Produto.findById(req.params.id);

        if(!produto){
            res.status(404).json({ msg:'Produto não existente'})
        }

        await Produto.findByIdAndRemove({ _id:req.params.id });
        res.json({msg: 'Produto eliminado'});

    } catch (error){
        console.log(error);
        res.status(500).send('Ocorreu um erro!')
    }
}
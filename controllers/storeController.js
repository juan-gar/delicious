const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req,res) => {
	console.log(req.name);
	res.render('index');
};

exports.addStore = (req,res) => {
	res.render('editStore', {title: 'Add Store'});
};

exports.createStore = async (req,res) => {
	const store = await (new Store(req.body)).save();
	req.flash('success', `Successfully created ${store.name}. Leave a review?`)
	res.redirect('/store/${store.slug}')
};

exports.getStores = async (req, res) => {
//1. Query database for stores
	const stores = await Store.find();
	console.log(stores);
	res.render('stores', { title: 'Stores', stores })
}
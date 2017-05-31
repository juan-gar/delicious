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


exports.editStore = async (req, res) => {
	//1. Find the store given the id
	const store = await Store.findOne({ _id: req.params.id})
	//2. Confirm that they are the owner of the store
	//3. Render out the edit form so the user can update their store
	res.render('editStore', { title: `Edit ${store.name}`, store })
}
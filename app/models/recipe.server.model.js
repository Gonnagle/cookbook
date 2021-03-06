'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Recipe Schema
 */
var RecipeSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Recipe name',
		trim: true
	},
	ingredients: {
		type: String,
		default: '',
		required: 'Please list the needed ingredients',
		trim: false
	},
	instructions: {
		type: String,
		default: '',
		required: 'Please descripe the cooking instructions',
		trim: false
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Recipe', RecipeSchema);
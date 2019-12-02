const Clarifai = require('clarifai');
const app = new Clarifai.App({
 apiKey: '093cead16cf04b6485173fe5d10a8851'
});

const handleApiCall = (req, res) =>{
	app.models
	.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
	.then(data=>{
		res.json(data);
	})
	.catch(err => res.status(400).json('error while working with API'))
}


const imageHandle = (req,res,db) => {
	const { id } = req.body; 
	db('users').where('id', '=', id)
		.increment('entries')
		.returning('entries')
		.then(entries =>{
				res.json(entries[0])
		})
		.catch(err => res.status(400).json("Cant count the entries"));
}

module.exports = {
	imageHandle,
	handleApiCall
}
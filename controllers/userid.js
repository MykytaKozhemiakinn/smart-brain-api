const registerHandle =(req,res,db) => {
const { id } = req.params; 	
	db.select('*').from("users").where({id})
	.then(user => {
		if (user.length){
			res.json(user[0])
		} else {
			res.status(400).json("Cant find given user")
		}
	})
		.catch(err => res.status(400).json("Error during getting user"))
}

module.exports ={
	registerHandle:registerHandle
}
